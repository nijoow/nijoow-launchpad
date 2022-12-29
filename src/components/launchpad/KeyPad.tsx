import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import useSound from "use-sound";
import _ from "lodash";
import { loadComponents } from "next/dist/server/load-components";

const randomColor = [
  "bg-white shadow-[inset_0_0_20px_20px_rgba(190,242,100,1),0_0_13px_13px_rgba(190,242,100,0.4)]",
  "bg-white shadow-[inset_0_0_20px_20px_rgba(249,168,212,1),0_0_13px_13px_rgba(249,168,212,0.4)]",
  "bg-white shadow-[inset_0_0_20px_20px_rgba(125,211,252,1),0_0_13px_13px_rgba(125,211,252,0.4)]",
  "bg-white shadow-[inset_0_0_20px_20px_rgba(216,180,254,1),0_0_13px_13px_rgba(216,180,254,0.4)]",
];
const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const KeyPad = ({
  url,
  name,
  color,
  keyCode,
}: {
  url: string;
  name: string;
  color: "W" | "B";
  keyCode: string;
}) => {
  const [play, { stop, sound }] = useSound(url, {
    interrupt: false,
    soundEnabled: true,
  });
  const [clicked, setClicked] = useState(false);
  const bgColor =
    color === "B" ? "bg-zinc-600 text-white" : "bg-zinc-200 text-black";
  const [activeColor, setActiveColor] = useState("");
  const keyObj = { [keyCode]: false };

  useEffect(() => {
    setActiveColor(randomColor[randomNum(0, 3)]);
  }, [clicked]);

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [sound]);

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === keyCode || e.key.toLowerCase() === keyCode) {
      padOn();
    }
  };

  const keyUpHandler = (e: KeyboardEvent) => {
    if (e.key === keyCode || e.key.toLowerCase() === keyCode) {
      keyObj[keyCode] = false;
      padOff();
    }
  };

  const padOn = () => {
    setClicked(true);
    if (!keyObj[keyCode]) {
      stop();
      play();
    }
    keyObj[keyCode] = true;
  };

  const padOff = _.debounce(() => {
    setClicked(false);
  }, 0);

  return (
    <div
      onMouseDown={padOn}
      onMouseUp={padOff}
      onMouseLeave={padOff}
      className={`relative flex items-center rounded-md justify-center w-24 h-24 transition-colors duration-75 cursor-pointer shadow-[inset_0_0px_8px_8px_rgba(0,0,0,0.3)] ${
        clicked ? `${activeColor} text-black` : bgColor
      }`}
    >
      <span className={`text-lg`}>{name}</span>
      <span className="absolute text-base font-semibold bottom-1 right-3">
        『{keyCode}』
      </span>
    </div>
  );
};

export default KeyPad;

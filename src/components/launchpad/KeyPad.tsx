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
  "bg-lime-300",
  "bg-pink-300",
  "bg-cyan-300",
  "bg-purple-300",
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
    color === "B" ? "bg-zinc-600 text-white" : "bg-white text-black";
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
      className={`relative flex items-center justify-center w-24 h-24 transition-all duration-75 cursor-pointer shadow-[inset_0_0px_5px_5px_rgba(0,0,0,0.3)] ${
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

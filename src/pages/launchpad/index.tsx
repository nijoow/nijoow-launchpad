import React, { useEffect, useRef, useState } from "react";
import KeyPad from "../../components/launchpad/KeyPad";
import { drumSounds, pianoSounds } from "../../utils/sound";
import { showTextStore } from "../../store/store";
const LaunchPad = () => {
  const [pad, setPad] = useState("Piano");
  const [animation, setAnimation] = useState(false);
  const { showPitch, showKeyboard, toggleShowPitch, toggleShowKeyboard } =
    showTextStore((state) => state);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 200);
  }, [pad]);
  return (
    <div className="relative grid items-center justify-center w-full h-full grid-cols-12 overflow-hidden">
      <div className="flex flex-col items-center w-full h-full col-span-2 gap-4 p-12 bg-zinc-700">
        <div
          className={`cursor-pointer hover:text-white ${
            pad === "Piano" ? "text-white" : "text-zinc-300"
          }`}
          onClick={() => {
            if (pad !== "Piano") {
              setAnimation(true);
              setTimeout(() => {
                setPad("Piano");
              }, 100);
            }
          }}
        >
          Piano
        </div>
        <div
          className={`cursor-pointer hover:text-white ${
            pad === "Drum" ? "text-white" : "text-zinc-300"
          }`}
          onClick={() => {
            if (pad !== "Drum") {
              setAnimation(true);
              setTimeout(() => {
                setPad("Drum");
              }, 100);
            }
          }}
        >
          Drum
        </div>
      </div>
      <div className="absolute flex flex-col items-end gap-2 text-zinc-300 top-10 right-20">
        <button className="p-1" onClick={toggleShowPitch}>
          {showPitch ? "PITCH TEXT OFF" : "PITCH TEXT ON"}
        </button>
        <button className="p-1" onClick={toggleShowKeyboard}>
          {showKeyboard ? "KEYBOARD TEXT OFF" : "KEYBOARD TEXT ON"}
        </button>
      </div>

      <div
        className={` grid items-center justify-center grid-cols-12 opaci col-span-10 gap-4 mx-auto w-fit transition-all ${
          animation ? "scale-50 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {pad === "Piano" &&
          pianoSounds.map((item, index) => (
            <div className="col-span-2">
              <KeyPad
                url={item.url}
                name={item.name}
                color={item.color}
                keyCode={item.keyCode}
                key={index}
              />
            </div>
          ))}{" "}
        {pad === "Drum" &&
          drumSounds.map((item, index) => (
            <div className="col-span-2">
              <KeyPad
                url={item.url}
                name={item.name}
                color={item.color}
                keyCode={item.keyCode}
                key={index}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LaunchPad;

import React, { useEffect, useRef, useState } from "react";
import KeyPad from "../../components/launchpad/KeyPad";
import { pianoSounds } from "../../utils/sound";

const launchpad = () => {
  const keyPadRef = useRef<HTMLDivElement[]>([]);
  const [ready, setReady] = useState(false);
  // useEffect(() => {
  //   keyPadRef.current = keyPadRef.current.slice(0, pianoSounds.length);
  // }, [pianoSounds]);

  // useEffect(() => {
  //   document.addEventListener("keydown", keyDownHandler);
  //   document.addEventListener("keyup", keyUpHandler);
  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //     document.removeEventListener("keyup", keyUpHandler);
  //   };
  // }, []);

  // const readyToInteract = (e: KeyboardEvent) => {
  //   // if (e.key === keyCode) {
  //   //   padOn();
  //   // }
  //   console.log(keyPadRef);
  // };

  // const keyUpHandler = () => {
  //   //   setClicked(false);
  // };

  return (
    <div className="flex justify-center items-center bg-gray-600 h-full">
      <button
        onClick={() => {
          setReady(true);
        }}
      >
        ready
      </button>
      <div className="grid grid-cols-12 gap-4 w-fit ">
        {pianoSounds.map((item, index) => (
          <KeyPad
            url={item.url}
            name={item.name}
            color={item.color}
            keyCode={item.keyCode}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default launchpad;

import React, { useEffect, useRef, useState } from "react";
import KeyPad from "../components/launchpad/KeyPad";
import { drumSounds, pianoSounds } from "../utils/sound";
import { showTextStore } from "../store/store";
import { NextPage } from "next/types";
export async function getServerSideProps() {
  return { props: {} };
}
const Home: NextPage = () => {
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
    <div className="flex items-center w-full h-full gap-24">
      <div className="flex flex-col items-end h-full gap-2 py-20 ml-auto  min-w-[10rem] text-zinc-300">
        <div
          className={`cursor-pointer hover:text-white p-1 ${
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
          className={`cursor-pointer p-1 hover:text-white ${
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

      <div
        className={`grid items-center justify-center grid-cols-12 gap-4 w-fit transition-all ${
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
      <div className="flex flex-col items-end h-full gap-2 py-20 mr-auto min-w-[10rem] text-zinc-300">
        <button className="p-1" onClick={toggleShowPitch}>
          {showPitch ? "PITCH TEXT OFF" : "PITCH TEXT ON"}
        </button>
        <button className="p-1" onClick={toggleShowKeyboard}>
          {showKeyboard ? "KEYBOARD TEXT OFF" : "KEYBOARD TEXT ON"}
        </button>
      </div>
    </div>
  );
};
export default Home;

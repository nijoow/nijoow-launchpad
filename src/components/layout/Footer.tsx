import React, { useEffect, useState } from "react";
import {
  IoPlayCircle,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoRepeat,
  IoShuffle,
  IoPauseCircle,
} from "react-icons/io5";
const Footer = () => {
  const [percent, setPercent] = useState(0);

  return (
    <div className="grid h-24 grid-cols-10 bg-zinc-700 text-zinc-400">
      {/* <div className="flex items-center justify-center h-full mx-auto max-w-7xl">
        {" "}
        &copy; {new Date().getFullYear()} Lee Woo Jin. All Rights Reserved.
      </div> */}
      <div className="flex items-center col-span-3 gap-4">
        <div className="w-24 h-24 bg-white"></div>
        <div className="flex flex-col">
          <span className="font-semibold">title</span>
          <span className="text-sm">singer</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-4 gap-2">
        <div className="flex items-center gap-4">
          {" "}
          <IoRepeat size={24} />
          <IoPlaySkipBack size={24} />
          <IoPlayCircle size={42} onClick={() => {}} />
          <IoPauseCircle size={42} onClick={() => {}} />
          <IoPlaySkipForward size={24} />
          <IoShuffle size={24} />
        </div>
        <div className="flex items-center w-full gap-1 text-xs">
          <span>0:01</span>
          <div className="flex justify-start flex-auto h-1 rounded-full bg-zinc-500">
            <div
              className={`flex bg-zinc-50 h-1 transition-all items-center`}
              style={{ width: `${percent}%` }}
            >
              <div className="translate-x-1.5 w-3 h-3 ml-auto bg-white rounded-full "></div>
            </div>
          </div>
          <span>4:30</span>
        </div>
      </div>
      <div className="flex items-center col-span-3"></div>
    </div>
  );
};

export default Footer;

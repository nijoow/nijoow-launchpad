import React from "react";

const Footer = () => {
  return (
    <div className="flex h-24 bg-zinc-700 text-zinc-400">
      <div className="flex items-center justify-center h-full mx-auto max-w-7xl">
        {" "}
        &copy; {new Date().getFullYear()} Lee Woo Jin. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

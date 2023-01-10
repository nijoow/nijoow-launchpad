import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-20 bg-zinc-700">
      {/*  <div className="grid items-center w-full h-20 grid-cols-12 bg-zinc-700">
      <Link
        href="/"
        className="flex items-center justify-center col-span-2 text-xl text-white"
      >
        nijoow music
      </Link>
      <div className="flex items-center col-span-6 gap-12 px-20">
        <Link
          href="/launchpad"
          className={`${
            router.pathname.includes("launchpad")
              ? "text-white"
              : "text-zinc-300"
          }`}
        >
          Launchpad
        </Link>{" "}
      </div> */}

      <span className="text-xl text-white">nijoow launchpad</span>
    </div>
  );
};

export default Header;

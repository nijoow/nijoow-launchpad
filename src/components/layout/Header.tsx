import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <div className="items-center w-full h-20 bg-zinc-700 grid grid-cols-12">
      <Link
        href="/"
        className="col-span-2 flex items-center justify-center text-xl text-white"
      >
        nijoow beatmaker
      </Link>
      <div className="col-span-6 flex items-center px-8 gap-8">
        <Link
          href="/launchpad"
          className={`${
            router.pathname.includes("launchpad")
              ? "text-white"
              : "text-zinc-300"
          }`}
        >
          LaunchPad
        </Link>{" "}
      </div>
    </div>
  );
};

export default Header;

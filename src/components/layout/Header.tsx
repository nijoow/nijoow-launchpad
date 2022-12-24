import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex items-center w-full h-20 bg-zinc-700">
      nijoow beatmaker
      <Link href="/launchpad/piano-pad">piano pad</Link>
    </div>
  );
};

export default Header;

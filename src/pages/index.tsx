import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import useSound from "use-sound";
import KeyPad from "../components/launchpad/KeyPad";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export async function getServerSideProps() {
  return { props: {} };
}
const Home: NextPage = () => {
  return (
    <div className="grid items-center justify-center w-full h-full grid-cols-12 overflow-hidden">
      <div className="flex flex-col items-center w-full h-full col-span-2 gap-4 p-12 bg-zinc-700">
        {" "}
      </div>{" "}
      <div
        className={`flex relative items-center justify-center col-span-10 gap-4 mx-auto w-fit transition-all `}
      ></div>
    </div>
  );
};
export default Home;

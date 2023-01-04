import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import useSound from "use-sound";
import KeyPad from "../components/launchpad/KeyPad";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ACCESS_URL, getTokenFromResponse } from "../utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export async function getServerSideProps() {
  console.log("!");
  return { props: {} };
}
const Home: NextPage = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    if (_token) {
      setToken(hash.access_token);
      localStorage.setItem("spotify_token", _token);
      spotify.setAccessToken(_token);
    }
  }, []);
  console.log(token);
  return (
    <div className="grid items-center justify-center w-full h-full grid-cols-12 overflow-hidden">
      <div className="flex flex-col items-center w-full h-full col-span-2 gap-4 p-12 bg-zinc-700">
        {" "}
      </div>{" "}
      <div
        className={`flex relative items-center justify-center col-span-10 gap-4 mx-auto w-fit transition-all `}
      >
        {!token && (
          <Link
            href={ACCESS_URL}
            className="px-4 py-2.5 text-xl bg-green-500 rounded-md"
          >
            Login with <span className="text-white">Spotify</span>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Home;

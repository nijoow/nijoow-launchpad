import Head from "next/head";
import React from "react";
import tw from "twin.macro";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const MainDiv = tw.div`
    flex-auto h-full
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-zinc-800">
      {" "}
      <Head>
        <title>nijoow-shop</title>
      </Head>
      <Header />
      {/* <Nav /> */}
      <MainDiv> {children} </MainDiv>
      <Footer />
    </div>
  );
};

export default Layout;

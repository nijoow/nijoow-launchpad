import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
const Input = tw.input`
    text-center border h-28
`;
const MyDiv = styled.div`
  background: gold;
  font-size: 5rem;
  margin-top: 10px;
`;

export async function getServerSideProps() {
  console.log("!");
  return { props: {} };
}
const Home: NextPage = () => {
  return <div>mainPage</div>;
};
export default Home;

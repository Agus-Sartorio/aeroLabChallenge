import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Catalog from "../components/Catalog";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Walkthrough from "../components/Walkthrough";
import GitHub from "../public/assets/icons/github-default.svg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aerolab Challenge</title>
      </Head>
      <NavBar />
      <Hero />
      <Walkthrough />
      <Catalog />
      <footer className="footer_index">
        <Link href="https://github.com/Agus-Sartorio/aeroLabChallenge" passHref>
          <a>
            <Image src={GitHub} alt="github-logo" />
            <span>View this repository</span>
          </a>
        </Link>
      </footer>
    </>
  );
};

export default Home;

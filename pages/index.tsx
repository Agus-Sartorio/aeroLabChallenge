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
        <meta name="theme-color" content="#ff80ff" />
        <meta
          name="description"
          content="Desafio de front-end hecho por Agustin Sartorio para AerloLab"
        />
        <meta
          property="og:title"
          content="Desafio AeroLab - Agustin Sartorio"
        />
        <meta property="og:locale" content="es_AR" />
        <meta
          property="og:url"
          content="https://aero-lab-challenge.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Desafio de front-end hecho por Agustin Sartorio para AerloLab"
        />
        <meta property="og:image" content="https://i.imgur.com/afIg9Zl.png" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Desafio AerloLab - Agustin Sartorio"
        />
        <meta
          name="twitter:url"
          content="https://aero-lab-challenge.vercel.app"
        />
        <meta
          name="twitter:description"
          content="Desafio de front-end hecho por Agustin Sartorio para AerloLab"
        />
        <meta name="twitter:image" content="https://i.imgur.com/afIg9Zl.png" />
        <meta
          name="twitter:image:alt"
          content="Desafio AerloLab - Agustin Sartorio"
        />
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

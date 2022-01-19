import type { NextPage } from 'next'
import Head from 'next/head';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Walkthrough from '../components/Walkthrough';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aerolab Challenge</title>
      </Head>
      <NavBar />
      <Hero />
      <Walkthrough />
    </>
  )
}

export default Home;
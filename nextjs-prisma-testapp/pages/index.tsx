import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Teste</h1>
      <Link href="form">Formulário</Link>
    </>
  );
};

export default HomePage;
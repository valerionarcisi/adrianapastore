import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adriana Pastore Blog</title>
        <meta name="description" content="Sito personala di Adriana Pastore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sito in costruzione
        </h1>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home

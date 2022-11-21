import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainPage from './MainPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brookline</title>
        <meta name="description" content="Your ship container manager" />
        <link rel="icon" href="/brookline.png" />
        <link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <MainPage />
      </main>
    </div>
  )
}

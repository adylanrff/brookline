import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import MainPage from './MainPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brookline</title>
      </Head>
      <main>
        <div className='flex flex-row flex-1'>
          <Sidebar />
          <MainPage />
        </div>
      </main>
    </div>
  )
}

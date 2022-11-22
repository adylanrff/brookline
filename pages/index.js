import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import MainPage from './MainPage'
import Header from './components/Header'

export default function Home() {
  const [showSideBarMobile, setShowSideBarMobile] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Brookline</title>
      </Head>
      <main>
        <div className='flex flex-row flex-1'>
          <div className='px-7 py-4 lg:p-0 lg:hidden fixed top-0 left-0 w-full bg-[#E7F4FF]'>
            <Header setShowSideBarMobile={setShowSideBarMobile} />
          </div>
          <Sidebar showSideBarMobile={showSideBarMobile} setShowSideBarMobile={setShowSideBarMobile} />
          <MainPage />
        </div>
      </main>
    </div>
  )
}

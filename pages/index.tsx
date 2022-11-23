import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import MainPage from './MainPage'
import Header from './components/Header'
import LanguagePage from './LanguagePage'

type RouteFormType = {
  routeForm: any,
  setRouteForm: any
}

export const RouteFormContext = React.createContext<RouteFormType>({
  routeForm: {},
  setRouteForm: () => {}
})

export default function Home() {
  const [showSideBarMobile, setShowSideBarMobile] = useState(false)
  const [isActiveSideBar, setIsActiveSideBar] = useState({
    home: true,
    language: false
  })
  const [routeForm, setRouteForm] = useState({
    departure: '',
    arrival: ''
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Brookline</title>
      </Head>
      <main>
        <RouteFormContext.Provider value={{
          routeForm,
          setRouteForm
        }}>
          <div className='flex flex-row flex-1'>
            <div className='px-7 py-4 lg:p-0 lg:hidden fixed top-0 left-0 w-full bg-[#E7F4FF]'>
              <Header setShowSideBarMobile={setShowSideBarMobile} />
            </div>
            <Sidebar showSideBarMobile={showSideBarMobile} setShowSideBarMobile={setShowSideBarMobile} isActive={isActiveSideBar} setIsActive={setIsActiveSideBar} />
            {isActiveSideBar.home && <MainPage />}
            {isActiveSideBar.language && <LanguagePage />}
          </div>
        </RouteFormContext.Provider>
      </main>
    </div>
  )
}

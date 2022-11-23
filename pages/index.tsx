import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import MainPage from './MainPage'
import Header from './components/Header'
import LanguagePage from './LanguagePage'
import { useTranslation } from "react-i18next";

type RouteFormType = {
  routeForm: any,
  setRouteForm: any
}

export const RouteFormContext = React.createContext<RouteFormType>({
  routeForm: {},
  setRouteForm: () => {}
})

export default function Home() {
  const { t, i18n } = useTranslation()
  const [showSideBarMobile, setShowSideBarMobile] = useState(false)
  const [isActiveSideBar, setIsActiveSideBar] = useState({
    home: true,
    language: false
  })
  const [routeForm, setRouteForm] = useState({
    departure: '',
    arrival: ''
  })
  const [headTitle, setHeadTitle] = useState('Brookline')

  useEffect(() => {
    if (isActiveSideBar.home) {
      setHeadTitle('Brookline | ' + t('sidebar-shipList'))
    } else if (isActiveSideBar.language) {
      setHeadTitle('Brookline | ' + t('language-setting-title'))
    }
  }, [isActiveSideBar, i18n.language])

  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
        <meta name="color-scheme" content="light only"></meta>
      </Head>
      <main>
        <RouteFormContext.Provider value={{
          routeForm,
          setRouteForm
        }}>
          <div className='flex flex-row flex-1'>
            <div className='xs:px-5 px-7 py-4 lg:p-0 lg:hidden fixed top-0 left-0 w-full bg-[#E7F4FF]'>
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

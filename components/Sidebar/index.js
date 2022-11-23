import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

function Sidebar({ showSideBarMobile, setShowSideBarMobile, isActive, setIsActive }) {
    const { t } = useTranslation()
    const [sideBarPosition, setSideBarPosition] = useState('-left-52')
    const [activeClass, setActiveClass] = useState({
        home: ' bg-[#003A6C]',
        language: ''
    })

    const handleBgOnClick = () => {
        setShowSideBarMobile(false)
    }

    const handleHomeClick = () => {
        setIsActive({
            home: true,
            language: false
        })
        setShowSideBarMobile(false)
    }

    const handleLanguageClick = () => {
        setIsActive({
            home: false,
            language: true
        })
        setShowSideBarMobile(false)
    }

    useEffect(() => {
        if (showSideBarMobile) {
            setSideBarPosition('left-0')
        } else {
            setSideBarPosition('-left-52')
        }
    }, [showSideBarMobile])

    useEffect(() => {
        if (isActive.home) {
            setActiveClass({
                home: ' bg-[#003A6C]',
                language: ''
            })
        } else if (isActive.language) {
            setActiveClass({
                home: '',
                language: ' bg-[#003A6C]'
            })
        }
    }, [isActive])

    return (
        <div>
            {showSideBarMobile && <div onClick={handleBgOnClick} className='bg-black z-10 opacity-50 fixed top-0 left-0 w-[100vw] h-[100vh] lg:hidden' />}
            <div className={"side-bar-animation fixed flex-1 bg-[#184D7B] z-20 min-h-screen w-52 top-0 lg:left-0 "+sideBarPosition}>
                <div className="flex gap-3 p-5">
                    <img className="w-10" src='/brookline.png' />
                    <p className="font-title text-[#EDF2F8] text-4xl">Brookline</p>
                </div>
                <div>
                    <hr className='border-[1px] border-[#003A6C] w-52' />
                </div>
                <div onClick={handleHomeClick} className='flex flex-col gap-5'>
                    <div className={'flex gap-3 justify-center p-5 hover:bg-[#003A6C] hover:cursor-pointer'+activeClass.home}>
                        <img className="w-6" src='/list.png' />
                        <p className="font-body text-[#EDF2F8] text-base">{t('sidebar-shipList')}</p>
                    </div>
                </div>
                <div onClick={handleLanguageClick} className='flex flex-col gap-5'>
                    <div className={'flex gap-3 justify-center hover:bg-[#003A6C] hover:cursor-pointer p-5'+activeClass.language}>
                        <img className="w-6" src='/translation.png' />
                        <p className="font-body text-[#EDF2F8] text-base">{t('sidebar-language')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
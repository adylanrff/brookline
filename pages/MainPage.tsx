import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import BaseSection from './section/BaseSection'
import DetailSection from './section/DetailSection'

type CurrentShipDataType = {
  ship: any
  setShip: any
  showDetail: any
  setShowDetail: any
}

export const CurrentShipContext = React.createContext<CurrentShipDataType>({
  ship: {},
  setShip: () => {},
  showDetail: false,
  setShowDetail: () => {}
})

export default function MainPage() {
  const [currentDetailShip, setCurrentDetailShip] = useState({})
  const [showDetail, setShowDetail] = useState(false)
  const [basePageWidth, setBasePageWidth] = useState('100%')

  useEffect(() => {
    if (showDetail) {
      setBasePageWidth('65%')
    } else {
      setBasePageWidth('100%')
    }
  }, [showDetail])

  return (
    <CurrentShipContext.Provider value={{
      ship: currentDetailShip,
      setShip: setCurrentDetailShip,
      showDetail,
      setShowDetail
    }}>
        <div className="p-0 min-h-screen bg-[#E7F4FF] w-[calc(100%_-_13rem)] ml-52">
          <div style={{width: `${basePageWidth}`}} className='p-7'>
            <BaseSection />
          </div>
          <DetailSection />
        </div>
    </CurrentShipContext.Provider>
  )
}

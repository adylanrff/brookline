import React, { useEffect, useState } from 'react'
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
      setBasePageWidth('w-full lg:w-[65%]')
    } else {
      setBasePageWidth('lg:w-full')
    }
  }, [showDetail])

  return (
    <CurrentShipContext.Provider value={{
      ship: currentDetailShip,
      setShip: setCurrentDetailShip,
      showDetail,
      setShowDetail
    }}>
        <div className="p-0 min-h-screen bg-[#E7F4FF] w-full lg:w-[calc(100%_-_13rem)] lg:ml-52 mt-14 lg:mt-0">
          <div className={'xs:px-5 px-7 pt-5 pb-9 lg:pt-7 ' + basePageWidth}>
            <BaseSection />
          </div>
          <DetailSection />
        </div>
    </CurrentShipContext.Provider>
  )
}

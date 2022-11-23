import React, { useContext } from 'react'
import { CurrentShipContext } from '../MainPage'
import { useTranslation } from "react-i18next";

function Card({ data }) {
    const { t, i18n } = useTranslation()
    const currentShip = useContext(CurrentShipContext)
    const {id, imgUrl, departureCity, departurePort, arrivalCity, arrivalPort, departureTime, arrivalTime, containerLeft } = data

    const generatePort = (port) => {
        if (i18n.language === 'en') {
            return port + ' Port'
        } else if (i18n.language === 'id') {
            return 'Pelabuhan ' + port
        }
    }
    
    const handleClick = () => {
        currentShip.setShip(data)
        currentShip.setShowDetail(true)
    }

    return (
        <div className='shadow-md bg-[white] rounded-lg hover:cursor-pointer w-full md:w-[calc(50%_-_14px)] lg:w-fit' onClick={handleClick}>
            <div className='flex p-4 items-center gap-5'>
                <div className='flex-1'>
                    <p className='font-body text-sm'>{t('shipList-card-shipID')}</p>
                    <p className='font-body font-semibold w-fit'>{id}</p>
                </div>
                <div className='flex-1'>
                    <img className='w-[100px]' src={imgUrl} />
                </div>
            </div>
            <hr className='border-[#DEDEDE]' />
            <div className='my-4 flex flex-col gap-4'>
                <div className='flex px-5 items-center gap-3'>
                    <div>
                        <img src='/departure.png' className='w-5' />
                    </div>
                    <div>
                        <p className='font-body text-sm'>{departureCity}</p>
                        <p className='font-body text-sm'>{generatePort(departurePort)}</p>
                    </div>
                </div>
                <div className='flex px-5 items-center gap-3'>
                    <div>
                        <img src='/arrival.png' className='w-5' />
                    </div>
                    <div>
                        <p className='font-body text-sm'>{arrivalCity}</p>
                        <p className='font-body text-sm'>{generatePort(arrivalPort)}</p>
                    </div>
                </div>
            </div>
            <hr className='border-[#DEDEDE]' />
            <div className='flex px-5 py-4 font-body gap-3 text-sm'>
                <div className='flex-1'>
                    <p>{t('shipList-card-schedule')}:</p>
                    <p>
                        <span>{departureTime}</span>
                        <span>-</span>
                        <span>{arrivalTime}</span>
                    </p>
                </div>
                <div className='flex-1'>
                    <p>{t('shipList-card-containerLeft')}:</p>
                    <p className='font-bold'>{containerLeft}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
import React, { useContext, useEffect, useState } from 'react'
import { CurrentShipContext } from '../MainPage'
import { openInNewTab } from '../../utils/urls'
import { useTranslation } from "react-i18next";
import { ShipCard, ShipData } from '../../types/ship';

function DetailSection() {
    const { t, i18n } = useTranslation()
    const currentShip = useContext(CurrentShipContext)
    const [data, setData] = useState<ShipCard>({})
    const [capacityPercentage, setCapacityPercentage] = useState('')
    const [detailContentPosition, setDetailContentPosition] = useState('0')

    const handleCloseButtonClick = () => {
        currentShip.setShowDetail(false)
    }

    const onClickWhatsapp = () => {
        openInNewTab(data.waCP)
    }

    const onClickFacebook = () => {
        openInNewTab(data.facebookCP)
    }

    const generatePort = (port) => {
        if (i18n.language === 'en') {
            return port + ' Port'
        } else if (i18n.language === 'id') {
            return 'Pelabuhan ' + port
        }
    }

    useEffect(() => {
        setData(currentShip.ship)
        const percentage = currentShip.ship.containerFilled / currentShip.ship.totalContainer * 100
        const parsePercentage = parseFloat(percentage.toString()).toFixed(2)
        setCapacityPercentage(parsePercentage)

        if (currentShip.showDetail === true) {
            setDetailContentPosition('right-0')
        } else {
            setDetailContentPosition('right-[-100%] lg:right-[-35%]')
        }
    }, [currentShip])

    return (
        <div>
            {!!data && currentShip.showDetail &&
                <div className='bg-black z-10 opacity-50 fixed top-0 left-0 w-[100vw] h-[100vh] lg:hidden' />
            }
            {!!data && currentShip.showDetail &&
                <div className={'detail-box-animation fixed w-full md:w-[60%] lg:w-[35%] z-30 h-full xs:px-5 px-7 pt-4 py-7 top-0 bg-white overflow-scroll ' + detailContentPosition}>
                    <div>
                        <div className='mb-7 sticky -top-5 flex justify-between items-center bg-white w-full py-3 gap-3 z-20'>
                            <img className="xs:w-5 xs:h-5 w-6 h-6 hover:cursor-pointer" onClick={handleCloseButtonClick} src='/previous.png' />
                            <p className='font-body xs:text-[20px] text-[24px] font-bold text-right w-11/12'>{data.name}</p>
                        </div>
                        <img className='mb-5' src={data.imgUrl} />
                        <p className='font-body font-semibold text-[18px] mb-10'>{t('detail-capacity')}</p>
                        {/* Progress Bar */}
                        <div className="w-full px-2">
                            <div className="mb-7">
                                <div className="bg-light relative h-[10px] w-full rounded-2xl">
                                    <div style={{ width: `${capacityPercentage}%` }} className="bg-primary absolute top-0 left-0 h-full rounded-2xl">
                                        <span
                                            className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                                        >
                                            <span
                                                className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                            ></span>
                                            {capacityPercentage}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* First Row */}
                        <div className='flex xs:gap-3 gap-5 mb-5 text-sm'>
                            <div className='xs:px-3 px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                                <p className='font-body'>{t('detail-IMONumber')}</p>
                                <p className='font-body font-bold'>{data.IMONumber}</p>
                            </div>
                            <div className='xs:px-3 px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                                <p className='font-body'>{t('detail-ownerName')}</p>
                                <p className='font-body font-bold'>{data.ownerName}</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5 text-sm'>
                            <div className='xs:px-3 px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                                <p className='font-body'>{t('detail-filledContainer')}</p>
                                <p className='font-body font-bold'>{`${data.containerFilled}/${data.totalContainer}`}</p>
                            </div>
                            <div className='xs:px-3 px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                                <p className='font-body'>{t('shipList-card-containerLeft')}</p>
                                <p className='font-body font-bold'>{data.containerLeft}</p>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className='flex gap-5 mb-5 text-sm'>
                            <div className='xs:px-3 px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                                <p className='font-body'>{t('detail-shipRoute')}</p>
                                <div className='my-4 flex flex-col gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <div>
                                            <img src='/departure.png' className='w-6' />
                                        </div>
                                        <div>
                                            <p className='font-body'>{data.departureCity}</p>
                                            <p className='font-body font-bold'>{generatePort(data.departurePort)}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div>
                                            <img src='/arrival.png' className='w-6' />
                                        </div>
                                        <div>
                                            <p className='font-body'>{data.arrivalCity}</p>
                                            <p className='font-body font-bold'>{generatePort(data.arrivalPort)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-sm xs:px-3 px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md h-fit'>
                                <p className='font-body'>{t('shipList-card-schedule')}</p>
                                <p className='font-body font-bold'>{`${data.departureTime}-${data.arrivalTime}`}</p>
                            </div>
                        </div>
                        <div className='flex gap-5 text-sm mb-7'>
                            <div className='text-sm xs:px-3 px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md h-fit'>
                                <p className='font-body'>{t('detail-price')}</p>
                                <p className='font-body font-bold'>{`${data.price}`}</p>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className='flex flex-col gap-3'>
                            <button onClick={onClickWhatsapp} className='bg-[#29A71A] w-full py-2 flex gap-3 items-center justify-center text-center rounded-2xl'>
                                <img className='w-4' src='/whatsapp.png' />
                                <span className='font-body text-sm font-bold text-white'>{t('detail-contact')} Whatsapp</span>
                            </button>
                            <button onClick={onClickFacebook} className='bg-[#1976D2] w-full py-2 flex gap-3 items-center justify-center text-center rounded-2xl'>
                                <img className='w-4' src='/facebook.png' />
                                <span className='font-body text-sm font-bold text-white'>{t('detail-contact')} Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailSection
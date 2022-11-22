import React, { useContext, useEffect, useState } from 'react'
import { CurrentShipContext } from '../MainPage'
import { openInNewTab } from '../../utils/urls'

function DetailSection() {
    const currentShip = useContext(CurrentShipContext)
    const [data, setData] = useState({})
    const [capacityPercentage, setCapacityPercentage] = useState(0)
    const [detailContentPosition, setDetailContentPosition] = useState('0')

    const isEmpty = (obj) => {
        return obj // 👈 null and undefined check
            && Object.keys(obj).length === 0
            && Object.getPrototypeOf(obj) === Object.prototype
    }

    const handleCloseButtonClick = () => {
        currentShip.setShowDetail(false)
    }

    const onClickWhatsapp = () => {
        openInNewTab(data.waCP)
    }

    const onClickFacebook = () => {
        openInNewTab(data.facebookCP)
    }

    useEffect(() => {
        setData(currentShip.ship)
        const percentage = currentShip.ship.containerFilled/currentShip.ship.totalContainer*100
        setCapacityPercentage(percentage)

        if (currentShip.showDetail === true) {
            setDetailContentPosition('0')
        } else {
            setDetailContentPosition('-35%')
        }
    }, [currentShip])

    return (
        <div style={{right: `${detailContentPosition}`}} className='fixed w-[35%] h-full p-7 top-0 bg-white overflow-scroll detail-box-animation'>
            {!isEmpty(data) &&
                <div className='relative'>
                    <img className="w-6 absolute top-0 left-0 hover:cursor-pointer" onClick={handleCloseButtonClick} src='/previous.png' />
                    <p className='font-body text-[24px] font-bold mb-7 text-right'>{data.id}</p>
                    <img className='mb-5' src={data.imgUrl} />
                    <p className='font-body font-semibold text-[18px] mb-7'>Kapasitas Kapal</p>
                    {/* Progress Bar */}
                    <div className="w-full px-4">
                        <div className="mb-7">
                            <div className="bg-light relative h-[10px] w-full rounded-2xl">
                                <div style={{width: `${capacityPercentage}%`}} className="bg-primary absolute top-0 left-0 h-full rounded-2xl">
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
                    <div className='flex gap-5 mb-5 text-sm'>
                        <div className='px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                            <p className='font-body'>Nomor IMO</p>
                            <p className='font-body font-bold'>{data.IMONumber}</p>
                        </div>
                        <div className='px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                            <p className='font-body'>Nama Pemilik Kapal</p>
                            <p className='font-body font-bold'>{data.ownerName}</p>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-5 text-sm'>
                        <div className='px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                            <p className='font-body'>Kontainer yang telah terisi</p>
                            <p className='font-body font-bold'>{`${data.containerFilled}/${data.totalContainer}`}</p>
                        </div>
                        <div className='px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                            <p className='font-body'>Sisa Kontainer</p>
                            <p className='font-body font-bold'>{data.containerLeft}</p>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className='flex gap-5 text-sm mb-7'>
                        <div className='px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md'>
                            <p className='font-body'>Rute Kapal</p>
                            <div className='my-4 flex flex-col gap-4'>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <img src='/departure.png' className='w-6' />
                                    </div>
                                    <div>
                                        <p className='font-body'>{data.departureCity}</p>
                                        <p className='font-body font-bold'>{data.departurePort}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <img src='/arrival.png' className='w-6' />
                                    </div>
                                    <div>
                                        <p className='font-body'>{data.arrivalCity}</p>
                                        <p className='font-body font-bold'>{data.arrivalPort}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-sm px-5 py-3 bg-[#F5F5F5] rounded-lg shadow-md h-fit'>
                            <p className='font-body'>Jadwal</p>
                            <p className='font-body font-bold'>{`${data.departureTime}-${data.arrivalTime}`}</p>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className='flex flex-col gap-3'>
                        <button onClick={onClickWhatsapp} className='bg-[#29A71A] w-full py-2 flex gap-3 items-center justify-center text-center rounded-2xl'>
                            <img className='w-4' src='/whatsapp.png' />
                            <span className='font-body text-sm font-bold text-white'>Hubungi Whatsapp</span>
                        </button>
                        <button onClick={onClickFacebook} className='bg-[#1976D2] w-full py-2 flex gap-3 items-center justify-center text-center rounded-2xl'>
                            <img className='w-4' src='/facebook.png' />
                            <span className='font-body text-sm font-bold text-white'>Hubungi Facebook</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailSection
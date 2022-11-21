import React from 'react'

function BaseSection() {
    return (
        <div>
            <p className='font-body text-[24px] font-bold mb-7'>Manajemen Kontainer Kapal</p>
            <div className='mb-8'>
                <p className='font-body mb-1'>Rute</p>
                <div className='flex gap-3'>
                    <select className='px-2 py-1 font-body border-2 rounded-lg w-[200px]' placeholder='Asal'>
                        <option>Surabaya</option>
                        <option>Depok</option>
                        <option>Bali</option>
                    </select>
                    <span>-</span>
                    <select className='px-2 py-1 font-body border-2 rounded-lg w-[200px]' placeholder='Tujuan'>
                        <option>Surabaya</option>
                        <option>Depok</option>
                        <option>Bali</option>
                    </select>
                    <button className='font-body px-4 py-1 bg-[#003A6C] rounded-lg text-white ml-2'>Cari</button>
                </div>   
            </div>
            <div className='flex gap-5 flex-wrap'>
                <div className='card bg-[white] rounded-lg'>
                    <div className='flex p-4 items-center gap-5'>
                        <div className='flex-1'>
                            <p className='font-body text-sm'>ID Kapal</p>
                            <p className='font-body font-semibold w-fit'>UA145009BS</p>
                        </div>
                        <div className='flex-1'>
                            <img className='w-[100px]' src='/ship.png' />
                        </div>
                    </div>
                    <hr />
                    <div className='my-4 flex flex-col gap-4'>
                        <div className='flex px-5 items-center gap-3'>
                            <div>
                                <img src='/departure.png' className='w-5' />
                            </div>
                            <div>
                                <p className='font-body text-sm'>Surabaya</p>
                                <p className='font-body text-sm'>Pelabuhan Tanjung Perak</p>
                            </div>
                        </div>
                        <div className='flex px-5 items-center gap-3'>
                            <div>
                                <img src='/arrival.png' className='w-5' />
                            </div>
                            <div>
                                <p className='font-body text-sm'>Bali</p>
                                <p className='font-body text-sm'>Pelabuhan Gilimanuk</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex px-5 py-4 font-body gap-3 text-sm'>
                        <div className='flex-1'>
                            <p>Jadwal:</p>
                            <p>10.00-11.00</p>
                            <p>11.00-12.00</p>
                            <p>12.00-13.00</p>
                        </div>
                        <div className='flex-1'>
                            <p>Sisa kontainer:</p>
                            <p className='font-bold'>5</p>
                        </div>
                    </div>
                </div>
                {/* Kapal 2 */}
                <div className='card bg-[white] rounded-lg'>
                    <div className='flex p-4 items-center gap-5'>
                        <div className='flex-1'>
                            <p className='font-body text-sm'>ID Kapal</p>
                            <p className='font-body font-semibold w-fit'>UA145009BS</p>
                        </div>
                        <div className='flex-1'>
                            <img className='w-[100px]' src='/ship.png' />
                        </div>
                    </div>
                    <hr />
                    <div className='my-4 flex flex-col gap-4'>
                        <div className='flex px-5 items-center gap-3'>
                            <div>
                                <img src='/departure.png' className='w-5' />
                            </div>
                            <div>
                                <p className='font-body text-sm'>Surabaya</p>
                                <p className='font-body text-sm'>Pelabuhan Tanjung Perak</p>
                            </div>
                        </div>
                        <div className='flex px-5 items-center gap-3'>
                            <div>
                                <img src='/arrival.png' className='w-5' />
                            </div>
                            <div>
                                <p className='font-body text-sm'>Bali</p>
                                <p className='font-body text-sm'>Pelabuhan Gilimanuk</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex px-5 py-4 font-body gap-3 text-sm'>
                        <div className='flex-1'>
                            <p>Jadwal:</p>
                            <p>10.00-11.00</p>
                            <p>11.00-12.00</p>
                            <p>12.00-13.00</p>
                        </div>
                        <div className='flex-1'>
                            <p>Sisa kontainer:</p>
                            <p className='font-bold'>5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseSection
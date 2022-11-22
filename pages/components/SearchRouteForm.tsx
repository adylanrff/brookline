import React from 'react'

function SearchRouteForm({ cities, onSelectChange, onSubmit, onReset }) {
    return (
        <form onSubmit={onSubmit} className='flex gap-3 flex-wrap'>
            <select name='departure' value={cities.departure} onChange={onSelectChange} className='px-2 py-1 font-body border-[1.5px] border-slate-400 rounded-lg w-full md:w-1/3 lg:w-[200px] hover:cursor-pointer' placeholder='Asal'>
                <option value="" disabled hidden>Pilih Kota Asal</option>
                <option value={'Surabaya'}>Surabaya</option>
                <option value={'Depok'}>Depok</option>
                <option value={'Bali'}>Bali</option>
            </select>
            <span className='text-center w-full md:w-fit'>-</span>
            <select name='arrival' value={cities.arrival} onChange={onSelectChange} className='px-2 py-1 font-body border-[1.5px] border-slate-400 rounded-lg w-full md:w-1/3 lg:w-[200px] hover:cursor-pointer' placeholder='Tujuan'>
                <option value="" disabled hidden>Pilih Kota Tujuan</option>
                <option value={'Surabaya'}>Surabaya</option>
                <option value={'Depok'}>Depok</option>
                <option value={'Bali'}>Bali</option>
            </select>
            <button type='submit' className='font-body px-4 py-1 bg-[#003A6C] rounded-lg text-white ml-2 w-full md:w-1/3 lg:w-fit mt-3 md:mt-2 lg:mt-0'>Cari</button>
            <button onClick={onReset} className='font-body px-4 py-1 bg-[#003A6C] rounded-lg text-white ml-2 w-full md:w-1/3 lg:w-fit md:mt-2 lg:mt-0'>Atur Ulang</button>
        </form>   
    )
}

export default SearchRouteForm
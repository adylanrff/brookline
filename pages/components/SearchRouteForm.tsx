import React from 'react'

function SearchRouteForm({ cities, onSelectChange, onSubmit, onReset }) {
    return (
        <form onSubmit={onSubmit} className='flex gap-3'>
            <select name='departure' value={cities.departure} onChange={onSelectChange} className='px-2 py-1 font-body border-[1.5px] border-slate-400 rounded-lg w-[200px] hover:cursor-pointer' placeholder='Asal'>
                <option value="" disabled hidden>Pilih Kota</option>
                <option value={'Surabaya'}>Surabaya</option>
                <option value={'Depok'}>Depok</option>
                <option value={'Bali'}>Bali</option>
            </select>
            <span>-</span>
            <select name='arrival' value={cities.arrival} onChange={onSelectChange} className='px-2 py-1 font-body border-[1.5px] border-slate-400 rounded-lg w-[200px] hover:cursor-pointer' placeholder='Tujuan'>
                <option value="" disabled hidden>Pilih Kota</option>
                <option value={'Surabaya'}>Surabaya</option>
                <option value={'Depok'}>Depok</option>
                <option value={'Bali'}>Bali</option>
            </select>
            <button type='submit' className='font-body px-4 py-1 bg-[#003A6C] rounded-lg text-white ml-2'>Cari</button>
            <button onClick={onReset} className='font-body px-4 py-1 bg-[#003A6C] rounded-lg text-white ml-2'>Atur Ulang</button>
        </form>   
    )
}

export default SearchRouteForm
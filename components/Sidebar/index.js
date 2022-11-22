import React from 'react'

function Sidebar() {
    return (
        <div className="fixed flex-1 bg-[#184D7B] min-h-screen w-52 top-0 left-0">
            <div className="flex gap-3 p-5">
                <img className="w-10" src='/brookline.png' />
                <p className="font-title text-[#EDF2F8] text-4xl">Brookline</p>
            </div>
            <div>
                <hr className='border-[1px] border-[#003A6C] w-52' />
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-3 justify-center bg-[#003A6C] p-5'>
                    <img className="w-6" src='/list.png' />
                    <p className="font-body text-[#EDF2F8] text-base">Daftar Kapal</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
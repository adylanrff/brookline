import React from 'react'

function Sidebar() {
    return (
        <div className="bg-[#003A6C] min-h-screen w-52 p-5 top-0 left-0 sticky">
            <div className="flex gap-3">
                <img className="w-10" src='/brookline.png' />
                <p className="font-title text-[#EDF2F8] text-4xl">Brookline</p>
            </div>
        </div>
    )
}

export default Sidebar
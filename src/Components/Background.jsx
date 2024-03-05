import React from 'react'

const Background = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative z-0 bg-slate-400">
            <div className='Text1 blur-sm w-max text-[29rem] -top-[10rem] -left-[5rem] rotate-45 h-max font-black z-0 absolute bg-gradient-to-r from-cyan-500 to-blue-500 ... '>
                X
            </div>
            <div className='Text1 blur-sm w-max text-[29rem] -bottom-[10rem] -right-[5rem] -rotate-12 h-max font-black z-0 absolute bg-gradient-to-r from-cyan-500 to-blue-500 ... '>
                X
            </div>
            <div className='Text2 blur-sm w-max text-[29rem] -top-[40%] left-[50%] h-max font-black z-0 absolute bg-gradient-to-r from-orange-500 to-red-500 ... '>
                O
            </div>
            <div className='Text2 blur-sm w-max text-[29rem] -bottom-[40%] left-[12rem] -rotate-45 h-max font-black z-0 absolute bg-gradient-to-r from-orange-500 to-red-500 ...'>
                O
            </div>
        </div>
    )
}

export default Background
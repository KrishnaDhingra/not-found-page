import React from 'react'

function Navbar(){
    return(
        <div className="w-full bg-white flex py-5 px-8 pr-24 justify-between items-center">
            
            <div className="flex">
                <span className="text-blue-500 text-3xl font-light">blue</span>
                <span className="text-gray-700 text-3xl font-light">blog</span>
            </div>

            <div className="flex gap-7">
                <div className="flex flex-col items-end">
                    <span className="text-gray-500 text-xs font-normal">Welcome</span>
                    <span className="text-gray-700 text-xl font-normal">Jian Yang</span>
                </div>
                <div className="h-12 w-12 bg-yellow-500 rounded-full"></div>
            </div>
        </div>
    )
}
export default Navbar
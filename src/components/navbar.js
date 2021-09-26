import React from 'react'
import Accordion from '../assets/accordion.png'

function Navbar(){
    return(
        <div className="w-full bg-white flex py-5 px-4 sm:px-8 pr-4 sm:pr-12 lg:pr-24 justify-between items-center">
            
            <div className="flex">
                <span className="logo text-3xl font-normal">blue</span>
                <span className="logo-dark text-3xl font-normal">blog</span>
            </div>

            <div className="flex items-end gap-3">
                <div className="hidden sm:flex flex-col items-end">
                    <span className="welcome-text text-xs font-normal">Welcome</span>
                    <span className="text-gray-900 text-xl font-normal">Jian Yang</span>
                </div>

                <img src={Accordion} className="hidden sm:flex h-2 w-2 mb-2 mr-3 transform rotate-90" alt="" />
                <div className="h-12 w-12 bg-yellow-500 rounded-full"></div>
            </div>
        </div>
    )
}
export default Navbar
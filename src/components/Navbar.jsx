import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import CubeLogo from "./components"

const Navbar = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState()

    const tabs = [
        "certification", "projects", "contact"
    ]

    const handleNavigate = (tab) => {
        navigate(`/${tab}`)
    }


    return (
        <div className='fixed top-0 z-50  w-full flex justify-center gap-3 lg:justify-between font-bold shadow-md  text-white bg-transparent lg:px-2 py-8 lg:text-xl  rounded-md'>
            <div className='lg:w-1/2' onClick={() => navigate("/")} >
                <div className=''>
                    <div className='flex  rounded-full bg-red-400 w-fit '>
                    <img
                        src="https://srbpwyxjbrbxzlerdust.supabase.co/storage/v1/object/public/portfolio-images/helo/logo1.jpg"
                        className='rounded-full w-[50px]'
                    />
                    </div>
                </div>
            </div>
            {
                tabs.map((tab, index) => (
                    <div key={index} className='hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-800  transition-all duration-600 ease-in-out rounded' onClick={() => { handleNavigate(tab) }}>{tab}</div>
                ))}


        </div>
    )
}

export default Navbar;

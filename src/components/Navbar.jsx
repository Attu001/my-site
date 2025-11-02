import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
    const navigate=useNavigate()

    const tabs=[
        "certification","projects","contact"
    ]

    



    return (
        <div className='fixed top-0  w-full flex justify-center gap-3 lg:justify-between font-bold shadow-md  text-white bg-transparent lg:px-2 py-8 lg:text-xl  rounded-md'>
            <div className='lg:w-1/2' > logo</div>
            {
            tabs.map((tab)=>(
                <div className='hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-800  transition-all duration-600 ease-in-out rounded' onClick={()=>{navigate(`/${tab}`)}} >{tab}</div>
            ))}
           

        </div>
    )
}

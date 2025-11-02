import React from 'react'
import { Navbar } from '../components/Navbar'

export const Home = () => {
    return (
        <>

            <div className='bg-gradient-to-r from-blue-500 to-purple-800 w-screen h-screen flex justify-center items-center p-4'>

                <div className='flex-col justify-center gap-6  lg:w-[800px] py-8'>
                    <div className='py-4'>
                        <h6> Hi, I am </h6>
                   
                        <h1>Atish Chavan</h1>
                    
                        <h3>I buils things for the web</h3>
                    </div>
                    <h6 className='py-4'>Hi, I’m a passionate Full Stack Developer specializing in building scalable web applications using React, Node.js, Django, and modern cloud technologies. I love turning complex problems into simple, elegant solutions.</h6>

                    <div className='border rounded-md '>
                        <button className='w-full' > Check out my projects</button></div>
                </div>

            </div>
        </>
    )
}

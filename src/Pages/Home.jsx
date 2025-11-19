import React from 'react'
import Navbar from '../components/Navbar'

export const Home = () => {
    return (
        <>

            <div className='bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 w-screen h-screen flex justify-center items-center p-4 relative overflow-auto'>

                {/* <Navbar /> */}

                {/* Animated gradient orbs */}
                <div className='absolute inset-0 overflow-hidden'>
                    <div className='absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow'></div>
                    <div className='absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-medium'></div>
                    <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast'></div>
                    <div className='absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow'></div>
                </div>


                {/* Animated grid */}
                <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] animate-grid-move'></div>

                {/* Sparkle particles */}
                <div className='absolute inset-0'>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute w-2 h-2 bg-white rounded-full opacity-0 animate-sparkle'
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Floating shapes */}
                <div className='absolute inset-0'>
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute border-2 border-white/10 rounded-lg opacity-20 animate-float-random'
                            style={{
                                width: `${40 + Math.random() * 80}px`,
                                height: `${40 + Math.random() * 80}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${15 + Math.random() * 20}s`
                            }}
                        />
                    ))}
                </div>


                <div className='sm:flex items-center justify-center  gap-6 mt-38  py-6 z-20  relative'>
                    <div className="lg:w-1/2 animate-fade-in-up animation-delay-300 flex justify-end ">
                        <img
                            src="https://srbpwyxjbrbxzlerdust.supabase.co/storage/v1/object/public/portfolio-images/3Dmodels/cwok_casual_19-removebg-preview.png"
                            className='animate-[float_1.5s_ease-in-out_infinite]'
                            alt="no"
                        />
                    </div>
                    <div className=''> 
                        
                   <div className='py-4 space-y-4'>
                        <div className='overflow-hidden'>
                            <h6 className='text-cyan-300 font-light text-xl mb-2 opacity-0 animate-fade-in-up animation-delay-300 tracking-wider'>
                                👋 Hi, I am
                            </h6>
                        </div>

                        <div className='over'>
                            <h1 className='text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent opacity-0 animate-fade-in-up animation-delay-500 hover:scale-105 transition-transform duration-300 '>
                                Atish Chavan
                            </h1>
                        </div>

                        <div className='overflow-hidde'>
                            <h3 className='text-3xl lg:text-4xl text-white font-medium mt-6 opacity-0 animate-fade-in-up animation-delay-700'>
                                I <span className='text-yellow-400'>build</span>{' '}
                                <span className='text-cyan-400 relative inline-block'>
                                    things for the web
                                    <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 animate-grow-width animation-delay-1000 rounded-full'></span>
                                </span>
                            </h3>
                        </div>
                    </div>

                    <div className=''>
                        <h6 className='py-8 text-white/90 text-xl leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 opacity-0 animate-fade-in-up animation-delay-900 hover:bg-white/10 transition-all duration-300'>
                            💻 Hi, I'm a passionate Full Stack Developer specializing in building scalable web applications using React, Node.js, Django, and modern cloud technologies. I love turning complex problems into simple, elegant solutions.
                        </h6>
                    </div>



                    {/* Scroll indicator */}
                    <div className='absolute -bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-2000'>
                        <div className='flex flex-col items-center gap-2'>
                            <span className='text-white/60 text-sm'>Scroll to explore</span>
                            <div className='w-6 h-10 border-2 border-white/40 rounded-full flex justify-center'>
                                <div className='w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce'></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes grow-width {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(20px, -20px) rotate(5deg); }
                }

                @keyframes float-medium {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(-15px, 15px) rotate(-3deg); }
                }

                @keyframes float-fast {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(10px, -10px) rotate(2deg); }
                }

                @keyframes float-random {
                    0%, 100% { 
                        transform: translate(0, 0) rotate(0deg) scale(1);
                    }
                    25% { 
                        transform: translate(30px, -20px) rotate(90deg) scale(1.1);
                    }
                    50% { 
                        transform: translate(-20px, 15px) rotate(180deg) scale(0.9);
                    }
                    75% { 
                        transform: translate(15px, 25px) rotate(270deg) scale(1.05);
                    }
                }

                @keyframes grid-move {
                    0% { background-position: 0 0; }
                    100% { background-position: 60px 60px; }
                }

                @keyframes sparkle {
                    0%, 100% { 
                        opacity: 0; 
                        transform: scale(0) rotate(0deg);
                    }
                    50% { 
                        opacity: 1; 
                        transform: scale(1) rotate(180deg);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-grow-width {
                    animation: grow-width 1s ease-out forwards;
                }

                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }

                .animate-float-medium {
                    animation: float-medium 6s ease-in-out infinite;
                }

                .animate-float-fast {
                    animation: float-fast 4s ease-in-out infinite;
                }

                .animate-float-random {
                    animation: float-random 20s ease-in-out infinite;
                }

                .animate-grid-move {
                    animation: grid-move 20s linear infinite;
                }

                .animate-sparkle {
                    animation: sparkle 4s ease-in-out infinite;
                }

                .animation-delay-300 { animation-delay: 300ms; }
                .animation-delay-500 { animation-delay: 500ms; }
                .animation-delay-700 { animation-delay: 700ms; }
                .animation-delay-900 { animation-delay: 900ms; }
                .animation-delay-1100 { animation-delay: 1100ms; }
                .animation-delay-1200 { animation-delay: 1200ms; }
                .animation-delay-1400 { animation-delay: 1400ms; }
                .animation-delay-2000 { animation-delay: 2000ms; }
            `}</style>
        </>
    )
}
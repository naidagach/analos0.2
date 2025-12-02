import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='bg-[#020604] p-4'>
        <section className=' max-w-[1280px] mx-auto py-32 flex flex-col m:flex-row m:items-center m:justify-between'>
            <div className='m:w-[45%]'>
                <div className='bg-linear-to-r from-[#0ea674]/20 to-[#17ff9a]/20 rounded-full px-4 py-2 w-[max-content] text-[#17ff9a] flex items-center gap-2 border border-[#114f36]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles w-4 h-4" aria-hidden="true">
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                        <path d="M20 2v4"></path>
                        <path d="M22 4h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                    <p>The Next Big Memecoin</p>
                </div>
                <div className=''>
                    <p className='text-white my-6'>Welcome to 
                        <span className='bg-linear-to-r bg-clip-text text-transparent from-[#0ea674] to-[#17ff9a]'> Analos0.2</span>
                    </p>
                    <p className='text-[#b3b4b3] text-[20px]'>A new revolution starts in the crypto world. Join the community and be part of something legendary.</p>
                </div>
                <div className='flex items-center gap-4 mt-6'>
                    <div className='px-8 py-4 bg-linear-to-r from-[#0ea674] to-[#17ff9a] text-white rounded-[18px] flex items-center gap-2 shadow-lg shadow-[#0ea674]/50 cursor-pointer hover:scale-105 duration-300 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trending-up w-5 h-5" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        <a href='https://dexscreener.com/'>Buy Now</a>
                    </div>
                    <div className='text-white px-8 py-4 bg-white/5 backdrop-blur-sm rounded-[18px] border border-[#0ea674]/30 hover:border-[#0ea674] transition-colors flex items-center gap-2 cursor-pointer hover:scale-105 duration-300 '>
                        <Link to={'/charts'}>View Chart</Link>
                        <GoArrowRight />
                    </div>
                </div>
            </div>
            <div className='relative max-sm:overflow-x-hidden py-5 m:w-[50%]'>
                <motion.div 
                    className='absolute z-0 bottom-10 -left-10 w-16 h-16 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-full opacity-50'
                    animate={{
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity, 
                        ease: "easeInOut"
                    }}
                    >
                </motion.div>
                <motion.div 
                    
                    className='absolute z-0 top-5 translate-x-[40%] right-0 w-20 h-20 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-2xl opacity-50'
                    animate={{
                        y: [0, -15, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity, 
                        ease: "easeInOut"
                    }}
                    >
                </motion.div>
                <motion.div 
                    className='my-6 w-full z-10 aspect-square bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-3xl p-1'
                    animate={{
                        rotate: [0, 5, 0],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className='w-full h-full bg-black rounded-3xl flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-zap w-40 h-40 text-[#17ff9a]" aria-hidden="true">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
        <section className='container mx-auto my-10'>
            <div className='grid grid-cols-2 s:grid-cols-4 gap-4 mb-30'>
                <div className='bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-xl rounded-2xl p-6 border border-[#0ea674]/30 text-center'>
                    <p className='text-[#17ff9a] mb-2'>1B</p>
                    <p className='text-[#b6bdb9]'>Total Supply</p>
                </div>
                <div className='bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-xl rounded-2xl p-6 border border-[#0ea674]/30 text-center'>
                    <p className='text-[#17ff9a] mb-2'>0%</p>
                    <p className='text-[#b6bdb9]'>Tax</p>
                </div>
                <div className='bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-xl rounded-2xl p-6 border border-[#0ea674]/30 text-center'>
                    <p className='text-[#17ff9a] mb-2'>100%</p>
                    <p className='text-[#b6bdb9]'>Community</p>
                </div>
                <div className='bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-xl rounded-2xl p-6 border border-[#0ea674]/30 text-center'>
                    <p className='text-[#17ff9a] mb-2 flex justify-center items-center'><BsFillRocketTakeoffFill /></p>
                    <p className='text-[#b6bdb9]'>To The Moon</p>
                </div>
            </div>
        </section>
        <section className='container mx-auto my-10'>
            <div className='text-center mb-16'>
                <p className='text-white mb-4'>Why Choose Analos0.2?</p>
                <p className='text-[#b6bdb9]'>The most innovative memecoin with real utility and community power</p>
            </div>
            <div className='flex flex-col s:flex-row gap-4'>
                <div className=' hover:shadow-custom shadow-[#0ea674]/50 hover:bg-linear-to-r from-[#0ea67380] to-[#17ff9a80] backdrop-blur-xl rounded-2xl p-8 border border-[#0ea674]/30 hover:border-[#0ea674] hover:translate-y-[-10px] duration-200'>
                    <div className="w-16 h-16 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-8 h-8 text-white" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                    </div>
                   <p className='text-white mb-4'>Secure & Safe</p>
                   <p className='text-[#b6bdb9]'>Liquidity locked and audited smart contract for maximum security</p>
                </div>
                <div className=' hover:shadow-custom shadow-[#0ea674]/50 hover:bg-linear-to-r from-[#0ea67380] to-[#17ff9a80]  backdrop-blur-xl rounded-2xl p-8 border border-[#0ea674]/30 hover:border-[#0ea674] hover:translate-y-[-10px] duration-200'>
                    <div className="w-16 h-16 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-8 h-8 text-white" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                    </div>
                   <p className='text-white mb-4'>Strong Community</p>
                   <p className='text-[#b6bdb9]'>Join thousands of holders in our growing community</p>
                </div>
                <div className=' hover:shadow-custom shadow-[#0ea674]/50 hover:bg-linear-to-r from-[#0ea67380] to-[#17ff9a80]  backdrop-blur-xl rounded-2xl p-8 border border-[#0ea674]/30 hover:border-[#0ea674] hover:translate-y-[-10px] duration-200'>
                    <div className="w-16 h-16 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-8 h-8 text-white" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                    </div>
                   <p className='text-white mb-4'>High Potential</p>
                   <p className='text-[#b6bdb9]'>Built for exponential growth with strong fundamentals</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Main

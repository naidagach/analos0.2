import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

function Main() {
  return (
    <div className='bg-[#020604] p-4'>
        <section className='container mx-auto py-20 flex flex-col m:flex-row m:items-center m:justify-between'>
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
                        <p>Buy Now</p>
                    </div>
                    <div className='text-white px-8 py-4 bg-white/5 backdrop-blur-sm rounded-[18px] border border-[#0ea674]/30 hover:border-[#0ea674] transition-colors flex items-center gap-2 cursor-pointer hover:scale-105 duration-300 '>
                        <p>View Chart</p>
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
    </div>
  )
}

export default Main

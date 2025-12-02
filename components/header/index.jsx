import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {

    const location = useLocation()
    const active = location.pathname 

    return (
        <div className='bg-[#020604]/60 backdrop-blur-md fixed top-0 right-0 left-0 z-1'>
            <div className='opacity-90 border-b border-[#0c3424]'>
                <nav className='max-w-[1280px] mx-auto flex justify-between items-center gap-2 p-4'>
                    <a href='/' className='flex items-center justify-between gap-2'>
                        <div className="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-6 h-6 text-white" aria-hidden="true">
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                            </svg>
                        </div>
                        <p className='text-white'>Analos0.2</p>
                    </a>
                    <div className='flex items-center justify-between gap-2'>
                        <Link to={'/'}>
                            <div className={`p-2  s:px-4 rounded-lg cursor-pointer hover:bg-[#0f0f0f] hover:text-white hover:scale-105 transition duration-200 flex items-center gap-2
                                            ${active === '/' ? 'bg-linear-to-r from-[#0ea674] to-[#17ff9a] text-white' : 'text-white/70'}`} data-discover="true">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xs:w-5 xs:h-5 lucide lucide-house" aria-hidden="true">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                                <p className='hidden s:block'>Home</p>
                            </div>
                        </Link>
                        <Link to={'/about'}>
                            <div className={`p-2  s:px-4 rounded-lg cursor-pointer hover:bg-[#0f0f0f] hover:text-white hover:scale-105 transition duration-200 flex items-center gap-2 
                                            ${active === '/about' ? 'bg-linear-to-r from-[#0ea674] to-[#17ff9a] text-white' : 'text-white/70'}`} data-discover="true">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xs:w-5 xs:h-5 lucide lucide-info" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                </svg>
                                <p className='hidden s:block'>About</p>
                            </div>
                        </Link>
                        <Link to={'/partners'}>
                            <div className={`p-2  s:px-4 rounded-lg cursor-pointer hover:bg-[#0f0f0f] hover:text-white hover:scale-105 transition duration-200 flex items-center gap-2
                                            ${active === '/partners' ? 'bg-linear-to-r from-[#0ea674] to-[#17ff9a] text-white' : 'text-white/70'}`} data-discover="true">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xs:w-5 xs:h-5 lucide lucide-users" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                <p className='hidden s:block'>Partners</p>
                            </div>
                        </Link>
                        <Link to={'/charts'}>
                            <div className={`p-2  s:px-4 rounded-lg cursor-pointer hover:bg-[#0f0f0f] hover:text-white hover:scale-105 transition duration-200 flex items-center gap-2
                                            ${active === '/charts' ? 'bg-linear-to-r from-[#0ea674] to-[#17ff9a] text-white' : 'text-white/70'}`} data-discover="true">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xs:w-5 xs:h-5 lucide lucide-chart-column" aria-hidden="true">
                                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                    <path d="M18 17V9"></path>
                                    <path d="M13 17V5"></path>
                                    <path d="M8 17v-3"></path>
                                </svg>
                                <p className='hidden s:block'>Charts</p>
                            </div>
                        </Link>
                        <Link to={'/social'}>
                            <div className={`p-2  s:px-4 rounded-lg cursor-pointer hover:bg-[#0f0f0f] hover:text-white hover:scale-105 transition duration-200  flex items-center gap-2
                                            ${active === '/social' ? 'bg-linear-to-r from-[#0ea674] to-[#17ff9a] text-white' : 'text-white/70'}`} data-discover="true">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xs:w-5 xs:h-5 lucide lucide-message-square" aria-hidden="true">
                                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <p className='hidden s:block'>Social</p>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header

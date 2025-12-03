import React from 'react'

function Social() {
    return (
        <div className=' py-32 bg-[#020604] p-4'>
            <div className="container mx-auto text-center mb-20">
                <div className="pop-in mb-6">
                    <div className="w-24 h-24 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-3xl flex items-center justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-12 h-12 text-white" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                    </div>
                </div>
                <h1 className="text-white mb-6">Connect With Us</h1>
                <p className="text-white/70 text-xl max-w-3xl mx-auto">Join our community and stay updated with the latest news</p>
            </div>
            <section className='container mx-auto flex flex-col gap-4 s:flex-row s:gap-8 justify-center items-center'>
                <a href="https://x.com/analos02" className='item block w-full'>
                    <div className="group h-[270px] p-6 bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 hover:border-[#0ea674] hover:bg-linear-to-r hover:from-[#0ea67340] hover:to-[#17ff9a40] hover:scale-[1.03] duration-300 backdrop-blur-lg rounded-2xl border border-[#0ea674]/30 flex flex-col items-center justify-center">
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-[#141414] to-[#3a3a3a] rounded-2xl flex items-center justify-center group-hover:rotate-12 duration-300 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1200 1227" fill="#fff">
                                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.132L363.206 0H0L468.357 681.821L0 1227H105.859L515.556 736.826L836.794 1227H1200L714.137 519.284H714.163ZM568.276 668.682L522.51 602.827L144.703 79.694H311.106L610.429 511.778L656.195 577.633L1056.51 1147.31H890.106L568.249 668.708L568.276 668.682Z"/>
                                </svg>
                            </div>
                            <div className='text-center'>
                                <p className="text-white mb-2">X</p>
                                <p className="text-white/70 mb-3">Follow us on X</p>
                                <p className="text-[#17ff9a]">X,XXX members</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://t.me/analos02" className='item block w-full'>
                    <div className="group h-[270px] p-6 bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 hover:border-[#0ea674] hover:bg-linear-to-r hover:from-[#0ea67340] hover:to-[#17ff9a40] hover:scale-[1.03] duration-300 backdrop-blur-lg rounded-2xl border border-[#0ea674]/30 flex flex-col items-center justify-center">
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-12  duration-300 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="origin-center lucide lucide-send w-10 h-10 text-white" aria-hidden="true">
                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                </svg>
                            </div>
                            <div className='text-center'>
                                <p className="text-white mb-2">Telegram</p>
                                <p className="text-white/70 mb-3">Join our Telegram group</p>
                                <p className="text-[#17ff9a]">X,XXX members</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="" className='item block w-full'>
                    <div className="group h-[270px] p-6 bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 hover:border-[#0ea674] hover:bg-linear-to-r hover:from-[#0ea67340] hover:to-[#17ff9a40] hover:scale-[1.03] duration-300 backdrop-blur-lg rounded-2xl border border-[#0ea674]/30 flex flex-col items-center justify-center">
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-10 h-10 text-white" aria-hidden="true">
                                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                                </svg>
                            </div>
                            <div className=' text-center'>
                                <p className="text-white mb-2">Community</p>
                                <p className="text-white/70 mb-3">Connect with our community</p>
                                <p className="text-[#17ff9a]">X,XXX members</p>
                            </div>
                        </div>
                    </div>
                </a>
            </section>

            <section className='container mx-auto py-20 flex flex-col s:flex-row gap-4 s:gap-8 justify-center items-center'>
                <div className="w-full h-[190px] s:w-[25%] bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 text-center hover:translate-y-[-10px] duration-200">
                    <div className="w-12 h-12 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-white" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="text-[#17ff9a] mb-1">XX,XXX+</div>
                    <div className="text-white/70">Community Members</div>
                </div>
                <div className="w-full h-[190px] s:w-[25%] bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 text-center hover:translate-y-[-10px] duration-200">
                    <div className="w-12 h-12 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-xl flex items-center justify-center mx-auto mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1200 1227" fill="#fff">
                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.132L363.206 0H0L468.357 681.821L0 1227H105.859L515.556 736.826L836.794 1227H1200L714.137 519.284H714.163ZM568.276 668.682L522.51 602.827L144.703 79.694H311.106L610.429 511.778L656.195 577.633L1056.51 1147.31H890.106L568.249 668.708L568.276 668.682Z"/>
                        </svg>
                    </div>
                    <div className="text-[#17ff9a] mb-1">XX,XXX+</div>
                    <div className="text-white/70">X Followers</div>
                </div>
                <div className="w-full h-[190px] s:w-[25%] bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 text-center hover:translate-y-[-10px] duration-200">
                    <div className="w-12 h-12 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="origin-center lucide lucide-send text-white" aria-hidden="true">
                            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                            <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                    </div>
                    <div className="text-[#17ff9a] mb-1">XX,XXX+</div>
                    <div className="text-white/70">Telegram Members</div>
                </div>
                <div className="w-full h-[190px] s:w-[25%] bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 text-center hover:translate-y-[-10px] duration-200">
                    <div className="w-12 h-12 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6 text-white" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                    </div>
                    <div className="text-[#17ff9a] mb-1">XX+</div>
                    <div className="text-white/70">Countries Members</div>
                </div>
            </section>
            <section className='container mx-auto'>
                <div className="m:w-[70%] mx-auto bg-linear-to-r from-[#0ea674] to-[#17ff9a] rounded-3xl p-12 text-center mb-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-16 h-16 text-white mx-auto mb-6" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                    <h2 className="text-white mb-4">Stay Updated</h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for the latest updates, announcements, and exclusive content</p>
                    <form
                        action="https://formsubmit.co/analos.0222@gmail.com"
                        method="POST"
                        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input type="hidden" name="_subject" value="New subscriber!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="email" name="email" required placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:border-white outline-none"/>
                        <button type="submit" className="cursor-pointer px-8 py-4 bg-white text-[#0ea674] rounded-xl">Subscribe</button>
                    </form>
                </div>
                <div className="m:w-[40%] mx-auto flex flex-col justify-center items-center bg-linear-to-br from-[#0ea674]/20 to-[#17ff9a]/20 backdrop-blur-lg rounded-3xl p-8 border border-[#0ea674]/30 max-w-2xl">
                    <h3 className="text-white mb-4">Contract Address</h3>
                    <div className="bg-black/40 rounded-xl p-6 backdrop-blur-sm mb-4">
                        <code className="text-[#17ff9a]">TBA - Coming Soon</code>
                    </div>
                    <p className="text-white/70">Smart contract address can be copied from here</p>
                </div>
            </section>
        </div>
    )
}

export default Social

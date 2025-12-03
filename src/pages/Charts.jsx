import React, { useState } from 'react'

function Charts() {

    const [copied, setCopied] = useState(false)

    function handleCopy() {
        navigator.clipboard.writeText("TBA")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
    return (
        <div className='py-32 p-4 bg-[#020604]'>
            <div className="text-center mb-12">
                <div className="pop-in mb-6">
                    <div className="w-24 h-24 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-3xl flex items-center justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column w-12 h-12 text-white" aria-hidden="true">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                        </svg>
                    </div>
                </div>
                <h1 className="text-white mb-6">Live Chart</h1>
                <p className="text-white/70 text-xl max-w-3xl mx-auto">Track real-time price movements and market statistics</p>
            </div>
            <section className='container mx-auto grid grid-cols-1 s:grid-cols-2 m:grid-cols-4 gap-4'>
                <div className='item bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 hover:border-[#0ea674] hover:scale-[1.03] duration-300 transition-all'>
                    <div className='flex justify-start items-center gap-4 mb-2'>
                        <div className="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign w-5 h-5 text-white" aria-hidden="true">
                                <line x1="12" x2="12" y1="2" y2="22"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <p className='text-white/70'>Market Cap</p>
                    </div>
                    <p className='text-white mb-1'>$XXX,XXX</p>
                    <p className='text-[#17ff9a]'>+X.XX%</p>
                </div>
                <div className='item bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 hover:border-[#0ea674] hover:scale-[1.03] duration-300 transition-all'>
                    <div className='flex justify-start items-center gap-4 mb-2'>
                    <div className="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity w-5 h-5 text-white" aria-hidden="true">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                    </div>
                        <p className='text-white/70'>24h Volume</p>
                    </div>
                    <p className='text-white mb-1'>$XXX,XXX</p>
                    <p className='text-[#17ff9a]'>+X.XX%</p>
                </div>
                <div className='item bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 hover:border-[#0ea674] hover:scale-[1.03] duration-300 transition-all'>
                    <div className='flex justify-start items-center gap-4 mb-2'>
                        <div className="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-5 h-5 text-white" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                        </div>
                        <p className='text-white/70'>Holders</p>
                    </div>
                    <p className='text-white mb-1'>$XXX,XXX</p>
                    <p className='text-[#17ff9a]'>+X.XX%</p>
                </div>
                <div className='item bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 hover:border-[#0ea674] hover:scale-[1.03] duration-300 transition-all'>
                    <div className='flex justify-start items-center gap-4 mb-2'>
                        <div className="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column w-5 h-5 text-white" aria-hidden="true">
                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                <path d="M18 17V9"></path>
                                <path d="M13 17V5"></path>
                                <path d="M8 17v-3"></path>
                            </svg>
                        </div>
                        <p className='text-white/70'>Liquidity</p>
                    </div>
                    <p className='text-white mb-1'>$XXX,XXX</p>
                    <p className='text-[#17ff9a]'>+X.XX%</p>
                </div>
            </section>
            <section className="container mx-auto my-12 bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-3xl p-6 border border-[#0ea674]/30 mb-12">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/40">
                    <iframe src="https://dexscreener.com/solana/6sekz73vph5afymqtzav6h5vaqqlz2c8wqecq6mhlqfk?embed=1&theme=dark&info=0" className="w-full h-full" title="DexScreener Chart"></iframe>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-white/60 mb-6">Search for the contract address on DexScreener to view the chart</p>
                    <a href='https://dexscreener.com/' className="px-6 py-4 bg-linear-to-r from-[#0ea674] to-[#17ff9a] text-white rounded-xl">View on DexScreener</a>
                </div>
            </section>
            <section className='container mx-auto pt-10 flex flex-col s:flex-row gap-4 justify-center'>
                <div className="s:w-[50%] bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0ea674]/30">
                    <h3 className="text-white mb-6">How to Buy</h3>
                    <ol className="space-y-4">
                        <li className="flex gap-3 text-white/70">
                            <span className="shrink-0 w-8 h-8 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center text-white">1</span>
                            <span className="pt-1">Connect your wallet (Phantom, MetaMask, etc.)</span>
                        </li>
                        <li className="flex gap-3 text-white/70">
                            <span className="shrink-0 w-8 h-8 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center text-white">2</span>
                            <span className="pt-1">Get SOL from an exchange</span>
                        </li>
                        <li className="flex gap-3 text-white/70">
                            <span className="shrink-0 w-8 h-8 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center text-white">3</span>
                            <span className="pt-1">Swap SOL for Analos0.2 on Raydium or Jupiter</span>
                        </li>
                        <li className="flex gap-3 text-white/70">
                            <span className="shrink-0 w-8 h-8 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center text-white">4</span>
                            <span className="pt-1">Hold and enjoy the ride to the moon! 🚀</span>
                        </li>
                    </ol>
                </div>
                <div className="s:w-[50%] relative bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0ea674]/30">
                    <h3 className="text-white mb-6">Contract Address</h3>
                    <div className="bg-black/40 rounded-xl p-4 mb-4">
                        <code className="text-[#17ff9a] break-all">TBA - Coming Soon</code>
                    </div>
                    <p className="text-white/70 mb-4">Smart contract address will be available here. Always verify the contract before trading!</p>
                    <button onClick={handleCopy} className="w-full cursor-pointer px-6 py-3 bg-white/5 border border-[#0ea674]/30 hover:border-[#0ea674] text-white rounded-xl transition-colors">Copy Address</button>
                    {copied && (
                        <div className="absolute mt-1 right-0 left-0  text-center text-[#17ff9a] text-sm fade-in">Copied!</div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Charts

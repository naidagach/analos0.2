import React from 'react'

function Charts() {
    return (
        <div className='pt-32 p-4 bg-[#020604]'>
            <div class="text-center mb-12">
                <div class="mb-6">
                    <div class="w-24 h-24 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-3xl flex items-center justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column w-12 h-12 text-white" aria-hidden="true">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                        </svg>
                    </div>
                </div>
                <h1 class="text-white mb-6">Live Chart</h1>
                <p class="text-white/70 text-xl max-w-3xl mx-auto">Track real-time price movements and market statistics</p>
            </div>
            <section className='max-w-[1280px] mx-auto grid grid-cols-1 s:grid-cols-2 m:grid-cols-4 gap-4'>
                <div className='bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 hover:border-[#0ea674] hover:scale-[1.03] duration-300 transition-all'>
                    <div className='flex justify-start items-center gap-4 mb-2'>
                        <div class="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign w-5 h-5 text-white" aria-hidden="true">
                                <line x1="12" x2="12" y1="2" y2="22"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <p className='text-white/70'>Market Cap</p>
                    </div>
                    <p className='text-white mb-1'>$XXX,XXX</p>
                    <p className='text-[#17ff9a]'>+X.XX%</p>
                </div>
                <div className='bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 hover:border-[#0ea674] hover:scale-[1.03] duration-300 transition-all'>
                    <div className='flex justify-start items-center gap-4 mb-2'>
                    <div class="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-5 h-5 text-white" aria-hidden="true">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                    </div>
                        <p className='text-white/70'>24h Volume</p>
                    </div>
                    <p className='text-white mb-1'>$XXX,XXX</p>
                    <p className='text-[#17ff9a]'>+X.XX%</p>
                </div>
                <div className='bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 hover:border-[#0ea674] hover:scale-[1.03] duration-300 transition-all'>
                    <div className='flex justify-start items-center gap-4 mb-2'>
                        <div class="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-5 h-5 text-white" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                        </div>
                        <p className='text-white/70'>Holders</p>
                    </div>
                    <p className='text-white mb-1'>$XXX,XXX</p>
                    <p className='text-[#17ff9a]'>+X.XX%</p>
                </div>
                <div className='bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#0ea674]/30 hover:border-[#0ea674] hover:scale-[1.03] duration-300 transition-all'>
                    <div className='flex justify-start items-center gap-4 mb-2'>
                        <div class="w-10 h-10 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column w-5 h-5 text-white" aria-hidden="true">
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
            <section class="max-w-[1280px] mx-auto my-12 bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-3xl p-6 border border-[#0ea674]/30 mb-12">
                <div class="aspect-video w-full rounded-2xl overflow-hidden bg-black/40">
                    <iframe src="https://dexscreener.com/solana/6sekz73vph5afymqtzav6h5vaqqlz2c8wqecq6mhlqfk?embed=1&theme=dark&info=0" class="w-full h-full" title="DexScreener Chart"></iframe>
                </div>
                <div class="mt-6 text-center">
                    <p class="text-white/60 mb-6">Search for the contract address on DexScreener to view the chart</p>
                    <a href='https://dexscreener.com/' class="px-6 py-4 bg-linear-to-r from-[#0ea674] to-[#17ff9a] text-white rounded-xl">View on DexScreener</a>
                </div>
            </section>
            <section className='max-w-[1280px] mx-auto py-20 flex flex-col s:flex-row gap-4 justify-center'>
                <div class="s:w-[50%] bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0ea674]/30">
                    <h3 class="text-white mb-6">How to Buy</h3>
                    <ol class="space-y-4">
                        <li class="flex gap-3 text-white/70">
                            <span class="shrink-0 w-8 h-8 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center text-white">1</span>
                            <span class="pt-1">Connect your wallet (Phantom, MetaMask, etc.)</span>
                        </li>
                        <li class="flex gap-3 text-white/70">
                            <span class="shrink-0 w-8 h-8 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center text-white">2</span>
                            <span class="pt-1">Get SOL from an exchange</span>
                        </li>
                        <li class="flex gap-3 text-white/70">
                            <span class="shrink-0 w-8 h-8 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center text-white">3</span>
                            <span class="pt-1">Swap SOL for Analos0.2 on Raydium or Jupiter</span>
                        </li>
                        <li class="flex gap-3 text-white/70">
                            <span class="shrink-0 w-8 h-8 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-lg flex items-center justify-center text-white">4</span>
                            <span class="pt-1">Hold and enjoy the ride to the moon! 🚀</span>
                        </li>
                    </ol>
                </div>
                <div class="s:w-[50%] bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0ea674]/30">
                    <h3 class="text-white mb-6">Contract Address</h3>
                    <div class="bg-black/40 rounded-xl p-4 mb-4">
                        <code class="text-[#17ff9a] break-all">TBA - Coming Soon</code>
                    </div>
                    <p class="text-white/70 mb-4">Smart contract address will be available here. Always verify the contract before trading!</p>
                    <button onclick="navigator.clipboard.writeText('TBA')" class="w-full px-6 py-3 bg-white/5 border border-[#0ea674]/30 hover:border-[#0ea674] text-white rounded-xl transition-colors">Copy Address</button>
                </div>
            </section>
        </div>
    )
}

export default Charts

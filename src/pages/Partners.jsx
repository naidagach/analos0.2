import React from 'react'
import { partners } from '../../db';
import { Link } from 'react-router-dom';

function Partners() {

    return (
        <div className='bg-[#020604] p-4 pt-32'>
            <div class="container mx-auto text-center mb-20 opacity-[1]">
                <div class="mb-6">
                    <div class="w-24 h-24 bg-linear-to-br from-[#0ea674] to-[#17ff9a] rounded-3xl flex items-center justify-center mx-auto">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake w-12 h-12 text-white" aria-hidden="true">
							<path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
							<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
							<path d="m21 3 1 11h-2"></path>
							<path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
							<path d="M3 4h8"></path>
						</svg>
                    </div>
                </div>
                <h1 class="text-white mb-6">Our Partners</h1>
                <p class="text-white/70 text-xl max-w-3xl mx-auto">Trusted by the best platforms in the crypto ecosystem</p>
            </div>
			<section className="overflow-hidden w-full">
				<div className="flex w-max animate-marquee">
					{[...partners, ...partners].map((item, i) => (
					<div key={i} className=" w-60 h-40 p-6 bg-linear-to-br from-[#0ea674]/10 to-[#17ff9a]/10 hover:border-[#0ea674] backdrop-blur-lg rounded-2xl border border-[#0ea674]/30 flex flex-col items-center justify-center mr-6">
						<div className='flex flex-col gap-2 items-center justify-center'>
							{item.icon}
							<p className="text-white/90 text-lg">{item.name}</p>
							<p className="text-white/50">{item.desc}</p>
						</div>
					</div>
					))}
				</div>
			</section>
			<section className='py-20'>
				<div class="flex flex-col items-center justify-center w-[70%] mx-auto bg-linear-to-r from-[#0ea674] to-[#17ff9a] rounded-3xl p-12">
					<h2 class="text-white mb-4">Want to Partner With Us?</h2>
					<p class="text-white/90 mb-8 max-w-2xl mx-auto">Join our growing network of partners and be part of the revolution</p>
					<Link to={'/social'} class="px-8 py-4 bg-white text-[#0ea674] rounded-xl">Contact Us</Link>
				</div>
			</section>
        </div>
    )
}

export default Partners

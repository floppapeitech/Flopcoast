
import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock, Heart, Mail } from 'lucide-react';
import { ViewState } from '../types';

interface HomeContentProps {
    onNavigate: (view: ViewState) => void;
}

const HomeContent: React.FC<HomeContentProps> = ({ onNavigate }) => {
    const deals = [
        { city: 'London', country: 'United Kingdom', price: 399, img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop' },
        { city: 'Tokyo', country: 'Japan', price: 899, img: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2672&auto=format&fit=crop' },
        { city: 'Paris', country: 'France', price: 449, img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop' },
    ];

    return (
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto pb-20 space-y-24">
            
            {/* Trending Deals */}
            <div className="space-y-8">
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-display font-bold mb-2">Trending Destinations</h2>
                        <p className="text-silver-500">Unbeatable fares to our most popular cities.</p>
                    </div>
                    <button 
                        onClick={() => onNavigate('FLIGHT_DEALS')}
                        className="text-sm font-bold underline decoration-2 underline-offset-4 hidden md:block hover:text-silver-600 transition-colors"
                    >
                        View All Deals
                    </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {deals.map((deal, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-4 relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={deal.img} alt={deal.city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute bottom-4 right-4 bg-white dark:bg-black px-4 py-2 rounded-full text-xs font-bold shadow-lg z-20">
                                    From ${deal.price}*
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-display">{deal.city}</h3>
                            <p className="text-sm text-silver-500">{deal.country}</p>
                        </div>
                    ))}
                </div>
                
                <div className="md:hidden text-center">
                    <button 
                        onClick={() => onNavigate('FLIGHT_DEALS')}
                        className="text-sm font-bold underline decoration-2 underline-offset-4"
                    >
                        View All Deals
                    </button>
                </div>
            </div>

            {/* Why Fly With Us */}
            <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 md:p-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The Flopcoast Difference</h2>
                    <p className="text-silver-500 dark:text-silver-400 text-lg">
                        We don't just fly planes; we craft experiences. Here is why millions of travelers choose us every year.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-100 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
                        <div className="w-14 h-14 mx-auto bg-silver-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                            <Star size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Award Winning</h3>
                        <p className="text-sm text-silver-500">Voted Best Airline in Floptropica for 5 consecutive years.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-100 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
                        <div className="w-14 h-14 mx-auto bg-silver-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Safety First</h3>
                        <p className="text-sm text-silver-500">Maintained to the highest standards with a Diamond APEX safety rating.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-100 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
                        <div className="w-14 h-14 mx-auto bg-silver-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                            <Clock size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">On-Time</h3>
                        <p className="text-sm text-silver-500">Industry-leading punctuality ensuring you arrive when you expect to.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-100 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
                        <div className="w-14 h-14 mx-auto bg-silver-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                            <Heart size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Care Focused</h3>
                        <p className="text-sm text-silver-500">Our cabin crew are trained to provide genuine, warm hospitality.</p>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-black dark:bg-white text-white dark:text-black rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 dark:bg-black/10 text-xs font-bold uppercase tracking-wider">
                            <Mail size={12} /> Flopcoast Insider
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold">Never miss a fare drop.</h2>
                        <p className="opacity-80 text-lg">
                            Sign up for our newsletter to receive exclusive deals, travel inspiration, and 10% off your next booking code.
                        </p>
                    </div>
                    <div>
                        <div className="bg-white/10 dark:bg-black/5 p-2 rounded-full flex pl-6 backdrop-blur-md">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="bg-transparent w-full outline-none placeholder-white/50 dark:placeholder-black/50"
                            />
                            <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs opacity-60 mt-4 ml-6">
                            By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                        </p>
                    </div>
                </div>
                
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            </div>

        </div>
    );
};

export default HomeContent;

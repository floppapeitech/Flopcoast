
import React, { useState } from 'react';
import { ArrowLeft, Filter, ArrowRight, Tag, Globe, Calendar } from 'lucide-react';
import { ViewState } from '../types';

interface FlightDealsProps {
    onNavigate: (view: ViewState) => void;
}

const FlightDeals: React.FC<FlightDealsProps> = ({ onNavigate }) => {
    const [activeRegion, setActiveRegion] = useState('All');

    const deals = [
        { id: 1, city: 'London', country: 'United Kingdom', price: 399, region: 'Europe', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop', date: 'Sep - Nov' },
        { id: 2, city: 'Tokyo', country: 'Japan', price: 899, region: 'Asia', img: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2672&auto=format&fit=crop', date: 'Oct - Dec' },
        { id: 3, city: 'Paris', country: 'France', price: 449, region: 'Europe', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop', date: 'Aug - Oct' },
        { id: 4, city: 'New York', country: 'USA', price: 299, region: 'Americas', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop', date: 'Jul - Sep' },
        { id: 5, city: 'Sydney', country: 'Australia', price: 1099, region: 'Oceania', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop', date: 'Nov - Feb' },
        { id: 6, city: 'Dubai', country: 'UAE', price: 699, region: 'Asia', img: 'https://images.unsplash.com/photo-1512453979798-5ea936a7fe48?q=80&w=2574&auto=format&fit=crop', date: 'Sep - Mar' },
        { id: 7, city: 'Singapore', country: 'Singapore', price: 799, region: 'Asia', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2552&auto=format&fit=crop', date: 'Aug - Dec' },
        { id: 8, city: 'Rome', country: 'Italy', price: 479, region: 'Europe', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2596&auto=format&fit=crop', date: 'Sep - Nov' },
        { id: 9, city: 'Bangkok', country: 'Thailand', price: 649, region: 'Asia', img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2592&auto=format&fit=crop', date: 'Oct - Jan' },
        { id: 10, city: 'Los Angeles', country: 'USA', price: 349, region: 'Americas', img: 'https://images.unsplash.com/photo-1542259671-fa05240f5298?q=80&w=2574&auto=format&fit=crop', date: 'Aug - Nov' },
        { id: 11, city: 'Toronto', country: 'Canada', price: 329, region: 'Americas', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2565&auto=format&fit=crop', date: 'Jun - Sep' },
        { id: 12, city: 'Barcelona', country: 'Spain', price: 429, region: 'Europe', img: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2670&auto=format&fit=crop', date: 'Sep - Oct' },
    ];

    const filteredDeals = activeRegion === 'All' ? deals : deals.filter(deal => deal.region === activeRegion);

    return (
        <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                    <button 
                        onClick={() => onNavigate('HOME')}
                        className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft size={20} /> Back to Home
                    </button>
                    <h1 className="text-4xl md:text-6xl font-display font-bold">Flight Deals</h1>
                    <p className="text-silver-500 dark:text-silver-400 mt-2 text-lg">
                        Exclusive offers to our most popular destinations. Limited seats available.
                    </p>
                </div>
                
                {/* Region Filter */}
                <div className="flex gap-2 bg-silver-100 dark:bg-zinc-900 p-1.5 rounded-full overflow-x-auto max-w-full">
                    {['All', 'Americas', 'Europe', 'Asia', 'Oceania'].map(region => (
                        <button
                            key={region}
                            onClick={() => setActiveRegion(region)}
                            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeRegion === region ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
                        >
                            {region}
                        </button>
                    ))}
                </div>
            </div>

            {/* Deals Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredDeals.map((deal) => (
                    <div key={deal.id} className="group cursor-pointer bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 p-4 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-4 relative">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src={deal.img} alt={deal.city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-20">
                                <Globe size={12} /> {deal.region}
                            </div>
                        </div>
                        
                        <div className="px-2 pb-2">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold font-display">{deal.city}</h3>
                                    <p className="text-sm text-silver-500">{deal.country}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-silver-400 line-through">${deal.price + 150}</div>
                                    <div className="text-xl font-bold text-black dark:text-white">${deal.price}*</div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-silver-100 dark:border-zinc-800">
                                <div className="flex items-center gap-2 text-xs font-bold text-silver-500">
                                    <Calendar size={14} /> {deal.date}
                                </div>
                                <button className="flex items-center gap-2 text-sm font-bold bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                                    Book <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] text-center border border-silver-200 dark:border-zinc-800">
                <p className="text-xs text-silver-400">
                    *Prices are per person, one-way, based on double occupancy. Fares include government taxes and fees. 
                    Subject to availability. Terms and conditions apply.
                </p>
            </div>

        </div>
    );
};

export default FlightDeals;

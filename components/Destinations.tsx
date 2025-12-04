
import React, { useState } from 'react';
import { ArrowLeft, Map, Compass, ArrowRight, Sun, Umbrella, Cloud } from 'lucide-react';
import { ViewState } from '../types';

const Destinations: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  const [activeRegion, setActiveRegion] = useState('All');

  const destinations = [
      { city: 'Tokyo', country: 'Japan', region: 'Asia', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop', desc: 'A dazzling mix of neon-lit skyscrapers and historic temples.' },
      { city: 'Paris', country: 'France', region: 'Europe', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop', desc: 'The city of lights, love, art, and exquisite cuisine.' },
      { city: 'New York', country: 'USA', region: 'Americas', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop', desc: 'The concrete jungle where dreams are made of.' },
      { city: 'Cape Town', country: 'South Africa', region: 'Africa', img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2671&auto=format&fit=crop', desc: 'Stunning landscapes where the mountains meet the sea.' },
      { city: 'Sydney', country: 'Australia', region: 'Oceania', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop', desc: 'Iconic harbor views and sun-soaked beaches.' },
      { city: 'Rio de Janeiro', country: 'Brazil', region: 'Americas', img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2670&auto=format&fit=crop', desc: 'Vibrant culture, samba rhythms, and Copacabana sands.' },
      { city: 'Dubai', country: 'UAE', region: 'Asia', img: 'https://images.unsplash.com/photo-1512453979798-5ea936a7fe48?q=80&w=2574&auto=format&fit=crop', desc: 'Futuristic architecture and luxury shopping in the desert.' },
      { city: 'London', country: 'UK', region: 'Europe', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop', desc: 'A timeless capital steeped in royal history and culture.' },
  ];

  const filtered = activeRegion === 'All' ? destinations : destinations.filter(d => d.region === activeRegion);

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Explore the <span className="text-silver-400 dark:text-zinc-600 italic font-serif">World.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          From bustling metropolises to serene escapes, discover over 60 destinations in the Flopcoast network.
        </p>
      </div>

      <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-silver-100 dark:bg-zinc-900 p-1.5 rounded-full overflow-x-auto max-w-full no-scrollbar">
              {['All', 'Americas', 'Europe', 'Asia', 'Africa', 'Oceania'].map(region => (
                  <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeRegion === region ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
                  >
                      {region}
                  </button>
              ))}
          </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {filtered.map((dest, idx) => (
              <div key={idx} className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden relative mb-4">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img src={dest.img} alt={dest.city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                          <h3 className="text-2xl font-display font-bold text-white">{dest.city}</h3>
                          <p className="text-white/80 text-sm">{dest.country}</p>
                      </div>
                  </div>
                  <p className="text-silver-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {dest.desc}
                  </p>
                  <button className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Flights <ArrowRight size={14} />
                  </button>
              </div>
          ))}
      </div>

      {/* Travel Guide Promo */}
      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800">
                      <Compass size={16} />
                      <span className="text-xs font-semibold uppercase tracking-wider">Travel Guides</span>
                  </div>
                  <h2 className="text-4xl font-display font-bold">Inspiration for your next trip.</h2>
                  <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                      Not sure where to go? Read our curated travel guides featuring local tips, hidden gems, and 48-hour itineraries for our top destinations.
                  </p>
                  <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                      Read Guides
                  </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-lg border border-silver-100 dark:border-zinc-800">
                      <Sun size={32} className="text-orange-500 mb-4" />
                      <h4 className="font-bold text-lg mb-1">Best Beaches</h4>
                      <p className="text-xs text-silver-500">Top 10 coastal escapes for summer 2024.</p>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-lg border border-silver-100 dark:border-zinc-800 mt-8">
                      <Umbrella size={32} className="text-blue-500 mb-4" />
                      <h4 className="font-bold text-lg mb-1">Rainy Day Cities</h4>
                      <p className="text-xs text-silver-500">Museums & cafes in London & Seattle.</p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Destinations;

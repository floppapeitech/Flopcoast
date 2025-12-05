
import React from 'react';
import { ArrowLeft, Palmtree, Bed, Map, Calendar, Star, Check } from 'lucide-react';
import { ViewState } from '../types';

const Vacations: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      {/* Hero */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[3rem] p-12 md:p-20 mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 dark:bg-black/10 border border-white/10 dark:border-black/10 mb-6">
                  <Palmtree size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wider">Flopcoast Holidays</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                  Bundle & Save.
              </h1>
              <p className="text-xl opacity-80 mb-8 leading-relaxed">
                  Book your flight and hotel together to save up to 20%. Exclusive rates at the world's finest resorts.
              </p>
              
              <div className="bg-white dark:bg-zinc-900 p-3 rounded-full flex pl-6 shadow-2xl">
                  <input 
                      type="text" 
                      placeholder="Where do you want to go?" 
                      className="bg-transparent w-full outline-none placeholder-silver-400 text-black dark:text-white font-medium"
                  />
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
                      Search Packages
                  </button>
              </div>
          </div>
          {/* Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/40 to-transparent rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      </div>

      {/* Popular Packages */}
      <div className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8">Popular Escapes</h2>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { city: 'Maldives', hotel: 'Overwater Bungalow Resort', price: 2499, img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2670&auto=format&fit=crop' },
                  { city: 'Bali', hotel: 'Ubud Rainforest Villa', price: 1299, img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2538&auto=format&fit=crop' },
                  { city: 'Santorini', hotel: 'Cliffside Boutique Hotel', price: 1899, img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2670&auto=format&fit=crop' }
              ].map((deal, idx) => (
                  <div key={idx} className="group cursor-pointer">
                      <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-4 relative">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                          <img src={deal.img} alt={deal.city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute top-4 right-4 bg-white dark:bg-black px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
                              7 Nights
                          </div>
                      </div>
                      <h3 className="text-xl font-bold font-display">{deal.city}</h3>
                      <p className="text-sm text-silver-500 mb-2">{deal.hotel}</p>
                      <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-black dark:text-white">from ${deal.price} pp</span>
                          <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">Flight Included</span>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Why Book */}
      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 md:p-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Why book a package?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-100 dark:border-zinc-800">
                  <div className="w-14 h-14 mx-auto bg-silver-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                      <Star size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Bonus Points</h3>
                  <p className="text-sm text-silver-500">Earn 2x Flopcoast Rewards points on all holiday packages.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-100 dark:border-zinc-800">
                  <div className="w-14 h-14 mx-auto bg-silver-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                      <Calendar size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Low Deposits</h3>
                  <p className="text-sm text-silver-500">Secure your dream trip with a deposit of just $100 per person.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-100 dark:border-zinc-800">
                  <div className="w-14 h-14 mx-auto bg-silver-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                      <Bed size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Vetted Hotels</h3>
                  <p className="text-sm text-silver-500">Hand-picked properties ensuring quality, safety, and comfort.</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Vacations;

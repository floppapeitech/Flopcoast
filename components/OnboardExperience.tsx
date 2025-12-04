
import React from 'react';
import { Coffee, Wifi, Tv, Armchair, ShoppingBag, Utensils, ArrowRight, Crown, Star } from 'lucide-react';
import { ViewState } from '../types';

// Add onNavigate prop
const OnboardExperience: React.FC<{onNavigate?: (view: ViewState) => void}> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Luxury at <span className="text-silver-400 dark:text-zinc-600 italic font-serif">30,000 feet.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          From gourmet dining to award-winning entertainment, discover what makes flying Flopcoast a unique experience.
        </p>
      </div>

      {/* Class Selector */}
      {onNavigate && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
            <button 
                onClick={() => onNavigate('FIRST_CLASS')}
                className="bg-black dark:bg-white text-white dark:text-black p-6 rounded-[2rem] text-left hover:scale-[1.02] transition-transform group"
            >
                <Crown size={32} className="mb-4" />
                <h3 className="text-xl font-bold font-display mb-1">First Class</h3>
                <div className="flex items-center gap-2 text-sm opacity-70 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} />
                </div>
            </button>
            <button 
                onClick={() => onNavigate('BUSINESS_CLASS')}
                className="bg-silver-100 dark:bg-zinc-800 p-6 rounded-[2rem] text-left hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
            >
                <Star size={32} className="mb-4" />
                <h3 className="text-xl font-bold font-display mb-1">Business</h3>
                <div className="flex items-center gap-2 text-sm opacity-70 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} />
                </div>
            </button>
            <button 
                onClick={() => onNavigate('PREMIUM_ECONOMY')}
                className="bg-silver-100 dark:bg-zinc-800 p-6 rounded-[2rem] text-left hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
            >
                <Coffee size={32} className="mb-4" />
                <h3 className="text-xl font-bold font-display mb-1">Premium Econ</h3>
                <div className="flex items-center gap-2 text-sm opacity-70 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} />
                </div>
            </button>
            <button 
                onClick={() => onNavigate('ECONOMY')}
                className="bg-silver-100 dark:bg-zinc-800 p-6 rounded-[2rem] text-left hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
            >
                <Armchair size={32} className="mb-4" />
                <h3 className="text-xl font-bold font-display mb-1">Economy</h3>
                <div className="flex items-center gap-2 text-sm opacity-70 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} />
                </div>
            </button>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        
        {/* Entertainment Card Link */}
        <div 
            onClick={() => onNavigate?.('ENTERTAINMENT')}
            className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer group"
        >
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
              <Tv size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Entertainment</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-4">
             Dive into over 1,000 hours of movies, TV shows, and music on our high-definition seatback screens.
           </p>
           <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                View Library <ArrowRight size={14} />
           </div>
        </div>

        {/* Connectivity Card Link */}
        <div 
            onClick={() => onNavigate?.('CONNECTIVITY')}
            className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer group"
        >
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
              <Wifi size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Wi-Fi & Connectivity</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-4">
             Enjoy high-speed Wi-Fi from gate to gate. Messaging is free for all loyalty members.
           </p>
           <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                View Plans <ArrowRight size={14} />
           </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <Utensils size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Gourmet Dining</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Savor locally sourced ingredients inspired by the destinations we serve. Complimentary meals on all international flights.
           </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <ShoppingBag size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Duty Free</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Shop exclusive fragrances, jewelry, and gadgets from the comfort of your seat. Pre-order online to save 20%.
           </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <Coffee size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Flopcoast Café</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Need a pick-me-up? Order artisanal coffee, specialty teas, and premium snacks directly from your screen.
           </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <Armchair size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Ergonomic Comfort</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Even in Economy, our seats offer generous recline and ample legroom. Upgrade for fully flat beds.
           </p>
        </div>
      </div>

    </div>
  );
};

export default OnboardExperience;

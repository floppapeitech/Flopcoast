
import React from 'react';
import { Coffee, Wifi, Tv, Armchair, ShoppingBag, Utensils } from 'lucide-react';

const OnboardExperience: React.FC = () => {
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <Armchair size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Ergonomic Comfort</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Even in Economy, our seats offer generous recline and ample legroom. Upgrade to Business for fully flat beds with direct aisle access on all wide-body aircraft.
           </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <Utensils size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Gourmet Dining</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Savor locally sourced ingredients inspired by the destinations we serve. Complimentary meals and beverages are provided on all international flights.
           </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <Wifi size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Stay Connected</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Enjoy high-speed Wi-Fi from gate to gate. Messaging is free for all loyalty members, with streaming packages available for purchase.
           </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <Tv size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Entertainment</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Dive into over 1,000 hours of movies, TV shows, and music on our high-definition seatback screens. Noise-canceling headphones provided in premium cabins.
           </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <ShoppingBag size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Duty Free</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Shop exclusive fragrances, jewelry, and gadgets from the comfort of your seat. Pre-order online to save 20% on your purchase.
           </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all">
           <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
              <Coffee size={32} />
           </div>
           <h3 className="text-2xl font-display font-bold mb-4">Flopcoast Café</h3>
           <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
             Need a pick-me-up? Order artisanal coffee, specialty teas, and premium snacks directly from your screen at any time during the flight.
           </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardExperience;

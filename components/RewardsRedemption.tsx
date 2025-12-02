
import React from 'react';
import { ArrowLeft, Ticket, ArrowUpCircle, ShoppingBag, Gift, Heart, Plane } from 'lucide-react';
import { ViewState } from '../types';

const RewardsRedemption: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('REWARDS')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Rewards Overview
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Spend your <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Points.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Turn your points into unforgettable experiences. The world is your oyster when you're a Flopcoast Rewards member.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Award Flights */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-[2.5rem] p-12 border border-silver-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-silver-50 dark:bg-zinc-800 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                  <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mb-6">
                      <Ticket size={32} />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">Award Flights</h2>
                  <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-8 max-w-lg">
                      Use your points to book flights to over 60 destinations worldwide. Award seats are available in all classes, with no blackout dates on Flopcoast operated flights.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="p-4 bg-silver-50 dark:bg-zinc-950 rounded-2xl border border-silver-100 dark:border-zinc-800">
                          <div className="text-xs font-bold uppercase text-silver-400 mb-1">Domestic</div>
                          <div className="text-sm font-medium">from <span className="text-xl font-bold">5,000</span> pts</div>
                      </div>
                      <div className="p-4 bg-silver-50 dark:bg-zinc-950 rounded-2xl border border-silver-100 dark:border-zinc-800">
                          <div className="text-xs font-bold uppercase text-silver-400 mb-1">International</div>
                          <div className="text-sm font-medium">from <span className="text-xl font-bold">15,000</span> pts</div>
                      </div>
                      <div className="p-4 bg-silver-50 dark:bg-zinc-950 rounded-2xl border border-silver-100 dark:border-zinc-800">
                          <div className="text-xs font-bold uppercase text-silver-400 mb-1">Business</div>
                          <div className="text-sm font-medium">from <span className="text-xl font-bold">40,000</span> pts</div>
                      </div>
                  </div>

                  <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                      Book with Points
                  </button>
              </div>
          </div>

          {/* Upgrade */}
          <div className="bg-silver-100 dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800 flex flex-col justify-center">
              <div className="w-14 h-14 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <ArrowUpCircle size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Flight Upgrades</h3>
              <p className="text-silver-500 dark:text-silver-400 mb-8 text-sm leading-relaxed">
                  Treat yourself to more comfort. Use points to upgrade from Economy to Premium Economy, Business, or First Class on eligible bookings.
              </p>
              <button className="w-full py-3 bg-white dark:bg-black border border-silver-200 dark:border-zinc-700 rounded-full font-bold text-sm hover:bg-silver-50 dark:hover:bg-zinc-900 transition-colors">
                  Upgrade My Flight
              </button>
          </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-silver-50 dark:bg-zinc-950 rounded-full flex items-center justify-center mb-4 text-black dark:text-white">
                  <ShoppingBag size={20} />
              </div>
              <h4 className="font-bold text-lg mb-2">Shop with Points</h4>
              <p className="text-sm text-silver-500 mb-4">
                  Redeem points for electronics, luggage, and home goods at our online store.
              </p>
              <span className="text-xs font-bold uppercase tracking-wider underline">Browse Store</span>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-silver-50 dark:bg-zinc-950 rounded-full flex items-center justify-center mb-4 text-black dark:text-white">
                  <Gift size={20} />
              </div>
              <h4 className="font-bold text-lg mb-2">Gift Cards</h4>
              <p className="text-sm text-silver-500 mb-4">
                  Exchange points for gift cards from your favorite brands like Amazon, Starbucks, and more.
              </p>
              <span className="text-xs font-bold uppercase tracking-wider underline">View Brands</span>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-silver-50 dark:bg-zinc-950 rounded-full flex items-center justify-center mb-4 text-black dark:text-white">
                  <Heart size={20} />
              </div>
              <h4 className="font-bold text-lg mb-2">Donate Points</h4>
              <p className="text-sm text-silver-500 mb-4">
                  Support causes you care about. Donate your points to one of our charity partners.
              </p>
              <span className="text-xs font-bold uppercase tracking-wider underline">Donate Now</span>
          </div>
      </div>
    </div>
  );
};

export default RewardsRedemption;

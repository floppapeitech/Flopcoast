
import React from 'react';
import { ArrowLeft, Plane, CreditCard, ShoppingBag, Globe, Coins } from 'lucide-react';
import { ViewState } from '../types';

const RewardsEarning: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('REWARDS')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Rewards Overview
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Ways to <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Earn.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          From flying to everyday spending, watch your points balance grow with every interaction.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          <div className="bg-black dark:bg-white text-white dark:text-black p-12 rounded-[2.5rem] flex flex-col justify-center">
              <div className="w-16 h-16 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center mb-6">
                  <Plane size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Flying Flopcoast</h2>
              <p className="opacity-80 mb-8 leading-relaxed">
                  Earn points on every eligible flight operated by Flopcoast Airways. The number of points you earn depends on your fare class and distance flown.
              </p>
              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 dark:bg-black/5 p-4 rounded-xl">
                      <div className="text-xs font-bold uppercase opacity-60 mb-1">Economy</div>
                      <div className="text-xl font-bold">100% <span className="text-sm font-normal">of miles flown</span></div>
                  </div>
                  <div className="bg-white/10 dark:bg-black/5 p-4 rounded-xl">
                      <div className="text-xs font-bold uppercase opacity-60 mb-1">Business</div>
                      <div className="text-xl font-bold">200% <span className="text-sm font-normal">of miles flown</span></div>
                  </div>
              </div>
          </div>

          <div className="space-y-8">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm flex items-start gap-6">
                  <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0 text-black dark:text-white">
                      <CreditCard size={24} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold font-display mb-2">Co-Branded Cards</h3>
                      <p className="text-silver-500 mb-4">
                          Apply for the Flopcoast Visa Signature® Card and earn 3x points on travel, 2x on dining, and 1x on everything else.
                      </p>
                      <span className="text-sm font-bold underline decoration-2 underline-offset-4">Learn More</span>
                  </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm flex items-start gap-6">
                  <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0 text-black dark:text-white">
                      <Globe size={24} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold font-display mb-2">Partner Airlines</h3>
                      <p className="text-silver-500 mb-4">
                          Earn points when you fly with our network of over 15 global partner airlines. Just add your Flopcoast number to the booking.
                      </p>
                      <span className="text-sm font-bold underline decoration-2 underline-offset-4">View Partners</span>
                  </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm flex items-start gap-6">
                  <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0 text-black dark:text-white">
                      <ShoppingBag size={24} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold font-display mb-2">Shopping Portal</h3>
                      <p className="text-silver-500 mb-4">
                          Shop online at over 500 retailers through the Flopcoast eStore and earn up to 10 points per $1 spent.
                      </p>
                      <span className="text-sm font-bold underline decoration-2 underline-offset-4">Shop Now</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 mb-6">
             <Coins size={16} className="text-yellow-700 dark:text-yellow-400" />
             <span className="text-xs font-semibold uppercase tracking-wider text-yellow-800 dark:text-yellow-300">Bonus Offer</span>
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Buy Points</h2>
          <p className="text-silver-500 max-w-xl mx-auto mb-8">
              Short on points for your dream trip? Buy points today and get a 50% bonus on purchases of 20,000 points or more.
          </p>
          <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
              Purchase Points
          </button>
      </div>
    </div>
  );
};

export default RewardsEarning;

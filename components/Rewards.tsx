
import React from 'react';
import { Award, Check, Star, Zap, Crown, Shield, Coins, Ticket, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

// Add onNavigate prop
const Rewards: React.FC<{onNavigate?: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-silver-100 dark:bg-zinc-800/50 border border-silver-200 dark:border-zinc-700">
            <Award size={16} className="text-yellow-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-silver-600 dark:text-silver-300">Flopcoast Rewards</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Travel more, <br/> <span className="text-silver-400 dark:text-zinc-600 italic font-serif">earn more.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Join the most rewarding loyalty program in the skies. From free flights to luxury upgrades, your loyalty deserves the best.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div 
             onClick={() => onNavigate?.('REWARDS_EARNING')}
             className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
              <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <Coins size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Earn Points</h3>
              <p className="text-silver-500 mb-8 leading-relaxed">
                  Earn on every flight, with our partners, and on everyday purchases with our co-branded cards.
              </p>
              <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                  Ways to Earn <ArrowRight size={18} />
              </div>
          </div>

          <div 
             onClick={() => onNavigate?.('REWARDS_REDEMPTION')}
             className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
              <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <Ticket size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Redeem Points</h3>
              <p className="text-silver-500 mb-8 leading-relaxed">
                  Turn your points into flights, upgrades, lounge access, or even shopping gift cards.
              </p>
              <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                  Start Spending <ArrowRight size={18} />
              </div>
          </div>

          <div 
             onClick={() => onNavigate?.('REWARDS_TIERS')}
             className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
              <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <Crown size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Elite Status</h3>
              <p className="text-silver-500 mb-8 leading-relaxed">
                  Climb the tiers from Silver to Ultimate to unlock exclusive benefits like priority boarding and lounge access.
              </p>
              <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                  View Benefits <ArrowRight size={18} />
              </div>
          </div>
      </div>

      {/* Join CTA */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 text-center relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Start earning today</h2>
          <p className="text-white/70 dark:text-black/70 max-w-lg mx-auto">
            Signing up is free and takes less than a minute. New members instantly achieve Basic status and start earning on their first flight.
          </p>
          <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
            Join Flopcoast Rewards
          </button>
        </div>
        
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-black/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 dark:bg-black/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
    </div>
  );
};

export default Rewards;

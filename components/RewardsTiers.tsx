
import React from 'react';
import { ArrowLeft, Star, Shield, Award, Zap, Crown, Check, X } from 'lucide-react';
import { ViewState } from '../types';

const RewardsTiers: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  const tiers = [
    { name: 'Basic', points: '0+', icon: <Star size={20} />, color: 'text-silver-500' },
    { name: 'Silver', points: '10k+', icon: <Shield size={20} />, color: 'text-slate-500' },
    { name: 'Gold', points: '25k+', icon: <Award size={20} />, color: 'text-yellow-500' },
    { name: 'Platinum', points: '50k+', icon: <Zap size={20} />, color: 'text-purple-500' },
    { name: 'Ultimate', points: '100k+', icon: <Crown size={20} />, color: 'text-black dark:text-white' },
  ];

  const benefits = [
      { name: 'Earn Points', basic: true, silver: true, gold: true, plat: true, ult: true },
      { name: 'Priority Check-in', basic: false, silver: true, gold: true, plat: true, ult: true },
      { name: 'Extra Baggage', basic: false, silver: '1 Bag', gold: '2 Bags', plat: '3 Bags', ult: '3 Bags' },
      { name: 'Lounge Access', basic: false, silver: false, gold: true, plat: true, ult: true },
      { name: 'Priority Boarding', basic: false, silver: false, gold: true, plat: true, ult: true },
      { name: 'Complimentary Upgrades', basic: false, silver: false, gold: 'Space Available', plat: 'Confirmed (48h)', ult: 'Confirmed (24h)' },
      { name: 'Guaranteed Seat', basic: false, silver: false, gold: false, plat: true, ult: true },
      { name: 'Private Chauffeur', basic: false, silver: false, gold: false, plat: false, ult: true },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('REWARDS')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Rewards Overview
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Elite <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Status.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Ascend the tiers to unlock exclusive privileges designed to make your journey smoother, faster, and more luxurious.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto pb-12">
          <div className="min-w-[1000px] bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-xl">
              
              {/* Header Row */}
              <div className="grid grid-cols-6 gap-4 mb-8 text-center pb-6 border-b border-silver-100 dark:border-zinc-800">
                  <div className="text-left font-bold text-lg flex items-end pb-2">Benefits</div>
                  {tiers.map(tier => (
                      <div key={tier.name} className="flex flex-col items-center gap-2">
                          <div className={`w-10 h-10 rounded-full bg-silver-50 dark:bg-zinc-950 flex items-center justify-center ${tier.color}`}>
                              {tier.icon}
                          </div>
                          <div className="font-bold">{tier.name}</div>
                          <div className="text-xs text-silver-400 font-mono">{tier.points}</div>
                      </div>
                  ))}
              </div>

              {/* Rows */}
              <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                      <div key={idx} className={`grid grid-cols-6 gap-4 items-center text-center py-3 rounded-xl ${idx % 2 === 0 ? 'bg-silver-50/50 dark:bg-zinc-950/30' : ''}`}>
                          <div className="text-left font-medium pl-4">{benefit.name}</div>
                          <div>{benefit.basic === true ? <Check size={16} className="mx-auto text-green-500"/> : benefit.basic === false ? <span className="text-silver-300">-</span> : <span className="text-sm font-bold">{benefit.basic}</span>}</div>
                          <div>{benefit.silver === true ? <Check size={16} className="mx-auto text-green-500"/> : benefit.silver === false ? <span className="text-silver-300">-</span> : <span className="text-sm font-bold">{benefit.silver}</span>}</div>
                          <div>{benefit.gold === true ? <Check size={16} className="mx-auto text-green-500"/> : benefit.gold === false ? <span className="text-silver-300">-</span> : <span className="text-sm font-bold">{benefit.gold}</span>}</div>
                          <div>{benefit.plat === true ? <Check size={16} className="mx-auto text-green-500"/> : benefit.plat === false ? <span className="text-silver-300">-</span> : <span className="text-sm font-bold">{benefit.plat}</span>}</div>
                          <div>{benefit.ult === true ? <Check size={16} className="mx-auto text-green-500"/> : benefit.ult === false ? <span className="text-silver-300">-</span> : <span className="text-sm font-bold">{benefit.ult}</span>}</div>
                      </div>
                  ))}
              </div>

          </div>
      </div>

      {/* Qualification Info */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-display font-bold">How to Qualify</h2>
              <p className="opacity-80 leading-relaxed">
                  Status is determined by the number of Status Qualifying Points (SQP) you earn in a calendar year (Jan 1 - Dec 31). SQPs are calculated based on the distance flown and the fare class purchased.
              </p>
              <div className="flex flex-col gap-2">
                  <div className="flex justify-between border-b border-white/20 dark:border-black/20 pb-2">
                      <span>Short Haul Economy</span>
                      <span className="font-mono">500 SQP</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 dark:border-black/20 pb-2">
                      <span>Long Haul Business</span>
                      <span className="font-mono">5,000 SQP</span>
                  </div>
              </div>
          </div>
          <div className="flex-1 bg-white/10 dark:bg-black/5 p-8 rounded-3xl backdrop-blur-sm text-center">
              <h3 className="text-xl font-bold mb-4">Status Match Challenge</h3>
              <p className="text-sm opacity-80 mb-6">
                  Hold status with another airline? Apply for our Status Match Challenge and enjoy equivalent benefits for 90 days while you qualify.
              </p>
              <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                  Apply Now
              </button>
          </div>
      </div>

    </div>
  );
};

export default RewardsTiers;

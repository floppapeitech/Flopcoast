
import React from 'react';
import { Award, Check, Star, Zap, Crown, Shield } from 'lucide-react';

const Rewards: React.FC = () => {
  const tiers = [
    {
      name: 'Basic',
      color: 'bg-silver-100 dark:bg-zinc-800',
      textColor: 'text-silver-600 dark:text-silver-300',
      icon: <Star size={24} />,
      points: '0 - 9,999',
      benefits: ['Earn points on all flights', 'Member-only flight offers', 'Digital membership card']
    },
    {
      name: 'Silver',
      color: 'bg-gradient-to-br from-gray-100 to-gray-300 dark:from-zinc-700 dark:to-zinc-600',
      textColor: 'text-black dark:text-white',
      icon: <Shield size={24} />,
      points: '10,000 - 24,999',
      benefits: ['All Basic benefits', 'Priority Check-in', '1 Extra Checked Bag', '10% Bonus Points']
    },
    {
      name: 'Gold',
      color: 'bg-gradient-to-br from-yellow-100 to-yellow-400 dark:from-yellow-900 dark:to-yellow-600',
      textColor: 'text-yellow-900 dark:text-yellow-100',
      icon: <Award size={24} />,
      points: '25,000 - 49,999',
      benefits: ['All Silver benefits', 'Lounge Access', 'Priority Boarding', '50% Bonus Points']
    },
    {
      name: 'Platinum',
      color: 'bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-500',
      textColor: 'text-slate-900 dark:text-slate-100',
      icon: <Zap size={24} />,
      points: '50,000 - 99,999',
      benefits: ['All Gold benefits', 'First Class Upgrade Vouchers', 'Guaranteed Seat Availability', '75% Bonus Points']
    },
    {
      name: 'Ultimate',
      color: 'bg-gradient-to-br from-purple-900 to-black text-white',
      textColor: 'text-white',
      icon: <Crown size={24} />,
      points: '100,000+',
      benefits: ['All Platinum benefits', 'Private Chauffeur Service', 'Personal Concierge', '100% Bonus Points', 'Gift Gold Status to a Friend']
    }
  ];

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

      {/* Tiers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
        {tiers.map((tier) => (
          <div key={tier.name} className={`relative overflow-hidden rounded-[2rem] p-6 border border-silver-200 dark:border-zinc-800 flex flex-col h-full hover:scale-105 transition-transform duration-300 shadow-lg`}>
            {/* Background for Tier Card */}
            <div className={`absolute inset-0 opacity-20 ${tier.color}`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${tier.color} ${tier.textColor}`}>
                {tier.icon}
              </div>
              <h3 className="text-2xl font-bold font-display mb-1">{tier.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-6">{tier.points} Points</p>
              
              <ul className="space-y-3 flex-1">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="shrink-0 mt-0.5" />
                    <span className="opacity-80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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

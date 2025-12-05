
import React from 'react';
import { ArrowLeft, Check, Zap, Crown, Globe, Coffee, Star, TrendingUp, Briefcase, Smartphone, Lock, Leaf, Heart, Music, Car, DollarSign } from 'lucide-react';
import { ViewState } from '../types';

const CreditCard: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  
  // Consolidated to 30 Distinct Cards with Flopcoast Branding
  const CARD_DATA = [
    // --- ULTRA LUXURY & TRAVEL (5) ---
    { name: 'Titanium', type: 'Credit', category: 'Ultra Luxury', fee: '$995', theme: 'metal', benefits: ['Ultimate Status Gift', 'Private Terminal Entry', 'Dedicated FlopConcierge', '10x FlopMiles on Luxury'] },
    { name: 'Infinite', type: 'Credit', category: 'Luxury Travel', fee: '$495', theme: 'black', benefits: ['Unlimited Club Flopcoast', 'Annual Companion Pass', 'FlopSafe Premium Protect', '5x FlopMiles on Flights'] },
    { name: 'Zenith', type: 'Credit', category: 'Premium', fee: '$395', theme: 'purple', benefits: ['Platinum Status Fast-Track', 'Luxury Hotel Collection', 'Priority Upgrade List', 'Floptel Global Wi-Fi'] },
    { name: 'Voyager', type: 'Credit', category: 'Travel', fee: '$250', theme: 'blue-dark', benefits: ['4x FlopMiles on Flopcoast', 'Zero FX Fees', 'Trip Delay FlopSafe', '4 Club Passes/yr'] },
    { name: 'Explorer', type: 'Credit', category: 'Adventure', fee: '$120', theme: 'green', benefits: ['National Parks Entry', 'Adventure Gear Protect', 'FlopCar Emerald Status', '3x on Nature Travel'] },

    // --- LIFESTYLE & NICHE (7) ---
    { name: 'Gold', type: 'Credit', category: 'Dining', fee: '$150', theme: 'gold', benefits: ['4x FlopMiles on FlopFresh', '$120 FlopFresh Credit', 'Exclusive Tasting Events', 'Zero FX Fees'] },
    { name: 'Lifestyle', type: 'Credit', category: 'Culture', fee: '$95', theme: 'orange-light', benefits: ['3x on FlopStudio Events', 'Fashion Week Access', 'Streaming Credits', 'Salon Perks'] },
    { name: 'Creator', type: 'Credit', category: 'Prosumer', fee: '$199', theme: 'pink', benefits: ['4x on Tech/Camera Gear', 'Creative Cloud Credit', 'Social Ad Spend', 'Gadget FlopSafe'] },
    { name: 'Wellness', type: 'Credit', category: 'Health', fee: '$120', theme: 'cyan-light', benefits: ['Calm App Subscription', 'Gym Membership Credit', '3x on Healthy Food', 'Spa Priority'] },
    { name: 'Family', type: 'Credit', category: 'Household', fee: '$95', theme: 'rose', benefits: ['Free Kids Baggage', 'Disney+ Bundle', '5x on Supermarkets', 'Family Point Pooling'] },
    { name: 'Gamer', type: 'Credit', category: 'Gaming', fee: '$95', theme: 'neon', benefits: ['Game Pass Ultimate', '3x on Hardware', 'In-Game Currency', 'Twitch Turbo'] },
    { name: 'Eco-Rewards', type: 'Credit', category: 'Green', fee: '$49', theme: 'forest', benefits: ['200% Carbon Offsets', '3x on Green Transit', 'Recycled Card Body', 'Tree Planting'] },

    // --- ESSENTIALS & BUILDING (4) ---
    { name: 'Horizon', type: 'Credit', category: 'General', fee: '$95', theme: 'teal', benefits: ['2x FlopMiles on Everything', 'Zero FX Fees', 'Free Checked Bag', 'Priority Boarding'] },
    { name: 'Velocity', type: 'Credit', category: 'Commute', fee: '$0', theme: 'red', benefits: ['4x on Gas & EV Charging', '3x on FlopTransit', 'Roadside Assist', 'No Annual Fee'] },
    { name: 'Student', type: 'Credit', category: 'Education', fee: '$0', theme: 'sky', benefits: ['Good Grades Bonus', '3x on Textbooks', 'No Late Fees', 'FSIC Membership'] },
    { name: 'Element', type: 'Credit', category: 'Builder', fee: '$0', theme: 'stone', benefits: ['Secured Line', 'Reports to 3 Bureaus', 'Auto-Limit Increase', 'Free FICO Score'] },

    // --- BUSINESS (4) ---
    { name: 'Corporate Elite', type: 'Business', category: 'Enterprise', fee: '$595', theme: 'metal-dark', benefits: ['Central Billing', 'Club Access for Team', 'Higher Limits', 'Expense Integration'] },
    { name: 'Catalyst', type: 'Business', category: 'SME', fee: '$195', theme: 'amber', benefits: ['3x on Ads & Shipping', 'Employee Cards (Free)', 'Accounting Sync', 'Zero FX Fees'] },
    { name: 'Freelancer', type: 'Business', category: 'Gig', fee: '$0', theme: 'lime', benefits: ['Tax Tools Included', 'Coworking Credits', 'Instant Payouts', 'No Annual Fee'] },
    { name: 'Momentum', type: 'Business', category: 'Cash Flow', fee: '$0', theme: 'zinc-light', benefits: ['Net-60 Terms', '2x on Office Supply', 'Virtual Cards', 'Flexible Pay'] },

    // --- DEBIT & BANKING (10) ---
    { name: 'Private Client', type: 'Debit', category: 'High Net', fee: '$50/mo', theme: 'obsidian', benefits: ['Metal Debit Card', 'Dedicated Banker', 'ATM Fee Refunds', 'Higher Limits'] },
    { name: 'Global Access', type: 'Debit', category: 'Travel', fee: '$0', theme: 'earth', benefits: ['Multi-Currency Wallet', 'Real Market FX Rates', 'Global ATM Network', 'Travel FlopSafe'] },
    { name: 'Vault', type: 'Debit', category: 'Security', fee: '$15/mo', theme: 'indigo-dark', benefits: ['FlopSafe Identity Prot', 'Virtual Numbers', 'VPN Included', 'Crypto Secure'] },
    { name: 'Spectrum', type: 'Debit', category: 'Rewards', fee: '$5/mo', theme: 'rainbow', benefits: ['1% Back on Debit', 'Round-Up Savings', 'Charity Donation', 'Custom Art'] },
    { name: 'Campus', type: 'Debit', category: 'Student', fee: '$0', theme: 'school', benefits: ['No Overdraft Fees', 'Campus Discounts', 'Early Direct Deposit', 'Literacy Tools'] },
    { name: 'Junior', type: 'Debit', category: 'Kids', fee: '$0', theme: 'kids', benefits: ['Parental Controls', 'Chore Payments', 'Savings Goals', 'Safe Spend Limits'] },
    { name: 'Smart', type: 'Debit', category: 'Savings', fee: '$0', theme: 'piggy', benefits: ['High Yield APY', 'Auto-Stash', 'Goal Tracking', 'Bill Negotiation'] },
    { name: 'Commuter', type: 'Debit', category: 'Transit', fee: '$5/mo', theme: 'concrete', benefits: ['5% Transit Back', 'Bike Share Pass', 'Scooter Unlocks', 'Parking Perks'] },
    { name: 'Senior', type: 'Debit', category: 'Retiree', fee: '$0', theme: 'silver-light', benefits: ['Fraud Protection+', 'Pharmacy Discounts', 'Will Prep', 'Dedicated Line'] },
    { name: 'Access', type: 'Debit', category: 'Basic', fee: '$0', theme: 'basic', benefits: ['No Monthly Fees', 'No Minimum Balance', '60k+ Free ATMs', 'Mobile Check Deposit'] },
  ];

  const getCardStyle = (theme: string) => {
      switch(theme) {
          case 'black': return 'bg-gradient-to-br from-zinc-900 to-black text-white border-zinc-800';
          case 'metal': return 'bg-gradient-to-br from-gray-200 via-gray-400 to-gray-500 text-black border-gray-400';
          case 'metal-dark': return 'bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white border-gray-600';
          case 'blue-dark': return 'bg-gradient-to-br from-blue-900 to-slate-900 text-white border-blue-800';
          case 'purple': return 'bg-gradient-to-br from-purple-600 to-fuchsia-800 text-white border-purple-500';
          case 'green': return 'bg-gradient-to-br from-green-500 to-teal-600 text-white border-green-400';
          case 'gold': return 'bg-gradient-to-br from-yellow-300 to-yellow-600 text-black border-yellow-400';
          case 'orange-light': return 'bg-gradient-to-br from-orange-300 to-orange-500 text-black border-orange-200';
          case 'pink': return 'bg-gradient-to-br from-pink-500 to-rose-600 text-white border-pink-400';
          case 'cyan-light': return 'bg-gradient-to-br from-cyan-300 to-cyan-500 text-black border-cyan-200';
          case 'rose': return 'bg-gradient-to-br from-rose-400 to-pink-500 text-white border-rose-300';
          case 'neon': return 'bg-gradient-to-br from-green-400 to-lime-400 text-black border-green-300';
          case 'forest': return 'bg-gradient-to-br from-green-700 to-emerald-800 text-white border-green-600';
          case 'teal': return 'bg-gradient-to-br from-teal-500 to-emerald-700 text-white border-teal-400';
          case 'red': return 'bg-gradient-to-br from-red-600 to-red-900 text-white border-red-500';
          case 'sky': return 'bg-gradient-to-br from-sky-400 to-blue-500 text-white border-sky-300';
          case 'stone': return 'bg-gradient-to-br from-stone-200 to-stone-400 text-black border-stone-300';
          case 'amber': return 'bg-gradient-to-br from-amber-500 to-orange-600 text-white border-amber-400';
          case 'lime': return 'bg-gradient-to-br from-lime-400 to-green-600 text-black border-lime-300';
          case 'zinc-light': return 'bg-gradient-to-br from-zinc-100 to-zinc-300 text-black border-zinc-200';
          case 'obsidian': return 'bg-black text-white border-gray-800';
          case 'earth': return 'bg-gradient-to-br from-blue-400 to-green-400 text-white border-blue-300';
          case 'indigo-dark': return 'bg-gradient-to-br from-indigo-900 to-black text-white border-indigo-800';
          case 'rainbow': return 'bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400 text-black border-white';
          case 'school': return 'bg-gradient-to-br from-blue-200 to-blue-400 text-black border-blue-200';
          case 'kids': return 'bg-gradient-to-br from-yellow-200 to-green-200 text-black border-yellow-200';
          case 'piggy': return 'bg-pink-300 text-black border-pink-200';
          case 'concrete': return 'bg-gradient-to-br from-stone-400 to-stone-600 text-white border-stone-400';
          case 'silver-light': return 'bg-gray-200 text-black border-gray-300';
          case 'basic': return 'bg-white text-black border-gray-200';
          default: return 'bg-black text-white border-gray-800';
      }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Partner <span className="text-purple-600 dark:text-purple-400 italic font-serif">Cards.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          A curated portfolio of 30 cards designed for every lifestyle. Earn FlopMiles on every purchase.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {CARD_DATA.map((card, idx) => (
              <div key={idx} className={`rounded-[2rem] p-6 relative overflow-hidden group border transition-all hover:scale-[1.02] hover:shadow-xl ${getCardStyle(card.theme)}`}>
                  
                  {/* Background Decor based on theme */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                          <div className="flex justify-between items-start mb-6">
                              <div>
                                  <div className="flex items-center gap-1.5 mb-1">
                                      {card.type === 'Credit' ? <Zap size={16} className="opacity-80"/> : card.type === 'Business' ? <Briefcase size={16} className="opacity-80"/> : <Check size={16} className="opacity-80"/>}
                                      <span className="font-bold uppercase tracking-wider text-[10px] opacity-80">{card.type}</span>
                                  </div>
                                  <div className="inline-block px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                                      {card.category}
                                  </div>
                              </div>
                              <span className="font-display font-bold text-lg">{card.fee} <span className="text-xs font-normal opacity-70">{card.fee.includes('mo') ? '' : '/yr'}</span></span>
                          </div>

                          {/* Card Face Mockup */}
                          <div className="w-full aspect-[1.586/1] bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 relative mb-6 shadow-lg">
                              <div className="flex justify-between items-start mb-auto h-full flex-col">
                                  <div className="w-full flex justify-between items-center">
                                      <span className="font-display font-bold text-sm tracking-wide opacity-90">Flopcoast</span>
                                      <span className="italic font-bold text-xs opacity-70">{card.name}</span>
                                  </div>
                                  <div className="w-full">
                                      <div className="w-8 h-6 bg-white/20 rounded mb-2 border border-white/10"></div>
                                      <div className="font-mono opacity-80 tracking-widest text-xs">•••• •••• •••• {1000 + idx}</div>
                                  </div>
                              </div>
                          </div>

                          <h3 className="text-xl font-bold font-display mb-3">{card.name}</h3>
                          <ul className="space-y-2 mb-6 text-xs font-medium opacity-90">
                              {card.benefits.slice(0, 3).map((benefit, bIdx) => (
                                  <li key={bIdx} className="flex items-center gap-2">
                                      <Check size={12} className="shrink-0"/> {benefit}
                                  </li>
                              ))}
                          </ul>
                      </div>

                      <button className={`w-full py-2.5 rounded-full font-bold text-sm transition-colors ${['basic', 'white', 'silver-light', 'kids'].includes(card.theme) ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'}`}>
                          {card.type === 'Business' ? 'Business Apply' : 'Apply Now'}
                      </button>
                  </div>
              </div>
          ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 overflow-x-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-center sticky left-0">Comparison Matrix</h2>
          <table className="w-full text-left min-w-[max-content]">
              <thead>
                  <tr className="border-b border-silver-200 dark:border-zinc-800">
                      <th className="py-4 px-4 text-xs font-bold uppercase text-silver-400 sticky left-0 bg-silver-50 dark:bg-zinc-950 z-20 shadow-sm min-w-[150px]">Card Name</th>
                      {CARD_DATA.map((card, idx) => (
                          <th key={idx} className="py-4 px-4 font-bold text-sm whitespace-nowrap min-w-[140px]">{card.name}</th>
                      ))}
                  </tr>
              </thead>
              <tbody className="divide-y divide-silver-100 dark:divide-zinc-800 text-xs">
                  <tr>
                      <td className="py-4 px-4 font-bold sticky left-0 bg-silver-50 dark:bg-zinc-950 z-10 shadow-sm">Category</td>
                      {CARD_DATA.map((card, idx) => (
                          <td key={idx} className="py-4 px-4">{card.category}</td>
                      ))}
                  </tr>
                  <tr>
                      <td className="py-4 px-4 font-bold sticky left-0 bg-silver-50 dark:bg-zinc-950 z-10 shadow-sm">Annual Fee</td>
                      {CARD_DATA.map((card, idx) => (
                          <td key={idx} className="py-4 px-4">{card.fee}</td>
                      ))}
                  </tr>
                  <tr>
                      <td className="py-4 px-4 font-bold sticky left-0 bg-silver-50 dark:bg-zinc-950 z-10 shadow-sm">Welcome Bonus</td>
                      {CARD_DATA.map((card, idx) => (
                          <td key={idx} className="py-4 px-4 font-semibold text-purple-600 dark:text-purple-400">
                              {['Titanium', 'Infinite'].includes(card.name) ? '150k pts' : 
                               ['Voyager', 'Zenith'].includes(card.name) ? '100k pts' : 
                               card.type === 'Business' ? '80k pts' : 
                               card.fee === '$0' ? '15k pts' : '60k pts'}
                          </td>
                      ))}
                  </tr>
                  <tr>
                      <td className="py-4 px-4 font-bold sticky left-0 bg-silver-50 dark:bg-zinc-950 z-10 shadow-sm">FlopMiles Earn</td>
                      {CARD_DATA.map((card, idx) => (
                          <td key={idx} className="py-4 px-4">
                              {['Titanium'].includes(card.name) ? '10x Luxury' : 
                               ['Infinite', 'Voyager'].includes(card.name) ? '5x Travel' : 
                               ['Gold', 'Family'].includes(card.name) ? '4x Daily' : 
                               card.type === 'Debit' ? 'Rewards Varies' : '2x - 3x'}
                          </td>
                      ))}
                  </tr>
                  <tr>
                      <td className="py-4 px-4 font-bold sticky left-0 bg-silver-50 dark:bg-zinc-950 z-10 shadow-sm">Foreign Tx Fee</td>
                      {CARD_DATA.map((card, idx) => (
                          <td key={idx} className="py-4 px-4">
                              {card.type === 'Debit' ? (card.name.includes('Global') || card.name.includes('Private') ? 'None' : '3%') : 
                               (card.fee === '$0' && card.name !== 'Velocity') ? '3%' : 'None'}
                          </td>
                      ))}
                  </tr>
                  <tr>
                      <td className="py-4 px-4 font-bold sticky left-0 bg-silver-50 dark:bg-zinc-950 z-10 shadow-sm">Club Access</td>
                      {CARD_DATA.map((card, idx) => (
                          <td key={idx} className="py-4 px-4">
                              {['Titanium', 'Infinite'].includes(card.name) ? 'Unlimited' : 
                               ['Zenith', 'Voyager', 'Corporate Elite'].includes(card.name) ? '4 Passes/yr' : 
                               'None'}
                          </td>
                      ))}
                  </tr>
                  <tr>
                      <td className="py-4 px-4 font-bold sticky left-0 bg-silver-50 dark:bg-zinc-950 z-10 shadow-sm">Free Bags</td>
                      {CARD_DATA.map((card, idx) => (
                          <td key={idx} className="py-4 px-4">
                              {['Titanium', 'Infinite'].includes(card.name) ? '3 Bags' : 
                               ['Zenith', 'Voyager', 'Family'].includes(card.name) ? '2 Bags' : 
                               card.fee !== '$0' ? '1 Bag' : 'None'}
                          </td>
                      ))}
                  </tr>
              </tbody>
          </table>
      </div>

    </div>
  );
};

export default CreditCard;

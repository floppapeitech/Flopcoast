
import React from 'react';
import { ArrowLeft, ArrowUpCircle, Crown, DollarSign, CheckCircle } from 'lucide-react';
import { ViewState } from '../types';

const BidUpgrade: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Upgrade your <span className="text-purple-600 dark:text-purple-400 italic font-serif">View.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Name your price for a seat in Premium Economy or Business Class. If your offer is accepted, you fly in style for less.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-black dark:bg-white text-white dark:text-black p-12 rounded-[3rem] shadow-2xl">
              <div className="w-16 h-16 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center mb-8">
                  <Crown size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">How it works</h2>
              <div className="space-y-8">
                  <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center font-bold shrink-0">1</div>
                      <div>
                          <h4 className="font-bold text-lg">Check Eligibility</h4>
                          <p className="opacity-80 text-sm">Enter your booking reference and last name to see if your flight is eligible for an upgrade offer.</p>
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center font-bold shrink-0">2</div>
                      <div>
                          <h4 className="font-bold text-lg">Make an Offer</h4>
                          <p className="opacity-80 text-sm">Use the slider to choose how much you're willing to pay. We'll tell you the strength of your offer.</p>
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center font-bold shrink-0">3</div>
                      <div>
                          <h4 className="font-bold text-lg">Get Confirmed</h4>
                          <p className="opacity-80 text-sm">We'll let you know via email 24-48 hours before departure if your bid was successful.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-2xl font-display font-bold mb-8">Find your booking</h3>
              <form className="space-y-6">
                  <div className="space-y-2">
                      <label className="text-sm font-bold text-silver-500">Booking Reference (PNR)</label>
                      <input type="text" className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none font-mono uppercase" placeholder="FL-XXXXXX"/>
                  </div>
                  <div className="space-y-2">
                      <label className="text-sm font-bold text-silver-500">Last Name</label>
                      <input type="text" className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none" placeholder="Doe"/>
                  </div>
                  <button className="w-full py-4 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2">
                      Check Eligibility
                  </button>
              </form>
              <p className="text-xs text-silver-400 mt-6 text-center">
                  Bids are inclusive of all taxes and fees. You will only be charged if your offer is accepted.
              </p>
          </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
              <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-black dark:text-white">
                  <ArrowUpCircle size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Instant Upgrade</h3>
              <p className="text-sm text-silver-500 mb-4">Don't want to wait? Secure a confirmed upgrade now at the standard price.</p>
              <button className="text-xs font-bold uppercase tracking-wider underline">Buy Now</button>
          </div>
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
              <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-black dark:text-white">
                  <DollarSign size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Points Upgrade</h3>
              <p className="text-sm text-silver-500 mb-4">Use your FlopMiles to upgrade your cabin class. Subject to availability.</p>
              <button className="text-xs font-bold uppercase tracking-wider underline">Redeem Miles</button>
          </div>
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
              <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-black dark:text-white">
                  <CheckCircle size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Benefits</h3>
              <p className="text-sm text-silver-500 mb-4">Successful bids include lounge access, priority boarding, and increased baggage.</p>
              <button className="text-xs font-bold uppercase tracking-wider underline">View Perks</button>
          </div>
      </div>

    </div>
  );
};

export default BidUpgrade;


import React from 'react';
import { ArrowLeft, ShoppingBag, Watch, Gift, Wine, Sparkles, Download, Search } from 'lucide-react';
import { ViewState } from '../types';

const DutyFree: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          High Altitude <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Boutique.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Shop exclusive brands tax-free. Pre-order online to save 20% and have your items delivered directly to your seat.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-silver-50 dark:bg-zinc-950 p-12 rounded-[2.5rem] flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold mb-6">Pre-Order & Save</h2>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-8">
                  Browse our full catalog online up to 24 hours before your flight. Guarantee availability of limited edition items and enjoy exclusive web-only discounts.
              </p>
              <div className="flex gap-4">
                  <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                      <ShoppingBag size={18} /> Shop Online
                  </button>
                  <button className="border border-silver-300 dark:border-zinc-700 px-8 py-3 rounded-full font-bold hover:bg-silver-100 dark:hover:bg-zinc-900 transition-colors flex items-center gap-2">
                      <Download size={18} /> Catalog PDF
                  </button>
              </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 dark:text-purple-400">
                      <Sparkles size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Fragrances</h3>
                  <p className="text-xs text-silver-500">Chanel, Dior, Tom Ford</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                      <Watch size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Watches</h3>
                  <p className="text-xs text-silver-500">Omega, Tag Heuer, Garmin</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-orange-400">
                      <Wine size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Spirits</h3>
                  <p className="text-xs text-silver-500">Macallan, Grey Goose, Hennessy</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 dark:text-pink-400">
                      <Gift size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Exclusives</h3>
                  <p className="text-xs text-silver-500">Flopcoast Branded Merch</p>
              </div>
          </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[3rem] p-12 border border-silver-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                  <h2 className="text-2xl font-display font-bold mb-2">Flopcoast Limited Edition Model</h2>
                  <p className="text-silver-500 text-sm mb-4">
                      Take home a piece of aviation history. 1:400 scale die-cast model of our flagship Airbus A350-1000 in the new livery.
                  </p>
                  <div className="flex items-center gap-4">
                      <span className="text-xl font-bold">$45.00</span>
                      <button className="text-xs font-bold underline decoration-2 underline-offset-4">Add to Pre-order</button>
                  </div>
              </div>
              <div className="w-full md:w-64 h-40 bg-silver-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center">
                  {/* Placeholder for Product Image */}
                  <span className="text-xs font-bold uppercase tracking-wider text-silver-400">Product Image</span>
              </div>
          </div>
      </div>

    </div>
  );
};

export default DutyFree;

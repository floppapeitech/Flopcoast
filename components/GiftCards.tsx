
import React from 'react';
import { ArrowLeft, Gift, Mail, CreditCard, Heart, ShoppingBag } from 'lucide-react';
import { ViewState } from '../types';

const GiftCards: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Give the <span className="text-pink-500 italic font-serif">World.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Flopcoast Gift Cards are the perfect way to say "Bon Voyage". Available in digital and physical formats.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-silver-50 dark:bg-zinc-950 p-12 rounded-[3rem] flex justify-center items-center h-[500px]">
              {/* Mock Gift Card */}
              <div className="w-[350px] h-[220px] bg-black dark:bg-white rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between p-8 text-white dark:text-black">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="flex justify-between items-start relative z-10">
                      <div className="font-display font-bold text-2xl">Flopcoast</div>
                      <Gift size={24} />
                  </div>
                  <div className="relative z-10">
                      <div className="font-bold text-xl">$100 - $2,000</div>
                      <div className="text-xs uppercase tracking-widest mt-1 opacity-70">Travel Voucher</div>
                  </div>
              </div>
          </div>

          <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer text-center group">
                      <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                          <Mail size={28} />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Digital Card</h3>
                      <p className="text-sm text-silver-500 mb-4">Sent instantly via email. Perfect for last-minute gifts.</p>
                      <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm">Buy Now</button>
                  </div>
                  
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer text-center group">
                      <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-black dark:text-white group-hover:scale-110 transition-transform">
                          <CreditCard size={28} />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Physical Card</h3>
                      <p className="text-sm text-silver-500 mb-4">Premium card mailed in a gift box. Delivered in 3-5 days.</p>
                      <button className="px-6 py-2 border border-silver-200 dark:border-zinc-700 rounded-full font-bold text-sm hover:bg-silver-50 dark:hover:bg-zinc-800">Mail It</button>
                  </div>
              </div>

              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><ShoppingBag size={20}/> Corporate Orders</h4>
                  <p className="text-sm text-silver-500 leading-relaxed mb-4">
                      Reward your employees or clients with the gift of travel. Bulk ordering is available with customizable branding options.
                  </p>
                  <span className="text-sm font-bold underline decoration-2 underline-offset-4">Learn about Corporate Gifting</span>
              </div>
          </div>
      </div>

    </div>
  );
};

export default GiftCards;


import React from 'react';
import { ArrowLeft, Monitor, Smile, Utensils, Zap, Baby, LayoutGrid } from 'lucide-react';
import { ViewState } from '../types';

const EconomyClass: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Economy <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Class</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Comfort, value, and our signature friendly service. We don't believe in "basic" when it comes to your journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
         <div className="order-2 lg:order-1 space-y-8">
             <h2 className="text-4xl font-display font-bold">Designed for Comfort</h2>
             <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                 Our ergonomically designed seats feature a 4-way adjustable headrest, lumbar support, and a personal footrest on select aircraft. We offer one of the most generous seat pitches in the industry.
             </p>
             
             <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-silver-50 dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <div className="font-bold mb-1 flex items-center gap-2"><LayoutGrid size={18}/> 32" Pitch</div>
                     <p className="text-xs text-silver-500">Ample legroom for a comfortable journey.</p>
                 </div>
                 <div className="p-4 bg-silver-50 dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <div className="font-bold mb-1 flex items-center gap-2"><Zap size={18}/> Power</div>
                     <p className="text-xs text-silver-500">USB-A, USB-C, and AC power at every seat.</p>
                 </div>
                 <div className="p-4 bg-silver-50 dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <div className="font-bold mb-1 flex items-center gap-2"><Monitor size={18}/> 11" Screen</div>
                     <p className="text-xs text-silver-500">High-definition touchscreen entertainment.</p>
                 </div>
                 <div className="p-4 bg-silver-50 dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <div className="font-bold mb-1 flex items-center gap-2"><Smile size={18}/> Service</div>
                     <p className="text-xs text-silver-500">Award-winning cabin crew service.</p>
                 </div>
             </div>
         </div>
         <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" alt="Economy Class" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Utensils size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Tasty Meals</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                  Complimentary hot meals are served on all international flights, accompanied by wine, beer, spirits, and soft drinks. Snacks are available throughout the flight.
              </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Baby size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Family Friendly</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                  We take care of our youngest flyers with special kids' meals, activity packs, and a dedicated kids' channel on the entertainment system. Bassinets available.
              </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Zap size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Stay Connected</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                  Free messaging (WhatsApp, iMessage) for all Flopcoast Rewards members. Wi-Fi packages available for browsing and streaming.
              </p>
          </div>
      </div>
    </div>
  );
};

export default EconomyClass;

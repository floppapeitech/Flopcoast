
import React from 'react';
import { ArrowLeft, MapPin, Coffee, ShoppingBag, Train, Clock, Plane, Info } from 'lucide-react';
import { ViewState } from '../types';

const AirportGuide: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-silver-100 dark:bg-zinc-800/50 border border-silver-200 dark:border-zinc-700">
            <MapPin size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">Potaxiene (PIA)</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Welcome to <span className="text-silver-400 dark:text-zinc-600 italic font-serif">The Hub.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Your guide to Potaxiene International Airport, the home of Flopcoast Airways. Discover world-class amenities and seamless connections.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8 rounded-[3rem] overflow-hidden shadow-2xl h-[500px] relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1575549595260-29c8e036e680?q=80&w=2670&auto=format&fit=crop" alt="Airport Terminal" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 p-8 text-white z-20">
                  <h3 className="text-3xl font-display font-bold">Terminal 4</h3>
                  <p className="opacity-90">The exclusive home of Flopcoast Airways and our partners.</p>
              </div>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Clock size={24}/></div>
                      <div>
                          <h4 className="font-bold">Minimum Connection</h4>
                          <p className="text-sm text-silver-500">60 Minutes (Int'l)</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Train size={24}/></div>
                      <div>
                          <h4 className="font-bold">City Transfer</h4>
                          <p className="text-sm text-silver-500">20 mins via AeroExpress</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Info size={24}/></div>
                      <div>
                          <h4 className="font-bold">Help Desks</h4>
                          <p className="text-sm text-silver-500">Located in Zone A, C, E</p>
                      </div>
                  </div>
              </div>

              <div className="bg-black dark:bg-white text-white dark:text-black p-8 rounded-[2.5rem] text-center">
                  <h4 className="font-bold text-xl mb-2">Terminal Map</h4>
                  <p className="text-sm opacity-70 mb-6">Navigate gates, lounges, and shops with our interactive map.</p>
                  <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                      View Map
                  </button>
              </div>
          </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-3">
                  <Coffee size={24}/> Dining
              </h3>
              <p className="text-silver-500 mb-4 text-sm leading-relaxed">
                  From quick bites to fine dining. Terminal 4 features over 30 restaurants including Shake Shack, Wagamama, and the Caviar House.
              </p>
              <span className="text-xs font-bold uppercase tracking-wider">View Directory</span>
          </div>
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-3">
                  <ShoppingBag size={24}/> Shopping
              </h3>
              <p className="text-silver-500 mb-4 text-sm leading-relaxed">
                  World-class duty free shopping. Brands include Chanel, Hermes, Rolex, and the official Flopcoast Store.
              </p>
              <span className="text-xs font-bold uppercase tracking-wider">View Directory</span>
          </div>
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-3">
                  <Coffee size={24}/> Lounges
              </h3>
              <p className="text-silver-500 mb-4 text-sm leading-relaxed">
                  Terminal 4 hosts the Flagship First Lounge (Concourse A), Business Lounge (Concourse B), and Arrivals Lounge.
              </p>
              <button 
                onClick={() => onNavigate('LOUNGES')}
                className="text-xs font-bold uppercase tracking-wider underline decoration-2 underline-offset-4"
              >
                  Lounge Access Info
              </button>
          </div>
      </div>

    </div>
  );
};

export default AirportGuide;

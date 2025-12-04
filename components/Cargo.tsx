
import React from 'react';
import { Package, Truck, Globe, Search, ArrowRight, ShieldCheck, Thermometer, Dog, Plane, ArrowLeft } from 'lucide-react';
import { ViewState } from '../types';

const Cargo: React.FC<{onNavigate: (view: ViewState) => void}> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      {/* Hero Section */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[3rem] p-12 md:p-20 mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                  <div className="bg-white/20 dark:bg-black/10 p-2 rounded-lg">
                      <Plane size={24} />
                  </div>
                  <span className="font-bold text-xl tracking-wide">Flopcoast Cargo</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
                  Logistics at the speed of flight.
              </h1>
              <div className="bg-white dark:bg-zinc-900 p-2 rounded-full flex pl-6 max-w-lg shadow-2xl">
                  <input 
                      type="text" 
                      placeholder="Track AWB (e.g. 123-45678901)" 
                      className="bg-transparent w-full outline-none placeholder-silver-400 text-black dark:text-white"
                  />
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Search size={18} /> Track
                  </button>
              </div>
          </div>
          {/* Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-600/30 to-transparent rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div 
            onClick={() => onNavigate('CARGO_GENERAL')}
            className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer group"
          >
              <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <Package size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">General Cargo</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Reliable airport-to-airport transport for standard freight. From electronics to textiles, we move your business forward.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4 group-hover:gap-3 transition-all">
                  View Specifications <ArrowRight size={16} />
              </div>
          </div>

          <div 
            onClick={() => onNavigate('CARGO_FRESH')}
            className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer group"
          >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Thermometer size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">FlopFresh™</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Temperature-controlled solutions for pharmaceuticals and perishables. We maintain the cold chain from acceptance to delivery.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
              </div>
          </div>

          <div 
            onClick={() => onNavigate('CARGO_LIVE')}
            className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer group"
          >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                  <Dog size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">FlopLive™</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Safe and humane transport for live animals. Our dedicated team ensures the welfare of your pets and livestock.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400 underline decoration-2 underline-offset-4 group-hover:gap-3 transition-all">
                  Animal Guidelines <ArrowRight size={16} />
              </div>
          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Global Capacity</h2>
          <div className="grid md:grid-cols-4 gap-8">
              <div>
                  <div className="text-4xl font-bold font-display mb-2">60+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-silver-500">Destinations</div>
              </div>
              <div>
                  <div className="text-4xl font-bold font-display mb-2">1,200</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-silver-500">Weekly Flights</div>
              </div>
              <div>
                  <div className="text-4xl font-bold font-display mb-2">350k</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-silver-500">Tonnes Annually</div>
              </div>
              <div>
                  <div className="text-4xl font-bold font-display mb-2">24/7</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-silver-500">Support Center</div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Cargo;
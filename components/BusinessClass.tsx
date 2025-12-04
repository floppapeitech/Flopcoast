
import React from 'react';
import { Briefcase, Wifi, Zap, ArrowLeft, Armchair, Utensils, Wine, Moon, Laptop, LayoutGrid, Tv } from 'lucide-react';
import { ViewState } from '../types';

const BusinessClass: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Business <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Class</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          The perfect balance of productivity and relaxation. Arrive ready to conquer the day.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
         <div className="order-2 lg:order-1 space-y-8">
             <h2 className="text-4xl font-display font-bold">Your Office in the Sky</h2>
             <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                 Every seat offers direct aisle access and transforms into a fully lie-flat bed. Stay productive with generous workspace, universal power ports, and complimentary high-speed Wi-Fi.
             </p>
             <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-silver-50 dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <div className="flex items-center gap-2 mb-2 font-bold"><Moon size={18}/> 78" Flat Bed</div>
                     <p className="text-xs text-silver-500">Fully horizontal sleeping surface with memory foam mattress.</p>
                 </div>
                 <div className="p-4 bg-silver-50 dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <div className="flex items-center gap-2 mb-2 font-bold"><LayoutGrid size={18}/> 1-2-1 Layout</div>
                     <p className="text-xs text-silver-500">Direct aisle access for every single passenger.</p>
                 </div>
                 <div className="p-4 bg-silver-50 dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <div className="flex items-center gap-2 mb-2 font-bold"><Laptop size={18}/> Workspace</div>
                     <p className="text-xs text-silver-500">Large table, side console storage, and multiple power outlets.</p>
                 </div>
                 <div className="p-4 bg-silver-50 dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <div className="flex items-center gap-2 mb-2 font-bold"><Tv size={18}/> 18" 4K Screen</div>
                     <p className="text-xs text-silver-500">Thousands of entertainment options at your fingertips.</p>
                 </div>
             </div>
         </div>
         <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2670&auto=format&fit=crop" alt="Business Class" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Utensils size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Book the Cook</h3>
              <p className="text-silver-500 dark:text-silver-400 mb-6 leading-relaxed">
                  Reserve your main course up to 24 hours before you fly. Choose from a wide selection of gourmet creations, including our signature Lobster Thermidor.
              </p>
              <button className="text-sm font-bold underline decoration-2 underline-offset-4">View Menu Sample</button>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Amenity Kits</h3>
              <p className="text-silver-500 dark:text-silver-400 mb-6 leading-relaxed">
                  Travel light and arrive refreshed. Our sustainability-focused kits include Penhaligon's toiletries, socks, eyeshades, and dental essentials.
              </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Wine size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Onboard Lounge</h3>
              <p className="text-silver-500 dark:text-silver-400 mb-6 leading-relaxed">
                  Available on our A380 aircraft. Stretch your legs, socialize with fellow travelers, and enjoy cocktails and snacks at our dedicated bar area.
              </p>
          </div>
      </div>
    </div>
  );
};

export default BusinessClass;

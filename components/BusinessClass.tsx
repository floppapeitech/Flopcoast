
import React from 'react';
import { Briefcase, Wifi, Zap, ArrowLeft, Armchair } from 'lucide-react';
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
             <ul className="space-y-4">
                 <li className="flex items-center gap-4 bg-silver-50 dark:bg-zinc-900 p-4 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <Armchair size={24} className="text-black dark:text-white" />
                     <span className="font-bold">Fully Lie-Flat Bed (78 inches)</span>
                 </li>
                 <li className="flex items-center gap-4 bg-silver-50 dark:bg-zinc-900 p-4 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <Wifi size={24} className="text-black dark:text-white" />
                     <span className="font-bold">Free High-Speed Wi-Fi</span>
                 </li>
                 <li className="flex items-center gap-4 bg-silver-50 dark:bg-zinc-900 p-4 rounded-xl border border-silver-100 dark:border-zinc-800">
                     <Briefcase size={24} className="text-black dark:text-white" />
                     <span className="font-bold">Lounge Access Included</span>
                 </li>
             </ul>
         </div>
         <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2670&auto=format&fit=crop" alt="Business Class" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
         </div>
      </div>
    </div>
  );
};

export default BusinessClass;

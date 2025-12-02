
import React from 'react';
import { ArrowLeft, Monitor, Smile, Utensils } from 'lucide-react';
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
          Comfort, value, and our signature friendly service. The best way to fly for less.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
         <div className="order-2 lg:order-1 space-y-8">
             <h2 className="text-4xl font-display font-bold">Designed for Comfort</h2>
             <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                 Our ergonomically designed seats feature adjustable headrests and lumbar support. Stay entertained with over 1,000 hours of movies on your personal HD touchscreen.
             </p>
             <ul className="space-y-4">
                 <li className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-silver-100 dark:bg-zinc-800 flex items-center justify-center"><Utensils size={18}/></div>
                     <span className="font-medium">Complimentary meals and beverages</span>
                 </li>
                 <li className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-silver-100 dark:bg-zinc-800 flex items-center justify-center"><Monitor size={18}/></div>
                     <span className="font-medium">10-inch Personal Touchscreen</span>
                 </li>
                 <li className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-silver-100 dark:bg-zinc-800 flex items-center justify-center"><Smile size={18}/></div>
                     <span className="font-medium">Award-winning cabin crew service</span>
                 </li>
             </ul>
         </div>
         <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" alt="Economy Class" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
         </div>
      </div>
    </div>
  );
};

export default EconomyClass;

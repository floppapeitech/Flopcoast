
import React from 'react';
import { Coffee, ArrowLeft, Ruler, Headphones } from 'lucide-react';
import { ViewState } from '../types';

const PremiumEconomy: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Premium <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Economy</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          A little extra goes a long way. More space, more comfort, and enhanced service.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
         <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1544669866-9b0d170464f1?q=80&w=2670&auto=format&fit=crop" alt="Premium Economy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
         </div>
         <div className="space-y-8">
             <h2 className="text-4xl font-display font-bold">Room to Stretch</h2>
             <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                 Enjoy a wider seat with up to 38 inches of pitch, a deeper recline, and a dedicated footrest. You'll also receive an exclusive amenity kit and priority boarding.
             </p>
             <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                     <Ruler size={32} className="mb-4 text-black dark:text-white" />
                     <h3 className="font-bold text-lg">Extra Legroom</h3>
                     <p className="text-sm text-silver-500">6 inches more than Economy.</p>
                 </div>
                 <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                     <Headphones size={32} className="mb-4 text-black dark:text-white" />
                     <h3 className="font-bold text-lg">Noise Canceling</h3>
                     <p className="text-sm text-silver-500">Premium headphones provided.</p>
                 </div>
                 <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                     <Coffee size={32} className="mb-4 text-black dark:text-white" />
                     <h3 className="font-bold text-lg">Welcome Drink</h3>
                     <p className="text-sm text-silver-500">Champagne or juice upon boarding.</p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default PremiumEconomy;

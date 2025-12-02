
import React from 'react';
import { Crown, Star, Coffee, Moon, ArrowLeft } from 'lucide-react';
import { ViewState } from '../types';

const FirstClass: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          First <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Class</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Your private sanctuary in the sky. Experience the pinnacle of luxury with Flopcoast First.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
         <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1595152452543-e5cca283b514?q=80&w=2670&auto=format&fit=crop" alt="First Class Suite" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
         </div>
         <div className="space-y-8">
             <h2 className="text-4xl font-display font-bold">The Suite Life</h2>
             <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                 Slide the door shut and retreat into your own private world. Our fully enclosed suites feature a leather armchair that converts into a spacious fully-flat bed, personal wardrobe, and a 32-inch 4K personal cinema screen.
             </p>
             <div className="grid grid-cols-2 gap-6">
                 <div className="bg-silver-50 dark:bg-zinc-900 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800">
                     <Crown className="text-black dark:text-white mb-4" size={24}/>
                     <h4 className="font-bold text-lg mb-2">Privacy Doors</h4>
                     <p className="text-sm text-silver-500">Complete seclusion with floor-to-ceiling sliding doors.</p>
                 </div>
                 <div className="bg-silver-50 dark:bg-zinc-900 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800">
                     <Star className="text-black dark:text-white mb-4" size={24}/>
                     <h4 className="font-bold text-lg mb-2">Turndown Service</h4>
                     <p className="text-sm text-silver-500">Fine linens, plush duvet, and designer pajamas provided.</p>
                 </div>
             </div>
         </div>
      </div>

      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 md:p-20 text-center mb-20">
         <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Dining on Demand</h2>
         <p className="text-lg opacity-80 max-w-2xl mx-auto mb-12">
             Dine whenever you wish from an à la carte menu featuring dishes created by world-renowned chefs. Pair your meal with our exclusive cellar of fine wines and vintage champagnes.
         </p>
         <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white/10 dark:bg-black/10 p-6 rounded-2xl backdrop-blur-sm">
                 <Coffee size={32} className="mx-auto mb-4"/>
                 <h3 className="font-bold text-xl">Caviar Service</h3>
             </div>
             <div className="bg-white/10 dark:bg-black/10 p-6 rounded-2xl backdrop-blur-sm">
                 <Moon size={32} className="mx-auto mb-4"/>
                 <h3 className="font-bold text-xl">Fine China</h3>
             </div>
             <div className="bg-white/10 dark:bg-black/10 p-6 rounded-2xl backdrop-blur-sm">
                 <Star size={32} className="mx-auto mb-4"/>
                 <h3 className="font-bold text-xl">Private Dining</h3>
             </div>
         </div>
      </div>
    </div>
  );
};

export default FirstClass;

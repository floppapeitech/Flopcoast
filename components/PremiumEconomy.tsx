
import React from 'react';
import { Coffee, ArrowLeft, Ruler, Headphones, Luggage, CheckCircle, Utensils } from 'lucide-react';
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
          A little extra goes a long way. More space, more comfort, and enhanced service in an exclusive cabin.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
         <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1544669866-9b0d170464f1?q=80&w=2670&auto=format&fit=crop" alt="Premium Economy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
         </div>
         <div className="space-y-8">
             <h2 className="text-4xl font-display font-bold">Room to Stretch</h2>
             <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                 Enjoy a wider seat with significantly more legroom, a deeper recline, and a dedicated calf rest/footrest combination. The dedicated Premium Economy cabin ensures a quieter and more attentive service.
             </p>
             <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                     <Ruler size={32} className="mb-4 text-black dark:text-white" />
                     <h3 className="font-bold text-lg">38" Seat Pitch</h3>
                     <p className="text-sm text-silver-500">Up to 6 inches more legroom than Economy.</p>
                 </div>
                 <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                     <div className="mb-4 text-3xl font-display font-bold">8"</div>
                     <h3 className="font-bold text-lg">Recline</h3>
                     <p className="text-sm text-silver-500">Generous recline for better sleep.</p>
                 </div>
                 <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                     <Headphones size={32} className="mb-4 text-black dark:text-white" />
                     <h3 className="font-bold text-lg">Noise Canceling</h3>
                     <p className="text-sm text-silver-500">Premium headphones provided for use.</p>
                 </div>
                 <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                     <Coffee size={32} className="mb-4 text-black dark:text-white" />
                     <h3 className="font-bold text-lg">Welcome Drink</h3>
                     <p className="text-sm text-silver-500">Champagne, juice, or water upon boarding.</p>
                 </div>
             </div>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <Utensils size={28} /> Enhanced Dining
              </h3>
              <p className="text-silver-500 mb-6 leading-relaxed">
                  Choose from three main course options, served on fine porcelain with real silverware and glassware. Complimentary wine and spirits are available throughout the flight.
              </p>
              <ul className="space-y-3">
                  <li className="flex items-center gap-3 font-medium"><CheckCircle size={18} className="text-green-500"/> Book the Cook (Select Routes)</li>
                  <li className="flex items-center gap-3 font-medium"><CheckCircle size={18} className="text-green-500"/> Linen Napkins & Tablecloth</li>
              </ul>
          </div>

          <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <Luggage size={28} /> Priority Privileges
              </h3>
              <p className="text-silver-500 mb-6 leading-relaxed">
                  Breeze through the airport with dedicated check-in counters and priority boarding. Your bags are tagged for priority handling, so they're among the first on the belt.
              </p>
              <ul className="space-y-3">
                  <li className="flex items-center gap-3 font-medium"><CheckCircle size={18} className="text-green-500"/> Priority Check-in</li>
                  <li className="flex items-center gap-3 font-medium"><CheckCircle size={18} className="text-green-500"/> Priority Baggage Handling</li>
                  <li className="flex items-center gap-3 font-medium"><CheckCircle size={18} className="text-green-500"/> Priority Boarding (Group 3)</li>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default PremiumEconomy;

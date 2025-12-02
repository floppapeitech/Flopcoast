
import React from 'react';
import { Luggage, Backpack, AlertCircle, Scale, Ruler } from 'lucide-react';
import { ViewState } from '../types';

interface BaggageInfoProps {
    onNavigate?: (view: ViewState) => void;
}

const BaggageInfo: React.FC<BaggageInfoProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Pack <span className="text-silver-400 dark:text-zinc-600 italic font-serif">smart.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Everything you need to know about baggage allowances, fees, and restrictions for your Flopcoast journey.
        </p>
      </div>

      {/* Carry On */}
      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 mb-8 shadow-sm">
         <div className="flex items-center gap-4 mb-8">
            <Backpack size={32} className="text-black dark:text-white" />
            <h2 className="text-3xl font-display font-bold">Carry-On Baggage</h2>
         </div>
         <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-2xl">
               <h3 className="font-bold text-lg mb-2">Personal Item</h3>
               <p className="text-sm text-silver-500 mb-4">Included with all tickets. Must fit under the seat in front of you.</p>
               <div className="flex items-center gap-2 text-xs font-mono bg-white dark:bg-zinc-900 p-2 rounded-lg border border-silver-200 dark:border-zinc-800">
                  <Ruler size={14} /> 40 x 30 x 15 cm
               </div>
            </div>
            <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-2xl">
               <h3 className="font-bold text-lg mb-2">Cabin Bag</h3>
               <p className="text-sm text-silver-500 mb-4">Included with Standard Economy and above. Must fit in overhead bin.</p>
               <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-xs font-mono bg-white dark:bg-zinc-900 p-2 rounded-lg border border-silver-200 dark:border-zinc-800">
                      <Ruler size={14} /> 55 x 40 x 23 cm
                   </div>
                   <div className="flex items-center gap-2 text-xs font-mono bg-white dark:bg-zinc-900 p-2 rounded-lg border border-silver-200 dark:border-zinc-800">
                      <Scale size={14} /> Max 10 kg
                   </div>
               </div>
            </div>
         </div>
      </div>

      {/* Checked Bags */}
      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 mb-8 shadow-sm">
         <div className="flex items-center gap-4 mb-8">
            <Luggage size={32} className="text-black dark:text-white" />
            <h2 className="text-3xl font-display font-bold">Checked Baggage</h2>
         </div>
         
         <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
                 <thead>
                     <tr className="border-b border-silver-200 dark:border-zinc-800">
                         <th className="py-4 font-bold text-silver-400 uppercase text-xs">Class</th>
                         <th className="py-4 font-bold text-silver-400 uppercase text-xs">Allowance</th>
                         <th className="py-4 font-bold text-silver-400 uppercase text-xs">Max Weight per Bag</th>
                     </tr>
                 </thead>
                 <tbody className="divide-y divide-silver-100 dark:divide-zinc-800">
                     <tr>
                         <td className="py-4 font-bold">Economy Basic</td>
                         <td className="py-4 text-silver-500">0 Bags (Paid add-on available)</td>
                         <td className="py-4 text-silver-500">23 kg (50 lbs)</td>
                     </tr>
                     <tr>
                         <td className="py-4 font-bold">Economy Standard</td>
                         <td className="py-4 text-silver-500">1 Bag</td>
                         <td className="py-4 text-silver-500">23 kg (50 lbs)</td>
                     </tr>
                     <tr>
                         <td className="py-4 font-bold">Premium Economy</td>
                         <td className="py-4 text-silver-500">2 Bags</td>
                         <td className="py-4 text-silver-500">23 kg (50 lbs)</td>
                     </tr>
                     <tr>
                         <td className="py-4 font-bold">Business</td>
                         <td className="py-4 text-silver-500">2 Bags</td>
                         <td className="py-4 text-silver-500">32 kg (70 lbs)</td>
                     </tr>
                     <tr>
                         <td className="py-4 font-bold">First Class</td>
                         <td className="py-4 text-silver-500">3 Bags</td>
                         <td className="py-4 text-silver-500">32 kg (70 lbs)</td>
                     </tr>
                 </tbody>
             </table>
         </div>
      </div>

       {/* Restricted Items */}
       <div className="bg-red-50 dark:bg-red-950/20 rounded-[2.5rem] p-8 md:p-12 border border-red-100 dark:border-red-900/30">
          <div className="flex items-center gap-4 mb-6">
             <AlertCircle size={32} className="text-red-600 dark:text-red-400" />
             <h2 className="text-2xl font-display font-bold text-red-900 dark:text-red-100">Restricted Items</h2>
          </div>
          <p className="text-red-800 dark:text-red-300/80 mb-6 max-w-3xl">
              For safety reasons, certain items are prohibited in both carry-on and checked baggage. This includes explosives, compressed gases, flammable liquids, and lithium batteries (checked bags only).
          </p>
          <button 
             onClick={() => onNavigate?.('PROHIBITED_ITEMS')}
             className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors"
          >
              View Full Prohibited List
          </button>
       </div>

    </div>
  );
};

export default BaggageInfo;

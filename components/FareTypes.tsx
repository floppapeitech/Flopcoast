
import React from 'react';
import { ArrowLeft, Check, X, Crown, Armchair, Coffee, Star } from 'lucide-react';
import { ViewState } from '../types';

const FareTypes: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Fare <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Families.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Choose the class that suits your journey. From value-packed Economy to the uncompromising luxury of First.
        </p>
      </div>

      <div className="overflow-x-auto pb-12">
          <div className="min-w-[1000px] grid grid-cols-4 gap-6">
              
              {/* Economy */}
              <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm flex flex-col h-full hover:border-silver-300 dark:hover:border-zinc-700 transition-colors">
                  <div className="mb-8 text-center">
                      <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-black dark:text-white">
                          <Armchair size={24} />
                      </div>
                      <h3 className="text-2xl font-display font-bold">Economy</h3>
                      <p className="text-sm text-silver-500 mt-2">Value & Comfort</p>
                  </div>
                  <ul className="space-y-4 text-sm flex-1">
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Standard Seat (32")</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> 1 Checked Bag (23kg)</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Main Meal Service</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Earn 100% Points</li>
                      <li className="flex gap-3 text-silver-400"><X size={16} className="shrink-0"/> Lounge Access</li>
                      <li className="flex gap-3 text-silver-400"><X size={16} className="shrink-0"/> Priority Boarding</li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-silver-100 dark:border-zinc-800 text-center">
                      <span className="font-bold text-sm">Best for leisure travel</span>
                  </div>
              </div>

              {/* Premium Economy */}
              <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm flex flex-col h-full hover:border-silver-300 dark:hover:border-zinc-700 transition-colors">
                  <div className="mb-8 text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                          <Coffee size={24} />
                      </div>
                      <h3 className="text-2xl font-display font-bold">Premium Econ</h3>
                      <p className="text-sm text-silver-500 mt-2">Extra Space & Perks</p>
                  </div>
                  <ul className="space-y-4 text-sm flex-1">
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Wider Seat (38" Pitch)</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> 2 Checked Bags (23kg)</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Premium Dining</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Earn 125% Points</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Priority Check-in</li>
                      <li className="flex gap-3 text-silver-400"><X size={16} className="shrink-0"/> Lounge Access</li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-silver-100 dark:border-zinc-800 text-center">
                      <span className="font-bold text-sm">Best for long haul comfort</span>
                  </div>
              </div>

              {/* Business Class */}
              <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-8 border-2 border-black dark:border-zinc-700 shadow-xl flex flex-col h-full transform scale-105 z-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-b-xl text-xs font-bold uppercase tracking-wider">
                      Most Popular
                  </div>
                  <div className="mb-8 text-center mt-4">
                      <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-4">
                          <Star size={24} />
                      </div>
                      <h3 className="text-2xl font-display font-bold">Business</h3>
                      <p className="text-sm text-silver-500 mt-2">Seamless Luxury</p>
                  </div>
                  <ul className="space-y-4 text-sm flex-1">
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Lie-Flat Bed</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> 2 Checked Bags (32kg)</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Book the Cook Dining</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Earn 200% Points</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Lounge Access</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Priority Everything</li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-silver-200 dark:border-zinc-800 text-center">
                      <span className="font-bold text-sm">Best for business travel</span>
                  </div>
              </div>

              {/* First Class */}
              <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm flex flex-col h-full hover:border-silver-300 dark:hover:border-zinc-700 transition-colors">
                  <div className="mb-8 text-center">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Crown size={24} />
                      </div>
                      <h3 className="text-2xl font-display font-bold">First Class</h3>
                      <p className="text-sm text-silver-500 mt-2">The Ultimate Experience</p>
                  </div>
                  <ul className="space-y-4 text-sm flex-1">
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Private Suite</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> 3 Checked Bags (32kg)</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Caviar & Fine Dining</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Earn 300% Points</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> First Class Lounge</li>
                      <li className="flex gap-3"><Check size={16} className="text-green-500 shrink-0"/> Chauffeur Service</li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-silver-100 dark:border-zinc-800 text-center">
                      <span className="font-bold text-sm">Best for exclusivity</span>
                  </div>
              </div>

          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2rem] p-8 text-center max-w-3xl mx-auto">
          <p className="text-silver-500 text-sm">
              *Specific amenities and seat configurations may vary by aircraft type and route. 
              Please check the flight details during booking for the most accurate information.
          </p>
      </div>

    </div>
  );
};

export default FareTypes;

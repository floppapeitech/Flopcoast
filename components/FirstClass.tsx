
import React from 'react';
import { Crown, Star, Coffee, Moon, ArrowLeft, Ruler, Tv, ShieldCheck, Car, Wine } from 'lucide-react';
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
         <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] lg:h-[700px] relative group">
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
             
             {/* Specs */}
             <div className="pt-6 border-t border-silver-200 dark:border-zinc-800">
                 <h4 className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4">Suite Specifications</h4>
                 <div className="grid grid-cols-3 gap-4">
                     <div>
                         <div className="text-2xl font-display font-bold">82"</div>
                         <div className="text-xs text-silver-500">Bed Length</div>
                     </div>
                     <div>
                         <div className="text-2xl font-display font-bold">35"</div>
                         <div className="text-xs text-silver-500">Seat Width</div>
                     </div>
                     <div>
                         <div className="text-2xl font-display font-bold">32"</div>
                         <div className="text-xs text-silver-500">4K Screen</div>
                     </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Amenities & Dining */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 flex flex-col justify-center">
              <Wine size={48} className="mb-6" />
              <h2 className="text-3xl font-display font-bold mb-4">Dining on Demand</h2>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                  Dine whenever you wish from an à la carte menu featuring dishes created by world-renowned chefs. Enjoy caviar service, vintage Dom Pérignon, and a cellar of fine wines.
              </p>
              <ul className="space-y-4 font-medium">
                  <li className="flex items-center gap-3"><Coffee size={20}/> Freshly Brewed Blue Mountain Coffee</li>
                  <li className="flex items-center gap-3"><Moon size={20}/> Bone China Tableware</li>
              </ul>
          </div>
          <div className="space-y-8">
              <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="text-2xl font-display font-bold mb-4">Luxury Amenities</h3>
                  <p className="text-silver-500 leading-relaxed mb-6">
                      Refresh with an exclusive amenity kit featuring skincare products from <span className="font-bold text-black dark:text-white">our luxury partners</span>. Slip into our comfortable, moisture-wicking pajamas and slippers for a restful sleep.
                  </p>
                  <div className="flex gap-4">
                      <span className="px-4 py-2 bg-silver-100 dark:bg-zinc-950 rounded-full text-xs font-bold">Premium Skincare</span>
                      <span className="px-4 py-2 bg-silver-100 dark:bg-zinc-950 rounded-full text-xs font-bold">Active Noise Canceling</span>
                  </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="text-2xl font-display font-bold mb-4">Unlimited Wi-Fi</h3>
                  <p className="text-silver-500 leading-relaxed">
                      Stay connected with complimentary, unlimited high-speed Wi-Fi for the duration of your flight. Stream, work, or browse without interruption.
                  </p>
              </div>
          </div>
      </div>

      {/* Ground Experience */}
      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-12 border border-silver-200 dark:border-zinc-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">The Ground Experience</h2>
              <p className="text-silver-500">Your journey begins long before takeoff. Enjoy seamless service from your doorstep to the aircraft.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                  <div className="w-16 h-16 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white shadow-sm">
                      <Car size={32} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Chauffeur Drive</h4>
                  <p className="text-sm text-silver-500">Complimentary luxury transfer to and from the airport in over 40 cities.</p>
              </div>
              <div className="text-center">
                  <div className="w-16 h-16 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white shadow-sm">
                      <ShieldCheck size={32} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Private Check-in</h4>
                  <p className="text-sm text-silver-500">Dedicated check-in entrance and private security screening lane.</p>
              </div>
              <div className="text-center">
                  <div className="w-16 h-16 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white shadow-sm">
                      <Crown size={32} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">The Flopcoast First Lounge</h4>
                  <p className="text-sm text-silver-500">Enjoy à la carte dining, spa treatments, and private day rooms before you fly.</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default FirstClass;

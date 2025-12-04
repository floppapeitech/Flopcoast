
import React from 'react';
import { Globe, ArrowLeft, Handshake, Plane, Star, Map } from 'lucide-react';
import { ViewState } from '../types';

const PartnerAirlines: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ABOUT')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to About Us
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Global <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Reach.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Through our strategic alliances and codeshare partners, we connect you to over 800 destinations worldwide on a single ticket.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 flex flex-col justify-center">
              <div className="w-16 h-16 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center mb-6">
                  <Star size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">One Seamless Journey</h2>
              <p className="opacity-80 mb-8 leading-relaxed">
                  When you fly with our partners, you enjoy seamless check-in, baggage transfer to your final destination, and consistent service standards.
              </p>
              <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                      <div className="bg-white/10 dark:bg-black/5 p-3 rounded-full"><Handshake size={20}/></div>
                      <span className="font-bold">Earn & Redeem Points</span>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="bg-white/10 dark:bg-black/5 p-3 rounded-full"><Globe size={20}/></div>
                      <span className="font-bold">Global Lounge Access</span>
                  </div>
              </div>
          </div>

          <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold font-display mb-8">Our Strategic Partners</h3>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800 flex items-center gap-4">
                      <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-xs">AF</div>
                      <div>
                          <div className="font-bold">Air Floptropica</div>
                          <div className="text-xs text-silver-500">Domestic & Regional</div>
                      </div>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800 flex items-center gap-4">
                      <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-xs">JA</div>
                      <div>
                          <div className="font-bold">Jiafei Aviation</div>
                          <div className="text-xs text-silver-500">Asia & Oceania</div>
                      </div>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800 flex items-center gap-4">
                      <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-xs">BI</div>
                      <div>
                          <div className="font-bold">Badussy International</div>
                          <div className="text-xs text-silver-500">Europe & UK</div>
                      </div>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800 flex items-center gap-4">
                      <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-xs">DA</div>
                      <div>
                          <div className="font-bold">Deborah Airways</div>
                          <div className="text-xs text-silver-500">USA & Canada</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-12 text-center border border-silver-200 dark:border-zinc-800">
          <h2 className="text-3xl font-display font-bold mb-6">Codeshare Network</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Plane size={18}/> Asia Pacific</h4>
                  <p className="text-sm text-silver-500">Connecting via Singapore (SIN) and Tokyo (HND) to over 40 cities in Asia.</p>
              </div>
              <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Map size={18}/> Europe</h4>
                  <p className="text-sm text-silver-500">Seamless connections via London (LHR) and Frankfurt (FRA) to major European capitals.</p>
              </div>
              <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Globe size={18}/> Americas</h4>
                  <p className="text-sm text-silver-500">Hub access through New York (JFK) and Los Angeles (LAX) for onward travel.</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default PartnerAirlines;

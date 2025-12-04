
import React from 'react';
import { Users, ArrowLeft, Heart, Briefcase, GraduationCap, CheckCircle, Mail, Phone } from 'lucide-react';
import { ViewState } from '../types';

const GroupTravel: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Better <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Together.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Exclusive rates and flexible conditions for parties of 10 or more. Whether it's a wedding, corporate retreat, or team trip, we've got you covered.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-600 dark:text-pink-400">
                  <Heart size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Weddings & Events</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Ensure your guests arrive in style. We offer coordinated arrival times and special baggage allowances for wedding dresses and gifts.
              </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
                  <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Corporate & MICE</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Meetings, Incentives, Conferences, and Exhibitions. Dedicated account managers to handle complex itineraries and last-minute changes.
              </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600 dark:text-orange-400">
                  <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Schools & Sports</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Safe and affordable travel for student groups and sports teams. Equipment handling included for team gear.
              </p>
          </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-3xl font-display font-bold mb-8">Group Benefits</h3>
              <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                      <CheckCircle className="text-green-500" size={24}/>
                      <span className="font-bold">Competitive Fares</span>
                  </li>
                  <li className="flex items-center gap-4">
                      <CheckCircle className="text-green-500" size={24}/>
                      <span className="font-bold">Small Deposit to Hold Seats</span>
                  </li>
                  <li className="flex items-center gap-4">
                      <CheckCircle className="text-green-500" size={24}/>
                      <span className="font-bold">Free Name Changes (until 72h before)</span>
                  </li>
                  <li className="flex items-center gap-4">
                      <CheckCircle className="text-green-500" size={24}/>
                      <span className="font-bold">Delayed Payment Options</span>
                  </li>
                  <li className="flex items-center gap-4">
                      <CheckCircle className="text-green-500" size={24}/>
                      <span className="font-bold">Dedicated Support Team</span>
                  </li>
              </ul>
          </div>

          <div className="bg-black dark:bg-white text-white dark:text-black p-10 rounded-[2.5rem] flex flex-col justify-center text-center h-full">
              <h3 className="text-3xl font-display font-bold mb-4">Request a Quote</h3>
              <p className="opacity-80 mb-8 max-w-md mx-auto">
                  Our Group Travel experts will get back to you with a tailored proposal within 24 hours.
              </p>
              <div className="space-y-4">
                  <button className="w-full py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      <Mail size={20} /> Email Us
                  </button>
                  <p className="text-sm opacity-60 font-mono">groups@flopcoast.com</p>
                  <div className="border-t border-white/20 dark:border-black/20 pt-4 mt-4">
                      <p className="font-bold text-lg mb-1 flex items-center justify-center gap-2"><Phone size={18}/> +1 (800) FLOP-GRP</p>
                      <p className="text-xs opacity-60">Mon-Fri 09:00 - 18:00 EST</p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default GroupTravel;


import React from 'react';
import { ArrowLeft, GraduationCap, Plane, Calendar, CreditCard, Tag, Globe, Briefcase } from 'lucide-react';
import { ViewState } from '../types';

const StudentTravel: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <GraduationCap size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">Flopcoast Student Club</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Study Hard, <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Fly Far.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Exclusive discounts, extra baggage, and flexible dates for students aged 18-30. Because your education shouldn't be the only journey you take.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm flex gap-6 items-start">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400 shrink-0">
                      <Tag size={32} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-display font-bold mb-2">Up to 15% Off</h3>
                      <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                          Save on Economy and Premium Economy fares to over 60 destinations worldwide. Just verify your student status.
                      </p>
                  </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm flex gap-6 items-start">
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl text-orange-600 dark:text-orange-400 shrink-0">
                      <Briefcase size={32} className="lucide-luggage" /> {/* Using Briefcase as placeholder for Luggage if not imported specifically, but Luggage is better */}
                  </div>
                  <div>
                      <h3 className="text-2xl font-display font-bold mb-2">Extra Baggage</h3>
                      <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                          Moving to campus? Take more with you. Students get 1 extra checked bag (23kg) on top of the standard allowance.
                      </p>
                  </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm flex gap-6 items-start">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl text-purple-600 dark:text-purple-400 shrink-0">
                      <Calendar size={32} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-display font-bold mb-2">Flexible Dates</h3>
                      <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                          Exams rescheduled? No problem. Change your flight date once for free (fare difference applies).
                      </p>
                  </div>
              </div>
          </div>

          <div className="bg-silver-50 dark:bg-zinc-950 p-12 rounded-[3rem] border border-silver-200 dark:border-zinc-800 text-center">
              <h2 className="text-3xl font-display font-bold mb-8">How to Join</h2>
              <div className="space-y-8 relative">
                  {/* Connector Line */}
                  <div className="absolute left-1/2 top-4 bottom-4 w-px bg-silver-200 dark:bg-zinc-800 -z-10"></div>
                  
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm max-w-sm mx-auto relative">
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-zinc-900"></div>
                      <h4 className="font-bold text-lg mb-1">1. Create Account</h4>
                      <p className="text-xs text-silver-500">Sign up for a free Flopcoast Rewards account.</p>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm max-w-sm mx-auto relative">
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-zinc-900"></div>
                      <h4 className="font-bold text-lg mb-1">2. Verify Status</h4>
                      <p className="text-xs text-silver-500">Upload your valid student ID or ISIC card.</p>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm max-w-sm mx-auto relative">
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-zinc-900"></div>
                      <h4 className="font-bold text-lg mb-1">3. Start Booking</h4>
                      <p className="text-xs text-silver-500">Search for flights with the promo code <span className="font-mono bg-silver-100 dark:bg-zinc-800 px-1 rounded">STUDENT</span>.</p>
                  </div>
              </div>
              
              <button className="mt-12 bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                  Verify & Join
              </button>
          </div>
      </div>

    </div>
  );
};

export default StudentTravel;

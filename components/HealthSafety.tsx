
import React from 'react';
import { ArrowLeft, HeartPulse, Wind, ShieldCheck, Sparkles, AlertCircle, SprayCan } from 'lucide-react';
import { ViewState } from '../types';

const HealthSafety: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Flopcoast <span className="text-teal-600 dark:text-teal-400 italic font-serif">Care.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Our industry-leading commitment to cleanliness, air quality, and your well-being.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] relative group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=2670&auto=format&fit=crop" alt="Cabin Cleaning" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-3xl font-display font-bold">Cleanliness You Can Trust</h2>
              <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                  Before every flight, our aircraft undergo a rigorous cleaning process using hospital-grade disinfectants. We focus heavily on high-touch surfaces like tray tables, seatbelt buckles, and armrests.
              </p>
              
              <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-silver-100 dark:border-zinc-800">
                      <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400"><SprayCan size={24}/></div>
                      <div>
                          <h4 className="font-bold text-lg mb-1">Electrostatic Spraying</h4>
                          <p className="text-sm text-silver-500">We use electrostatic sprayers to ensure disinfectant wraps around and coats even hard-to-reach surfaces.</p>
                      </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-silver-100 dark:border-zinc-800">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400"><Wind size={24}/></div>
                      <div>
                          <h4 className="font-bold text-lg mb-1">HEPA Filtration</h4>
                          <p className="text-sm text-silver-500">Cabin air is refreshed every 2-3 minutes and passes through HEPA filters that capture 99.97% of airborne particles.</p>
                      </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-silver-100 dark:border-zinc-800">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400"><Sparkles size={24}/></div>
                      <div>
                          <h4 className="font-bold text-lg mb-1">Flopcoast CleanPlus™</h4>
                          <p className="text-sm text-silver-500">Our certified seal of approval displayed at the cabin door, confirming the aircraft has been inspected.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 md:p-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Well-being on Board</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
                  <ShieldCheck size={40} className="mx-auto text-black dark:text-white mb-6" />
                  <h3 className="font-bold text-xl mb-4">Care Kits</h3>
                  <p className="text-silver-500 text-sm">Complimentary sanitizing wipes and masks are available upon boarding for your peace of mind.</p>
              </div>
              <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
                  <HeartPulse size={40} className="mx-auto text-black dark:text-white mb-6" />
                  <h3 className="font-bold text-xl mb-4">Medical Support</h3>
                  <p className="text-silver-500 text-sm">Our crew has 24/7 access to ground-based medical professionals via MedLink for in-flight emergencies.</p>
              </div>
              <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
                  <AlertCircle size={40} className="mx-auto text-black dark:text-white mb-6" />
                  <h3 className="font-bold text-xl mb-4">Contactless</h3>
                  <p className="text-silver-500 text-sm">Use the Flopcoast App for a touch-free experience, from check-in to reading the in-flight menu.</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default HealthSafety;

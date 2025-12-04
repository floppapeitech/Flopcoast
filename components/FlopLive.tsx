
import React from 'react';
import { ArrowLeft, Dog, Heart, CheckCircle, AlertTriangle, FileText, Bird, Info } from 'lucide-react';
import { ViewState } from '../types';

const FlopLive: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('CARGO')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Cargo
       </button>

      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800">
            <Dog size={16} className="text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-700 dark:text-orange-300">Live Animal Transport</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          FlopLive™
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          We treat every animal with the care and dignity they deserve. Certified safe transport for pets, zoological species, and livestock.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative group">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2669&auto=format&fit=crop" alt="Dog in Airport" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold">Animal Welfare First</h2>
              <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                  Flopcoast complies with all IATA Live Animals Regulations (LAR) and CITES guidelines. Our staff are specially trained to handle animals, ensuring they are kept in a stress-free, climate-controlled environment throughout their journey.
              </p>
              
              <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Heart className="text-red-500" size={20}/> What We Transport</h4>
                  <ul className="grid grid-cols-2 gap-4 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Domestic Pets (Dogs, Cats)</li>
                      <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Horses & Livestock</li>
                      <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Tropical Fish</li>
                      <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Zoo Animals</li>
                  </ul>
              </div>
          </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-xl font-bold font-display mb-4">Dedicated Holding Area</h3>
              <p className="text-sm text-silver-500 dark:text-silver-400">
                  At our hubs, animals wait in a quiet, temperature-controlled facility away from general cargo noise.
              </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-xl font-bold font-display mb-4">Veterinary Checks</h3>
              <p className="text-sm text-silver-500 dark:text-silver-400">
                  On-call vets are available 24/7 at major transit points to attend to any health concerns.
              </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-xl font-bold font-display mb-4">Priority Boarding</h3>
              <p className="text-sm text-silver-500 dark:text-silver-400">
                  Live animals are last to load and first to offload to minimize time on the tarmac.
              </p>
          </div>
      </div>

      {/* Checklist */}
      <div className="bg-orange-50 dark:bg-orange-950/20 rounded-[3rem] p-12 border border-orange-100 dark:border-orange-900/30">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-orange-900 dark:text-orange-100">Booking Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4 items-start bg-white/60 dark:bg-black/20 p-4 rounded-xl">
                  <FileText className="shrink-0 text-orange-600 dark:text-orange-400" />
                  <div>
                      <h4 className="font-bold text-sm">Import/Export Permits</h4>
                      <p className="text-xs text-silver-600 dark:text-silver-400 mt-1">Ensure you have valid permits for the origin, destination, and transit countries.</p>
                  </div>
              </div>
              <div className="flex gap-4 items-start bg-white/60 dark:bg-black/20 p-4 rounded-xl">
                  <AlertTriangle className="shrink-0 text-orange-600 dark:text-orange-400" />
                  <div>
                      <h4 className="font-bold text-sm">IATA Approved Crate</h4>
                      <p className="text-xs text-silver-600 dark:text-silver-400 mt-1">Containers must allow the animal to stand, turn, and lie down naturally. Rigid plastic or wood only.</p>
                  </div>
              </div>
              <div className="flex gap-4 items-start bg-white/60 dark:bg-black/20 p-4 rounded-xl">
                  <Bird className="shrink-0 text-orange-600 dark:text-orange-400" />
                  <div>
                      <h4 className="font-bold text-sm">Health Certificate</h4>
                      <p className="text-xs text-silver-600 dark:text-silver-400 mt-1">Issued by a veterinarian within 10 days of travel (requirements vary by country).</p>
                  </div>
              </div>
              <div className="flex gap-4 items-start bg-white/60 dark:bg-black/20 p-4 rounded-xl">
                  <Info className="shrink-0 text-orange-600 dark:text-orange-400" />
                  <div>
                      <h4 className="font-bold text-sm">Food & Water</h4>
                      <p className="text-xs text-silver-600 dark:text-silver-400 mt-1">Attach feeding instructions and a small bag of food to the crate. Water containers must be accessible from outside.</p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default FlopLive;

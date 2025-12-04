
import React from 'react';
import { ArrowLeft, Thermometer, Snowflake, Sun, Clock, Zap, Leaf } from 'lucide-react';
import { ViewState } from '../types';

const FlopFresh: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('CARGO')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Cargo
       </button>

      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <Thermometer size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">Temperature Controlled</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          FlopFresh™
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Preserving quality from origin to destination. Advanced cold-chain logistics for pharmaceuticals and perishables.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 text-blue-500">
                  <Snowflake size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Deep Frozen</h3>
              <p className="text-sm text-silver-500 dark:text-silver-400 mb-4">
                  Maintained below -20°C. Ideal for vaccines, plasma, and frozen foods.
              </p>
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-bold">Active & Passive</div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center border-t-4 border-t-green-500">
              <div className="w-16 h-16 mx-auto bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                  <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Refrigerated</h3>
              <p className="text-sm text-silver-500 dark:text-silver-400 mb-4">
                  Maintained between +2°C to +8°C. Perfect for fresh produce, flowers, and standard pharmaceuticals.
              </p>
              <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-bold">Cold Chain Priority</div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-6 text-orange-500">
                  <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Controlled Room Temp</h3>
              <p className="text-sm text-silver-500 dark:text-silver-400 mb-4">
                  Maintained between +15°C to +25°C. For sensitive medication and biomedical products.
              </p>
              <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs font-bold">CRT Certified</div>
          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-4xl font-display font-bold mb-6">Unbroken Chain of Custody</h2>
                  <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed mb-8">
                      We understand that a temperature excursion can ruin an entire shipment. That's why we use state-of-the-art facilities and equipment to ensure integrity from end to end.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                          <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm"><Clock size={20}/></div>
                          <span className="font-bold">Minimized Tarmac Time</span>
                      </li>
                      <li className="flex items-center gap-4">
                          <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm"><Zap size={20}/></div>
                          <span className="font-bold">Active Container Charging</span>
                      </li>
                      <li className="flex items-center gap-4">
                          <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm"><Thermometer size={20}/></div>
                          <span className="font-bold">Real-time Temp Monitoring</span>
                      </li>
                  </ul>
              </div>
              <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2670&auto=format&fit=crop" alt="Cold Chain" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default FlopFresh;

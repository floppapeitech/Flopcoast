
import React from 'react';
import { ArrowLeft, Package, Clock, ShieldCheck, MapPin, Truck, Scale } from 'lucide-react';
import { ViewState } from '../types';

const GeneralCargo: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('CARGO')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Cargo
       </button>

      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-silver-100 dark:bg-zinc-800/50 border border-silver-200 dark:border-zinc-700">
            <Package size={16} className="text-black dark:text-white" />
            <span className="text-xs font-semibold uppercase tracking-wider text-silver-600 dark:text-silver-300">Standard Freight</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          General Cargo
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          The most cost-effective and reliable solution for shipping non-perishable goods across the Flopcoast global network.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" alt="Cargo Loading" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold">Why choose General Cargo?</h2>
              <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                  Whether you're shipping spare parts, textiles, electronics, or personal effects, our General Cargo service offers predictable lead times and simplified booking processes. We handle your shipments with care and precision.
              </p>
              <div className="grid gap-6">
                  <div className="flex gap-4">
                      <div className="bg-silver-100 dark:bg-zinc-800 p-3 rounded-xl h-fit"><Clock size={24}/></div>
                      <div>
                          <h4 className="font-bold text-lg">Speed & Reliability</h4>
                          <p className="text-sm text-silver-500">Daily flights to key business hubs ensure your goods arrive on time, every time.</p>
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="bg-silver-100 dark:bg-zinc-800 p-3 rounded-xl h-fit"><ShieldCheck size={24}/></div>
                      <div>
                          <h4 className="font-bold text-lg">Secure Handling</h4>
                          <p className="text-sm text-silver-500">24/7 surveillance in our warehouses and rigorous screening protocols for total peace of mind.</p>
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="bg-silver-100 dark:bg-zinc-800 p-3 rounded-xl h-fit"><MapPin size={24}/></div>
                      <div>
                          <h4 className="font-bold text-lg">End-to-End Visibility</h4>
                          <p className="text-sm text-silver-500">Real-time tracking from acceptance to final delivery at destination airport.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-12 border border-silver-200 dark:border-zinc-800 shadow-sm mb-20">
          <h3 className="text-2xl font-bold font-display mb-8">Service Specifications</h3>
          <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                  <thead>
                      <tr className="border-b border-silver-200 dark:border-zinc-800">
                          <th className="py-4 px-4 font-bold text-sm uppercase text-silver-400">Parameter</th>
                          <th className="py-4 px-4 font-bold text-sm uppercase text-silver-400">Details</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-silver-100 dark:divide-zinc-800">
                      <tr>
                          <td className="py-4 px-4 font-bold flex items-center gap-2"><Scale size={16}/> Weight Limit</td>
                          <td className="py-4 px-4 text-silver-500">Up to 4,500 kg per piece (Aircraft dependent)</td>
                      </tr>
                      <tr>
                          <td className="py-4 px-4 font-bold flex items-center gap-2"><Package size={16}/> Commodities</td>
                          <td className="py-4 px-4 text-silver-500">General freight, consolidation, mail, personal effects, printed matter.</td>
                      </tr>
                      <tr>
                          <td className="py-4 px-4 font-bold flex items-center gap-2"><Truck size={16}/> Acceptance</td>
                          <td className="py-4 px-4 text-silver-500">Ready for carriage (RFS) up to 4 hours before departure (at hubs).</td>
                      </tr>
                      <tr>
                          <td className="py-4 px-4 font-bold flex items-center gap-2"><ShieldCheck size={16}/> Restrictions</td>
                          <td className="py-4 px-4 text-silver-500">No dangerous goods, live animals, or perishables in this category.</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to ship?</h2>
          <p className="opacity-80 max-w-xl mx-auto mb-8">
              Get a quote or book your shipment online via the Flopcoast Cargo Portal.
          </p>
          <div className="flex justify-center gap-4">
              <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                  Get a Quote
              </button>
              <button className="border border-white/30 dark:border-black/30 px-8 py-3 rounded-full font-bold hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
                  Contact Sales
              </button>
          </div>
      </div>

    </div>
  );
};

export default GeneralCargo;


import React from 'react';
import { Leaf, Wind, Droplets, Recycle, ArrowRight, TreeDeciduous } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
            <Leaf size={16} className="text-green-600 dark:text-green-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-300">Flopcoast Future</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Flying towards a <br/><span className="text-green-600 dark:text-green-400 italic font-serif">greener horizon.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          We recognize our responsibility to the planet. That's why we're committing to Net Zero emissions by 2050 through innovation, investment, and immediate action.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                  <Droplets size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Sustainable Fuel</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  We are investing heavily in Sustainable Aviation Fuel (SAF), which reduces lifecycle carbon emissions by up to 80% compared to traditional jet fuel.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-green-700 dark:text-green-400">
                  Our Commitment <ArrowRight size={16} />
              </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Wind size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Fleet Efficiency</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Our modern fleet of A350s and B787s are 25% more fuel-efficient than previous generation aircraft. Younger planes mean cleaner skies.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-blue-400">
                  View Fleet <ArrowRight size={16} />
              </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                  <Recycle size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Waste Reduction</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  We are eliminating single-use plastics from our onboard service by 2025, replacing them with bamboo, paper, and reusable alternatives.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-orange-700 dark:text-orange-400">
                  Read Report <ArrowRight size={16} />
              </div>
          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-12 md:p-20 overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-4xl font-display font-bold mb-6">Offset Your Journey</h2>
                  <p className="text-lg text-silver-500 dark:text-silver-400 mb-8 leading-relaxed">
                      Every time you book with Flopcoast, you have the option to calculate and offset your carbon footprint. Your contribution goes directly to certified reforestation and renewable energy projects in Floptropica and beyond.
                  </p>
                  <button className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 flex items-center gap-2">
                      <TreeDeciduous size={20} /> Calculate My Footprint
                  </button>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-silver-200 dark:border-zinc-800 shadow-xl">
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-silver-100 dark:border-zinc-800">
                      <div>
                          <div className="text-sm text-silver-500 uppercase font-bold">Total Offsets</div>
                          <div className="text-3xl font-display font-bold">1.2M Tonnes</div>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400">
                          <Leaf size={24} />
                      </div>
                  </div>
                  <div className="space-y-4">
                      <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="flex-1 font-medium">Amazon Reforestation</span>
                          <span className="text-silver-500">45%</span>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="flex-1 font-medium">Wind Energy Projects</span>
                          <span className="text-silver-500">30%</span>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                          <span className="flex-1 font-medium">Clean Water Access</span>
                          <span className="text-silver-500">25%</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Sustainability;

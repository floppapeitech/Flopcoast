
import React from 'react';
import { AlertTriangle, Info, MapPin, Clock, ArrowLeft, Construction, CloudRain } from 'lucide-react';
import { ViewState } from '../types';

const TravelAlerts: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Travel <span className="text-red-500 italic font-serif">Alerts.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Current operational updates, weather advisories, and important information affecting your journey.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Active Alert */}
          <div className="bg-red-50 dark:bg-red-950/20 rounded-[2.5rem] p-8 md:p-12 border border-red-200 dark:border-red-900/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                  Urgent
              </div>
              <div className="flex items-start gap-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full text-red-600 dark:text-red-400 shrink-0">
                      <CloudRain size={32} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-display font-bold mb-2">Tropical Storm Warning - Floptropica</h3>
                      <p className="text-xs font-bold uppercase text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                          <Clock size={12} /> Updated: June 15, 2024 - 08:30 AM EST
                      </p>
                      <p className="text-silver-600 dark:text-silver-300 leading-relaxed mb-6">
                          Due to approaching tropical storm conditions in the Potaxiene region, flights to/from Potaxiene International Airport (PIA) may experience delays or cancellations on June 16-17.
                      </p>
                      <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl text-sm border border-red-100 dark:border-red-900/30">
                          <strong>Flexible Rebooking:</strong> Fees are waived for passengers traveling to/from Potaxiene on impacted dates. You may rebook for travel within 7 days at no additional cost.
                      </div>
                  </div>
              </div>
          </div>

          {/* Advisory */}
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-start gap-6">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full text-orange-600 dark:text-orange-400 shrink-0">
                      <Construction size={32} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-display font-bold mb-2">JFK Terminal 4 Renovation</h3>
                      <p className="text-xs font-bold uppercase text-silver-400 mb-4 flex items-center gap-2">
                          <MapPin size={12} /> New York (JFK) • Until August 2024
                      </p>
                      <p className="text-silver-600 dark:text-silver-300 leading-relaxed">
                          Construction is ongoing at Terminal 4 check-in counters. Please allow an extra 15-20 minutes for bag drop. Flopcoast check-in has temporarily moved to Row 7.
                      </p>
                  </div>
              </div>
          </div>

          {/* Informational */}
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-start gap-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full text-blue-600 dark:text-blue-400 shrink-0">
                      <Info size={32} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-display font-bold mb-2">New Entry Requirements for Europe</h3>
                      <p className="text-xs font-bold uppercase text-silver-400 mb-4 flex items-center gap-2">
                          <Clock size={12} /> Effective: January 2025
                      </p>
                      <p className="text-silver-600 dark:text-silver-300 leading-relaxed mb-4">
                          Starting 2025, visa-exempt travelers to Europe will require an ETIAS travel authorization. Please ensure you apply at least 96 hours before departure.
                      </p>
                      <button className="text-sm font-bold text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4">
                          Learn More about ETIAS
                      </button>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default TravelAlerts;

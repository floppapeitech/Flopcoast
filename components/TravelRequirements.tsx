
import React, { useState } from 'react';
import { ArrowLeft, Globe, Search, ShieldCheck, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { ViewState } from '../types';

const TravelRequirements: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  const [activeTab, setActiveTab] = useState<'visa' | 'health'>('visa');

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Travel <span className="text-blue-600 dark:text-blue-400 italic font-serif">Ready.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Check the latest visa, passport, and health requirements for your destination before you fly.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-xl">
              
              <div className="flex gap-2 bg-silver-100 dark:bg-zinc-950 p-1 rounded-full w-fit mx-auto mb-8">
                  <button 
                    onClick={() => setActiveTab('visa')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'visa' ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
                  >
                    Visa & Passport
                  </button>
                  <button 
                    onClick={() => setActiveTab('health')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'health' ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
                  >
                    Health Entry
                  </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-silver-400 ml-3">Passport Country</label>
                      <select className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none">
                          <option>Floptropica</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Australia</option>
                      </select>
                  </div>
                  <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-silver-400 ml-3">Destination</label>
                      <select className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none">
                          <option>Select Destination</option>
                          <option>Japan</option>
                          <option>France</option>
                          <option>Brazil</option>
                          <option>South Africa</option>
                      </select>
                  </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center gap-2">
                  <Search size={20} /> Check Requirements
              </button>

              <div className="mt-8 pt-8 border-t border-silver-100 dark:border-zinc-800">
                  <div className="flex gap-4 items-start p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                      <ShieldCheck size={24} className="shrink-0 text-blue-600 dark:text-blue-400" />
                      <div>
                          <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Important Notice</h4>
                          <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                              Entry requirements can change at short notice. The information provided here is for guidance only. It is your responsibility to ensure you have valid documents for travel.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
                  <FileText size={32} className="mb-4 text-black dark:text-white" />
                  <h3 className="text-xl font-bold mb-2">Advance Passenger Info</h3>
                  <p className="text-silver-500 text-sm mb-4">
                      Many countries require APIS data (passport details) to be submitted before your flight departs.
                  </p>
                  <button className="text-sm font-bold underline decoration-2 underline-offset-4">Manage My Booking</button>
              </div>
              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
                  <AlertTriangle size={32} className="mb-4 text-black dark:text-white" />
                  <h3 className="text-xl font-bold mb-2">Transit Visas</h3>
                  <p className="text-silver-500 text-sm mb-4">
                      Don't forget to check requirements for countries you are transiting through, even if you don't leave the airport.
                  </p>
                  <button className="text-sm font-bold underline decoration-2 underline-offset-4">Learn More</button>
              </div>
          </div>
      </div>

    </div>
  );
};

export default TravelRequirements;

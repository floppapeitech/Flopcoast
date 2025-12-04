
import React from 'react';
import { Smartphone, ArrowLeft, QrCode, Bell, Plane, Luggage, Map } from 'lucide-react';
import { ViewState } from '../types';

const MobileApp: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 space-y-8">
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                  Your journey in your <span className="text-silver-400 dark:text-zinc-600 italic font-serif">pocket.</span>
              </h1>
              <p className="text-xl text-silver-500 dark:text-silver-400 leading-relaxed max-w-xl">
                  Download the Flopcoast App for a smoother travel experience. Book flights, check in, track your bags, and access your boarding pass—all in one place.
              </p>
              
              <div className="flex flex-wrap gap-4">
                  <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                      <div className="text-left">
                          <div className="text-[10px] uppercase font-bold opacity-80">Download on the</div>
                          <div className="text-lg leading-none">App Store</div>
                      </div>
                  </button>
                  <button className="bg-silver-100 dark:bg-zinc-800 text-black dark:text-white px-8 py-3 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                      <div className="text-left">
                          <div className="text-[10px] uppercase font-bold opacity-80">Get it on</div>
                          <div className="text-lg leading-none">Google Play</div>
                      </div>
                  </button>
              </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-72 h-[580px] bg-black rounded-[3rem] p-4 shadow-2xl border-4 border-silver-200 dark:border-zinc-700">
                  <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden relative">
                      {/* Mock App UI */}
                      <div className="bg-black text-white p-6 pt-12">
                          <div className="text-xs uppercase font-bold opacity-70 mb-1">Next Trip</div>
                          <div className="text-2xl font-bold font-display">New York <span className="text-silver-400">→</span> London</div>
                          <div className="text-sm mt-1">FC-101 • On Time</div>
                      </div>
                      <div className="p-6 space-y-4">
                          <div className="bg-silver-100 dark:bg-zinc-800 p-4 rounded-xl flex items-center gap-4">
                              <QrCode size={24} />
                              <div className="font-bold text-sm">Boarding Pass</div>
                          </div>
                          <div className="bg-silver-100 dark:bg-zinc-800 p-4 rounded-xl flex items-center gap-4">
                              <Luggage size={24} />
                              <div className="font-bold text-sm">Track Bags</div>
                          </div>
                          <div className="bg-silver-100 dark:bg-zinc-800 p-4 rounded-xl flex items-center gap-4">
                              <Map size={24} />
                              <div className="font-bold text-sm">Airport Guide</div>
                          </div>
                      </div>
                      <div className="absolute bottom-0 w-full p-6 bg-silver-50 dark:bg-zinc-950 border-t border-silver-200 dark:border-zinc-800">
                          <div className="flex justify-between text-silver-400">
                              <Plane size={24} className="text-black dark:text-white" />
                              <Bell size={24} />
                              <Smartphone size={24} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 md:p-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">App Features</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
                  <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white">
                      <Bell size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Real-Time Updates</h3>
                  <p className="text-sm text-silver-500">Get instant notifications for gate changes, delays, and boarding calls.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
                  <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white">
                      <Luggage size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Bag Tracking</h3>
                  <p className="text-sm text-silver-500">Track your checked luggage from drop-off to the carousel.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
                  <div className="w-14 h-14 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white">
                      <Map size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Airport Maps</h3>
                  <p className="text-sm text-silver-500">Navigate terminals like a pro with interactive maps and directions to lounges.</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default MobileApp;

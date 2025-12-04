
import React from 'react';
import { Wifi, Zap, Smartphone, ArrowLeft, Check, Globe, Signal, HelpCircle } from 'lucide-react';
import { ViewState } from '../types';

const InternetConnectivity: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Powered by <span className="text-blue-600 dark:text-blue-400 italic font-serif">Floptel.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          We've partnered with Floptropica's leading telecom provider to bring you the fastest, most reliable Wi-Fi in the sky. Experience the Floptel High-Altitude Network.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Wi-Fi Plans */}
          <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                  <Wifi size={32} className="text-black dark:text-white" /> Connection Packages
              </h2>
              <div className="space-y-4">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
                      <div className="flex justify-between items-center mb-4 relative z-10">
                          <h3 className="text-xl font-bold flex items-center gap-2">FlopText <span className="text-xs font-normal text-silver-400 border border-silver-200 dark:border-zinc-700 px-2 py-0.5 rounded-full">Basic</span></h3>
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-bold">Free</span>
                      </div>
                      <p className="text-silver-500 dark:text-silver-400 text-sm mb-4 relative z-10">
                          Stay in the loop without spending a dime. Messaging is complimentary for all Flopcoast Rewards members.
                      </p>
                      <ul className="space-y-2 text-sm relative z-10">
                          <li className="flex gap-2 items-center"><Check size={14}/> WhatsApp, iMessage, Messenger, WeChat</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> Full Flight Duration</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> No Images/Video</li>
                      </ul>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold flex items-center gap-2">FlopSurf <span className="text-xs font-normal text-silver-400 border border-silver-200 dark:border-zinc-700 px-2 py-0.5 rounded-full">Standard</span></h3>
                          <span className="font-bold text-lg">$9.99 <span className="text-xs font-normal text-silver-500">/ flight</span></span>
                      </div>
                      <p className="text-silver-500 dark:text-silver-400 text-sm mb-4">
                          Perfect for the digital nomad. Browse the web, check emails, and scroll social media at 4G-like speeds.
                      </p>
                      <ul className="space-y-2 text-sm">
                          <li className="flex gap-2 items-center"><Check size={14}/> Web Browsing & Social Media</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> Email with Attachments</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> Up to 15 Mbps Download</li>
                      </ul>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm border-l-4 border-l-blue-600 dark:border-l-blue-500">
                      <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold flex items-center gap-2 text-blue-600 dark:text-blue-400">FlopStream <span className="text-xs font-normal text-silver-400 border border-silver-200 dark:border-zinc-700 px-2 py-0.5 rounded-full text-black dark:text-white">Premium</span></h3>
                          <span className="font-bold text-lg">$19.99 <span className="text-xs font-normal text-silver-500">/ flight</span></span>
                      </div>
                      <p className="text-silver-500 dark:text-silver-400 text-sm mb-4">
                          Our fastest connection powered by Floptel 5G Sky™ technology. Stream your favorite content in HD.
                      </p>
                      <ul className="space-y-2 text-sm">
                          <li className="flex gap-2 items-center"><Check size={14}/> HD Video Streaming (Netflix, YouTube)</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> Video Calls (Zoom, FaceTime)</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> Up to 50 Mbps Download</li>
                      </ul>
                  </div>
              </div>
          </div>

          {/* Technology & Info */}
          <div className="space-y-8">
              <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                  <div className="relative z-10">
                      <h2 className="text-2xl font-display font-bold flex items-center gap-3 mb-4">
                          <Globe size={28} /> The Floptel Advantage
                      </h2>
                      <p className="opacity-90 leading-relaxed mb-6">
                          Unlike traditional air-to-ground systems, Floptel uses a constellation of Low Earth Orbit (LEO) satellites to provide low-latency, high-bandwidth coverage over oceans and polar regions.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                              <div className="text-3xl font-bold mb-1">99.9%</div>
                              <div className="text-xs uppercase font-bold opacity-70">Uptime</div>
                          </div>
                          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                              <div className="text-3xl font-bold mb-1">&lt;30ms</div>
                              <div className="text-xs uppercase font-bold opacity-70">Latency</div>
                          </div>
                      </div>
                  </div>
                  {/* Decor */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              </div>

              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h2 className="text-2xl font-display font-bold flex items-center gap-3 mb-6">
                      <Signal size={28} /> Floptel Roaming
                  </h2>
                  <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-4">
                      Already a Floptel mobile subscriber? Your existing data plan works in the sky on select aircraft. Simply enable roaming and connect to the "Floptel-Air" cellular network.
                  </p>
                  <p className="text-xs text-silver-400">
                      *Compatible with Floptel Unlimited Elite plans. Usage counts towards your monthly cap.
                  </p>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h2 className="text-2xl font-display font-bold flex items-center gap-3 mb-6">
                      <Zap size={28} /> Power at Every Seat
                  </h2>
                  <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                      Keep your devices charged and ready. Every seat is equipped with:
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-silver-50 dark:bg-zinc-950 rounded-xl">
                          <div className="font-bold text-sm">110V AC</div>
                          <div className="text-xs text-silver-500">Universal Outlet</div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-silver-50 dark:bg-zinc-950 rounded-xl">
                          <div className="font-bold text-sm">60W USB-C</div>
                          <div className="text-xs text-silver-500">Fast Charging</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Connection Guide */}
      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-12 border border-silver-200 dark:border-zinc-800">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold">How to Connect</h2>
              <p className="text-silver-500 mt-2">Get online in three simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-sm border border-silver-200 dark:border-zinc-800">1</div>
                  <h4 className="font-bold text-lg">Enable Wi-Fi</h4>
                  <p className="text-sm text-silver-500">Switch your device to Airplane Mode and enable Wi-Fi. Select the network <span className="font-mono bg-white dark:bg-zinc-900 px-2 py-1 rounded text-xs border border-silver-200 dark:border-zinc-800">Flopcoast_Wi-Fi</span>.</p>
              </div>
              <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-sm border border-silver-200 dark:border-zinc-800">2</div>
                  <h4 className="font-bold text-lg">Scan or Tap</h4>
                  <p className="text-sm text-silver-500">A pop-up should appear automatically. If not, scan the QR code on the seatback screen or visit <span className="text-blue-600 dark:text-blue-400 underline">wifi.flopcoast.com</span>.</p>
              </div>
              <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-sm border border-silver-200 dark:border-zinc-800">3</div>
                  <h4 className="font-bold text-lg">Select Plan</h4>
                  <p className="text-sm text-silver-500">Choose your preferred Floptel package. Rewards members can log in to access free messaging instantly.</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default InternetConnectivity;

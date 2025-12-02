
import React from 'react';
import { Wifi, Zap, Smartphone, ArrowLeft, Check } from 'lucide-react';
import { ViewState } from '../types';

const InternetConnectivity: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Stay <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Connected.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Whether you need to clear your inbox or stream your favorite show, our high-speed satellite Wi-Fi keeps you online from gate to gate.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Wi-Fi Plans */}
          <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                  <Wifi size={32} className="text-black dark:text-white" /> Wi-Fi Packages
              </h2>
              <div className="space-y-4">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold">Messaging</h3>
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-bold">Free</span>
                      </div>
                      <p className="text-silver-500 dark:text-silver-400 text-sm mb-4">
                          Keep in touch with friends and family via WhatsApp, iMessage, Messenger, and WeChat. Text only.
                      </p>
                      <ul className="space-y-2 text-sm">
                          <li className="flex gap-2 items-center"><Check size={14}/> Unlimited Duration</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> All Flopcoast Rewards Members</li>
                      </ul>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold">Surf & Browse</h3>
                          <span className="font-bold text-lg">$9.99 <span className="text-xs font-normal text-silver-500">/ flight</span></span>
                      </div>
                      <p className="text-silver-500 dark:text-silver-400 text-sm mb-4">
                          Perfect for browsing the web, checking emails, and social media scrolling.
                      </p>
                      <ul className="space-y-2 text-sm">
                          <li className="flex gap-2 items-center"><Check size={14}/> High-Speed Browsing</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> Email with Attachments</li>
                      </ul>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold">Stream</h3>
                          <span className="font-bold text-lg">$19.99 <span className="text-xs font-normal text-silver-500">/ flight</span></span>
                      </div>
                      <p className="text-silver-500 dark:text-silver-400 text-sm mb-4">
                          Our fastest connection. Stream video and music services like Netflix, YouTube, and Spotify.
                      </p>
                      <ul className="space-y-2 text-sm">
                          <li className="flex gap-2 items-center"><Check size={14}/> Video Streaming Supported</li>
                          <li className="flex gap-2 items-center"><Check size={14}/> Fastest Speeds Available</li>
                      </ul>
                  </div>
              </div>
          </div>

          {/* Power & Mobile */}
          <div className="space-y-8">
              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h2 className="text-2xl font-display font-bold flex items-center gap-3 mb-6">
                      <Zap size={28} /> Power Up
                  </h2>
                  <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                      Never run out of battery. Every seat in every cabin is equipped with personal power outlets.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center shrink-0 font-bold text-xs">USB</div>
                          <div>
                              <h4 className="font-bold">USB-A & USB-C</h4>
                              <p className="text-sm text-silver-500">Fast charging ports at every seat for phones and tablets.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center shrink-0 font-bold text-xs">AC</div>
                          <div>
                              <h4 className="font-bold">110V AC Power</h4>
                              <p className="text-sm text-silver-500">Universal power sockets available in all rows to keep your laptop running.</p>
                          </div>
                      </li>
                  </ul>
              </div>

              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h2 className="text-2xl font-display font-bold flex items-center gap-3 mb-6">
                      <Smartphone size={28} /> Mobile Data
                  </h2>
                  <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                      Thanks to our partnership with AeroMobile, you can use your mobile phone to send SMS and use data roaming just like you would on the ground. Charges are set by your mobile service provider.
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default InternetConnectivity;

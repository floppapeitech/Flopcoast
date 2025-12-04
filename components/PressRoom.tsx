
import React from 'react';
import { Newspaper, Calendar, Download, ArrowLeft, Mail, Phone, Image, FileText } from 'lucide-react';
import { ViewState } from '../types';

const PressRoom: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  const releases = [
      { date: 'June 10, 2024', title: 'Flopcoast Announces New Route to Antarctica (Seasonal)', category: 'Route Network' },
      { date: 'May 22, 2024', title: 'Q1 Financial Results: Record Profitability Amid Global Challenges', category: 'Financial' },
      { date: 'April 15, 2024', title: 'Sustainability Milestone: First 100% SAF Flight Completed', category: 'Sustainability' },
      { date: 'March 01, 2024', title: 'Flopcoast Unveils New First Class Suites on A350-1000', category: 'Product' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ABOUT')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to About Us
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Media <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Center.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          The latest news, press releases, and multimedia assets from Flopcoast Airways.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                  <Newspaper size={32} /> Latest Releases
              </h2>
              <div className="space-y-4">
                  {releases.map((item, idx) => (
                      <div key={idx} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors cursor-pointer group">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-silver-400 flex items-center gap-2">
                                  <Calendar size={12}/> {item.date}
                              </span>
                              <span className="bg-silver-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-bold">
                                  {item.category}
                              </span>
                          </div>
                          <h3 className="text-xl font-bold font-display group-hover:underline decoration-2 underline-offset-4 leading-tight">
                              {item.title}
                          </h3>
                      </div>
                  ))}
              </div>
              <button className="px-8 py-3 rounded-full border border-silver-200 dark:border-zinc-700 font-bold text-sm hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors">
                  Load More
              </button>
          </div>

          <div className="space-y-8">
              <div className="bg-black dark:bg-white text-white dark:text-black p-10 rounded-[2.5rem]">
                  <h3 className="text-2xl font-bold font-display mb-6">Media Contact</h3>
                  <div className="space-y-4 opacity-90 text-sm">
                      <div>
                          <div className="font-bold mb-1">Press Office (Global)</div>
                          <div className="flex items-center gap-2 mb-1"><Mail size={14}/> media@flopcoast.com</div>
                          <div className="flex items-center gap-2"><Phone size={14}/> +1 (800) 555-0199</div>
                      </div>
                      <div className="pt-4 border-t border-white/20 dark:border-black/20">
                          <div className="font-bold mb-1">Urgent Inquiries</div>
                          <p className="text-xs opacity-70">For breaking news and operational incidents only. 24/7 monitored.</p>
                          <div className="flex items-center gap-2 mt-2"><Phone size={14}/> +1 (800) 555-0911</div>
                      </div>
                  </div>
              </div>

              <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h3 className="text-2xl font-bold font-display mb-6">Brand Assets</h3>
                  <div className="space-y-4">
                      <button className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800 hover:bg-silver-50 dark:hover:bg-zinc-950 transition-colors">
                          <div className="flex items-center gap-3">
                              <Image size={20} className="text-silver-400"/>
                              <div className="text-left">
                                  <div className="font-bold text-sm">Logo Pack</div>
                                  <div className="text-xs text-silver-500">PNG, SVG, EPS</div>
                              </div>
                          </div>
                          <Download size={16} />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800 hover:bg-silver-50 dark:hover:bg-zinc-950 transition-colors">
                          <div className="flex items-center gap-3">
                              <Image size={20} className="text-silver-400"/>
                              <div className="text-left">
                                  <div className="font-bold text-sm">Aircraft Photos</div>
                                  <div className="text-xs text-silver-500">High Res JPG</div>
                              </div>
                          </div>
                          <Download size={16} />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl border border-silver-100 dark:border-zinc-800 hover:bg-silver-50 dark:hover:bg-zinc-950 transition-colors">
                          <div className="flex items-center gap-3">
                              <FileText size={20} className="text-silver-400"/>
                              <div className="text-left">
                                  <div className="font-bold text-sm">Executive Bios</div>
                                  <div className="text-xs text-silver-500">PDF</div>
                              </div>
                          </div>
                          <Download size={16} />
                      </button>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default PressRoom;
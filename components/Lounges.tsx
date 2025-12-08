
import React from 'react';
import { Armchair, Coffee, Wifi, ShowerHead, Briefcase, MapPin, Crown, ArrowLeft, Star, Users } from 'lucide-react';
import { ViewState } from '../types';

const Lounges: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          The <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Lounge</span> Collection.
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Escape the crowds. Whether you need to work, dine, or unwind, our exclusive lounges offer a sanctuary before your flight.
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] mb-20 relative group">
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-8">
                  <Crown size={64} className="mx-auto mb-6" />
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">The Potaxiene Flagship</h2>
                  <p className="text-lg opacity-90 max-w-xl mx-auto">Our newly renovated hub lounge features a champagne bar, private day suites, and direct boarding access.</p>
              </div>
          </div>
          <img src="https://images.unsplash.com/photo-1565514020176-db99d50ad7d3?q=80&w=2574&auto=format&fit=crop" alt="Luxury Lounge" className="w-full h-full object-cover" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white group-hover:scale-110 transition-transform">
                  <Coffee size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Gourmet Dining</h3>
              <p className="text-sm text-silver-500">Buffet and a la carte options prepared by resident chefs.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white group-hover:scale-110 transition-transform">
                  <ShowerHead size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Spa Showers</h3>
              <p className="text-sm text-silver-500">Private shower suites with luxury toiletries and fluffy towels.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white group-hover:scale-110 transition-transform">
                  <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Productivity</h3>
              <p className="text-sm text-silver-500">Soundproof work pods, high-speed Wi-Fi, and printing services.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-black dark:text-white group-hover:scale-110 transition-transform">
                  <Armchair size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Relaxation</h3>
              <p className="text-sm text-silver-500">Quiet zones with day beds and curated reading materials.</p>
          </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-3xl font-display font-bold mb-6">Who has access?</h3>
              <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-silver-100 dark:border-zinc-800">
                      <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
                          <Crown size={14} />
                      </div>
                      <span className="font-bold">First & Business Class Passengers</span>
                  </li>
                  <li className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-silver-100 dark:border-zinc-800">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold">
                          <Star size={14} />
                      </div>
                      <span className="font-bold">Gold, Platinum & Ultimate Members</span>
                  </li>
                  <li className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-silver-100 dark:border-zinc-800">
                      <div className="w-8 h-8 rounded-full bg-silver-400 text-white flex items-center justify-center font-bold">
                          <Users size={14} />
                      </div>
                      <span className="font-bold">Star Alliance Gold Members</span>
                  </li>
              </ul>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-3xl font-display font-bold mb-6">Global Locations</h3>
              <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-silver-100 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-silver-400" />
                          <span className="font-bold">London Heathrow (LHR)</span>
                      </div>
                      <span className="text-sm text-silver-500">Terminal 2, Near Gate B36</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-silver-100 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-silver-400" />
                          <span className="font-bold">New York (JFK)</span>
                      </div>
                      <span className="text-sm text-silver-500">Terminal 4, Concourse A</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-silver-100 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-silver-400" />
                          <span className="font-bold">Queen Jiafei (JLU)</span>
                      </div>
                      <span className="text-sm text-silver-500">The Crown Lounge, Royal Terminal</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-silver-100 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-silver-400" />
                          <span className="font-bold">Floptopia (PFFT)</span>
                      </div>
                      <span className="text-sm text-silver-500">Cyber Deck, Terminal Alpha</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-silver-100 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-silver-400" />
                          <span className="font-bold">Jilu City (JLC)</span>
                      </div>
                      <span className="text-sm text-silver-500">Après-Ski Lounge, Main Chalet</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-silver-100 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-silver-400" />
                          <span className="font-bold">Singapore (SIN)</span>
                      </div>
                      <span className="text-sm text-silver-500">Terminal 3, Level 3</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-silver-100 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-silver-400" />
                          <span className="font-bold">Los Angeles (LAX)</span>
                      </div>
                      <span className="text-sm text-silver-500">Tom Bradley Int'l, Level 6</span>
                  </div>
              </div>
              <button className="mt-6 text-sm font-bold underline decoration-2 underline-offset-4">View All Locations</button>
          </div>
      </div>

    </div>
  );
};

export default Lounges;

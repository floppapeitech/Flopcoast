
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Coffee, ShoppingBag, Train, Clock, Plane, Info, Snowflake, Crown, Zap, Mountain, ChevronDown } from 'lucide-react';
import { ViewState } from '../types';

interface AirportData {
    id: string;
    code: string;
    name: string;
    heroTitle: string;
    heroDesc: string;
    image: string;
    terminalName: string;
    terminalDesc: string;
    connectionTime: string;
    transferInfo: string;
    helpLocation: string;
    diningDesc: string;
    shoppingDesc: string;
    loungeDesc: string;
    themeColor: string;
}

const AirportGuide: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  const [selectedAirport, setSelectedAirport] = useState<string>('PIA');

  const airports: Record<string, AirportData> = {
      PIA: {
          id: 'PIA',
          code: 'PIA',
          name: 'Potaxiene',
          heroTitle: 'Welcome to The Hub.',
          heroDesc: 'Your guide to Potaxiene International Airport, the home of Flopcoast Airways. Discover world-class amenities and seamless connections.',
          image: 'https://images.unsplash.com/photo-1575549595260-29c8e036e680?q=80&w=2670&auto=format&fit=crop',
          terminalName: 'Terminal 4',
          terminalDesc: 'The exclusive home of Flopcoast Airways and our partners.',
          connectionTime: '60 Minutes (Int\'l)',
          transferInfo: '20 mins via AeroExpress',
          helpLocation: 'Located in Zone A, C, E',
          diningDesc: 'From quick bites to fine dining. Terminal 4 features over 30 restaurants including Shake Shack and the Caviar House.',
          shoppingDesc: 'World-class duty free shopping. Brands include Chanel, Hermes, Rolex, and the official Flopcoast Store.',
          loungeDesc: 'Terminal 4 hosts the Flagship First Lounge (Concourse A), Business Lounge (Concourse B), and Arrivals Lounge.',
          themeColor: 'bg-silver-100 dark:bg-zinc-800'
      },
      JLU: {
          id: 'JLU',
          code: 'JLU',
          name: 'Queen Jiafei',
          heroTitle: 'The Royal Gateway.',
          heroDesc: 'Experience elegance at Queen Jiafei International. Famous for its indoor botanical gardens and luxury retail.',
          image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2670&auto=format&fit=crop', // Placeholder luxury
          terminalName: 'The Royal Terminal',
          terminalDesc: 'A masterpiece of architecture blending futuristic design with lush hanging gardens.',
          connectionTime: '45 Minutes',
          transferInfo: 'Royal Tram Service (Free)',
          helpLocation: 'Concierge Desks at Every Gate',
          diningDesc: 'Indulge in high tea at The Palace Café or enjoy Michelin-starred dining pre-flight.',
          shoppingDesc: 'The "Fashion Avenue" features exclusive boutiques not found anywhere else in Floptropica.',
          loungeDesc: 'Home to the "Crown Lounge" on Level 4. Features complimentary spa treatments, a champagne bar, and private nap suites for premium passengers.',
          themeColor: 'bg-purple-100 dark:bg-purple-900/30'
      },
      PFFT: {
          id: 'PFFT',
          code: 'PFFT',
          name: 'Floptopia',
          heroTitle: 'Future Forward.',
          heroDesc: 'Floptopia International is a testament to technology. Experience the world\'s most advanced automated airport.',
          image: 'https://images.unsplash.com/photo-1629813282276-8c46f6f96788?q=80&w=2670&auto=format&fit=crop', // Placeholder tech
          terminalName: 'Terminal Alpha',
          terminalDesc: 'Fully automated check-in and biometric boarding gates for a seamless flow.',
          connectionTime: '30 Minutes (Automated)',
          transferInfo: 'Hyperloop Link (5 mins to City)',
          helpLocation: 'Digital AI Kiosks Everywhere',
          diningDesc: 'Robot-served sushi bars and grab-and-go smart markets. No queues, just food.',
          shoppingDesc: 'Tech-focused retail offering the latest gadgets, VR headsets, and digital art NFTs.',
          loungeDesc: 'The "Cyber Deck" lounge in Zone Z offers high-performance gaming rigs, soundproof coding pods, and ultra-fast 10Gbps Wi-Fi.',
          themeColor: 'bg-blue-100 dark:bg-blue-900/30'
      },
      JLC: {
          id: 'JLC',
          code: 'JLC',
          name: 'Jilu City',
          heroTitle: 'Alpine Arrival.',
          heroDesc: 'Gateway to the peaks. Jilu City Airport offers a cozy, chalet-style welcome to the mountains.',
          image: 'https://images.unsplash.com/photo-1483375801503-374c5f660610?q=80&w=2670&auto=format&fit=crop', // Placeholder snow
          terminalName: 'The Main Chalet',
          terminalDesc: 'Timber-framed architecture with roaring fireplaces and panoramic mountain views.',
          connectionTime: '40 Minutes',
          transferInfo: 'Snow Train / Ski Shuttle',
          helpLocation: 'Ski Valet & Info Desk',
          diningDesc: 'Warm up with hot chocolate, fondue, and hearty mountain stews at "The Summit" food court.',
          shoppingDesc: 'Specialized winter sports gear, thermal wear, and local artisan crafts.',
          loungeDesc: 'The "Après-Ski" lounge in the Main Chalet features cozy armchairs, open fireplaces, heated gear storage, and hot chocolate service.',
          themeColor: 'bg-orange-100 dark:bg-orange-900/30'
      }
  };

  const current = airports[selectedAirport];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <div className="relative inline-block text-left group z-30">
            <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border border-silver-200 dark:border-zinc-700 font-bold uppercase tracking-wider ${current.themeColor} bg-opacity-50 transition-colors`}>
                <MapPin size={16} />
                {current.name} ({current.code})
                <ChevronDown size={16} />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl shadow-xl bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                {Object.values(airports).map((apt) => (
                    <button
                        key={apt.id}
                        onClick={() => setSelectedAirport(apt.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex justify-between items-center hover:bg-silver-100 dark:hover:bg-zinc-800 ${selectedAirport === apt.id ? 'bg-silver-50 dark:bg-zinc-800' : ''}`}
                    >
                        {apt.name} <span className="text-xs text-silver-400 font-mono">{apt.code}</span>
                    </button>
                ))}
            </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          {current.heroTitle}
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          {current.heroDesc}
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8 rounded-[3rem] overflow-hidden shadow-2xl h-[500px] relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 p-8 text-white z-20">
                  <h3 className="text-3xl font-display font-bold">{current.terminalName}</h3>
                  <p className="opacity-90">{current.terminalDesc}</p>
              </div>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Clock size={24}/></div>
                      <div>
                          <h4 className="font-bold">Minimum Connection</h4>
                          <p className="text-sm text-silver-500">{current.connectionTime}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Train size={24}/></div>
                      <div>
                          <h4 className="font-bold">City Transfer</h4>
                          <p className="text-sm text-silver-500">{current.transferInfo}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Info size={24}/></div>
                      <div>
                          <h4 className="font-bold">Help Desks</h4>
                          <p className="text-sm text-silver-500">{current.helpLocation}</p>
                      </div>
                  </div>
              </div>

              <div className="bg-black dark:bg-white text-white dark:text-black p-8 rounded-[2.5rem] text-center">
                  <h4 className="font-bold text-xl mb-2">Terminal Map</h4>
                  <p className="text-sm opacity-70 mb-6">Navigate gates, lounges, and shops with our interactive map.</p>
                  <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                      View {current.code} Map
                  </button>
              </div>
          </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-3">
                  <Coffee size={24}/> Dining
              </h3>
              <p className="text-silver-500 mb-4 text-sm leading-relaxed">
                  {current.diningDesc}
              </p>
              <span className="text-xs font-bold uppercase tracking-wider">View Directory</span>
          </div>
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-3">
                  <ShoppingBag size={24}/> Shopping
              </h3>
              <p className="text-silver-500 mb-4 text-sm leading-relaxed">
                  {current.shoppingDesc}
              </p>
              <span className="text-xs font-bold uppercase tracking-wider">View Directory</span>
          </div>
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-3">
                  {selectedAirport === 'JLU' ? <Crown size={24}/> : selectedAirport === 'PFFT' ? <Zap size={24}/> : selectedAirport === 'JLC' ? <Mountain size={24}/> : <Coffee size={24}/>} Lounges
              </h3>
              <p className="text-silver-500 mb-4 text-sm leading-relaxed">
                  {current.loungeDesc}
              </p>
              <button 
                onClick={() => onNavigate('LOUNGES')}
                className="text-xs font-bold uppercase tracking-wider underline decoration-2 underline-offset-4"
              >
                  Lounge Access Info
              </button>
          </div>
      </div>

    </div>
  );
};

export default AirportGuide;

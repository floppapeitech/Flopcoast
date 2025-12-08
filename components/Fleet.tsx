
import React from 'react';
import { Plane, Users, Gauge, ArrowRight, Zap, Clock } from 'lucide-react';

const Fleet: React.FC = () => {
  const mainlineAircraft = [
      {
          model: 'Airbus A350-1000',
          type: 'Long Haul Flagship',
          seats: 334,
          range: '16,100 km',
          desc: 'The jewel of our fleet. The A350-1000 offers the quietest cabin in the sky, featuring our new enclosed First Class suites and extra-wide Economy seats.',
          image: 'https://images.unsplash.com/photo-1582234062828-d7037142436d?q=80&w=2670&auto=format&fit=crop'
      },
      {
          model: 'Airbus A350-900',
          type: 'Long Haul',
          seats: 300,
          range: '15,000 km',
          desc: 'Combining efficiency with luxury. Features mood lighting designed to reduce jet lag and large panoramic windows.',
          image: 'https://images.unsplash.com/photo-1629813282276-8c46f6f96788?q=80&w=2670&auto=format&fit=crop'
      },
      {
          model: 'Airbus A380-800',
          type: 'Super Heavy',
          seats: 484,
          range: '15,200 km',
          desc: 'The giant of the skies. Experience the upper deck Lounge, Shower Spas in First Class, and unmatched spaciousness in all cabins.',
          image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2500&auto=format&fit=crop'
      },
      {
          model: 'Boeing 777-300ER',
          type: 'Long Haul',
          seats: 396,
          range: '13,650 km',
          desc: 'A favorite among frequent flyers. Renowned for its reliability and range, connecting our furthest destinations with ease.',
          image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2574&auto=format&fit=crop'
      },
      {
          model: 'Boeing 787-10 Dreamliner',
          type: 'High Capacity Long Haul',
          seats: 318,
          range: '11,910 km',
          desc: 'The largest of the Dreamliner family. Advanced aerodynamics and composite materials provide a smoother ride through turbulence.',
          image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2670&auto=format&fit=crop'
      },
      {
          model: 'Boeing 787-9 Dreamliner',
          type: 'Long Haul',
          seats: 290,
          range: '14,140 km',
          desc: 'Optimized for comfort with higher cabin humidity and lower cabin altitude, leaving you feeling refreshed upon arrival.',
          image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2670&auto=format&fit=crop'
      },
      {
          model: 'Boeing 787-8 Dreamliner',
          type: 'Long Haul',
          seats: 242,
          range: '13,620 km',
          desc: 'The pioneer of the 787 family. Perfectly sized for our thinner long-haul routes while offering the same passenger comforts.',
          image: 'https://images.unsplash.com/photo-1520437359656-e9803d9d249c?q=80&w=2670&auto=format&fit=crop'
      },
      {
          model: 'Airbus A330neo-900',
          type: 'Medium/Long Haul',
          seats: 287,
          range: '13,334 km',
          desc: 'Featuring the new Airspace cabin with larger overhead bins, updated restrooms, and the latest generation in-flight entertainment.',
          image: 'https://images.unsplash.com/photo-1589736862378-c08170b0cc8e?q=80&w=2574&auto=format&fit=crop'
      },
      {
          model: 'Airbus A321neo',
          type: 'Medium Haul',
          seats: 196,
          range: '7,400 km',
          desc: 'The most efficient single-aisle aircraft. Perfect for regional routes and thinner long-haul connections.',
          image: 'https://images.unsplash.com/photo-1544669866-9b0d170464f1?q=80&w=2670&auto=format&fit=crop'
      }
  ];

  const regionalAircraft = [
      {
          model: 'Airbus A320neo',
          type: 'Short Haul',
          seats: 180,
          range: '6,300 km',
          desc: 'The backbone of our regional network. Quiet, efficient, and featuring the widest single-aisle cabin in the sky.',
          image: 'https://images.unsplash.com/photo-1561131668-f63504fb5498?q=80&w=2574&auto=format&fit=crop'
      },
      {
          model: 'Boeing 737 MAX 8',
          type: 'Short/Medium Haul',
          seats: 178,
          range: '6,570 km',
          desc: 'Features the new Boeing Sky Interior with modern sculpted sidewalls and window reveals that draw your eye to the view.',
          image: 'https://images.unsplash.com/photo-1566826725068-07e37c3a0491?q=80&w=2574&auto=format&fit=crop'
      },
      {
          model: 'Airbus A220-300',
          type: 'Regional Jet',
          seats: 140,
          range: '6,200 km',
          desc: 'Purpose-built for efficiency. With a 2-3 seating configuration, it offers fewer middle seats and large windows for a brighter cabin.',
          image: 'https://images.unsplash.com/photo-1620633656387-9975775c7428?q=80&w=2670&auto=format&fit=crop'
      }
  ];

  const onOrder = [
      { model: 'Airbus A321neo', desc: 'Expanding our capacity for longer thin routes.' },
      { model: 'Airbus A220-100', desc: 'For accessing smaller regional airports with short runways.' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Meet our <span className="text-silver-400 dark:text-zinc-600 italic font-serif">modern fleet.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          One of the youngest and most efficient fleets in the sky. Designed for safety, sustainability, and your ultimate comfort.
        </p>
      </div>

      <div className="space-y-24">
          
          {/* Mainline */}
          <div className="space-y-12">
              <h2 className="text-3xl font-display font-bold border-b border-silver-200 dark:border-zinc-800 pb-4">Flopcoast International</h2>
              <div className="space-y-16">
                  {mainlineAircraft.map((plane, idx) => (
                      <div key={idx} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-silver-200 dark:border-zinc-800 shadow-xl flex flex-col lg:flex-row group">
                          <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                              <img src={plane.image} alt={plane.model} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                              <div className="flex items-center gap-2 text-silver-400 text-xs font-bold uppercase tracking-wider mb-2">
                                  <Plane size={14} /> {plane.type}
                              </div>
                              <h2 className="text-3xl font-display font-bold mb-4">{plane.model}</h2>
                              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-8">
                                  {plane.desc}
                              </p>
                              
                              <div className="grid grid-cols-2 gap-6 border-t border-silver-100 dark:border-zinc-800 pt-6">
                                  <div>
                                      <div className="text-xs text-silver-400 uppercase font-bold mb-1 flex items-center gap-1"><Users size={12}/> Capacity</div>
                                      <div className="text-xl font-bold">{plane.seats} Seats</div>
                                  </div>
                                  <div>
                                      <div className="text-xs text-silver-400 uppercase font-bold mb-1 flex items-center gap-1"><Gauge size={12}/> Range</div>
                                      <div className="text-xl font-bold">{plane.range}</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Flopcoast Airways Regional */}
          <div className="space-y-12">
              <div className="flex items-end justify-between border-b border-silver-200 dark:border-zinc-800 pb-4">
                  <div>
                      <h2 className="text-3xl font-display font-bold">Flopcoast Airways Regional</h2>
                      <p className="text-silver-500 mt-2">Our dedicated regional carrier connecting smaller communities to our global hubs.</p>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Short Haul</span>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                  {regionalAircraft.map((plane, idx) => (
                      <div key={idx} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-silver-200 dark:border-zinc-800 shadow-md group">
                          <div className="relative overflow-hidden h-48">
                              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                              <img src={plane.image} alt={plane.model} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <div className="p-8">
                              <h3 className="text-2xl font-display font-bold mb-2">{plane.model}</h3>
                              <p className="text-sm text-silver-500 dark:text-silver-400 leading-relaxed mb-6 h-20">
                                  {plane.desc}
                              </p>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div className="bg-silver-50 dark:bg-zinc-950 p-3 rounded-xl">
                                      <div className="text-xs text-silver-400 font-bold uppercase mb-1">Seats</div>
                                      <div className="font-bold">{plane.seats}</div>
                                  </div>
                                  <div className="bg-silver-50 dark:bg-zinc-950 p-3 rounded-xl">
                                      <div className="text-xs text-silver-400 font-bold uppercase mb-1">Range</div>
                                      <div className="font-bold">{plane.range}</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Future Fleet */}
          <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12">
              <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                  <Clock size={32} /> On Order
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                  {onOrder.map((order, idx) => (
                      <div key={idx} className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-100 dark:border-zinc-800 flex items-center gap-6">
                          <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-black dark:text-white shrink-0">
                              <Zap size={24} />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold mb-1">{order.model}</h3>
                              <p className="text-silver-500 text-sm">{order.desc}</p>
                              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-2 block">Arriving 2025</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

      </div>
    </div>
  );
};

export default Fleet;

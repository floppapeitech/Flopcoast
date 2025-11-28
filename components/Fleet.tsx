
import React from 'react';
import { Plane, Users, Gauge, ArrowRight } from 'lucide-react';

const Fleet: React.FC = () => {
  const aircraft = [
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
          model: 'Airbus A330neo-900',
          type: 'Medium/Long Haul',
          seats: 287,
          range: '13,334 km',
          desc: 'Featuring the new Airspace cabin with larger overhead bins, updated restrooms, and the latest generation in-flight entertainment.',
          image: 'https://images.unsplash.com/photo-1589736862378-c08170b0cc8e?q=80&w=2574&auto=format&fit=crop'
      },
      {
          model: 'Airbus A321neo',
          type: 'Short/Medium Haul',
          seats: 196,
          range: '7,400 km',
          desc: 'The most efficient single-aisle aircraft. Perfect for regional routes and thinner long-haul connections.',
          image: 'https://images.unsplash.com/photo-1544669866-9b0d170464f1?q=80&w=2670&auto=format&fit=crop'
      }
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

      <div className="space-y-16">
          {aircraft.map((plane, idx) => (
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
  );
};

export default Fleet;

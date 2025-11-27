
import React, { useState } from 'react';
import { MapPin, Thermometer, Info, X, ExternalLink } from 'lucide-react';

interface Route {
  id: string;
  from: { x: number; y: number; name: string; temp: string; desc: string };
  to: { x: number; y: number; name: string; temp: string; desc: string };
}

// Enriched mock data including new fictional cities
const CITY_DATA = {
    'New York (JFK)': { temp: '68°F', desc: 'The city that never sleeps. Explore Broadway, Central Park, and world-class dining.' },
    'London (LHR)': { temp: '55°F', desc: 'A blend of history and modernity. Visit the Tower of London, Big Ben, and the Shard.' },
    'Tokyo (HND)': { temp: '72°F', desc: 'Neon lights meet traditional temples. Experience sushi, Shibuya Crossing, and anime culture.' },
    'Los Angeles (LAX)': { temp: '75°F', desc: 'The entertainment capital. Beaches, Hollywood, and endless sunshine await.' },
    'Dubai (DXB)': { temp: '95°F', desc: 'Luxury redefined. See the Burj Khalifa, Palm Jumeirah, and vast desert landscapes.' },
    'Singapore (SIN)': { temp: '82°F', desc: 'A garden city. Discover Marina Bay Sands, Gardens by the Bay, and hawker centers.' },
    'Sao Paulo (GRU)': { temp: '78°F', desc: 'A vibrant metropolis known for its cultural institutions and rich architectural tradition.' },
    'Buenos Aires (EZE)': { temp: '65°F', desc: 'The Paris of South America. Enjoy Tango, steak, and European-style architecture.' },
    'Bogota (BOG)': { temp: '60°F', desc: 'High-altitude capital featuring cobblestoned center La Candelaria and museums.' },
    'Lima (LIM)': { temp: '67°F', desc: 'The gastronomic capital of the Americas. Gateway to Machu Picchu.' },
    'Santiago (SCL)': { temp: '60°F', desc: 'Nestled next to the Andes. Known for its vineyards and historic colonial core.' },
    'Seoul (ICN)': { temp: '65°F', desc: 'Dynamic blend of palaces and K-pop culture. Shopping, street food, and innovation.' },
    'Bangkok (BKK)': { temp: '88°F', desc: 'Vibrant street life and ornate shrines. The boat-filled Chao Phraya River feeds its network of canals.' },
    
    // New Real World Cities
    'Beijing (PEK)': { temp: '60°F', desc: 'The heart of China, featuring the Forbidden City, Great Wall, and expansive history.' },
    'Shanghai (PVG)': { temp: '64°F', desc: 'A futuristic skyline on the Bund meets traditional gardens and bustling markets.' },
    'Hong Kong (HKG)': { temp: '75°F', desc: 'Where East meets West. Famous for its skyline, Victoria Peak, and dim sum.' },
    'Mumbai (BOM)': { temp: '85°F', desc: 'The City of Dreams. Home to Bollywood, colonial architecture, and lively bazaars.' },
    'Rio de Janeiro (GIG)': { temp: '80°F', desc: 'Marvelous City with Copacabana beach, Christ the Redeemer, and Carnival spirit.' },
    'Cusco (CUZ)': { temp: '55°F', desc: 'Historic capital of the Inca Empire. The gateway to the Sacred Valley and Machu Picchu.' },

    // AFRICA
    'Cairo (CAI)': { temp: '85°F', desc: 'Home to the Giza Pyramids and the Sphinx. A city where ancient history meets modern chaos.' },
    'Johannesburg (JNB)': { temp: '70°F', desc: 'South Africa’s biggest city, offering a window into the country’s history at the Apartheid Museum.' },
    'Lagos (LOS)': { temp: '88°F', desc: 'A powerhouse of energy, music, and commerce. Known for its beach resorts and nightlife.' },

    // EUROPE
    'Paris (CDG)': { temp: '60°F', desc: 'The City of Light. Iconic for the Eiffel Tower, Louvre Museum, and cafe culture.' },
    'Berlin (BER)': { temp: '55°F', desc: 'A hub of art and history. Famous for the Berlin Wall remnants and vibrant nightlife.' },
    'Rome (FCO)': { temp: '65°F', desc: 'The Eternal City. Walk through the Colosseum, Roman Forum, and Vatican City.' },
    'Madrid (MAD)': { temp: '62°F', desc: 'Known for its elegant boulevards, the Prado Museum, and vibrant plazas.' },

    // NORTH AMERICA
    'Toronto (YYZ)': { temp: '58°F', desc: 'Canada’s largest city, featuring the CN Tower and multicultural neighborhoods.' },
    'Mexico City (MEX)': { temp: '72°F', desc: 'A high-altitude capital famous for its Templo Mayor, baroque cathedral, and cuisine.' },
    'Chicago (ORD)': { temp: '60°F', desc: 'The Windy City, renowned for its bold architecture and deep-dish pizza.' },
    'Vancouver (YVR)': { temp: '55°F', desc: 'A bustling west coast seaport in British Columbia, surrounded by mountains.' },

    // New Fictional Cities
    'Erendits (ERD)': { temp: '62°F', desc: 'A coastal gem known for its ancient ruins and pristine turquoise waters.' },
    'Manipple (MAY)': { temp: '88°F', desc: 'The vibrant heart of the Mantu region, famous for spicy street food and night markets.' },
    'Queen Jiafei (JLU)': { temp: '70°F', desc: 'A regal city blending futuristic architecture with lush royal gardens.' },
    'Floptopia (FLP)': { temp: '74°F', desc: 'The cultural capital of the internet age, featuring avant-garde art and memes.' },
    'Jilu City (JLC)': { temp: '50°F', desc: 'Nestled in the mountains, offering breathtaking ski slopes and cozy chalets.' },
    'Da Hood (DHR)': { temp: '85°F', desc: 'An urban sprawl with a gritty charm, legendary hip-hop scene, and street art.' },
    'Alejandra Coast (AJC)': { temp: '90°F', desc: 'Sun-soaked beaches stretching for miles, perfect for surfing and relaxation.' },
    'Summeria (XSX)': { temp: '80°F', desc: 'Eternal summer vibes with tropical festivals year-round.' },
    'Poosay Bottom (PBT)': { temp: '76°F', desc: 'A valley region known for its unique geography and friendly locals.' },
};

const ROUTES: Route[] = [
  { id: 'r1', from: { x: 260, y: 160, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 470, y: 140, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r2', from: { x: 470, y: 140, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 800, y: 180, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  { id: 'r3', from: { x: 260, y: 160, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 200, y: 200, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  { id: 'r4', from: { x: 470, y: 140, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 550, y: 250, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  { id: 'r5', from: { x: 550, y: 250, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] }, to: { x: 740, y: 300, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] } },
  // South America Routes
  { id: 'r6', from: { x: 260, y: 160, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 280, y: 280, name: 'Bogota (BOG)', ...CITY_DATA['Bogota (BOG)'] } },
  { id: 'r7', from: { x: 280, y: 280, name: 'Bogota (BOG)', ...CITY_DATA['Bogota (BOG)'] }, to: { x: 330, y: 380, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] } },
  { id: 'r8', from: { x: 330, y: 380, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] }, to: { x: 300, y: 430, name: 'Buenos Aires (EZE)', ...CITY_DATA['Buenos Aires (EZE)'] } },
  
  // New S. America Routes (Expanded)
  { id: 'r20', from: { x: 200, y: 200, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 270, y: 350, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] } },
  { id: 'r21', from: { x: 270, y: 350, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] }, to: { x: 290, y: 410, name: 'Santiago (SCL)', ...CITY_DATA['Santiago (SCL)'] } },
  { id: 'r30', from: { x: 330, y: 380, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] }, to: { x: 350, y: 370, name: 'Rio de Janeiro (GIG)', ...CITY_DATA['Rio de Janeiro (GIG)'] } },
  { id: 'r31', from: { x: 270, y: 350, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] }, to: { x: 285, y: 365, name: 'Cusco (CUZ)', ...CITY_DATA['Cusco (CUZ)'] } },

  // New Asian Routes (Expanded)
  { id: 'r22', from: { x: 800, y: 180, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 780, y: 170, name: 'Seoul (ICN)', ...CITY_DATA['Seoul (ICN)'] } },
  { id: 'r23', from: { x: 740, y: 300, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 730, y: 260, name: 'Bangkok (BKK)', ...CITY_DATA['Bangkok (BKK)'] } },
  { id: 'r24', from: { x: 800, y: 180, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 770, y: 150, name: 'Beijing (PEK)', ...CITY_DATA['Beijing (PEK)'] } },
  { id: 'r25', from: { x: 800, y: 180, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 790, y: 190, name: 'Shanghai (PVG)', ...CITY_DATA['Shanghai (PVG)'] } },
  { id: 'r26', from: { x: 470, y: 140, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 760, y: 210, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] } },
  { id: 'r27', from: { x: 740, y: 300, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 650, y: 270, name: 'Mumbai (BOM)', ...CITY_DATA['Mumbai (BOM)'] } },

  // --- NEW AFRICA ROUTES ---
  { id: 'r40', from: { x: 470, y: 140, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 550, y: 180, name: 'Cairo (CAI)', ...CITY_DATA['Cairo (CAI)'] } },
  { id: 'r41', from: { x: 550, y: 180, name: 'Cairo (CAI)', ...CITY_DATA['Cairo (CAI)'] }, to: { x: 550, y: 250, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  { id: 'r42', from: { x: 470, y: 140, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 480, y: 260, name: 'Lagos (LOS)', ...CITY_DATA['Lagos (LOS)'] } },
  { id: 'r43', from: { x: 480, y: 260, name: 'Lagos (LOS)', ...CITY_DATA['Lagos (LOS)'] }, to: { x: 580, y: 350, name: 'Johannesburg (JNB)', ...CITY_DATA['Johannesburg (JNB)'] } },

  // --- NEW EUROPE ROUTES ---
  { id: 'r50', from: { x: 470, y: 140, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 480, y: 150, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  { id: 'r51', from: { x: 480, y: 150, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] }, to: { x: 510, y: 130, name: 'Berlin (BER)', ...CITY_DATA['Berlin (BER)'] } },
  { id: 'r52', from: { x: 480, y: 150, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] }, to: { x: 500, y: 160, name: 'Rome (FCO)', ...CITY_DATA['Rome (FCO)'] } },
  { id: 'r53', from: { x: 260, y: 160, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 450, y: 160, name: 'Madrid (MAD)', ...CITY_DATA['Madrid (MAD)'] } },

  // --- NEW NORTH AMERICA ROUTES ---
  { id: 'r60', from: { x: 260, y: 160, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 250, y: 150, name: 'Toronto (YYZ)', ...CITY_DATA['Toronto (YYZ)'] } },
  { id: 'r61', from: { x: 260, y: 160, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 220, y: 160, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] } },
  { id: 'r62', from: { x: 200, y: 200, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 200, y: 220, name: 'Mexico City (MEX)', ...CITY_DATA['Mexico City (MEX)'] } },
  { id: 'r63', from: { x: 200, y: 200, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 180, y: 130, name: 'Vancouver (YVR)', ...CITY_DATA['Vancouver (YVR)'] } },
  
  // New Routes for Fictional Cities
  { id: 'r9', from: { x: 800, y: 180, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 850, y: 250, name: 'Queen Jiafei (JLU)', ...CITY_DATA['Queen Jiafei (JLU)'] } },
  { id: 'r10', from: { x: 850, y: 250, name: 'Queen Jiafei (JLU)', ...CITY_DATA['Queen Jiafei (JLU)'] }, to: { x: 900, y: 300, name: 'Floptopia (FLP)', ...CITY_DATA['Floptopia (FLP)'] } },
  { id: 'r11', from: { x: 740, y: 300, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 680, y: 350, name: 'Manipple (MAY)', ...CITY_DATA['Manipple (MAY)'] } },
  { id: 'r12', from: { x: 680, y: 350, name: 'Manipple (MAY)', ...CITY_DATA['Manipple (MAY)'] }, to: { x: 650, y: 400, name: 'Alejandra Coast (AJC)', ...CITY_DATA['Alejandra Coast (AJC)'] } },
  { id: 'r13', from: { x: 200, y: 200, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 150, y: 250, name: 'Summeria (XSX)', ...CITY_DATA['Summeria (XSX)'] } },
  { id: 'r14', from: { x: 470, y: 140, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 500, y: 100, name: 'Erendits (ERD)', ...CITY_DATA['Erendits (ERD)'] } },
  { id: 'r15', from: { x: 500, y: 100, name: 'Erendits (ERD)', ...CITY_DATA['Erendits (ERD)'] }, to: { x: 550, y: 80, name: 'Jilu City (JLC)', ...CITY_DATA['Jilu City (JLC)'] } },
  { id: 'r16', from: { x: 260, y: 160, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 240, y: 130, name: 'Da Hood (DHR)', ...CITY_DATA['Da Hood (DHR)'] } },
  { id: 'r17', from: { x: 150, y: 250, name: 'Summeria (XSX)', ...CITY_DATA['Summeria (XSX)'] }, to: { x: 180, y: 300, name: 'Poosay Bottom (PBT)', ...CITY_DATA['Poosay Bottom (PBT)'] } },
];

const InteractiveMap: React.FC = () => {
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<{name: string, temp: string, desc: string} | null>(null);

  const handleCityClick = (name: string) => {
    // @ts-ignore
    const data = CITY_DATA[name];
    if (data) {
        setSelectedCity({ name, ...data });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Network</h2>
        <p className="text-silver-500 dark:text-silver-400">Connecting you to the world's most vibrant cities.</p>
      </div>

      <div className="relative w-full aspect-[16/8] bg-silver-100 dark:bg-zinc-900/50 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 overflow-hidden shadow-inner">
        {/* SVG Map */}
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(100,100,100,0)" />
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="100%" stopColor="rgba(100,100,100,0)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* World Map Silhouette (Simplified Abstract) */}
          <path d="M150 150 Q 200 100 300 150 T 450 120 T 600 160 T 800 150" fill="none" stroke="currentColor" strokeWidth="2" className="text-silver-300 dark:text-zinc-800 opacity-20" />
          <path d="M180 250 Q 250 300 350 250" fill="none" stroke="currentColor" strokeWidth="2" className="text-silver-300 dark:text-zinc-800 opacity-20" />
          <path d="M500 200 Q 550 300 600 280 T 750 350" fill="none" stroke="currentColor" strokeWidth="2" className="text-silver-300 dark:text-zinc-800 opacity-20" />
          
          {/* South America Silhouette (Abstract) */}
          <path d="M280 280 L 350 300 L 330 450 L 290 430 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-silver-300 dark:text-zinc-800 opacity-20" />

          {/* Routes */}
          {ROUTES.map((route) => {
            const isHovered = hoveredRoute === route.id;
            return (
              <g key={route.id} 
                 onMouseEnter={() => setHoveredRoute(route.id)}
                 onMouseLeave={() => setHoveredRoute(null)}
                 className="cursor-pointer transition-all duration-300"
              >
                {/* Bezier curve for route */}
                <path 
                  d={`M${route.from.x} ${route.from.y} Q ${(route.from.x + route.to.x)/2} ${(route.from.y + route.to.y)/2 - 50} ${route.to.x} ${route.to.y}`}
                  fill="none"
                  stroke={isHovered ? 'currentColor' : 'currentColor'}
                  strokeWidth={isHovered ? 3 : 1}
                  className={`${isHovered ? 'text-black dark:text-white' : 'text-silver-400 dark:text-zinc-700'} transition-colors duration-500`}
                  filter={isHovered ? "url(#glow)" : ""}
                  strokeDasharray={isHovered ? "5,0" : "5,5"}
                >
                  {isHovered && (
                     <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" repeatCount="indefinite" />
                  )}
                </path>
              </g>
            );
          })}

          {/* Cities */}
          {ROUTES.reduce<{x:number,y:number,name:string}[]>((acc, curr) => {
             if (!acc.find(c => c.name === curr.from.name)) acc.push(curr.from);
             if (!acc.find(c => c.name === curr.to.name)) acc.push(curr.to);
             return acc;
          }, []).map((city, idx) => (
            <g key={idx} 
               onMouseEnter={() => setHoveredCity(city.name)}
               onMouseLeave={() => setHoveredCity(null)}
               onClick={() => handleCityClick(city.name)}
               className="cursor-pointer"
            >
              <circle cx={city.x} cy={city.y} r={hoveredCity === city.name ? 8 : 4} className="fill-black dark:fill-white transition-all duration-300" />
              <circle cx={city.x} cy={city.y} r={16} className={`fill-black/10 dark:fill-white/10 ${hoveredCity === city.name ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-300`} />
              
              {/* Tooltip */}
              <g className={`transition-opacity duration-300 ${hoveredCity === city.name ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
                <rect x={city.x - 40} y={city.y - 45} width="80" height="25" rx="12.5" className="fill-white dark:fill-zinc-800 drop-shadow-lg" />
                <text x={city.x} y={city.y - 28} textAnchor="middle" className="text-[10px] font-bold fill-black dark:fill-white uppercase tracking-wider">{city.name.split(' ')[0]}</text>
              </g>
            </g>
          ))}
        </svg>

        {/* Overlay Info */}
        <div className="absolute bottom-6 left-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-4 rounded-2xl border border-silver-200 dark:border-zinc-800 text-xs">
          <div className="flex items-center gap-2 mb-1 font-bold">
            <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse"></div>
            Live Network Status
          </div>
          <p className="text-silver-500">100% Operational</p>
        </div>

        {/* Selected City Modal Overlay */}
        {selectedCity && (
            <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-2xl w-64 md:w-80 relative">
                    <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedCity(null); }}
                        className="absolute top-4 right-4 p-1 hover:bg-silver-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <X size={16} />
                    </button>
                    <div className="flex items-center gap-2 text-silver-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <MapPin size={12} /> Destination
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-1">{selectedCity.name.split(' (')[0]}</h3>
                    <p className="text-xs text-silver-500 mb-4">{selectedCity.name.match(/\(([^)]+)\)/)?.[1]}</p>
                    
                    <div className="flex items-center gap-2 mb-4 bg-silver-50 dark:bg-zinc-950 p-3 rounded-xl">
                        <Thermometer size={18} className="text-silver-400" />
                        <span className="font-bold">{selectedCity.temp}</span>
                        <span className="text-silver-400 text-sm">Current Temp</span>
                    </div>

                    <p className="text-sm text-silver-600 dark:text-silver-300 leading-relaxed mb-4">
                        {selectedCity.desc}
                    </p>

                    <button className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        Explore Flights <ExternalLink size={14} />
                    </button>
                </div>
            </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveMap;

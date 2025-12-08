
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, MapPin, Users, Plane, Loader2, ShieldCheck, Info, ChevronDown, ChevronUp, Sparkles, ArrowLeftRight, Search, Hash, Heart, Ban, Briefcase, Clock } from 'lucide-react';
import { SearchCriteria } from '../types';

interface HeroProps {
  onSearch: (criteria: SearchCriteria) => void;
}

const CITIES = [
  // North America
  'New York (JFK)', 'Los Angeles (LAX)', 'Chicago (ORD)', 'Toronto (YYZ)', 'Vancouver (YVR)',
  'San Francisco (SFO)', 'Miami (MIA)', 'Las Vegas (LAS)', 'Atlanta (ATL)', 'Dallas (DFW)',
  'Denver (DEN)', 'Seattle (SEA)', 'Boston (BOS)', 'Orlando (MCO)', 'Montreal (YUL)', 
  'Mexico City (MEX)', 'Cancun (CUN)', 'San Diego (SAN)', 'Philadelphia (PHL)', 'Phoenix (PHX)',
  'Houston (IAH)', 'Detroit (DTW)', 'Minneapolis (MSP)', 'Calgary (YYC)', 'Portland (PDX)', 
  'Salt Lake City (SLC)',

  // Europe
  'London (LHR)', 'Paris (CDG)', 'Frankfurt (FRA)', 'Amsterdam (AMS)', 'Madrid (MAD)',
  'Rome (FCO)', 'Berlin (BER)', 'Munich (MUC)', 'Zurich (ZRH)', 'Barcelona (BCN)',
  'Dublin (DUB)', 'Lisbon (LIS)', 'Vienna (VIE)', 'Copenhagen (CPH)', 'Milan (MXP)',
  'Istanbul (IST)', 'Athens (ATH)', 'Stockholm (ARN)', 'Manchester (MAN)', 'Brussels (BRU)',
  'Geneva (GVA)', 'Oslo (OSL)', 'Helsinki (HEL)', 'Warsaw (WAW)', 'Prague (PRG)', 'Budapest (BUD)',
  'Edinburgh (EDI)', 'Nice (NCE)', 'Reykjavik (KEF)', 'Malta (MLA)',

  // Asia & Middle East
  'Tokyo (HND)', 'Singapore (SIN)', 'Dubai (DXB)', 'Doha (DOH)', 'Hong Kong (HKG)',
  'Bangkok (BKK)', 'Seoul (ICN)', 'Beijing (PEK)', 'Shanghai (PVG)', 'Mumbai (BOM)',
  'Delhi (DEL)', 'Bangalore (BLR)', 'Kuala Lumpur (KUL)', 'Jakarta (CGK)', 'Manila (MNL)',
  'Taipei (TPE)', 'Abu Dhabi (AUH)', 'Osaka (KIX)', 'Ho Chi Minh City (SGN)', 'Hanoi (HAN)',
  'Chennai (MAA)', 'Riyadh (RUH)', 'Maldives (MLE)', 'Kathmandu (KTM)',
  'Colombo (CMB)', 'Muscat (MCT)',

  // Oceania
  'Sydney (SYD)', 'Melbourne (MEL)', 'Auckland (AKL)', 'Brisbane (BNE)', 'Perth (PER)',
  'Christchurch (CHC)', 'Fiji (NAN)', 'Adelaide (ADL)',

  // South America
  'Sao Paulo (GRU)', 'Buenos Aires (EZE)', 'Bogota (BOG)', 'Santiago (SCL)', 'Lima (LIM)',
  'Rio de Janeiro (GIG)', 'Cusco (CUZ)', 'Brasilia (BSB)', 'Panama City (PTY)', 'Quito (UIO)',
  'Medellin (MDE)', 'Cartagena (CTG)',

  // Africa
  'Cairo (CAI)', 'Johannesburg (JNB)', 'Lagos (LOS)', 'Casablanca (CMN)', 'Nairobi (NBO)',
  'Addis Ababa (ADD)', 'Cape Town (CPT)', 'Marrakech (RAK)', 'Accra (ACC)', 'Dakar (DSS)',

  // Fictional
  'Queen Jiafei (JLU)', 'Floptopia (FLP)', 'Summeria (XSX)', 'Erendits (ERD)',
  'Manipple (MAY)', 'Alejandra Coast (AJC)', 'Jilu City (JLC)', 'Da Hood (DHR)',
  'Poosay Bottom (PBT)'
];

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'book' | 'status' | 'checkin'>('book');
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showInsuranceDetails, setShowInsuranceDetails] = useState(false);
  
  const [formData, setFormData] = useState<{
    from: string;
    to: string;
    date: string;
    passengers: number;
    includeInsurance: boolean;
    flightType: 'one-way' | 'return';
    travelClass: 'Economy' | 'Premium Economy' | 'Business' | 'First Class';
    flightNumber?: string;
  }>({
    from: '',
    to: '',
    date: '',
    passengers: 1,
    includeInsurance: false,
    flightType: 'one-way',
    travelClass: 'Economy',
    flightNumber: ''
  });

  // Load Recent Searches
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'book') {
        if (!formData.from || !formData.to) return;
    } else if (activeTab === 'status') {
        if (!formData.flightNumber) return;
    }

    setIsSearching(true);
    
    // Save to Recent if booking
    if (activeTab === 'book') {
        const searchString = `${formData.from} to ${formData.to}`;
        const newRecents = [searchString, ...recentSearches.filter(s => s !== searchString)].slice(0, 5);
        setRecentSearches(newRecents);
        localStorage.setItem('recentSearches', JSON.stringify(newRecents));
    }

    // Simulate Network Delay for animation effect
    setTimeout(() => {
      setIsSearching(false);
      onSearch(formData);
    }, 1500);
  };

  const loadRecent = (search: string) => {
    const [from, to] = search.split(' to ');
    setFormData({ ...formData, from, to });
    setActiveTab('book');
  };

  const handleSmartSuggest = () => {
    setActiveTab('book');
    const randomFrom = CITIES[Math.floor(Math.random() * CITIES.length)];
    let randomTo = CITIES[Math.floor(Math.random() * CITIES.length)];
    while (randomTo === randomFrom) {
        randomTo = CITIES[Math.floor(Math.random() * CITIES.length)];
    }
    
    // Random date within next 30 days
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 30) + 1);
    const dateStr = date.toISOString().split('T')[0];

    setFormData({
        ...formData,
        from: randomFrom,
        to: randomTo,
        date: dateStr
    });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-silver-200 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-silver-200 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center mb-12">
        
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-silver-100 dark:bg-zinc-800/50 border border-silver-200 dark:border-zinc-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-silver-600 dark:text-silver-300">New Routes to Africa & Europe</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight">
            Elevate your <br/>
            <span className="text-silver-400 dark:text-zinc-600 italic font-serif">journey</span> with <br/>
            Flopcoast.
          </h1>
          
          <p className="text-lg md:text-xl text-silver-500 dark:text-silver-400 max-w-md leading-relaxed">
            Experience premium service without the premium price tag. We believe friendly skies should be accessible to everyone.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform">
              Explore Destinations <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 rounded-full font-semibold border border-silver-200 dark:border-zinc-700 hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors">
              Our Fleet
            </button>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-xl lg:ml-auto transform transition-all hover:scale-[1.01] duration-500">
          {/* Prominent Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-silver-400/20 via-silver-200/20 to-transparent dark:from-white/10 dark:via-zinc-800/10 dark:to-transparent rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          
          {/* Ambient Rim Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-white to-silver-200 dark:from-zinc-700 dark:to-zinc-900 rounded-[2.6rem] blur opacity-40 dark:opacity-40 pointer-events-none"></div>

          {/* Main Card Container */}
          <div className="relative bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-2 rounded-[2.5rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_-10px_rgba(255,255,255,0.07)] border border-white/60 dark:border-zinc-700/50 ring-1 ring-white/50 dark:ring-white/5">
            <div className="bg-white dark:bg-zinc-950 rounded-[2rem] p-6 md:p-8 shadow-sm relative">
              {/* Tabs & Smart Suggest */}
              <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2 bg-silver-50 dark:bg-zinc-900 p-1 rounded-full w-fit">
                    <button 
                      type="button"
                      onClick={() => setActiveTab('book')}
                      className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'book' ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
                    >
                      Book
                    </button>
                    <button 
                      type="button"
                      onClick={() => setActiveTab('status')}
                      className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'status' ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
                    >
                      Status
                    </button>
                  </div>

                  <button 
                    type="button"
                    onClick={handleSmartSuggest}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold border border-purple-200 dark:border-purple-900 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                     <Sparkles size={14} /> Smart Suggest
                  </button>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                {activeTab === 'book' && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                        {/* Flight Type & Class Selection */}
                        <div className="grid grid-cols-2 gap-4">
                             <div className="relative">
                                <ArrowLeftRight size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-400 pointer-events-none" />
                                <select 
                                    value={formData.flightType}
                                    onChange={(e) => setFormData({...formData, flightType: e.target.value as any})}
                                    className="w-full bg-silver-50 dark:bg-zinc-900 py-3 pl-9 pr-3 rounded-xl text-sm font-medium outline-none border border-transparent focus:border-black dark:focus:border-white transition-colors appearance-none"
                                >
                                    <option value="one-way">One-Way</option>
                                    <option value="return">Round Trip</option>
                                </select>
                             </div>
                             <div className="relative">
                                <select 
                                    value={formData.travelClass}
                                    onChange={(e) => setFormData({...formData, travelClass: e.target.value as any})}
                                    className="w-full bg-silver-50 dark:bg-zinc-900 py-3 px-3 rounded-xl text-sm font-medium outline-none border border-transparent focus:border-black dark:focus:border-white transition-colors"
                                >
                                    <option value="Economy">Economy</option>
                                    <option value="Premium Economy">Premium Econ</option>
                                    <option value="Business">Business</option>
                                    <option value="First Class">First Class</option>
                                </select>
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-silver-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">From</label>
                            <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-900 p-4 rounded-2xl border border-transparent transition-all duration-300 ring-0 focus-within:ring-2 ring-black dark:ring-white focus-within:scale-[1.02] focus-within:shadow-xl focus-within:bg-white dark:focus-within:bg-zinc-950">
                              <MapPin className={`text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors ${isSearching ? 'animate-pulse' : ''}`} size={20} />
                              <input 
                                type="text" 
                                placeholder="New York (JFK)" 
                                className="bg-transparent w-full outline-none font-medium placeholder-silver-400 text-silver-900 dark:text-silver-100" 
                                value={formData.from}
                                onChange={(e) => setFormData({...formData, from: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-silver-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">To</label>
                            <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-900 p-4 rounded-2xl border border-transparent transition-all duration-300 ring-0 focus-within:ring-2 ring-black dark:ring-white focus-within:scale-[1.02] focus-within:shadow-xl focus-within:bg-white dark:focus-within:bg-zinc-950">
                              <Plane className={`text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors ${isSearching ? 'animate-bounce' : ''}`} size={20} />
                              <input 
                                type="text" 
                                placeholder="London (LHR)" 
                                className="bg-transparent w-full outline-none font-medium placeholder-silver-400 text-silver-900 dark:text-silver-100"
                                value={formData.to}
                                onChange={(e) => setFormData({...formData, to: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-silver-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Date</label>
                            <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-900 p-4 rounded-2xl border border-transparent transition-all duration-300 ring-0 focus-within:ring-2 ring-black dark:ring-white focus-within:scale-[1.02] focus-within:shadow-xl focus-within:bg-white dark:focus-within:bg-zinc-950">
                              <Calendar className="text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={20} />
                              <input 
                                type="date" 
                                className="bg-transparent w-full outline-none font-medium text-silver-600 dark:text-silver-300"
                                value={formData.date}
                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-silver-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Passengers</label>
                            <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-900 p-4 rounded-2xl border border-transparent transition-all duration-300 ring-0 focus-within:ring-2 ring-black dark:ring-white focus-within:scale-[1.02] focus-within:shadow-xl focus-within:bg-white dark:focus-within:bg-zinc-950">
                              <Users className="text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={20} />
                              <select 
                                 className="bg-transparent w-full outline-none font-medium text-silver-600 dark:text-silver-300"
                                 value={formData.passengers}
                                 onChange={(e) => setFormData({...formData, passengers: parseInt(e.target.value)})}
                              >
                                <option value={1}>1 Passenger</option>
                                <option value={2}>2 Passengers</option>
                                <option value={3}>3+ Passengers</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        {/* Optional Flight Number Field for Direct Booking */}
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-silver-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Flight Number (Optional)</label>
                            <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-900 p-4 rounded-2xl border border-transparent transition-all duration-300 ring-0 focus-within:ring-2 ring-black dark:ring-white focus-within:scale-[1.02] focus-within:shadow-xl focus-within:bg-white dark:focus-within:bg-zinc-950">
                              <Hash className="text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={20} />
                              <input 
                                type="text" 
                                placeholder="e.g. FC-101" 
                                className="bg-transparent w-full outline-none font-medium placeholder-silver-400 text-silver-900 dark:text-silver-100 uppercase" 
                                value={formData.flightNumber || ''}
                                onChange={(e) => setFormData({...formData, flightNumber: e.target.value})}
                              />
                            </div>
                        </div>

                        {/* Insurance Option - Enhanced */}
                        <div className="pt-2">
                           <div className={`rounded-2xl transition-all duration-300 border ${formData.includeInsurance ? 'bg-silver-50 dark:bg-zinc-900/50 border-silver-200 dark:border-zinc-800 p-4' : 'border-transparent'}`}>
                               <div className="flex items-center justify-between">
                                   <label className="flex items-center gap-3 cursor-pointer group select-none">
                                      <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-300 ${formData.includeInsurance ? 'bg-black dark:bg-white border-black dark:border-white' : 'border-silver-300 dark:border-zinc-700 bg-transparent'}`}>
                                         {formData.includeInsurance && <ShieldCheck size={14} className="text-white dark:text-black" />}
                                      </div>
                                      <input 
                                        type="checkbox" 
                                        className="hidden" 
                                        checked={formData.includeInsurance}
                                        onChange={(e) => setFormData({...formData, includeInsurance: e.target.checked})}
                                      />
                                      <span className="text-sm font-medium text-silver-600 dark:text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                        Add Trip Insurance <span className="text-xs text-silver-400">(+$45)</span>
                                      </span>
                                   </label>
                                   <button 
                                     type="button" 
                                     onClick={() => setShowInsuranceDetails(!showInsuranceDetails)}
                                     className="text-silver-400 hover:text-black dark:hover:text-white transition-colors p-1"
                                   >
                                     {showInsuranceDetails ? <ChevronUp size={16} /> : <Info size={16} />}
                                   </button>
                               </div>
                               
                               {/* Expandable Insurance Details - SPECIFIC LIMITS ADDED */}
                               <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showInsuranceDetails ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                   <div className="grid grid-cols-2 gap-3 pl-2">
                                       <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl border border-silver-100 dark:border-zinc-800 flex flex-col gap-1">
                                           <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-xs uppercase tracking-wider">
                                               <Heart size={12} /> Medical
                                           </div>
                                           <span className="text-sm font-bold">$100,000</span>
                                           <span className="text-[10px] text-silver-400 leading-tight">Emergency medical & dental coverage.</span>
                                       </div>
                                       <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl border border-silver-100 dark:border-zinc-800 flex flex-col gap-1">
                                           <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                                               <Ban size={12} /> Cancellation
                                           </div>
                                           <span className="text-sm font-bold">100% Refund</span>
                                           <span className="text-[10px] text-silver-400 leading-tight">Sickness, injury, or severe weather.</span>
                                       </div>
                                       <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl border border-silver-100 dark:border-zinc-800 flex flex-col gap-1">
                                           <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-wider">
                                               <Briefcase size={12} /> Luggage
                                           </div>
                                           <span className="text-sm font-bold">$2,500</span>
                                           <span className="text-[10px] text-silver-400 leading-tight">Loss, theft, or damage protection.</span>
                                       </div>
                                       <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl border border-silver-100 dark:border-zinc-800 flex flex-col gap-1">
                                           <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-wider">
                                               <Clock size={12} /> Delay
                                           </div>
                                           <span className="text-sm font-bold">$500/day</span>
                                           <span className="text-[10px] text-silver-400 leading-tight">Hotels & meals for delays > 6hrs.</span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </div>
                )}

                {activeTab === 'status' && (
                     <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-silver-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Flight Number</label>
                            <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-900 p-4 rounded-2xl border border-transparent transition-all duration-300 ring-0 focus-within:ring-2 ring-black dark:ring-white focus-within:scale-[1.02] focus-within:shadow-xl focus-within:bg-white dark:focus-within:bg-zinc-950">
                                <Plane className={`text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors ${isSearching ? 'animate-bounce' : ''}`} size={20} />
                                <input
                                    type="text"
                                    placeholder="e.g. FC-101"
                                    className="bg-transparent w-full outline-none font-medium placeholder-silver-400 text-silver-900 dark:text-silver-100 uppercase"
                                    value={formData.flightNumber || ''}
                                    onChange={(e) => setFormData({...formData, flightNumber: e.target.value})}
                                />
                            </div>
                        </div>
                         <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-silver-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Date</label>
                             <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-900 p-4 rounded-2xl border border-transparent transition-all duration-300 ring-0 focus-within:ring-2 ring-black dark:ring-white focus-within:scale-[1.02] focus-within:shadow-xl focus-within:bg-white dark:focus-within:bg-zinc-950">
                                  <Calendar className="text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={20} />
                                  <input
                                    type="date"
                                    className="bg-transparent w-full outline-none font-medium text-silver-600 dark:text-silver-300"
                                    value={formData.date}
                                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                                  />
                            </div>
                        </div>
                     </div>
                )}

                <button 
                  type="submit"
                  disabled={isSearching}
                  className={`w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl hover:shadow-2xl mt-4 active:scale-[0.98] flex items-center justify-center gap-2 group relative overflow-hidden ${isSearching ? 'cursor-wait bg-silver-800 dark:bg-silver-200' : 'animate-[pulse_3s_infinite]'}`}
                >
                  {isSearching && (
                    <div className="absolute inset-0 bg-white/20 dark:bg-black/20 animate-pulse"></div>
                  )}
                  {isSearching ? <Loader2 className="animate-spin" /> : (
                    <>
                      {activeTab === 'status' ? 'Check Status' : 'Find Flights'} 
                      {activeTab === 'book' ? <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /> : <Search size={18} className="group-hover:scale-110 transition-transform" />}
                    </>
                  )}
                </button>

                 {/* Recent Searches */}
                 {activeTab === 'book' && recentSearches.length > 0 && (
                   <div className="pt-2 animate-in fade-in duration-300">
                      <p className="text-[10px] uppercase font-bold text-silver-400 mb-2">Recent Searches</p>
                      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                          {recentSearches.map((search, idx) => (
                             <button 
                               key={idx}
                               type="button"
                               onClick={() => loadRecent(search)}
                               className="whitespace-nowrap px-3 py-1.5 bg-silver-50 dark:bg-zinc-800 border border-silver-100 dark:border-zinc-700 rounded-lg text-xs font-medium text-silver-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                             >
                                {search}
                             </button>
                          ))}
                      </div>
                   </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

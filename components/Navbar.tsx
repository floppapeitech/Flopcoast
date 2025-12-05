
import React, { useState, useRef, useEffect } from 'react';
import { User, ViewState } from '../types';
import { Menu, X, Moon, Sun, LogOut, Search, ChevronDown, ChevronRight, Plane, Luggage, CheckCircle, User as UserIcon, Star, Armchair, Coffee, Crown, Tv, Wifi, HeartHandshake, Award, Coins, Ticket, Globe } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  user: User | null;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onOpenAuth: () => void;
  onLogout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  currentView, 
  onNavigate, 
  onOpenAuth,
  onLogout,
  isDarkMode,
  toggleDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [travelDropdownOpen, setTravelDropdownOpen] = useState(false);
  const [rewardsDropdownOpen, setRewardsDropdownOpen] = useState(false); // New state for Rewards
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const travelDropdownRef = useRef<HTMLDivElement>(null);
  const rewardsDropdownRef = useRef<HTMLDivElement>(null); // New ref

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (travelDropdownRef.current && !travelDropdownRef.current.contains(event.target as Node)) {
        setTravelDropdownOpen(false);
      }
      if (rewardsDropdownRef.current && !rewardsDropdownRef.current.contains(event.target as Node)) {
        setRewardsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(false);
    
    const query = searchQuery.toLowerCase();

    // Basic routing logic based on keywords
    if (query.includes('help') || query.includes('support') || query.includes('contact')) {
        onNavigate('HELP');
    } else if (query.includes('bag') || query.includes('luggage')) {
        onNavigate('BAGGAGE');
    } else if (query.includes('check') || query.includes('boarding')) {
        onNavigate('CHECKIN');
    } else if (query.includes('fleet') || query.includes('plane') || query.includes('aircraft')) {
        onNavigate('FLEET');
    } else if (query.includes('first class')) {
        onNavigate('FIRST_CLASS');
    } else if (query.includes('business')) {
        onNavigate('BUSINESS_CLASS');
    } else if (query.includes('movie') || query.includes('tv') || query.includes('game') || query.includes('entertainment')) {
        onNavigate('ENTERTAINMENT');
    } else if (query.includes('wifi') || query.includes('internet') || query.includes('connect')) {
        onNavigate('CONNECTIVITY');
    } else if (query.includes('food') || query.includes('eat')) {
        onNavigate('ONBOARD');
    } else if (query.includes('reward') || query.includes('points') || query.includes('mile')) {
        onNavigate('REWARDS');
    } else if (query.includes('insurance') || query.includes('policy')) {
        onNavigate('INSURANCE');
    } else if (query.includes('special') || query.includes('assistance') || query.includes('wheelchair') || query.includes('pet')) {
        onNavigate('SPECIAL_SERVICES');
    } else if (query.includes('lounge') || query.includes('relax')) {
        onNavigate('LOUNGES');
    } else if (query.includes('cargo') || query.includes('freight')) {
        onNavigate('CARGO');
    } else {
        // Default to Home/Booking for destination searches
        onNavigate('HOME');
    }
    setSearchQuery('');
  };

  return (
    <nav className="fixed top-4 left-3 right-3 md:top-6 md:left-8 md:right-8 z-50 flex flex-col items-center transition-all duration-300">
      <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-silver-200 dark:border-zinc-800 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] px-6 py-3 flex items-center justify-between w-full transition-all duration-300 relative">
        
        {/* Logo */}
        <div 
          className="cursor-pointer group shrink-0" 
          onClick={() => onNavigate('HOME')}
        >
          <Logo className="text-black dark:text-white transition-transform group-hover:scale-105" />
        </div>

        {/* Desktop Links */}
        <div className={`hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max transition-opacity duration-200 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button 
            onClick={() => onNavigate('HOME')}
            className={`text-sm font-medium transition-colors ${currentView === 'HOME' ? 'text-black dark:text-white font-bold' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
          >
            Book
          </button>
          
          {/* Travel Info Dropdown */}
          <div className="relative" ref={travelDropdownRef}>
            <button 
              onClick={() => setTravelDropdownOpen(!travelDropdownOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${['ONBOARD', 'CHECKIN', 'BAGGAGE', 'FLEET', 'FIRST_CLASS', 'BUSINESS_CLASS', 'PREMIUM_ECONOMY', 'ECONOMY', 'ENTERTAINMENT', 'CONNECTIVITY', 'SPECIAL_SERVICES', 'LOUNGES', 'TRAVEL_REQUIREMENTS'].includes(currentView) ? 'text-black dark:text-white font-bold' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
            >
              Travel Info <ChevronDown size={14} className={`transition-transform duration-200 ${travelDropdownOpen ? 'rotate-180' : ''}`}/>
            </button>
            
            {travelDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[600px] bg-white dark:bg-zinc-900 rounded-[2rem] shadow-xl border border-silver-200 dark:border-zinc-800 p-6 animate-in fade-in slide-in-from-top-2 overflow-hidden z-50">
                <div className="grid grid-cols-2 gap-8">
                  {/* Column 1: Cabins & Service */}
                  <div className="space-y-4">
                     <h3 className="text-xs font-bold uppercase tracking-wider text-silver-400 pl-3">Cabins & Service</h3>
                     <div className="space-y-1">
                        <button onClick={() => { onNavigate('FIRST_CLASS'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0">
                            <Crown size={14} />
                            </div>
                            <div className="text-sm font-bold text-black dark:text-white">First Class</div>
                        </button>
                        <button onClick={() => { onNavigate('BUSINESS_CLASS'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <div className="w-8 h-8 rounded-full bg-silver-100 dark:bg-zinc-800 text-black dark:text-white flex items-center justify-center shrink-0">
                            <Star size={14} />
                            </div>
                            <div className="text-sm font-bold text-black dark:text-white">Business</div>
                        </button>
                        <button onClick={() => { onNavigate('PREMIUM_ECONOMY'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <div className="w-8 h-8 rounded-full bg-silver-100 dark:bg-zinc-800 text-black dark:text-white flex items-center justify-center shrink-0">
                            <Coffee size={14} />
                            </div>
                            <div className="text-sm font-bold text-black dark:text-white">Premium Econ</div>
                        </button>
                        <button onClick={() => { onNavigate('ECONOMY'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <div className="w-8 h-8 rounded-full bg-silver-100 dark:bg-zinc-800 text-black dark:text-white flex items-center justify-center shrink-0">
                            <Armchair size={14} />
                            </div>
                            <div className="text-sm font-bold text-black dark:text-white">Economy</div>
                        </button>
                     </div>
                  </div>

                  {/* Column 2: Guide & Features */}
                  <div className="space-y-4">
                     <h3 className="text-xs font-bold uppercase tracking-wider text-silver-400 pl-3">Guide & Features</h3>
                     <div className="space-y-1">
                        <button onClick={() => { onNavigate('TRAVEL_REQUIREMENTS'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <Globe size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Visa & Health</span>
                        </button>
                        <button onClick={() => { onNavigate('ENTERTAINMENT'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <Tv size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Entertainment</span>
                        </button>
                        <button onClick={() => { onNavigate('CONNECTIVITY'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <Wifi size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Wi-Fi & Connectivity</span>
                        </button>
                        <button onClick={() => { onNavigate('LOUNGES'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <Coffee size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Lounges</span>
                        </button>
                        <button onClick={() => { onNavigate('SPECIAL_SERVICES'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <HeartHandshake size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Special Services</span>
                        </button>
                        <button onClick={() => { onNavigate('CHECKIN'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <CheckCircle size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Check-in Guide</span>
                        </button>
                        <button onClick={() => { onNavigate('BAGGAGE'); setTravelDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                            <Luggage size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Baggage Info</span>
                        </button>
                     </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Rewards Dropdown */}
          <div className="relative" ref={rewardsDropdownRef}>
            <button 
              onClick={() => setRewardsDropdownOpen(!rewardsDropdownOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${['REWARDS', 'REWARDS_EARNING', 'REWARDS_REDEMPTION', 'REWARDS_TIERS'].includes(currentView) ? 'text-black dark:text-white font-bold' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
            >
              Rewards <ChevronDown size={14} className={`transition-transform duration-200 ${rewardsDropdownOpen ? 'rotate-180' : ''}`}/>
            </button>
            
            {rewardsDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[280px] bg-white dark:bg-zinc-900 rounded-[2rem] shadow-xl border border-silver-200 dark:border-zinc-800 p-4 animate-in fade-in slide-in-from-top-2 overflow-hidden z-50">
                 <div className="space-y-1">
                    <button onClick={() => { onNavigate('REWARDS'); setRewardsDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                        <Award size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Program Overview</span>
                    </button>
                    <button onClick={() => { onNavigate('REWARDS_EARNING'); setRewardsDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                        <Coins size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Earning Points</span>
                    </button>
                    <button onClick={() => { onNavigate('REWARDS_REDEMPTION'); setRewardsDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                        <Ticket size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Redeeming Points</span>
                    </button>
                    <button onClick={() => { onNavigate('REWARDS_TIERS'); setRewardsDropdownOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 text-left group transition-colors">
                        <Crown size={16} className="text-silver-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-silver-600 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">Elite Status</span>
                    </button>
                 </div>
              </div>
            )}
          </div>

          <button 
             onClick={() => onNavigate('INSURANCE')}
             className={`text-sm font-medium transition-colors ${currentView === 'INSURANCE' ? 'text-black dark:text-white font-bold' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
          >
            Insurance
          </button>
          <button 
             onClick={() => onNavigate('ABOUT')}
             className={`text-sm font-medium transition-colors ${currentView === 'ABOUT' ? 'text-black dark:text-white font-bold' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
          >
            About Us
          </button>
          <button 
             onClick={() => onNavigate('HELP')}
             className={`text-sm font-medium transition-colors ${currentView === 'HELP' ? 'text-black dark:text-white font-bold' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
          >
            Help
          </button>
          
          {user?.role === 'ADMIN' && (
             <button 
             onClick={() => onNavigate('ADMIN')}
             className={`text-sm font-medium transition-colors ${currentView === 'ADMIN' ? 'text-black dark:text-white font-bold' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
           >
             Database
           </button>
          )}
        </div>

        {/* Search Bar - Desktop Overlay */}
        <form 
          onSubmit={handleSearchSubmit}
          className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl transition-all duration-300 ${isSearchOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
        >
          <div className="relative w-full">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Search destinations, baggage info, or help topics..." 
              className="w-full bg-silver-50 dark:bg-zinc-800 border border-silver-200 dark:border-zinc-700 rounded-full py-2 pl-10 pr-4 outline-none focus:ring-2 ring-black dark:ring-white text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-silver-400" />
            <button 
              type="button" 
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-silver-200 dark:hover:bg-zinc-700 rounded-full"
            >
              <X size={14} className="text-silver-500" />
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors text-silver-600 dark:text-silver-300 hidden lg:block"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors text-silver-600 dark:text-silver-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {user ? (
            <div className="flex items-center gap-3 pl-2 border-l border-silver-200 dark:border-zinc-700">
               {/* Clickable Profile Picture for Dashboard Navigation */}
               <button 
                  onClick={() => onNavigate('DASHBOARD')}
                  className="w-9 h-9 rounded-full bg-silver-100 dark:bg-zinc-800 overflow-hidden hover:ring-2 ring-black dark:ring-white transition-all"
                  title="Go to Dashboard"
               >
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs font-bold font-display">
                        {user.name.charAt(0)}
                    </div>
                  )}
               </button>

               <button
                onClick={onLogout}
                className="flex items-center gap-1 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-semibold px-3 py-2 rounded-full transition-colors"
                title="Sign Out"
               >
                 <LogOut size={14} />
               </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-silver-800 dark:hover:bg-silver-200 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg"
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-silver-800 dark:text-silver-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-silver-200 dark:border-zinc-800 rounded-2xl shadow-xl p-4 flex flex-col gap-2 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative mb-2">
             <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-silver-50 dark:bg-zinc-800 p-3 rounded-xl text-sm outline-none border border-transparent focus:border-black dark:focus:border-white" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
             />
             <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-silver-400"/>
          </form>

          <button onClick={() => { onNavigate('HOME'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium">Book Flight</button>
          
          {/* Mobile Travel Info Accordion */}
          <div className="bg-silver-50 dark:bg-zinc-950/50 rounded-xl overflow-hidden">
             <div className="p-3 text-xs font-bold uppercase tracking-wider text-silver-400">Onboard Experience</div>
             <button onClick={() => { onNavigate('FIRST_CLASS'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Crown size={14}/> First Class</button>
             <button onClick={() => { onNavigate('BUSINESS_CLASS'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Star size={14}/> Business Class</button>
             <button onClick={() => { onNavigate('PREMIUM_ECONOMY'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Coffee size={14}/> Premium Economy</button>
             <button onClick={() => { onNavigate('ECONOMY'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Armchair size={14}/> Economy</button>
             <button onClick={() => { onNavigate('ENTERTAINMENT'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Tv size={14}/> Entertainment</button>
             <button onClick={() => { onNavigate('CONNECTIVITY'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Wifi size={14}/> Internet & Wi-Fi</button>
             
             <div className="p-3 mt-2 text-xs font-bold uppercase tracking-wider text-silver-400 border-t border-silver-100 dark:border-zinc-800">Travel Guide</div>
             <button onClick={() => { onNavigate('LOUNGES'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Coffee size={14}/> Lounges</button>
             <button onClick={() => { onNavigate('TRAVEL_REQUIREMENTS'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Globe size={14}/> Visa & Health</button>
             <button onClick={() => { onNavigate('SPECIAL_SERVICES'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><HeartHandshake size={14}/> Special Services</button>
             <button onClick={() => { onNavigate('CHECKIN'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><CheckCircle size={14}/> Check-in Guide</button>
             <button onClick={() => { onNavigate('BAGGAGE'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Luggage size={14}/> Baggage Info</button>
             <button onClick={() => { onNavigate('FLEET'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Plane size={14}/> Our Fleet</button>
          </div>

          <div className="bg-silver-50 dark:bg-zinc-950/50 rounded-xl overflow-hidden mt-2">
             <div className="p-3 text-xs font-bold uppercase tracking-wider text-silver-400">Flopcoast Rewards</div>
             <button onClick={() => { onNavigate('REWARDS'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Award size={14}/> Overview</button>
             <button onClick={() => { onNavigate('REWARDS_EARNING'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Coins size={14}/> Ways to Earn</button>
             <button onClick={() => { onNavigate('REWARDS_REDEMPTION'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Ticket size={14}/> Ways to Spend</button>
             <button onClick={() => { onNavigate('REWARDS_TIERS'); setIsMobileMenuOpen(false); }} className="w-full p-3 pl-6 text-left hover:bg-silver-100 dark:hover:bg-zinc-800 text-sm font-medium flex items-center gap-2"><Crown size={14}/> Elite Status</button>
          </div>

          <button onClick={() => { onNavigate('INSURANCE'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium text-silver-500">Insurance</button>
          <button onClick={() => { onNavigate('ABOUT'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium text-silver-500">About Us</button>
          <button onClick={() => { onNavigate('HELP'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium text-silver-500">Help Center</button>
          
          {user?.role === 'ADMIN' && (
             <button onClick={() => { onNavigate('ADMIN'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium">Admin Database</button>
          )}
          {user && (
             <div className="border-t border-silver-200 dark:border-zinc-800 mt-2 pt-2">
                 <button onClick={() => { onNavigate('DASHBOARD'); setIsMobileMenuOpen(false); }} className="p-3 w-full text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-silver-200 dark:bg-zinc-700 overflow-hidden">
                        {user.avatarUrl ? (
                            <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-[10px] font-bold">
                                {user.name.charAt(0)}
                            </div>
                        )}
                    </div>
                    Dashboard
                 </button>
             </div>
          )}
          {!user && (
             <button onClick={() => { onOpenAuth(); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium text-black dark:text-white">Sign In</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

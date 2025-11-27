
import React, { useState, useRef } from 'react';
import { User, Flight } from '../types';
import { Plane, Clock, MapPin, ChevronDown, ChevronUp, Award, Bell, X, Camera, Upload } from 'lucide-react';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Sidebar / Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-2xl font-display font-bold relative group cursor-pointer overflow-hidden"
                onClick={handleAvatarClick}
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  user.name.charAt(0)
                )}
                
                {/* Upload Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Camera size={20} className="text-white" />
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept="image/*"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold font-display">{user.name}</h2>
                <p className="text-silver-500 dark:text-silver-400 text-sm">{user.email}</p>
              </div>
            </div>
            
            <div className="border-t border-silver-200 dark:border-zinc-800 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-silver-400 mb-4 flex items-center gap-2">
                <Award size={16} /> Flopcoast Awards
              </h3>
              
              <div className="bg-black dark:bg-white text-white dark:text-black rounded-2xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-sm opacity-80 mb-1">Current Tier</p>
                  <h4 className="text-2xl font-display font-bold mb-4">{user.awardsTier}</h4>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-3xl font-bold">{user.awardsPoints.toLocaleString()}</p>
                      <p className="text-xs opacity-70">Points Available</p>
                    </div>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 dark:bg-black/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content / Flights */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-3xl font-display font-bold">Upcoming Flights</h2>
            <button className="text-sm font-semibold underline decoration-2 underline-offset-4 decoration-silver-300 hover:decoration-black dark:hover:decoration-white transition-all">
              View Past Flights
            </button>
          </div>

          <div className="space-y-4">
            {user.upcomingFlights.length > 0 ? (
              user.upcomingFlights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))
            ) : (
              <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-12 text-center border border-silver-200 dark:border-zinc-800">
                <Plane className="mx-auto text-silver-300 dark:text-zinc-700 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">No upcoming flights</h3>
                <p className="text-silver-500 mb-6">Time to plan your next adventure.</p>
                <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-semibold">
                  Book a Flight
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FlightCard: React.FC<{ flight: Flight }> = ({ flight }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [alerts, setAlerts] = useState(flight.alerts || { priceChange: false, statusUpdate: false });

  const toggleAlert = (key: keyof typeof alerts) => {
    setAlerts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-200 dark:border-zinc-800 overflow-visible transition-all duration-300 hover:shadow-md relative">
      {/* Main Row */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-8 w-full md:w-auto">
            <div className="text-center w-16">
              <div className="text-2xl font-bold font-display">{flight.origin}</div>
              <div className="text-xs text-silver-500">{new Date(flight.departureTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            </div>
            
            <div className="flex-1 md:w-48 flex flex-col items-center gap-1">
              <span className="text-xs font-semibold text-silver-400">{flight.flightNumber}</span>
              <div className="w-full h-[2px] bg-silver-200 dark:bg-zinc-700 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-silver-300 dark:bg-zinc-600"></div>
                <Plane className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-black dark:text-white" size={14} fill="currentColor" />
              </div>
              <span className="text-xs text-silver-500">
                {Math.floor((new Date(flight.arrivalTime).getTime() - new Date(flight.departureTime).getTime()) / (1000 * 60 * 60))}h {' '}
                {Math.floor(((new Date(flight.arrivalTime).getTime() - new Date(flight.departureTime).getTime()) / (1000 * 60)) % 60)}m
              </span>
            </div>

            <div className="text-center w-16">
              <div className="text-2xl font-bold font-display">{flight.destination}</div>
              <div className="text-xs text-silver-500">{new Date(flight.arrivalTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
             <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
              ${flight.status === 'On Time' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
              ${flight.status === 'Delayed' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
             `}>
               {flight.status}
             </span>
             
             <div className="relative">
                <button 
                   onClick={() => setIsAlertsOpen(!isAlertsOpen)}
                   className={`p-2 rounded-full transition-colors ${alerts.priceChange || alerts.statusUpdate ? 'text-black dark:text-white bg-silver-100 dark:bg-zinc-800' : 'text-silver-400 hover:text-black dark:hover:text-white'}`}
                >
                   <Bell size={18} />
                </button>
                {/* Alerts Popover */}
                {isAlertsOpen && (
                   <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-silver-200 dark:border-zinc-800 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                      <div className="flex justify-between items-center mb-4">
                         <h4 className="font-bold text-sm">Flight Alerts</h4>
                         <button onClick={() => setIsAlertsOpen(false)}><X size={14} className="text-silver-400"/></button>
                      </div>
                      <div className="space-y-3">
                         <label className="flex items-center justify-between cursor-pointer group">
                            <span className="text-sm text-silver-600 dark:text-silver-300">Price Changes</span>
                            <div 
                               onClick={() => toggleAlert('priceChange')}
                               className={`w-10 h-6 rounded-full p-1 transition-colors ${alerts.priceChange ? 'bg-green-500' : 'bg-silver-200 dark:bg-zinc-700'}`}
                            >
                               <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${alerts.priceChange ? 'translate-x-4' : ''}`}></div>
                            </div>
                         </label>
                         <label className="flex items-center justify-between cursor-pointer group">
                            <span className="text-sm text-silver-600 dark:text-silver-300">Status Updates</span>
                            <div 
                               onClick={() => toggleAlert('statusUpdate')}
                               className={`w-10 h-6 rounded-full p-1 transition-colors ${alerts.statusUpdate ? 'bg-green-500' : 'bg-silver-200 dark:bg-zinc-700'}`}
                            >
                               <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${alerts.statusUpdate ? 'translate-x-4' : ''}`}></div>
                            </div>
                         </label>
                      </div>
                   </div>
                )}
             </div>

             <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm font-semibold hover:text-silver-600 transition-colors"
             >
               View Details {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
             </button>
          </div>

        </div>
      </div>

      {/* Expanded Details */}
      <div className={`bg-silver-50 dark:bg-zinc-950 border-t border-silver-200 dark:border-zinc-800 transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-bold uppercase text-silver-400 tracking-wider">Date</span>
            <div className="font-semibold mt-1 flex items-center gap-2">
               <Clock size={16} /> {new Date(flight.departureTime).toLocaleDateString()}
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-silver-400 tracking-wider">Gate</span>
            <div className="font-semibold mt-1 flex items-center gap-2">
               <MapPin size={16} /> {flight.gate}
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-silver-400 tracking-wider">Seat</span>
            <div className="font-semibold mt-1">{flight.seat} ({flight.class})</div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-silver-400 tracking-wider">Aircraft</span>
            <div className="font-semibold mt-1">{flight.aircraft}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

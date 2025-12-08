
import React, { useState } from 'react';
import { User, Flight } from '../types';
import { Plane, Calendar, MapPin, ChevronDown, ChevronUp, Award, Bell, X, Terminal, Wifi, Utensils, Tv, Luggage, Hash, Settings, ArrowRight, Check, AlertCircle, MoreHorizontal, Trash2 } from 'lucide-react';

interface DashboardProps {
  user: User;
  onNavigate: (view: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-bottom-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Sidebar / Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-2xl font-display font-bold relative group overflow-hidden"
              >
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  user.name.charAt(0)
                )}
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
              
              <div 
                onClick={() => onNavigate('REWARDS_CENTER')}
                className="bg-black dark:bg-white text-white dark:text-black rounded-2xl p-6 relative overflow-hidden transition-all hover:scale-[1.02] cursor-pointer group"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-sm opacity-80 mb-1">Current Tier</p>
                        <h4 className="text-2xl font-display font-bold">{user.awardsTier}</h4>
                    </div>
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                  </div>
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

            <div className="mt-6 pt-6 border-t border-silver-200 dark:border-zinc-800">
                <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800 mb-4">
                   <h3 className="text-sm font-bold uppercase tracking-wider text-silver-400 mb-4">Redeem Rewards</h3>
                   <div className="space-y-3">
                      <button className="w-full text-left flex items-center justify-between text-sm font-medium hover:text-silver-500">
                          Upgrade Flight <ArrowRight size={14}/>
                      </button>
                      <button className="w-full text-left flex items-center justify-between text-sm font-medium hover:text-silver-500">
                          Lounge Access <ArrowRight size={14}/>
                      </button>
                      <button className="w-full text-left flex items-center justify-between text-sm font-medium hover:text-silver-500">
                          Partner Gift Cards <ArrowRight size={14}/>
                      </button>
                   </div>
                </div>

                <button 
                  onClick={() => onNavigate('SETTINGS')}
                  className="w-full py-3 rounded-xl border border-silver-200 dark:border-zinc-800 hover:bg-silver-50 dark:hover:bg-zinc-800 flex items-center justify-center gap-2 text-sm font-bold transition-colors"
                >
                    <Settings size={16} /> Account Settings
                </button>
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
                <button 
                  onClick={() => onNavigate('HOME')}
                  className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-semibold"
                >
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
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  
  const [alerts, setAlerts] = useState(flight.alerts || { priceChange: false, statusUpdate: false });
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

  const toggleAlert = (key: keyof typeof alerts) => {
    setAlerts(prev => ({ ...prev, [key]: !prev[key] }));
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  const handleCancelConfirm = () => {
      // Simulate API call
      setTimeout(() => {
          setIsCancelling(false);
          setIsCancelled(true);
      }, 500);
  };

  if (isCancelled) return null;

  const hasWifi = true;
  const hasTV = true;
  const mealType = flight.class === 'Business' || flight.class === 'First Class' ? 'Gourmet Dining' : 'Complimentary Meal';

  return (
    <>
    <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-200 dark:border-zinc-800 overflow-visible transition-all duration-300 hover:shadow-md relative group">
      {/* Main Row */}
      <div className="p-6 md:p-8 relative z-10 bg-white dark:bg-zinc-900 rounded-[2rem]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-8 w-full md:w-auto">
            <div className="text-center w-16">
              <div className="text-2xl font-bold font-display">{flight.origin.split(' ')[0]}</div>
              <div className="text-xs text-silver-500 font-mono">{new Date(flight.departureTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            </div>
            
            <div className="flex-1 md:w-48 flex flex-col items-center gap-1">
              <span className="text-xs font-semibold text-silver-400">{flight.flightNumber}</span>
              <div className="w-full h-[2px] bg-silver-200 dark:bg-zinc-700 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-silver-300 dark:bg-zinc-600"></div>
                <Plane className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black dark:text-white" size={14} fill="currentColor" />
              </div>
              <span className="text-xs text-silver-500">
                {Math.floor((new Date(flight.arrivalTime).getTime() - new Date(flight.departureTime).getTime()) / (1000 * 60 * 60))}h {' '}
                {Math.floor(((new Date(flight.arrivalTime).getTime() - new Date(flight.departureTime).getTime()) / (1000 * 60)) % 60)}m
              </span>
            </div>

            <div className="text-center w-16">
              <div className="text-2xl font-bold font-display">{flight.destination.split(' ')[0]}</div>
              <div className="text-xs text-silver-500 font-mono">{new Date(flight.arrivalTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
             <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
              ${flight.status === 'On Time' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
              ${flight.status === 'Delayed' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
              ${flight.status === 'Boarding' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 animate-pulse' : ''}
             `}>
               {flight.status}
             </span>

             {(alerts.priceChange || alerts.statusUpdate) && (
                <span className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 animate-in fade-in">
                    <Bell size={10} /> Alerts Active
                </span>
             )}
             
             <div className="relative">
                <button 
                   onClick={(e) => { e.stopPropagation(); setIsAlertsOpen(!isAlertsOpen); }}
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
                      
                      {saveStatus === 'saved' && (
                         <div className="mt-3 py-1.5 px-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-xs font-bold flex items-center justify-center gap-1 animate-in fade-in zoom-in">
                            <Check size={12} /> Preferences Saved
                         </div>
                      )}
                   </div>
                )}
             </div>

             <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm font-semibold hover:text-silver-600 transition-colors bg-silver-100 dark:bg-zinc-800 px-4 py-2 rounded-full"
             >
               Details {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
             </button>
          </div>

        </div>
      </div>

      {/* Expanded Details */}
      <div 
        className={`bg-silver-50 dark:bg-zinc-950/50 border-t border-silver-200 dark:border-zinc-800 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ borderRadius: '0 0 2rem 2rem' }}
      >
        <div className="p-8 space-y-8">
            
            {/* Top Grid: Core Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <span className="text-xs font-bold uppercase text-silver-400 tracking-wider flex items-center gap-1"><Calendar size={12}/> Date</span>
                    <div className="font-semibold mt-1">{new Date(flight.departureTime).toLocaleDateString()}</div>
                </div>
                <div>
                    <span className="text-xs font-bold uppercase text-silver-400 tracking-wider flex items-center gap-1"><Hash size={12}/> Booking Ref</span>
                    <div className="font-semibold mt-1 font-mono">{flight.bookingReference || 'FL-99382'}</div>
                </div>
                <div>
                    <span className="text-xs font-bold uppercase text-silver-400 tracking-wider flex items-center gap-1"><Terminal size={12}/> Terminal</span>
                    <div className="font-semibold mt-1">{flight.terminal || 'T4'}</div>
                </div>
                <div>
                    <span className="text-xs font-bold uppercase text-silver-400 tracking-wider flex items-center gap-1"><MapPin size={12}/> Gate</span>
                    <div className="font-semibold mt-1">{flight.gate}</div>
                </div>
            </div>

            <div className="h-px bg-silver-200 dark:bg-zinc-800 w-full"></div>

            {/* Middle Grid: Aircraft & Service */}
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-sm font-bold uppercase text-silver-500 mb-4">Aircraft & Seat</h4>
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-silver-200 dark:border-zinc-800 space-y-3">
                         <div className="flex justify-between">
                            <span className="text-sm text-silver-500">Aircraft Type</span>
                            <span className="text-sm font-semibold">{flight.aircraft}</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-sm text-silver-500">Cabin Class</span>
                            <span className="text-sm font-semibold">{flight.class}</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-sm text-silver-500">Seat Number</span>
                            <span className="text-sm font-bold">{flight.seat}</span>
                         </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase text-silver-500 mb-4">Onboard Experience</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-silver-200 dark:border-zinc-800 flex items-center gap-3">
                            <Wifi size={18} className={hasWifi ? 'text-green-500' : 'text-silver-300'} />
                            <div className="text-xs">
                                <div className="font-bold">Wi-Fi</div>
                                <div className="text-silver-500">{hasWifi ? 'Available' : 'Not Equipped'}</div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-silver-200 dark:border-zinc-800 flex items-center gap-3">
                            <Utensils size={18} className="text-black dark:text-white" />
                            <div className="text-xs">
                                <div className="font-bold">Meal</div>
                                <div className="text-silver-500">{mealType}</div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-silver-200 dark:border-zinc-800 flex items-center gap-3">
                            <Tv size={18} className={hasTV ? 'text-blue-500' : 'text-silver-300'} />
                            <div className="text-xs">
                                <div className="font-bold">Entertainment</div>
                                <div className="text-silver-500">{hasTV ? 'On Demand' : 'None'}</div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-silver-200 dark:border-zinc-800 flex items-center gap-3">
                            <Luggage size={18} className="text-black dark:text-white" />
                            <div className="text-xs">
                                <div className="font-bold">Baggage</div>
                                <div className="text-silver-500">2x Checked</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions Footer */}
            <div className="flex gap-3 justify-end relative">
                <button className="px-6 py-2 rounded-full border border-silver-200 dark:border-zinc-700 text-sm font-bold hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors">
                    Change Seat
                </button>
                <div className="relative">
                    <button 
                        onClick={() => setIsManageOpen(!isManageOpen)}
                        className="px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                        Manage Booking <MoreHorizontal size={14} />
                    </button>
                    {isManageOpen && (
                        <div className="absolute bottom-full right-0 mb-2 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-silver-200 dark:border-zinc-800 p-1 z-20 animate-in fade-in zoom-in-95">
                            <button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium hover:bg-silver-50 dark:hover:bg-zinc-800 transition-colors">
                                Change Flight
                            </button>
                            <button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium hover:bg-silver-50 dark:hover:bg-zinc-800 transition-colors">
                                Add Baggage
                            </button>
                            <div className="h-px bg-silver-100 dark:bg-zinc-800 my-1"></div>
                            <button 
                                onClick={() => { setIsManageOpen(false); setIsCancelling(true); }}
                                className="w-full text-left px-4 py-2 rounded-lg text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2"
                            >
                                <Trash2 size={14} /> Cancel Flight
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>

    {/* Cancellation Modal */}
    {isCancelling && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] max-w-md w-full border border-silver-200 dark:border-zinc-800 shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-4">
                <button onClick={() => setIsCancelling(false)} className="absolute top-4 right-4 p-2 hover:bg-silver-100 dark:hover:bg-zinc-800 rounded-full"><X size={18}/></button>
                
                <div className="flex items-center gap-3 mb-4 text-red-600">
                    <AlertCircle size={32} />
                    <h3 className="text-2xl font-bold font-display">Cancel Flight?</h3>
                </div>
                
                <p className="text-silver-500 mb-6 text-sm leading-relaxed">
                    Are you sure you want to cancel your flight to <strong>{flight.destination}</strong>? This action cannot be undone. Please tell us why you are cancelling:
                </p>
                
                <div className="space-y-3 mb-8">
                    {['Changed Plans', 'Medical Emergency', 'Found Better Price', 'Other'].map(reason => (
                        <label key={reason} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${cancelReason === reason ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-silver-200 dark:border-zinc-800 hover:bg-silver-50 dark:hover:bg-zinc-800'}`}>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${cancelReason === reason ? 'border-red-500' : 'border-silver-300'}`}>
                                {cancelReason === reason && <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>}
                            </div>
                            <input 
                                type="radio" 
                                name="cancelReason" 
                                value={reason}
                                checked={cancelReason === reason}
                                onChange={(e) => setCancelReason(e.target.value)}
                                className="hidden"
                            />
                            <span className={`text-sm font-bold ${cancelReason === reason ? 'text-red-700 dark:text-red-400' : 'text-silver-600 dark:text-silver-300'}`}>{reason}</span>
                        </label>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button 
                        onClick={() => setIsCancelling(false)} 
                        className="flex-1 py-3 font-bold text-sm border border-silver-200 dark:border-zinc-700 rounded-xl hover:bg-silver-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                        Keep Flight
                    </button>
                    <button 
                        onClick={handleCancelConfirm} 
                        disabled={!cancelReason} 
                        className="flex-1 py-3 font-bold text-sm bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-500/20 transition-all"
                    >
                        Confirm Cancel
                    </button>
                </div>
            </div>
        </div>
    )}
    </>
  );
};

export default Dashboard;

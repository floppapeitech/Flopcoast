
import React, { useState, useEffect, useMemo } from 'react';
import { FlightResult, SearchCriteria, User } from '../types';
import { Filter, ArrowLeft, Check, ShieldCheck, Plane, X, Info, Clock, Building, RotateCcw, Luggage, Wifi, Coffee, Zap, Tv, Armchair, Columns, ChevronDown, ChevronUp, ArrowUpRight, ArrowDownRight, ArrowRight, Award } from 'lucide-react';
import { MOCK_SEARCH_RESULTS } from '../services/mockData';
import SeatSelection from './SeatSelection';

interface FlightResultsProps {
  criteria: SearchCriteria;
  onBack: () => void;
  user: User | null;
}

type StopsFilter = 'all' | '0' | '1' | '2+';
type TimeFilter = 'all' | 'morning' | 'afternoon' | 'evening';
type BookingStep = 'SELECT' | 'SEAT' | 'SUMMARY' | 'CONFIRMATION';
type CabinFilter = 'all' | 'Economy' | 'Premium Economy' | 'Business' | 'First Class';
type SortOption = 'price_asc' | 'duration_asc' | 'departure_asc' | 'arrival_asc';

const FlightResults: React.FC<FlightResultsProps> = ({ criteria, onBack, user }) => {
  const [results] = useState<FlightResult[]>(MOCK_SEARCH_RESULTS);
  
  // Filter States
  const [maxPrice, setMaxPrice] = useState(5000);
  const [stopsFilter, setStopsFilter] = useState<StopsFilter>('all');
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const [cabinFilter, setCabinFilter] = useState<CabinFilter>(criteria.travelClass || 'all');
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  
  // Sort State
  const [sortBy, setSortBy] = useState<SortOption>('price_asc');

  // Comparison State
  const [selectedForComparison, setSelectedForComparison] = useState<FlightResult[]>([]);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);

  // Booking State
  const [bookingStep, setBookingStep] = useState<BookingStep>('SELECT');
  const [selectedFlight, setSelectedFlight] = useState<FlightResult | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string>('');
  const [seatPrice, setSeatPrice] = useState(0);
  const [addInsurance, setAddInsurance] = useState(false);
  const [pointsRedeemed, setPointsRedeemed] = useState(0);

  // Initialize Insurance state from search criteria
  useEffect(() => {
    if (criteria.includeInsurance) {
        setAddInsurance(true);
    }
  }, [criteria]);

  // --- Helpers ---

  // Dynamic Pricing Logic based on Cabin Class
  const getDynamicPrice = (basePrice: number, cabin: CabinFilter) => {
      // If 'all' or 'Economy', return base. Otherwise multiply.
      // This simulates that the mock result is the "base" and other classes cost more.
      // In a real app, the API would return specific prices for specific cabins.
      switch (cabin) {
          case 'Premium Economy': return Math.round(basePrice * 1.6);
          case 'Business': return Math.round(basePrice * 3.5);
          case 'First Class': return Math.round(basePrice * 6.0);
          default: return basePrice;
      }
  };

  const handleBookClick = (flight: FlightResult) => {
    // If the user selected a specific class filter, lock that in. Otherwise default to Economy or what's in the flight object.
    const activeClass = cabinFilter !== 'all' ? cabinFilter : flight.cabinClass;
    const adjustedPrice = getDynamicPrice(flight.price, cabinFilter);
    
    setSelectedFlight({ ...flight, cabinClass: activeClass, price: adjustedPrice });
    setBookingStep('SEAT'); 
  };

  const handleSeatSelected = (seat: string, price: number) => {
    setSelectedSeat(seat);
    setSeatPrice(price);
    setBookingStep('SUMMARY');
  };

  const handleConfirmBooking = () => {
    setBookingStep('CONFIRMATION');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAirline = (airline: string) => {
    if (selectedAirlines.includes(airline)) {
      setSelectedAirlines(prev => prev.filter(a => a !== airline));
    } else {
      setSelectedAirlines(prev => [...prev, airline]);
    }
  };
  
  const toggleComparison = (flight: FlightResult) => {
     if (selectedForComparison.find(f => f.id === flight.id)) {
        setSelectedForComparison(prev => prev.filter(f => f.id !== flight.id));
     } else {
        if (selectedForComparison.length < 3) {
            setSelectedForComparison(prev => [...prev, flight]);
        }
     }
  };

  const resetFilters = () => {
    setMaxPrice(5000);
    setStopsFilter('all');
    setTimeFilter('all');
    setCabinFilter('all');
    setSelectedAirlines([]);
  };

  const parseDuration = (str: string) => {
    // format "2h 30m"
    const parts = str.split(' ');
    let minutes = 0;
    for (const p of parts) {
       if (p.includes('h')) minutes += parseInt(p) * 60;
       if (p.includes('m')) minutes += parseInt(p);
    }
    return minutes;
  };

  const availableAirlines: string[] = Array.from(new Set(results.filter(r => r.airline.includes('Flopcoast')).map(r => r.airline)));

  // Filter and Sort Logic using useMemo for performance
  const filteredAndSortedResults = useMemo(() => {
    return results
      .filter(flight => {
          if (!flight.airline.includes('Flopcoast')) return false;

          // Flight Number Filter
          if (criteria.flightNumber && !flight.flightNumber.toLowerCase().includes(criteria.flightNumber.toLowerCase())) {
              return false;
          }

          // Adjust check price based on selected cabin filter to ensure filtering works on "real" price
          const currentPrice = getDynamicPrice(flight.price, cabinFilter);
          if (currentPrice > maxPrice) return false;
          
          if (stopsFilter === '0' && flight.stops > 0) return false;
          if (stopsFilter === '1' && flight.stops !== 1) return false;
          if (stopsFilter === '2+' && flight.stops < 2) return false;

          const hour = parseInt(flight.departureTime.split(':')[0]);
          if (timeFilter === 'morning' && (hour < 5 || hour >= 12)) return false;
          if (timeFilter === 'afternoon' && (hour < 12 || hour >= 18)) return false;
          if (timeFilter === 'evening' && (hour >= 5 && hour < 18)) return false;

          // If cabin filter is specific, we only show flights compatible (logic handled by dynamic pricing mostly, but technically all flights have all classes in this mock)
          
          if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) return false;

          // Only filter by origin if it's explicitly set (might be empty if searching by flight number status)
          if (criteria.from && !flight.origin.toLowerCase().includes(criteria.from.toLowerCase().split(' ')[0])) {
             return false;
          }

          // Only filter by destination if it's explicitly set (might be empty if searching by flight number)
          if (criteria.to && !flight.destination.toLowerCase().includes(criteria.to.toLowerCase().split(' ')[0])) {
              const hasDestination = results.some(r => r.destination.toLowerCase().includes(criteria.to.toLowerCase().split(' ')[0]));
              if (hasDestination) return false;
          }

          return true;
      })
      .map(flight => ({
          ...flight,
          // Inject the dynamic price into the view model
          price: getDynamicPrice(flight.price, cabinFilter),
          cabinClass: cabinFilter !== 'all' ? cabinFilter : flight.cabinClass
      }))
      .sort((a, b) => {
          if (sortBy === 'price_asc') return a.price - b.price;
          if (sortBy === 'duration_asc') return parseDuration(a.duration) - parseDuration(b.duration);
          if (sortBy === 'departure_asc') return a.departureTime.localeCompare(b.departureTime);
          if (sortBy === 'arrival_asc') return a.arrivalTime.localeCompare(b.arrivalTime);
          return 0;
      });
  }, [results, maxPrice, stopsFilter, timeFilter, cabinFilter, selectedAirlines, criteria.from, criteria.to, criteria.flightNumber, sortBy]);

  // --- Views ---

  if (bookingStep === 'CONFIRMATION') {
     const baseTotal = selectedFlight ? selectedFlight.price * criteria.passengers : 0;
     const taxes = Math.round(baseTotal * 0.12);
     const insuranceCost = addInsurance ? 45 * criteria.passengers : 0;
     const seatCost = seatPrice * criteria.passengers;
     // 100 points = $1 discount
     const discount = pointsRedeemed / 100;
     const finalTotal = baseTotal + taxes + insuranceCost + seatCost - discount;
    
    return (
      <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4">
        <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-silver-200 dark:border-zinc-800 w-full max-w-2xl">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold mb-2 text-center">Booking Confirmed!</h2>
          <p className="text-silver-500 dark:text-silver-400 mb-8 text-center">
            Your flight to <strong>{selectedFlight?.destination}</strong> has been secured.
          </p>
          
          <div className="bg-silver-50 dark:bg-zinc-950 rounded-2xl p-6 mb-8 border border-silver-100 dark:border-zinc-800 space-y-4">
             <div className="flex justify-between items-center pb-4 border-b border-silver-200 dark:border-zinc-800">
                <span className="text-sm font-bold uppercase text-silver-400 tracking-wider">Reference</span>
                <span className="font-mono font-bold text-lg">FL-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div>
                   <span className="text-xs text-silver-500 block">Passenger</span>
                   <span className="font-bold">{criteria.passengers} Adult(s)</span>
                </div>
                <div>
                   <span className="text-xs text-silver-500 block">Flight</span>
                   <span className="font-bold">{selectedFlight?.flightNumber}</span>
                </div>
                <div>
                   <span className="text-xs text-silver-500 block">Route</span>
                   <span className="font-bold">{selectedFlight?.origin} → {selectedFlight?.destination}</span>
                </div>
                <div>
                   <span className="text-xs text-silver-500 block">Date</span>
                   <span className="font-bold">{criteria.date || 'May 15, 2024'}</span>
                </div>
                <div>
                   <span className="text-xs text-silver-500 block">Seat</span>
                   <span className="font-bold">{selectedSeat} ({selectedFlight?.cabinClass})</span>
                </div>
                <div>
                   <span className="text-xs text-silver-500 block">Insurance</span>
                   <span className={`font-bold ${addInsurance ? 'text-green-600' : 'text-silver-400'}`}>{addInsurance ? 'Active' : 'Declined'}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-silver-200 dark:border-zinc-800 flex justify-between items-center">
                   <span className="text-sm font-bold uppercase text-silver-400">Total Paid</span>
                   <span className="font-display font-bold text-2xl">${finalTotal.toFixed(2)}</span>
                </div>
             </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button 
              onClick={onBack}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Back to Home
            </button>
            <button className="px-8 py-3 rounded-full font-bold border border-silver-200 dark:border-zinc-700 hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors">
              Print Itinerary
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Seat Selection View
  if (bookingStep === 'SEAT' && selectedFlight) {
     return (
        <SeatSelection 
           flight={selectedFlight} 
           onSelect={handleSeatSelected} 
           onBack={() => setBookingStep('SELECT')} 
        />
     );
  }

  if (bookingStep === 'SUMMARY' && selectedFlight) {
    const baseTotal = selectedFlight.price * criteria.passengers;
    const taxes = Math.round(baseTotal * 0.12);
    const insuranceTotal = addInsurance ? 45 * criteria.passengers : 0;
    const seatsTotal = seatPrice * criteria.passengers;
    const discount = pointsRedeemed / 100;
    const grandTotal = baseTotal + taxes + insuranceTotal + seatsTotal - discount;

    const maxRedeemablePoints = user ? Math.min(user.awardsPoints, Math.floor(grandTotal * 100)) : 0;

    return (
      <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-right-8">
        <button onClick={() => setBookingStep('SEAT')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Seat Selection
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Flight Summary */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-display font-bold">Review your trip</h2>
            
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
               <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{selectedFlight.origin} to {selectedFlight.destination}</h3>
                    <p className="text-silver-500 text-sm">{criteria.flightType === 'one-way' ? 'One-way' : 'Round Trip'} • {criteria.passengers} Passenger(s)</p>
                    <span className="inline-block mt-2 text-xs font-bold bg-silver-100 dark:bg-zinc-800 px-2 py-1 rounded text-black dark:text-white border border-silver-200 dark:border-zinc-700">
                        {selectedFlight.cabinClass}
                    </span>
                  </div>
                  <div className="text-right">
                     <span className="bg-black text-white dark:bg-white dark:text-black text-xs font-bold px-3 py-1 rounded-full">{selectedFlight.flightNumber}</span>
                     <p className="text-sm font-bold mt-2 text-silver-600 dark:text-silver-400">Seat {selectedSeat}</p>
                     <p className="text-xs text-silver-400">{selectedFlight.aircraft}</p>
                  </div>
               </div>

               <div className="flex items-center gap-8 py-6 border-y border-silver-100 dark:border-zinc-800">
                  <div className="text-center">
                     <div className="font-display font-bold text-2xl">{selectedFlight.departureTime}</div>
                     <div className="text-xs text-silver-500">{selectedFlight.origin}</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                     <div className="text-xs text-silver-400 mb-1">{selectedFlight.duration}</div>
                     <div className="w-full h-[2px] bg-silver-200 dark:bg-zinc-700 relative">
                        <Plane size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-silver-400" />
                     </div>
                  </div>
                  <div className="text-center">
                     <div className="font-display font-bold text-2xl">{selectedFlight.arrivalTime}</div>
                     <div className="text-xs text-silver-500">{selectedFlight.destination}</div>
                  </div>
               </div>

               {/* Points Redemption */}
               {user && (
                   <div className="mt-6 p-6 bg-silver-50 dark:bg-zinc-950 rounded-2xl border border-silver-200 dark:border-zinc-800">
                       <div className="flex items-center gap-3 mb-4">
                           <Award className="text-yellow-500" />
                           <h4 className="font-bold">Redeem Flopcoast Points</h4>
                       </div>
                       <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                           <div className="text-sm text-silver-500">
                               Available: <span className="font-bold text-black dark:text-white">{user.awardsPoints.toLocaleString()} pts</span>
                           </div>
                           <div className="flex items-center gap-4 w-full md:w-auto">
                               <input 
                                  type="range"
                                  min="0"
                                  max={maxRedeemablePoints}
                                  step="100"
                                  value={pointsRedeemed}
                                  onChange={(e) => setPointsRedeemed(parseInt(e.target.value))}
                                  className="w-full md:w-48 accent-black dark:accent-white"
                               />
                               <div className="text-right">
                                   <div className="font-bold text-lg">{pointsRedeemed.toLocaleString()} pts</div>
                                   <div className="text-xs text-green-600">-${(pointsRedeemed / 100).toFixed(2)}</div>
                               </div>
                           </div>
                       </div>
                   </div>
               )}
               
               {/* Insurance Section */}
               <div className="mt-6 border-t border-silver-100 dark:border-zinc-800 pt-8">
                  <h4 className="font-bold text-lg mb-4">Trip Protection</h4>
                  <label className={`relative block p-6 rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${addInsurance ? 'border-green-500 bg-green-50/50 dark:bg-green-900/10' : 'border-silver-200 dark:border-zinc-800 hover:border-silver-300 dark:hover:border-zinc-700'}`}>
                     <input type="checkbox" className="hidden" checked={addInsurance} onChange={() => setAddInsurance(!addInsurance)} />
                     
                     <div className="flex items-start gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${addInsurance ? 'bg-green-500 border-green-500 text-white' : 'border-silver-300'}`}>
                           {addInsurance && <Check size={14} />}
                        </div>
                        <div>
                           <div className="font-bold mb-1">Add Flopcoast Protect+</div>
                           <p className="text-sm text-silver-500 mb-2">Full coverage for cancellation, medical emergencies, and baggage.</p>
                           <p className="text-xs font-bold text-green-600">See coverage limits in policy</p>
                        </div>
                        <div className="ml-auto font-bold">
                           ${(45 * criteria.passengers).toFixed(2)}
                        </div>
                     </div>
                  </label>
               </div>
            </div>
            
            <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
               <h3 className="font-bold mb-4">Passenger Information</h3>
               <div className="space-y-4">
                  {[...Array(criteria.passengers)].map((_, idx) => (
                      <div key={idx} className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-silver-200 dark:border-zinc-800">
                         <h4 className="text-xs font-bold uppercase text-silver-400 mb-3">Passenger {idx + 1} (Adult)</h4>
                         <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="bg-silver-50 dark:bg-zinc-950 p-3 rounded-lg text-sm border-transparent focus:border-black dark:focus:border-white outline-none border" />
                            <input type="text" placeholder="Passport Number" className="bg-silver-50 dark:bg-zinc-950 p-3 rounded-lg text-sm border-transparent focus:border-black dark:focus:border-white outline-none border" />
                         </div>
                      </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
             <div className="sticky top-32 bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-xl">
                <h3 className="text-xl font-display font-bold mb-6">Price Summary</h3>
                <div className="space-y-4 mb-6">
                   <div className="flex justify-between text-sm">
                      <span className="text-silver-500">{criteria.passengers} x {selectedFlight.cabinClass} Flight</span>
                      <span className="font-medium">${baseTotal.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-silver-500">Taxes & Fees</span>
                      <span className="font-medium">${taxes.toFixed(2)}</span>
                   </div>
                   {addInsurance && (
                      <div className="flex justify-between text-sm text-green-600">
                         <span>Trip Insurance</span>
                         <span className="font-medium">+${insuranceTotal.toFixed(2)}</span>
                      </div>
                   )}
                   {seatPrice > 0 && (
                      <div className="flex justify-between text-sm">
                          <span className="text-silver-500">Seat Selection</span>
                          <span className="font-medium">+${seatsTotal.toFixed(2)}</span>
                      </div>
                   )}
                   {discount > 0 && (
                       <div className="flex justify-between text-sm text-green-600">
                           <span>Points Discount</span>
                           <span className="font-medium">-${discount.toFixed(2)}</span>
                       </div>
                   )}
                </div>
                
                <div className="pt-6 border-t border-silver-100 dark:border-zinc-800 mb-8">
                   <div className="flex justify-between items-end">
                      <span className="text-sm font-bold uppercase text-silver-400">Total</span>
                      <span className="text-3xl font-display font-bold">${grandTotal.toFixed(2)}</span>
                   </div>
                </div>

                <button 
                  onClick={handleConfirmBooking}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg"
                >
                   Pay & Confirm
                </button>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Comparison Modal ---
  const ComparisonModal = () => {
     // Calculate max duration for visualization
     const maxDuration = Math.max(...selectedForComparison.map(f => parseDuration(f.duration)));

     return (
     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
         <div className="bg-white dark:bg-zinc-900 w-full max-w-5xl h-[80vh] rounded-[2.5rem] p-8 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-8">
             <div className="flex justify-between items-center mb-6 shrink-0">
                 <h2 className="text-2xl font-bold font-display">Compare Flights</h2>
                 <button onClick={() => setIsComparisonModalOpen(false)} className="p-2 hover:bg-silver-100 dark:hover:bg-zinc-800 rounded-full"><X/></button>
             </div>
             
             <div className="flex-1 overflow-x-auto">
                 <div className="grid grid-cols-4 gap-4 min-w-[800px]">
                     {/* Labels Column */}
                     <div className="space-y-4 pt-48 text-sm font-bold text-silver-500">
                         <div className="h-12 flex items-center">Price</div>
                         <div className="h-16 flex items-center">Travel Time</div>
                         <div className="h-12 flex items-center">Schedule</div>
                         <div className="h-12 flex items-center">Stops</div>
                         <div className="h-12 flex items-center">Cabin Class</div>
                         <div className="h-12 flex items-center">Aircraft</div>
                         <div className="h-20 flex items-center">Baggage</div>
                         <div className="h-32 flex items-start pt-4">Amenities</div>
                     </div>

                     {/* Flight Columns */}
                     {selectedForComparison.map(flight => (
                         <div key={flight.id} className="space-y-4 bg-silver-50 dark:bg-zinc-950 p-4 rounded-2xl border border-silver-200 dark:border-zinc-800">
                             <div className="h-40 flex flex-col justify-between mb-4">
                                 <div className="font-bold text-lg">{flight.airline}</div>
                                 <div className="text-xs text-silver-500">{flight.flightNumber}</div>
                                 <button onClick={() => { setIsComparisonModalOpen(false); handleBookClick(flight); }} className="w-full py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-bold">Select</button>
                             </div>
                             
                             <div className="h-12 flex items-center font-display font-bold text-xl">${getDynamicPrice(flight.price, cabinFilter)}</div>
                             
                             {/* Enhanced Travel Time with Visual Bar */}
                             <div className="h-16 flex flex-col justify-center">
                                 <div className="font-bold flex items-center gap-2">
                                     <Clock size={14} className="text-silver-400"/> {flight.duration}
                                 </div>
                                 <div className="w-full bg-silver-200 dark:bg-zinc-800 rounded-full h-1.5 mt-2 overflow-hidden">
                                     <div 
                                        className="bg-black dark:bg-white h-full rounded-full" 
                                        style={{ width: `${(parseDuration(flight.duration) / maxDuration) * 100}%` }}
                                     ></div>
                                 </div>
                             </div>

                             <div className="h-12 flex items-center text-sm">{flight.departureTime} - {flight.arrivalTime}</div>
                             <div className="h-12 flex items-center text-sm">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}</div>
                             <div className="h-12 flex items-center text-sm font-bold">{flight.cabinClass}</div>
                             <div className="h-12 flex items-center text-sm">{flight.aircraft}</div>
                             <div className="h-20 flex items-center text-xs leading-relaxed">{flight.baggage}</div>
                             <div className="h-32 pt-4">
                                 <div className="grid grid-cols-2 gap-2">
                                     {flight.amenities.map(a => (
                                         <div key={a} className="text-[10px] bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-silver-100 dark:border-zinc-800 text-center">{a}</div>
                                     ))}
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
     </div>
  )};

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-right-8">
      {isComparisonModalOpen && <ComparisonModal />}
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <button onClick={onBack} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} /> Back to Search
          </button>
          <h2 className="text-3xl font-display font-bold">
            {criteria.from ? `Flights from ${criteria.from.split(' ')[0]} to ${criteria.to.split(' ')[0]}` : `Search Results`}
          </h2>
          <p className="text-silver-500">
            {filteredAndSortedResults.length} flights found • {criteria.date} • {criteria.passengers} Passenger(s)
          </p>
        </div>

        <div className="flex items-center gap-3">
             {selectedForComparison.length > 0 && (
                 <button 
                    onClick={() => setIsComparisonModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold shadow-lg hover:scale-105 transition-transform animate-in zoom-in"
                 >
                     <Columns size={16} /> Compare ({selectedForComparison.length})
                 </button>
             )}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 border border-silver-200 dark:border-zinc-800 sticky top-32">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold flex items-center gap-2"><Filter size={18} /> Filters</h3>
              <button onClick={resetFilters} className="text-xs font-bold underline">Reset</button>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase text-silver-400 mb-2 block">Max Price</label>
              <div className="flex justify-between text-sm font-bold mb-2">
                 <span>$0</span>
                 <span>${maxPrice}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="5000" 
                step="100"
                value={maxPrice} 
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full accent-black dark:accent-white"
              />
            </div>

            {/* Cabin Class Filter - NEW */}
            <div className="mb-6">
               <label className="text-xs font-bold uppercase text-silver-400 mb-3 block">Cabin Class</label>
               <div className="space-y-2">
                  {(['all', 'Economy', 'Premium Economy', 'Business', 'First Class'] as const).map(option => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${cabinFilter === option ? 'border-black dark:border-white' : 'border-silver-300'}`}>
                              {cabinFilter === option && <div className="w-2.5 h-2.5 bg-black dark:bg-white rounded-full"></div>}
                          </div>
                          <input 
                             type="radio" 
                             name="cabin" 
                             className="hidden" 
                             checked={cabinFilter === option} 
                             onChange={() => setCabinFilter(option)} 
                          />
                          <span className={`text-sm font-medium ${cabinFilter === option ? 'text-black dark:text-white' : 'text-silver-500'}`}>
                              {option === 'all' ? 'Any Class' : option}
                          </span>
                      </label>
                  ))}
               </div>
            </div>

            {/* Stops Filter */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase text-silver-400 mb-3 block">Stops</label>
              <div className="flex gap-2">
                {(['all', '0', '1', '2+'] as const).map(opt => (
                  <button
                    key={opt}
                    onClick={() => setStopsFilter(opt)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg border ${stopsFilter === opt ? 'bg-black text-white dark:bg-white dark:text-black border-transparent' : 'border-silver-200 dark:border-zinc-800 text-silver-500 hover:border-black dark:hover:border-white'}`}
                  >
                    {opt === 'all' ? 'Any' : opt}
                  </button>
                ))}
              </div>
            </div>

             {/* Time Filter */}
             <div className="mb-6">
                <label className="text-xs font-bold uppercase text-silver-400 mb-3 block">Departure Time</label>
                <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setTimeFilter('morning')} className={`p-2 text-xs font-bold rounded-lg border text-center ${timeFilter === 'morning' ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-silver-200 dark:border-zinc-800'}`}>Morning</button>
                    <button onClick={() => setTimeFilter('afternoon')} className={`p-2 text-xs font-bold rounded-lg border text-center ${timeFilter === 'afternoon' ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-silver-200 dark:border-zinc-800'}`}>Afternoon</button>
                    <button onClick={() => setTimeFilter('evening')} className={`p-2 text-xs font-bold rounded-lg border text-center ${timeFilter === 'evening' ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-silver-200 dark:border-zinc-800'}`}>Evening</button>
                    <button onClick={() => setTimeFilter('all')} className={`p-2 text-xs font-bold rounded-lg border text-center ${timeFilter === 'all' ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-silver-200 dark:border-zinc-800'}`}>Any Time</button>
                </div>
             </div>

             {/* Airline Filter */}
             <div className="mb-6">
                <label className="text-xs font-bold uppercase text-silver-400 mb-3 block">Airlines</label>
                <div className="space-y-2">
                   {availableAirlines.map(airline => (
                      <label key={airline} className="flex items-center gap-3 cursor-pointer">
                          <input 
                             type="checkbox" 
                             checked={selectedAirlines.includes(airline)}
                             onChange={() => toggleAirline(airline)}
                             className="hidden"
                          />
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedAirlines.includes(airline) ? 'bg-black dark:bg-white border-black dark:border-white' : 'border-silver-300'}`}>
                             {selectedAirlines.includes(airline) && <Check size={12} className="text-white dark:text-black"/>}
                          </div>
                          <span className="text-sm text-silver-600 dark:text-silver-300">{airline}</span>
                      </label>
                   ))}
                </div>
             </div>

          </div>
        </div>

        {/* Results List */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Sorting Bar */}
          <div className="flex justify-end mb-4">
             <div className="flex items-center gap-3">
                 <span className="text-sm font-bold text-silver-400">Sort by:</span>
                 <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm font-bold outline-none cursor-pointer"
                 >
                     <option value="price_asc">Lowest Price</option>
                     <option value="duration_asc">Shortest Duration</option>
                     <option value="departure_asc">Departure Time</option>
                     <option value="arrival_asc">Arrival Time</option>
                 </select>
             </div>
          </div>

          {filteredAndSortedResults.length > 0 ? (
            filteredAndSortedResults.map((flight) => (
              <div key={flight.id} className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 border border-silver-200 dark:border-zinc-800 hover:shadow-lg transition-all group relative">
                
                {/* Compare Checkbox */}
                <div className="absolute top-6 left-6 z-10">
                    <label className="flex items-center gap-2 cursor-pointer group/compare">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${selectedForComparison.find(f => f.id === flight.id) ? 'bg-black dark:bg-white border-black dark:border-white' : 'border-silver-300 bg-white/50 dark:bg-black/50'}`}>
                             {selectedForComparison.find(f => f.id === flight.id) && <Check size={12} className="text-white dark:text-black"/>}
                        </div>
                        <input 
                           type="checkbox" 
                           className="hidden"
                           checked={!!selectedForComparison.find(f => f.id === flight.id)}
                           onChange={() => toggleComparison(flight)}
                        />
                        <span className="text-xs font-bold text-silver-400 opacity-0 group-hover/compare:opacity-100 transition-opacity">Compare</span>
                    </label>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6 pl-8">
                  {/* Flight Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                       <span className="text-sm font-bold">{flight.airline}</span>
                       <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-silver-100 dark:bg-zinc-800 uppercase tracking-wide">{flight.aircraft}</span>
                    </div>

                    <div className="flex items-center gap-8 md:gap-16">
                      <div>
                        <div className="text-2xl font-display font-bold">{flight.departureTime}</div>
                        <div className="text-sm text-silver-500 font-medium">{flight.origin.split(' ')[0]}</div>
                      </div>

                      <div className="flex-1 flex flex-col items-center">
                        <div className="text-xs text-silver-400 mb-1">{flight.duration}</div>
                        <div className="w-full h-[2px] bg-silver-200 dark:bg-zinc-700 relative">
                          <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-silver-300 dark:text-zinc-600" size={14} fill="currentColor" />
                        </div>
                        <div className="text-xs text-silver-500 mt-1 font-medium text-center">
                            {flight.stops === 0 ? 'Non-stop' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}
                            {flight.layoverDuration && <span className="text-orange-500 block">{flight.layoverDuration} layover</span>}
                        </div>
                        {/* New Baggage Display */}
                        <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-silver-500 bg-silver-50 dark:bg-zinc-800 px-2 py-1 rounded-md border border-silver-100 dark:border-zinc-700">
                            <Luggage size={10} /> {flight.baggage}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-display font-bold">{flight.arrivalTime}</div>
                        <div className="text-sm text-silver-500 font-medium">{flight.destination.split(' ')[0]}</div>
                      </div>
                    </div>
                    
                    {/* Amenities Section - Styled */}
                    <div className="mt-6 flex flex-wrap gap-2">
                         {flight.amenities.includes('WiFi') && (
                             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-silver-50 dark:bg-zinc-950 rounded-lg border border-silver-100 dark:border-zinc-800 text-xs font-semibold text-silver-600 dark:text-silver-400">
                                 <Wifi size={12} /> <span>Wi-Fi</span>
                             </div>
                         )}
                         {flight.amenities.includes('Meals') && (
                             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-silver-50 dark:bg-zinc-950 rounded-lg border border-silver-100 dark:border-zinc-800 text-xs font-semibold text-silver-600 dark:text-silver-400">
                                 <Coffee size={12} /> <span>Meal</span>
                             </div>
                         )}
                         {flight.amenities.includes('USB Power') && (
                             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-silver-50 dark:bg-zinc-950 rounded-lg border border-silver-100 dark:border-zinc-800 text-xs font-semibold text-silver-600 dark:text-silver-400">
                                 <Zap size={12} /> <span>Power</span>
                             </div>
                         )}
                         <div className="flex items-center gap-1.5 px-3 py-1.5 bg-silver-50 dark:bg-zinc-950 rounded-lg border border-silver-100 dark:border-zinc-800 text-xs font-semibold text-silver-600 dark:text-silver-400">
                              <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span> {flight.cabinClass}
                         </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex flex-col justify-between items-end min-w-[140px] border-l border-silver-100 dark:border-zinc-800 pl-6">
                    <div className="text-right">
                       <span className="text-3xl font-display font-bold">${flight.price}</span>
                       <div className="text-xs text-silver-400">per person</div>
                       {flight.priceTrend === 'down' && (
                           <div className="flex items-center justify-end gap-1 text-xs font-bold text-green-600 mt-1">
                               <ArrowDownRight size={12} /> Price Drop
                           </div>
                       )}
                       {flight.priceTrend === 'up' && (
                           <div className="flex items-center justify-end gap-1 text-xs font-bold text-red-500 mt-1">
                               <ArrowUpRight size={12} /> Rising Fast
                           </div>
                       )}
                    </div>
                    
                    <button 
                      onClick={() => handleBookClick(flight)}
                      className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg mt-4"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
              <Plane size={48} className="mx-auto text-silver-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">No flights found</h3>
              <p className="text-silver-500">Try adjusting your filters or dates.</p>
              <button onClick={resetFilters} className="mt-4 text-sm font-bold underline">Clear all filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightResults;

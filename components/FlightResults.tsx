
import React, { useState, useEffect } from 'react';
import { FlightResult, SearchCriteria } from '../types';
import { Filter, ArrowLeft, Check, ShieldCheck, Plane, X, Info, Clock, Building, RotateCcw, Luggage, Wifi, Coffee, Zap, Tv, Armchair, Columns, ChevronDown, ChevronUp, ArrowUpRight, ArrowDownRight, ArrowRight } from 'lucide-react';
import { MOCK_SEARCH_RESULTS } from '../services/mockData';

interface FlightResultsProps {
  criteria: SearchCriteria;
  onBack: () => void;
}

type StopsFilter = 'all' | '0' | '1' | '2+';
type TimeFilter = 'all' | 'morning' | 'afternoon' | 'evening';
type BookingStep = 'SELECT' | 'SEAT' | 'SUMMARY' | 'CONFIRMATION';
type CabinFilter = 'all' | 'Economy' | 'Premium Economy' | 'Business' | 'First Class';
type SortOption = 'price_asc' | 'duration_asc' | 'departure_asc' | 'arrival_asc';

const FlightResults: React.FC<FlightResultsProps> = ({ criteria, onBack }) => {
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
  const [addInsurance, setAddInsurance] = useState(false);

  // Initialize Insurance state from search criteria
  useEffect(() => {
    if (criteria.includeInsurance) {
        setAddInsurance(true);
    }
  }, [criteria]);

  // --- Helpers ---

  const handleBookClick = (flight: FlightResult) => {
    setSelectedFlight(flight);
    setBookingStep('SEAT'); // Proceed to seat selection first
  };

  const handleSeatSelected = (seat: string) => {
    setSelectedSeat(seat);
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

  // Get unique airlines for filter, ONLY FLOPCOAST
  const availableAirlines: string[] = Array.from(new Set(results.filter(r => r.airline.includes('Flopcoast')).map(r => r.airline)));

  // Filter and Sort Logic
  const filteredAndSortedResults = results
    .filter(flight => {
        // Airline Restriction: Only allow Flopcoast flights
        if (!flight.airline.includes('Flopcoast')) return false;

        // Price Filter
        if (flight.price > maxPrice) return false;
        
        // Stops Filter
        if (stopsFilter === '0' && flight.stops > 0) return false;
        if (stopsFilter === '1' && flight.stops !== 1) return false;
        if (stopsFilter === '2+' && flight.stops < 2) return false;

        // Time Filter (Fixed logic: Morning 5-12, Afternoon 12-18, Evening 18-5)
        const hour = parseInt(flight.departureTime.split(':')[0]);
        if (timeFilter === 'morning' && (hour < 5 || hour >= 12)) return false;
        if (timeFilter === 'afternoon' && (hour < 12 || hour >= 18)) return false;
        if (timeFilter === 'evening' && (hour >= 5 && hour < 18)) return false;

        // Cabin Class Filter
        if (cabinFilter !== 'all' && flight.cabinClass !== cabinFilter) return false;

        // Airline Filter (User selected)
        if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) return false;

        // Basic destination matching (simplified for mock)
        if (criteria.to && !flight.destination.toLowerCase().includes(criteria.to.toLowerCase().split(' ')[0])) {
            const hasDestination = results.some(r => r.destination.toLowerCase().includes(criteria.to.toLowerCase().split(' ')[0]));
            if (hasDestination) return false;
        }

        return true;
    })
    .sort((a, b) => {
        if (sortBy === 'price_asc') return a.price - b.price;
        if (sortBy === 'duration_asc') return parseDuration(a.duration) - parseDuration(b.duration);
        if (sortBy === 'departure_asc') return a.departureTime.localeCompare(b.departureTime);
        if (sortBy === 'arrival_asc') return a.arrivalTime.localeCompare(b.arrivalTime);
        return 0;
    });

  // --- Views ---

  if (bookingStep === 'CONFIRMATION') {
     // ... (Existing Confirmation Logic remains same)
     // To keep response concise, omitting duplication unless requested. 
     // Using existing structure.
     const total = selectedFlight ? selectedFlight.price * criteria.passengers + Math.round(selectedFlight.price * 0.12) * criteria.passengers + (addInsurance ? 45 * criteria.passengers : 0) : 0;
    
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
                   <span className="font-display font-bold text-2xl">${total}</span>
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
    const total = selectedFlight.price * criteria.passengers + (addInsurance ? 45 * criteria.passengers : 0);

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
               {/* Content same as before */}
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
               
               {/* Insurance Section */}
               <div className="mt-6 border-t border-silver-100 dark:border-zinc-800 pt-8">
                  <h4 className="font-bold text-lg mb-4">Trip Protection</h4>
                  <label className={`relative block p-6 rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${addInsurance ? 'border-green-500 bg-green-50/50 dark:bg-green-900/10' : 'border-silver-200 dark:border-zinc-800 hover:border-silver-300 dark:hover:border-zinc-700'}`}>
                     <input type="checkbox" className="hidden" checked={addInsurance} onChange={() => setAddInsurance(!addInsurance)} />
                     
                     <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${addInsurance ? 'bg-green-500 text-white' : 'bg-silver-100 dark:bg-zinc-800 text-silver-400'}`}>
                           <ShieldCheck size={20} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <div className="font-bold text-lg">Add Trip Insurance</div>
                                <div className="font-bold text-lg text-green-600">+$45<span className="text-xs text-silver-500 font-normal">/pp</span></div>
                            </div>
                            <p className="text-silver-500 text-sm leading-relaxed max-w-xl">
                               Complete peace of mind with our comprehensive coverage package:
                            </p>
                            <ul className="text-xs text-silver-500 mt-2 space-y-1 list-disc list-inside">
                               <li><strong>Medical Emergency:</strong> Coverage up to $100,000 for unexpected illness or injury.</li>
                               <li><strong>Trip Cancellation:</strong> 100% reimbursement if you cancel for covered reasons.</li>
                               <li><strong>Baggage Protection:</strong> Up to $2,500 for lost, stolen, or damaged luggage.</li>
                               <li><strong>Trip Delay:</strong> Reimbursement up to $500/day for expenses during delays over 6 hours.</li>
                            </ul>
                        </div>
                     </div>
                     {addInsurance && (
                         <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-xl uppercase tracking-wider">
                             Active
                         </div>
                     )}
                  </label>
               </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="lg:col-span-1">
             <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 sticky top-32">
                <h3 className="font-bold text-xl mb-6">Price Breakdown</h3>
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between text-sm">
                      <span className="text-silver-500">Flight x {criteria.passengers}</span>
                      <span className="font-medium">${selectedFlight.price * criteria.passengers}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-silver-500">Taxes & Fees</span>
                      <span className="font-medium">${Math.round(selectedFlight.price * 0.12) * criteria.passengers}</span>
                   </div>
                   {addInsurance && (
                     <div className="flex justify-between text-sm text-green-600">
                        <span>Trip Insurance</span>
                        <span className="font-medium">+${45 * criteria.passengers}</span>
                     </div>
                   )}
                   <div className="pt-4 border-t border-silver-200 dark:border-zinc-800 flex justify-between items-end">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-display font-bold text-4xl">${total + Math.round(selectedFlight.price * 0.12) * criteria.passengers}</span>
                   </div>
                </div>
                <button 
                  onClick={handleConfirmBooking}
                  className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform"
                >
                   Complete Booking
                </button>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Search Results View ---
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in duration-500 relative">
      
      {/* Search Header & Sorting */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end mb-12">
        <div>
          <button onClick={onBack} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-4 transition-colors">
            <ArrowLeft size={18} /> Back
          </button>
          <h1 className="text-4xl font-display font-bold">
            Select your flight
          </h1>
          <p className="text-silver-500 mt-2">
            {filteredAndSortedResults.length} flights found for <strong className="text-black dark:text-white">{criteria.from || 'Origin'}</strong> to <strong className="text-black dark:text-white">{criteria.to || 'Destination'}</strong>
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
             <span className="text-xs font-bold uppercase tracking-wider text-silver-400">Sort by:</span>
             <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 text-sm font-medium rounded-xl px-4 py-2 outline-none focus:border-black dark:focus:border-white transition-colors"
             >
                <option value="price_asc">Price (Lowest)</option>
                <option value="duration_asc">Duration (Fastest)</option>
                <option value="departure_asc">Departure Time (Earliest)</option>
                <option value="arrival_asc">Arrival Time (Earliest)</option>
             </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-2">
                   <Filter size={20} />
                   <h3 className="text-xl font-bold font-display">Filters</h3>
                 </div>
                 <button onClick={resetFilters} className="text-xs font-semibold text-silver-500 hover:text-black dark:hover:text-white flex items-center gap-1">
                    <RotateCcw size={12} /> Reset
                 </button>
              </div>
              
              <div className="space-y-8">
                {/* Price Filter */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4 block">Max Price</label>
                    <input 
                      type="range" 
                      min="100" 
                      max="5000" 
                      value={maxPrice} 
                      onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                      className="w-full accent-black dark:accent-white h-2 bg-silver-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm font-medium mt-2">
                      <span>$100</span>
                      <span>${maxPrice}</span>
                    </div>
                </div>

                {/* Cabin Class Filter */}
                <div>
                   <label className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4 flex items-center gap-2">
                      <Armchair size={14} /> Cabin Class
                   </label>
                   <div className="space-y-2">
                      {['all', 'Economy', 'Premium Economy', 'Business', 'First Class'].map(opt => (
                         <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                               type="radio" 
                               name="cabin" 
                               checked={cabinFilter === opt}
                               onChange={() => setCabinFilter(opt as CabinFilter)}
                               className="accent-black dark:accent-white"
                            />
                            <span className="text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                               {opt === 'all' ? 'Any Class' : opt}
                            </span>
                         </label>
                      ))}
                   </div>
                </div>

                {/* Stops Filter */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4 block">Stops</label>
                    <div className="flex gap-2">
                      {['all', '0', '1', '2+'].map(opt => (
                        <button 
                          key={opt}
                          onClick={() => setStopsFilter(opt as StopsFilter)}
                          className={`flex-1 py-2 rounded-lg text-[10px] md:text-xs font-medium border transition-all ${stopsFilter === opt ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-md' : 'border-silver-200 dark:border-zinc-700 hover:bg-silver-50 dark:hover:bg-zinc-800'}`}
                        >
                            {opt === 'all' ? 'Any' : opt === '0' ? 'Non-stop' : opt === '1' ? '1 Stop' : '2+ Stops'}
                        </button>
                      ))}
                    </div>
                </div>

                {/* Departure Time Filter */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4 flex items-center gap-2">
                      <Clock size={14} /> Departure Time
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'all', label: 'Any Time' },
                        { id: 'morning', label: 'Morning (5AM - 12PM)' },
                        { id: 'afternoon', label: 'Afternoon (12PM - 6PM)' },
                        { id: 'evening', label: 'Evening (6PM - 5AM)' }
                      ].map(opt => (
                        <button 
                          key={opt.id}
                          onClick={() => setTimeFilter(opt.id as TimeFilter)}
                          className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium border transition-all ${timeFilter === opt.id ? 'bg-black text-white dark:bg-white dark:text-black border-transparent' : 'border-silver-200 dark:border-zinc-700 hover:bg-silver-50 dark:hover:bg-zinc-800'}`}
                        >
                            {opt.label}
                        </button>
                      ))}
                    </div>
                </div>

                 {/* Airline Filter */}
                 {availableAirlines.length > 0 && (
                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4 flex items-center gap-2">
                        <Building size={14} /> Airlines
                        </label>
                        <div className="space-y-2">
                        {availableAirlines.map(airline => (
                            <label key={airline} className="flex items-center gap-3 p-2 hover:bg-silver-50 dark:hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
                                <input 
                                type="checkbox" 
                                checked={selectedAirlines.includes(airline)}
                                onChange={() => toggleAirline(airline)}
                                className="w-4 h-4 rounded border-silver-300 text-black focus:ring-black accent-black"
                                />
                                <span className="text-sm font-medium">{airline}</span>
                            </label>
                        ))}
                        </div>
                    </div>
                 )}
              </div>
          </div>
        </div>

        {/* Results List */}
        <div className="lg:col-span-3 space-y-4">
          {filteredAndSortedResults.length === 0 ? (
             <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                <Info size={48} className="mx-auto text-silver-300 mb-4"/>
                <h3 className="text-xl font-bold">No flights found</h3>
                <p className="text-silver-500">We only fly our friendly skies. Try adjusting your filters.</p>
             </div>
          ) : (
            filteredAndSortedResults.map((flight) => (
              <div key={flight.id} className="group bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-300 relative">
                
                {/* Compare Checkbox */}
                <div className="absolute top-6 right-6 lg:right-auto lg:left-6">
                    <label className="flex items-center gap-2 cursor-pointer bg-silver-50 dark:bg-zinc-950 px-3 py-1.5 rounded-full border border-silver-200 dark:border-zinc-700 hover:border-black dark:hover:border-white transition-colors">
                        <input 
                            type="checkbox"
                            checked={!!selectedForComparison.find(f => f.id === flight.id)}
                            onChange={() => toggleComparison(flight)}
                            disabled={!selectedForComparison.find(f => f.id === flight.id) && selectedForComparison.length >= 3}
                            className="accent-black dark:accent-white"
                        />
                        <span className="text-xs font-bold text-silver-500">Compare</span>
                    </label>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6 pt-8 lg:pt-0 lg:pl-20">
                    
                    {/* Flight Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                          <div className="font-bold text-lg">{flight.airline}</div>
                          <span className="text-xs bg-silver-100 dark:bg-zinc-800 px-2 py-1 rounded text-silver-500 border border-silver-200 dark:border-zinc-700 flex items-center gap-1">
                             <Plane size={10} /> {flight.aircraft}
                          </span>
                          <span className="text-xs bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded font-bold">{flight.cabinClass}</span>
                      </div>
                      
                      <div className="flex items-center gap-8 md:gap-12">
                          <div>
                            <div className="text-2xl font-bold font-display">{flight.departureTime}</div>
                            <div className="text-sm text-silver-500">{flight.origin}</div>
                          </div>
                          
                          <div className="flex-1 flex flex-col items-center">
                            <div className="text-xs text-silver-400 mb-1">{flight.duration}</div>
                            <div className="w-full h-[2px] bg-silver-200 dark:bg-zinc-700 relative flex items-center justify-center">
                                <div className="absolute w-2 h-2 rounded-full bg-black dark:bg-white left-0"></div>
                                <div className="absolute w-2 h-2 rounded-full bg-black dark:bg-white right-0"></div>
                                <Plane size={14} className="text-silver-400 rotate-90" />
                            </div>
                            <div className="text-xs text-silver-400 mt-1">{flight.stops === 0 ? 'Non-stop' : flight.stops === 1 ? '1 stop' : `${flight.stops} stops`}</div>
                            
                            {/* Layover Estimation */}
                            {flight.stops > 0 && flight.layoverDuration && (
                                <div className="text-[10px] text-silver-400 bg-silver-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full mt-1">
                                    Layover: {flight.layoverDuration}
                                </div>
                            )}
                          </div>

                          <div className="text-right">
                            <div className="text-2xl font-bold font-display">{flight.arrivalTime}</div>
                            <div className="text-sm text-silver-500">{flight.destination}</div>
                          </div>
                      </div>

                      {/* Snippets (Baggage & Amenities) */}
                      <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-silver-100 dark:border-zinc-800">
                          <span className="text-xs text-silver-500 flex items-center gap-1.5 font-medium"><Luggage size={14}/> {flight.baggage}</span>
                          {flight.amenities.map(item => {
                              let Icon = Check;
                              if (item.toLowerCase().includes('wifi')) Icon = Wifi;
                              if (item.toLowerCase().includes('meal')) Icon = Coffee;
                              if (item.toLowerCase().includes('power')) Icon = Zap;
                              if (item.toLowerCase().includes('tv') || item.toLowerCase().includes('stream')) Icon = Tv;
                              
                              return (
                                <span key={item} className="text-xs text-silver-500 flex items-center gap-1.5 font-medium">
                                    <Icon size={14} className="text-silver-400" /> {item}
                                </span>
                              );
                          })}
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex flex-col justify-between items-end gap-4 min-w-[180px] border-l border-silver-100 dark:border-zinc-800 pl-6">
                      <div className="text-right">
                          <div className="text-3xl font-bold font-display flex items-center justify-end gap-2">
                             ${flight.price}
                             
                             {/* Price Trend Indicator */}
                             {flight.priceTrend === 'up' && (
                                <div className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full text-red-600" title="Price Rising">
                                   <ArrowUpRight size={14} />
                                </div>
                             )}
                             {flight.priceTrend === 'down' && (
                                <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-600" title="Price Dropping">
                                   <ArrowDownRight size={14} />
                                </div>
                             )}
                          </div>
                          <div className="text-xs text-silver-500">per person</div>
                      </div>
                      
                      <div className="flex flex-col gap-2 w-full">
                          <button 
                            onClick={() => handleBookClick(flight)}
                            className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg"
                          >
                            Select Flight
                          </button>
                      </div>
                    </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Comparison Floating Bar */}
      {selectedForComparison.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-2xl z-50 flex items-center gap-6 animate-in slide-in-from-bottom-10">
              <div className="pl-2 font-bold flex items-center gap-2">
                  <Columns size={18} />
                  {selectedForComparison.length} / 3 Selected
              </div>
              <div className="h-4 w-[1px] bg-white/30 dark:bg-black/30"></div>
              <button 
                  onClick={() => setSelectedForComparison([])}
                  className="text-xs hover:underline opacity-80"
              >
                  Clear
              </button>
              <button 
                  onClick={() => setIsComparisonModalOpen(true)}
                  className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
              >
                  Compare Now
              </button>
          </div>
      )}

      {/* Comparison Modal */}
      {isComparisonModalOpen && (
          <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex items-center justify-center p-4">
              <div className="bg-white dark:bg-zinc-900 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] p-8 shadow-2xl relative animate-in zoom-in-95">
                  <button 
                      onClick={() => setIsComparisonModalOpen(false)}
                      className="absolute top-6 right-6 p-2 hover:bg-silver-100 dark:hover:bg-zinc-800 rounded-full"
                  >
                      <X size={24} />
                  </button>
                  
                  <h2 className="text-3xl font-display font-bold mb-8">Flight Comparison</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedForComparison.map((flight) => (
                          <div key={flight.id} className="border border-silver-200 dark:border-zinc-800 rounded-2xl p-6 bg-silver-50 dark:bg-zinc-950 flex flex-col h-full">
                              <div className="mb-6 pb-6 border-b border-silver-200 dark:border-zinc-800">
                                  <div className="text-2xl font-display font-bold mb-2">${flight.price}</div>
                                  <div className="font-bold text-lg">{flight.airline}</div>
                                  <div className="text-sm text-silver-500">{flight.flightNumber}</div>
                              </div>
                              
                              <div className="space-y-6 flex-1">
                                  <div>
                                      <div className="text-xs uppercase font-bold text-silver-400 mb-1">Time</div>
                                      <div className="font-semibold">{flight.departureTime} - {flight.arrivalTime}</div>
                                      <div className="text-sm text-silver-500">{flight.duration}</div>
                                  </div>
                                  
                                  {/* NEW: Travel Time Comparison */}
                                  <div>
                                      <div className="text-xs uppercase font-bold text-silver-400 mb-1">Travel Time</div>
                                      <div className="flex items-center gap-2">
                                         <Clock size={14} className="text-silver-400"/>
                                         <span className="font-bold">{flight.duration}</span>
                                      </div>
                                  </div>

                                  <div>
                                      <div className="text-xs uppercase font-bold text-silver-400 mb-1">Stops</div>
                                      <div className="font-semibold">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} Stop(s)`}</div>
                                      {flight.layoverDuration && <div className="text-xs text-silver-500">Layover: {flight.layoverDuration}</div>}
                                  </div>
                                  <div>
                                      <div className="text-xs uppercase font-bold text-silver-400 mb-1">Class</div>
                                      <div className="font-semibold">{flight.cabinClass}</div>
                                  </div>
                                  <div>
                                      <div className="text-xs uppercase font-bold text-silver-400 mb-1">Aircraft</div>
                                      <div className="font-semibold">{flight.aircraft}</div>
                                  </div>
                                  <div>
                                      <div className="text-xs uppercase font-bold text-silver-400 mb-1">Baggage</div>
                                      <div className="font-semibold text-sm">{flight.baggage}</div>
                                  </div>
                                  <div>
                                      <div className="text-xs uppercase font-bold text-silver-400 mb-2">Amenities</div>
                                      <div className="flex flex-wrap gap-2">
                                          {flight.amenities.map(a => (
                                              <span key={a} className="text-xs bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-silver-200 dark:border-zinc-700">
                                                  {a}
                                              </span>
                                          ))}
                                      </div>
                                  </div>
                              </div>
                              
                              <button 
                                  onClick={() => {
                                      handleBookClick(flight);
                                      setIsComparisonModalOpen(false);
                                  }}
                                  className="w-full mt-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold"
                              >
                                  Select
                              </button>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      )}

    </div>
  );
};

// Seat Selection Component with Cabin Layout
const SeatSelection: React.FC<{ flight: FlightResult; onSelect: (seat: string) => void; onBack: () => void }> = ({ flight, onSelect, onBack }) => {
   const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

   const businessRows = [1, 2, 3];
   const economyRows = [10, 11, 12, 13, 14, 15];

   // Layout Definitions
   const businessCols = ['A', 'C', 'D', 'F']; // 2-2 Configuration
   const economyCols = ['A', 'B', 'C', 'D', 'E', 'F']; // 3-3 Configuration

   // Mock occupied seats
   const occupiedSeats = ['1A', '2C', '10F', '11A', '12B', '14D'];

   const handleSeatClick = (seat: string) => {
      if (occupiedSeats.includes(seat)) return;
      setSelectedSeat(seat);
   };

   return (
      <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-right-8">
         <button onClick={onBack} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Flight Selection
         </button>

         <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
               <h2 className="text-3xl font-display font-bold mb-2">Select your seat</h2>
               <p className="text-silver-500 mb-6 flex items-center gap-2">
                  <Plane size={16} /> {flight.aircraft} • {flight.cabinClass}
               </p>

               {/* Legend */}
               <div className="flex gap-6 mb-8 text-xs font-medium text-silver-500">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-white dark:bg-zinc-700 border border-silver-200 dark:border-zinc-600"></div> Available</div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-black dark:bg-white"></div> Selected</div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-silver-100 dark:bg-zinc-800 text-silver-300 flex items-center justify-center font-bold">X</div> Occupied</div>
               </div>

               <div className="bg-white dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 relative overflow-hidden flex flex-col items-center">
                  
                  {/* Plane Body Decor */}
                  <div className="absolute inset-y-0 left-0 w-12 bg-silver-50 dark:bg-zinc-950/50 border-r border-silver-100 dark:border-zinc-800"></div>
                  <div className="absolute inset-y-0 right-0 w-12 bg-silver-50 dark:bg-zinc-950/50 border-l border-silver-100 dark:border-zinc-800"></div>
                  
                  {/* Cockpit Indicator */}
                  <div className="w-32 h-16 bg-gradient-to-b from-silver-100 to-transparent dark:from-zinc-800 dark:to-transparent rounded-b-full absolute -top-10"></div>

                  <div className="w-full max-w-md mx-auto relative z-10 pt-8">
                     
                     {/* Business Class (2-2) */}
                     <div className="mb-12">
                        <div className="text-center mb-6 text-[10px] font-bold uppercase tracking-widest text-silver-400 flex items-center justify-center gap-2">
                            <span className="h-[1px] w-8 bg-silver-200 dark:bg-zinc-700"></span>
                            Business Class (2-2)
                            <span className="h-[1px] w-8 bg-silver-200 dark:bg-zinc-700"></span>
                        </div>
                        <div className="flex flex-col gap-4">
                           {businessRows.map(row => (
                               <div key={row} className="flex justify-center gap-6">
                                   {/* Left Side (A, C) */}
                                   <div className="flex gap-3">
                                       {['A', 'C'].map(col => {
                                           const seatId = `${row}${col}`;
                                           const isOccupied = occupiedSeats.includes(seatId);
                                           const isSelected = selectedSeat === seatId;
                                           return (
                                               <button 
                                                   key={seatId}
                                                   disabled={isOccupied}
                                                   onClick={() => handleSeatClick(seatId)}
                                                   className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all
                                                      ${isOccupied ? 'bg-silver-100 dark:bg-zinc-800 text-silver-300 cursor-not-allowed' : 
                                                        isSelected ? 'bg-black dark:bg-white text-white dark:text-black scale-110 shadow-xl' : 
                                                        'bg-white dark:bg-zinc-700 border border-silver-200 dark:border-zinc-600 hover:border-black dark:hover:border-white'}
                                                   `}
                                               >
                                                   {isOccupied ? 'X' : seatId}
                                               </button>
                                           );
                                       })}
                                   </div>
                                   {/* Aisle */}
                                   <div className="w-4"></div>
                                   {/* Right Side (D, F) */}
                                   <div className="flex gap-3">
                                       {['D', 'F'].map(col => {
                                           const seatId = `${row}${col}`;
                                           const isOccupied = occupiedSeats.includes(seatId);
                                           const isSelected = selectedSeat === seatId;
                                           return (
                                               <button 
                                                   key={seatId}
                                                   disabled={isOccupied}
                                                   onClick={() => handleSeatClick(seatId)}
                                                   className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all
                                                      ${isOccupied ? 'bg-silver-100 dark:bg-zinc-800 text-silver-300 cursor-not-allowed' : 
                                                        isSelected ? 'bg-black dark:bg-white text-white dark:text-black scale-110 shadow-xl' : 
                                                        'bg-white dark:bg-zinc-700 border border-silver-200 dark:border-zinc-600 hover:border-black dark:hover:border-white'}
                                                   `}
                                               >
                                                   {isOccupied ? 'X' : seatId}
                                               </button>
                                           );
                                       })}
                                   </div>
                               </div>
                           ))}
                        </div>
                     </div>

                     {/* Economy Class (3-3) */}
                     <div>
                        <div className="text-center mb-6 text-[10px] font-bold uppercase tracking-widest text-silver-400 flex items-center justify-center gap-2">
                            <span className="h-[1px] w-8 bg-silver-200 dark:bg-zinc-700"></span>
                            Economy Class (3-3)
                            <span className="h-[1px] w-8 bg-silver-200 dark:bg-zinc-700"></span>
                        </div>
                        <div className="flex flex-col gap-3">
                           {economyRows.map(row => (
                               <div key={row} className="flex justify-center gap-4">
                                   {/* Left Side (A, B, C) */}
                                   <div className="flex gap-2">
                                       {['A', 'B', 'C'].map(col => {
                                           const seatId = `${row}${col}`;
                                           const isOccupied = occupiedSeats.includes(seatId);
                                           const isSelected = selectedSeat === seatId;
                                           return (
                                               <button 
                                                   key={seatId}
                                                   disabled={isOccupied}
                                                   onClick={() => handleSeatClick(seatId)}
                                                   className={`w-9 h-9 rounded-md flex items-center justify-center text-[10px] font-bold transition-all
                                                      ${isOccupied ? 'bg-silver-100 dark:bg-zinc-800 text-silver-300 cursor-not-allowed' : 
                                                        isSelected ? 'bg-black dark:bg-white text-white dark:text-black scale-110 shadow-lg' : 
                                                        'bg-white dark:bg-zinc-700 border border-silver-200 dark:border-zinc-600 hover:border-black dark:hover:border-white'}
                                                   `}
                                               >
                                                   {isOccupied ? '' : seatId}
                                               </button>
                                           );
                                       })}
                                   </div>
                                   {/* Aisle */}
                                   <div className="w-2"></div>
                                   {/* Right Side (D, E, F) */}
                                   <div className="flex gap-2">
                                       {['D', 'E', 'F'].map(col => {
                                           const seatId = `${row}${col}`;
                                           const isOccupied = occupiedSeats.includes(seatId);
                                           const isSelected = selectedSeat === seatId;
                                           return (
                                               <button 
                                                   key={seatId}
                                                   disabled={isOccupied}
                                                   onClick={() => handleSeatClick(seatId)}
                                                   className={`w-9 h-9 rounded-md flex items-center justify-center text-[10px] font-bold transition-all
                                                      ${isOccupied ? 'bg-silver-100 dark:bg-zinc-800 text-silver-300 cursor-not-allowed' : 
                                                        isSelected ? 'bg-black dark:bg-white text-white dark:text-black scale-110 shadow-lg' : 
                                                        'bg-white dark:bg-zinc-700 border border-silver-200 dark:border-zinc-600 hover:border-black dark:hover:border-white'}
                                                   `}
                                               >
                                                   {isOccupied ? '' : seatId}
                                               </button>
                                           );
                                       })}
                                   </div>
                               </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Selection Summary */}
            <div className="lg:col-span-1">
               <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 sticky top-32 shadow-xl">
                  <h3 className="font-bold text-xl mb-6">Your Selection</h3>
                  <div className="space-y-4 mb-8">
                     <div className="flex justify-between items-center py-4 border-b border-silver-100 dark:border-zinc-800">
                        <span className="text-silver-500">Flight</span>
                        <span className="font-bold">{flight.flightNumber}</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-silver-100 dark:border-zinc-800">
                        <span className="text-silver-500">Route</span>
                        <span className="font-bold text-right text-sm">{flight.origin} → {flight.destination}</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-silver-100 dark:border-zinc-800">
                        <span className="text-silver-500">Class</span>
                        <span className="font-bold text-right text-sm">{flight.cabinClass}</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-silver-100 dark:border-zinc-800">
                        <span className="text-silver-500">Seat</span>
                        <span className="font-bold text-xl">{selectedSeat || '-'}</span>
                     </div>
                  </div>
                  
                  <button 
                     disabled={!selectedSeat}
                     onClick={() => selectedSeat && onSelect(selectedSeat)}
                     className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                     Confirm Seat
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FlightResults;

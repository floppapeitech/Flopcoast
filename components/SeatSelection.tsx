
import React, { useState } from 'react';
import { FlightResult } from '../types';
import { ArrowLeft, Check, Info } from 'lucide-react';

interface SeatSelectionProps {
  flight: FlightResult;
  onSelect: (seat: string, price: number) => void;
  onBack: () => void;
}

const SeatSelection: React.FC<SeatSelectionProps> = ({ flight, onSelect, onBack }) => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [currentPrice, setCurrentPrice] = useState(0);

  // Generate mock occupied seats
  const occupiedSeats = ['1A', '1F', '2C', '3D', '10A', '10B', '11C', '12F', '14A', '15C'];

  const handleSeatClick = (seatNum: string, price: number) => {
    if (occupiedSeats.includes(seatNum)) return;
    
    if (selectedSeat === seatNum) {
      setSelectedSeat(null);
      setCurrentPrice(0);
    } else {
      setSelectedSeat(seatNum);
      setCurrentPrice(price);
    }
  };

  const confirmSelection = () => {
    if (selectedSeat) {
      onSelect(selectedSeat, currentPrice);
    }
  };

  const renderSeat = (row: number, col: string, type: 'Business' | 'Economy') => {
    const seatNum = `${row}${col}`;
    const isOccupied = occupiedSeats.includes(seatNum);
    const isSelected = selectedSeat === seatNum;
    
    let price = 0;
    if (type === 'Business') price = 150;
    else if (row === 10 || row === 11) price = 50; // Extra legroom
    else price = 25; // Standard

    // If the user's flight class is Economy, they shouldn't select Business seats generally, 
    // but for simplicity we allow upgrades or disable based on cabin class logic.
    // Here we'll just allow selection but show different pricing.
    
    let seatColor = "bg-silver-200 dark:bg-zinc-700 hover:bg-silver-300 dark:hover:bg-zinc-600 cursor-pointer";
    if (isOccupied) seatColor = "bg-silver-300/50 dark:bg-zinc-800/50 cursor-not-allowed text-silver-400";
    else if (isSelected) seatColor = "bg-black dark:bg-white text-white dark:text-black shadow-lg scale-110";
    else if (type === 'Business') seatColor = "bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800 hover:bg-purple-200";
    else if (price === 50) seatColor = "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100";

    return (
      <button
        key={seatNum}
        onClick={() => handleSeatClick(seatNum, price)}
        disabled={isOccupied}
        className={`w-10 h-12 rounded-t-lg rounded-b-md m-1 flex flex-col items-center justify-center transition-all text-xs font-bold border border-transparent ${seatColor}`}
        title={`${type} - Seat ${seatNum} - $${price}`}
      >
        <span>{col}</span>
        {isSelected && <Check size={10} />}
      </button>
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-right-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
           <button onClick={onBack} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} /> Back to Flight Details
          </button>
          <h2 className="text-3xl font-display font-bold">Select your seat</h2>
          <p className="text-silver-500">
            {flight.flightNumber} • {flight.origin.split(' ')[0]} to {flight.destination.split(' ')[0]} • {flight.aircraft}
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-silver-200 dark:border-zinc-800 flex items-center gap-6 shadow-sm">
             <div>
                <div className="text-xs text-silver-500 uppercase font-bold">Selected Seat</div>
                <div className="text-xl font-bold font-mono">{selectedSeat || '--'}</div>
             </div>
             <div>
                <div className="text-xs text-silver-500 uppercase font-bold">Price</div>
                <div className="text-xl font-bold font-mono">${currentPrice}</div>
             </div>
             <button 
                onClick={confirmSelection}
                disabled={!selectedSeat}
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
             >
                Confirm Seat
             </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Plane Layout */}
        <div className="flex-1 bg-white dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-xl overflow-hidden relative">
            
            {/* Cockpit Indicator */}
            <div className="w-20 h-20 border-4 border-silver-100 dark:border-zinc-800 rounded-full absolute -top-12 left-1/2 -translate-x-1/2"></div>
            
            <div className="max-w-md mx-auto space-y-12 pt-8">
                
                {/* Business Class Section */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-silver-200 dark:bg-zinc-800 flex-1"></div>
                        <span className="text-xs font-bold uppercase text-purple-600 tracking-wider">Business Class</span>
                        <div className="h-px bg-silver-200 dark:bg-zinc-800 flex-1"></div>
                    </div>
                    {/* Rows 1-3 (2-2 Config) */}
                    {[1, 2, 3].map(row => (
                        <div key={row} className="flex justify-between items-center mb-2">
                             <div className="flex">
                                 {renderSeat(row, 'A', 'Business')}
                                 {renderSeat(row, 'C', 'Business')}
                             </div>
                             <div className="text-xs font-mono text-silver-300 w-8 text-center">{row}</div>
                             <div className="flex">
                                 {renderSeat(row, 'D', 'Business')}
                                 {renderSeat(row, 'F', 'Business')}
                             </div>
                        </div>
                    ))}
                </div>

                {/* Galley / Exit */}
                <div className="flex justify-between px-4 py-2 bg-silver-50 dark:bg-zinc-950 rounded-lg text-xs text-silver-400 font-bold uppercase tracking-wider">
                     <span>Exit</span>
                     <span>Galley</span>
                     <span>Exit</span>
                </div>

                {/* Economy Class Section */}
                <div>
                     <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-silver-200 dark:bg-zinc-800 flex-1"></div>
                        <span className="text-xs font-bold uppercase text-silver-400 tracking-wider">Economy Class</span>
                        <div className="h-px bg-silver-200 dark:bg-zinc-800 flex-1"></div>
                    </div>
                    {/* Rows 10-15 (3-3 Config) */}
                    {[10, 11, 12, 13, 14, 15].map(row => (
                        <div key={row} className="flex justify-between items-center mb-2">
                             <div className="flex">
                                 {renderSeat(row, 'A', 'Economy')}
                                 {renderSeat(row, 'B', 'Economy')}
                                 {renderSeat(row, 'C', 'Economy')}
                             </div>
                             <div className="text-xs font-mono text-silver-300 w-8 text-center">{row}</div>
                             <div className="flex">
                                 {renderSeat(row, 'D', 'Economy')}
                                 {renderSeat(row, 'E', 'Economy')}
                                 {renderSeat(row, 'F', 'Economy')}
                             </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

        {/* Legend Sidebar */}
        <div className="lg:w-80 space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Info size={16}/> Seat Key</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800"></div>
                        <span className="text-sm">Business Class ($150)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"></div>
                        <span className="text-sm">Extra Legroom ($50)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-silver-200 dark:bg-zinc-700"></div>
                        <span className="text-sm">Standard Economy ($25)</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-silver-300/50 dark:bg-zinc-800/50"></div>
                        <span className="text-sm text-silver-400">Occupied</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-black dark:bg-white"></div>
                        <span className="text-sm font-bold">Selected</span>
                    </div>
                </div>
            </div>

            <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
                <h3 className="font-bold mb-2">Cabin Features</h3>
                <ul className="text-sm text-silver-500 space-y-2">
                    <li>• Mood lighting throughout cabin</li>
                    <li>• Larger overhead bins</li>
                    <li>• HEPA air filtration</li>
                    <li>• USB power at every seat</li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SeatSelection;

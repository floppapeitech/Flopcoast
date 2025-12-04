
import React from 'react';
import { DollarSign, Printer, Luggage, Armchair, Dog, Wifi, Coffee } from 'lucide-react';

const OptionalFees: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <DollarSign size={14} /> Transparency
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Optional Services & Fees</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                A complete breakdown of extra services available for your journey. Prices may vary by route.
            </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
            <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 text-xs font-bold text-black dark:text-white hover:opacity-70 transition-opacity mt-4 bg-silver-100 dark:bg-zinc-800 px-4 py-2 rounded-full"
            >
                <Printer size={14} /> Print List
            </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Baggage */}
          <section>
              <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Luggage size={24}/></div>
                  <h2 className="text-2xl font-display font-bold">Baggage Fees</h2>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-200 dark:border-zinc-800 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="bg-silver-50 dark:bg-zinc-950 border-b border-silver-200 dark:border-zinc-800">
                              <th className="p-6 font-bold">Service</th>
                              <th className="p-6 font-bold">Online Price</th>
                              <th className="p-6 font-bold">Airport Price</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-silver-100 dark:divide-zinc-800">
                          <tr>
                              <td className="p-6">1st Checked Bag (Economy Basic)</td>
                              <td className="p-6">$30</td>
                              <td className="p-6">$50</td>
                          </tr>
                          <tr>
                              <td className="p-6">2nd Checked Bag</td>
                              <td className="p-6">$45</td>
                              <td className="p-6">$65</td>
                          </tr>
                          <tr>
                              <td className="p-6">3rd+ Checked Bag</td>
                              <td className="p-6">$150</td>
                              <td className="p-6">$200</td>
                          </tr>
                          <tr>
                              <td className="p-6">Overweight Bag (23-32kg)</td>
                              <td className="p-6">$75</td>
                              <td className="p-6">$100</td>
                          </tr>
                          <tr>
                              <td className="p-6">Oversize Bag (>158cm)</td>
                              <td className="p-6">$100</td>
                              <td className="p-6">$150</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>

          {/* Seats */}
          <section>
              <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Armchair size={24}/></div>
                  <h2 className="text-2xl font-display font-bold">Seat Selection</h2>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-silver-200 dark:border-zinc-800 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="bg-silver-50 dark:bg-zinc-950 border-b border-silver-200 dark:border-zinc-800">
                              <th className="p-6 font-bold">Seat Type</th>
                              <th className="p-6 font-bold">Price Range</th>
                              <th className="p-6 font-bold">Notes</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-silver-100 dark:divide-zinc-800">
                          <tr>
                              <td className="p-6">Standard Seat</td>
                              <td className="p-6">$10 - $35</td>
                              <td className="p-6 text-silver-500 text-sm">Free at check-in for Standard fares</td>
                          </tr>
                          <tr>
                              <td className="p-6">Preferred Seat (Front of Cabin)</td>
                              <td className="p-6">$25 - $50</td>
                              <td className="p-6 text-silver-500 text-sm">Complimentary for Silver+ members</td>
                          </tr>
                          <tr>
                              <td className="p-6">Extra Legroom</td>
                              <td className="p-6">$50 - $120</td>
                              <td className="p-6 text-silver-500 text-sm">Exit rows and bulkhead</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>

          {/* Other */}
          <section>
              <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-silver-100 dark:bg-zinc-800 rounded-full"><Coffee size={24}/></div>
                  <h2 className="text-2xl font-display font-bold">Other Services</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                          <Dog className="text-silver-400" />
                          <span>Pet in Cabin</span>
                      </div>
                      <span className="font-bold">$125 / way</span>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                          <Dog className="text-silver-400" />
                          <span>Pet in Hold</span>
                      </div>
                      <span className="font-bold">$200 / way</span>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                          <Wifi className="text-silver-400" />
                          <span>Wi-Fi (Full Flight)</span>
                      </div>
                      <span className="font-bold">$19.99</span>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                          <div className="text-xs font-bold border border-silver-300 dark:border-zinc-600 px-1 rounded">UM</div>
                          <span>Unaccompanied Minor</span>
                      </div>
                      <span className="font-bold">$150 / way</span>
                  </div>
              </div>
          </section>

      </div>
    </div>
  );
};

export default OptionalFees;

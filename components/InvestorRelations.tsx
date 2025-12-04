
import React, { useState } from 'react';
import { TrendingUp, FileText, PieChart, Users, Calendar, Download, ArrowUpRight, ArrowDownRight, Briefcase, HelpCircle, Calculator, DollarSign } from 'lucide-react';

const InvestorRelations: React.FC = () => {
  const [investment, setInvestment] = useState(1000);
  const [years, setYears] = useState(5);
  const projectedReturn = Math.round(investment * Math.pow(1.08, years)); // 8% CAGR assumption

  const reports = [
      { title: 'Q1 2024 Earnings Report', date: 'April 15, 2024', size: '2.4 MB' },
      { title: '2023 Annual Report', date: 'February 28, 2024', size: '15.1 MB' },
      { title: 'Sustainability Report 2023', date: 'March 10, 2024', size: '8.5 MB' },
      { title: 'Investor Presentation - May', date: 'May 02, 2024', size: '5.2 MB' },
  ];

  const analysts = [
      { firm: 'Goldman Sachs', rating: 'Buy', target: 'F$ 160.00' },
      { firm: 'Morgan Stanley', rating: 'Overweight', target: 'F$ 165.00' },
      { firm: 'J.P. Morgan', rating: 'Neutral', target: 'F$ 145.00' },
      { firm: 'Floptropica Capital', rating: 'Strong Buy', target: 'F$ 175.00' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Invest in the <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Future.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Flopcoast Airways is delivering sustainable growth and long-term value for shareholders through operational excellence and innovation.
        </p>
      </div>

      {/* Stock Ticker */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                  <div className="flex items-center gap-4 mb-2">
                      <h2 className="text-4xl font-mono font-bold">FLOP</h2>
                      <span className="bg-white/20 dark:bg-black/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Floptropica SE</span>
                  </div>
                  <p className="opacity-70 text-sm">Delayed by 15 mins • Market Closed</p>
              </div>
              <div className="text-right">
                  <div className="text-5xl font-display font-bold flex items-center gap-4">
                      142.85 <span className="text-2xl text-green-400 dark:text-green-600 flex items-center gap-1"><ArrowUpRight size={24} /> +2.4%</span>
                  </div>
                  <p className="opacity-70 text-sm mt-1">Currency in Floptropican Dollar (F$)</p>
              </div>
          </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
              <div className="text-silver-500 text-sm font-bold uppercase mb-2">Revenue (TTM)</div>
              <div className="text-3xl font-display font-bold">$12.4B</div>
              <div className="text-green-600 text-xs font-bold mt-2 flex items-center gap-1"><ArrowUpRight size={12}/> +15% YoY</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
              <div className="text-silver-500 text-sm font-bold uppercase mb-2">Net Income</div>
              <div className="text-3xl font-display font-bold">$850M</div>
              <div className="text-green-600 text-xs font-bold mt-2 flex items-center gap-1"><ArrowUpRight size={12}/> +8% YoY</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
              <div className="text-silver-500 text-sm font-bold uppercase mb-2">EPS</div>
              <div className="text-3xl font-display font-bold">$4.12</div>
              <div className="text-green-600 text-xs font-bold mt-2 flex items-center gap-1"><ArrowUpRight size={12}/> +12% YoY</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800">
              <div className="text-silver-500 text-sm font-bold uppercase mb-2">Load Factor</div>
              <div className="text-3xl font-display font-bold">86.5%</div>
              <div className="text-red-500 text-xs font-bold mt-2 flex items-center gap-1"><ArrowDownRight size={12}/> -1.2% QoQ</div>
          </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Financial Reports */}
          <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                  <FileText size={32} /> Financial Reports
              </h2>
              <div className="space-y-4">
                  {reports.map((report, idx) => (
                      <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 flex items-center justify-between group hover:border-black dark:hover:border-white transition-colors">
                          <div className="flex items-center gap-4">
                              <div className="bg-silver-100 dark:bg-zinc-800 p-3 rounded-xl text-black dark:text-white">
                                  <FileText size={24} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">{report.title}</h4>
                                  <p className="text-sm text-silver-500">{report.date} • PDF • {report.size}</p>
                              </div>
                          </div>
                          <button className="p-3 rounded-full hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors">
                              <Download size={20} />
                          </button>
                      </div>
                  ))}
              </div>
              <button className="text-sm font-bold underline decoration-2 underline-offset-4">View Archive</button>
          </div>

          {/* Governance & Events */}
          <div className="space-y-8">
              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2"><Users size={24}/> Corporate Governance</h3>
                  <ul className="space-y-4">
                      <li>
                          <a href="#" className="flex items-center justify-between group">
                              <span className="font-medium group-hover:underline">Board of Directors</span>
                              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                      </li>
                      <li>
                          <a href="#" className="flex items-center justify-between group">
                              <span className="font-medium group-hover:underline">Committee Composition</span>
                              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                      </li>
                      <li>
                          <a href="#" className="flex items-center justify-between group">
                              <span className="font-medium group-hover:underline">Governance Documents</span>
                              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                      </li>
                      <li>
                          <a href="#" className="flex items-center justify-between group">
                              <span className="font-medium group-hover:underline">ESG Overview</span>
                              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                      </li>
                  </ul>
              </div>

              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2"><Calendar size={24}/> Upcoming Events</h3>
                  <div className="space-y-6">
                      <div>
                          <div className="text-xs font-bold uppercase text-silver-500 mb-1">July 20, 2024</div>
                          <h4 className="font-bold">Q2 2024 Earnings Call</h4>
                          <p className="text-sm text-silver-500 mt-1">Webcast • 9:00 AM EST</p>
                      </div>
                      <div>
                          <div className="text-xs font-bold uppercase text-silver-500 mb-1">September 15, 2024</div>
                          <h4 className="font-bold">Annual Shareholder Meeting</h4>
                          <p className="text-sm text-silver-500 mt-1">Potaxiene HQ & Virtual</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Analyst Coverage */}
          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <TrendingUp size={28} /> Analyst Coverage
              </h3>
              <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead>
                          <tr className="border-b border-silver-100 dark:border-zinc-800">
                              <th className="py-4 text-xs font-bold uppercase text-silver-400">Firm</th>
                              <th className="py-4 text-xs font-bold uppercase text-silver-400">Rating</th>
                              <th className="py-4 text-xs font-bold uppercase text-silver-400 text-right">Target</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-silver-100 dark:divide-zinc-800">
                          {analysts.map((a, i) => (
                              <tr key={i}>
                                  <td className="py-4 font-bold">{a.firm}</td>
                                  <td className="py-4 text-sm">{a.rating}</td>
                                  <td className="py-4 text-sm font-mono text-right">{a.target}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              <p className="text-xs text-silver-400 mt-4">
                  Consensus rating: Buy. Based on 12 analyst ratings in the last 3 months.
              </p>
          </div>

          {/* Investment Calculator */}
          <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <Calculator size={28} /> Investment Calculator
              </h3>
              <div className="space-y-6">
                  <div>
                      <label className="text-xs font-bold uppercase text-silver-400 mb-2 block">Initial Investment (F$)</label>
                      <input 
                        type="range" min="100" max="10000" step="100" 
                        value={investment} onChange={(e) => setInvestment(parseInt(e.target.value))}
                        className="w-full accent-black dark:accent-white mb-2"
                      />
                      <div className="font-mono text-xl font-bold">F$ {investment.toLocaleString()}</div>
                  </div>
                  <div>
                      <label className="text-xs font-bold uppercase text-silver-400 mb-2 block">Duration (Years)</label>
                      <input 
                        type="range" min="1" max="10" step="1" 
                        value={years} onChange={(e) => setYears(parseInt(e.target.value))}
                        className="w-full accent-black dark:accent-white mb-2"
                      />
                      <div className="font-mono text-xl font-bold">{years} Years</div>
                  </div>
                  <div className="pt-6 border-t border-silver-200 dark:border-zinc-800">
                      <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-silver-500">Projected Value (8% CAGR)</span>
                          <span className="text-3xl font-bold font-display text-green-600">F$ {projectedReturn.toLocaleString()}</span>
                      </div>
                      <p className="text-[10px] text-silver-400 mt-2">
                          *Hypothetical projection for illustrative purposes only. Past performance is not indicative of future results.
                      </p>
                  </div>
              </div>
          </div>

      </div>

      {/* Shareholder FAQ */}
      <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Shareholder FAQs</h2>
          <div className="space-y-4">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><HelpCircle size={18}/> When is the next dividend?</h4>
                  <p className="text-silver-500 leading-relaxed text-sm">Flopcoast aims to pay dividends semi-annually. The next projected payment date is October 15, 2024, subject to Board approval.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><HelpCircle size={18}/> How do I transfer my shares?</h4>
                  <p className="text-silver-500 leading-relaxed text-sm">Please contact our transfer agent, Equiniti Floptropica, at +1-800-FLOP-EQY or visit their online portal for transfer instructions.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><HelpCircle size={18}/> Where is the stock listed?</h4>
                  <p className="text-silver-500 leading-relaxed text-sm">Flopcoast Airways is listed on the Floptropica Stock Exchange (FSE) under the ticker symbol <strong>FLOP</strong>.</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default InvestorRelations;

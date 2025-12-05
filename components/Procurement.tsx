
import React from 'react';
import { ArrowLeft, Handshake, FileText, Lock, Users, Briefcase, CheckCircle } from 'lucide-react';
import { ViewState } from '../types';

const Procurement: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ABOUT')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to About Us
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Supplier <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Relations.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          We build strong, sustainable partnerships with suppliers who share our values of quality, innovation, and integrity.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
              <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                      <Briefcase size={28} /> Working with Us
                  </h3>
                  <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                      Flopcoast procures a vast range of goods and services, from aircraft fuel and catering to IT software and uniforms. We operate a fair and transparent tendering process.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={16} className="text-green-500"/> Competitive Bidding</li>
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={16} className="text-green-500"/> Ethical Sourcing</li>
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={16} className="text-green-500"/> Timely Payments</li>
                  </ul>
              </div>

              <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h3 className="text-2xl font-display font-bold mb-6">Supplier Code of Conduct</h3>
                  <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6 text-sm">
                      We require all suppliers to adhere to our Code of Conduct, which covers labor rights, environmental sustainability, and anti-corruption practices.
                  </p>
                  <button className="flex items-center gap-2 font-bold text-sm underline decoration-2 underline-offset-4">
                      <FileText size={16} /> Download Policy PDF
                  </button>
              </div>
          </div>

          <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 flex flex-col justify-center">
              <div className="w-16 h-16 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center mb-6">
                  <Lock size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Supplier Portal</h2>
              <p className="opacity-80 leading-relaxed mb-8">
                  Existing suppliers can log in to view purchase orders, submit invoices, and update compliance documents.
              </p>
              <div className="bg-white dark:bg-zinc-900 p-2 rounded-full flex pl-6 max-w-md shadow-2xl mb-4">
                  <input 
                      type="text" 
                      placeholder="Vendor ID" 
                      className="bg-transparent w-full outline-none placeholder-silver-400 text-black dark:text-white"
                  />
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
                      Login
                  </button>
              </div>
              <p className="text-xs opacity-60">Need access? Contact procurement@flopcoast.com</p>
          </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-12 border border-silver-200 dark:border-zinc-800">
          <h2 className="text-2xl font-display font-bold mb-8">Open Tenders</h2>
          <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                  <thead>
                      <tr className="border-b border-silver-100 dark:border-zinc-800">
                          <th className="py-4 font-bold uppercase text-silver-400">Ref</th>
                          <th className="py-4 font-bold uppercase text-silver-400">Category</th>
                          <th className="py-4 font-bold uppercase text-silver-400">Description</th>
                          <th className="py-4 font-bold uppercase text-silver-400 text-right">Closing Date</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-silver-100 dark:divide-zinc-800">
                      <tr>
                          <td className="py-4 font-mono">T-2024-045</td>
                          <td className="py-4">IT Services</td>
                          <td className="py-4">Cloud Infrastructure Migration Project</td>
                          <td className="py-4 text-right">July 15, 2024</td>
                      </tr>
                      <tr>
                          <td className="py-4 font-mono">T-2024-048</td>
                          <td className="py-4">Catering</td>
                          <td className="py-4">Sustainable Packaging Supply (Europe Region)</td>
                          <td className="py-4 text-right">July 30, 2024</td>
                      </tr>
                      <tr>
                          <td className="py-4 font-mono">T-2024-050</td>
                          <td className="py-4">Facilities</td>
                          <td className="py-4">Cleaning Services - Terminal 4 Lounge</td>
                          <td className="py-4 text-right">Aug 05, 2024</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

    </div>
  );
};

export default Procurement;

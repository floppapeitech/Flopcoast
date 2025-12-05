
import React from 'react';
import { ArrowLeft, Briefcase, TrendingUp, Users, Globe, ShieldCheck, PieChart } from 'lucide-react';
import { ViewState } from '../types';

const BusinessSolutions: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Flopcoast <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Business.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Tailored travel solutions for companies of all sizes. From SMEs to global enterprises, we keep your business moving.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
              <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                      <TrendingUp size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">FlopBiz™ for SMEs</h3>
                  <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                      A self-service loyalty program for small and medium enterprises. Earn points on company travel while employees earn their own miles.
                  </p>
                  <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-sm font-bold"><ShieldCheck size={16} className="text-blue-500"/> No Contract Required</li>
                      <li className="flex items-center gap-3 text-sm font-bold"><ShieldCheck size={16} className="text-blue-500"/> Instant Status Match</li>
                      <li className="flex items-center gap-3 text-sm font-bold"><ShieldCheck size={16} className="text-blue-500"/> 5% Off Base Fares</li>
                  </ul>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
                      Join FlopBiz
                  </button>
              </div>
          </div>

          <div className="space-y-8">
              <div className="bg-black dark:bg-white text-white dark:text-black p-8 rounded-[2.5rem]">
                  <div className="w-14 h-14 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center mb-6">
                      <Briefcase size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Corporate Contracts</h3>
                  <p className="opacity-80 leading-relaxed mb-6">
                      Customized agreements for high-volume travel. Enjoy negotiated rates, dedicated account management, and flexible ticketing conditions.
                  </p>
                  <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-sm font-bold"><Globe size={16}/> Global Network Access</li>
                      <li className="flex items-center gap-3 text-sm font-bold"><Users size={16}/> Dedicated Support Desk</li>
                      <li className="flex items-center gap-3 text-sm font-bold"><PieChart size={16}/> Reporting & Analytics</li>
                  </ul>
                  <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                      Contact Sales
                  </button>
              </div>
          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 text-center border border-silver-200 dark:border-zinc-800">
          <h2 className="text-3xl font-display font-bold mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
              {/* Mock Logos */}
              <div className="text-2xl font-bold font-serif">TechGlobal</div>
              <div className="text-2xl font-bold font-sans">FinanceCorp</div>
              <div className="text-2xl font-bold font-mono">BuildCo</div>
              <div className="text-2xl font-bold font-display">MediaGrp</div>
              <div className="text-2xl font-bold">HealthPlus</div>
          </div>
      </div>

    </div>
  );
};

export default BusinessSolutions;

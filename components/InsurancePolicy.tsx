
import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { ViewState } from '../types';

interface InsurancePolicyProps {
    onNavigate: (view: ViewState) => void;
}

const InsurancePolicy: React.FC<InsurancePolicyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
             <ShieldCheck size={16} className="text-green-600 dark:text-green-400" />
             <span className="text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-300">Flopcoast Protect+</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            Travel with <span className="text-silver-400 dark:text-zinc-600 italic font-serif">confidence.</span>
          </h1>
          <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
            Comprehensive coverage designed for the modern traveler. Understanding your policy is the first step to a worry-free journey.
          </p>
        </div>

        <div className="space-y-12">
            
            {/* Quick Summary Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                   <h3 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
                      <CheckCircle className="text-green-500" /> What We Cover
                   </h3>
                   <ul className="space-y-4 text-silver-600 dark:text-silver-300">
                      <li className="flex gap-3"><span className="font-bold shrink-0">Medical:</span> Emergency medical and dental expenses up to $100,000.</li>
                      <li className="flex gap-3"><span className="font-bold shrink-0">Cancellation:</span> 100% reimbursement for covered reasons (illness, injury, jury duty).</li>
                      <li className="flex gap-3"><span className="font-bold shrink-0">Delays:</span> Meals and accommodation for delays exceeding 6 hours ($500/day).</li>
                      <li className="flex gap-3"><span className="font-bold shrink-0">Baggage:</span> Up to $2,500 for loss, theft, or damage to personal effects.</li>
                   </ul>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                   <h3 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
                      <XCircle className="text-red-500" /> Key Exclusions
                   </h3>
                   <ul className="space-y-4 text-silver-600 dark:text-silver-300">
                      <li className="flex gap-3"><span className="font-bold shrink-0">Pre-existing:</span> Medical conditions diagnosed/treated within 60 days of booking.</li>
                      <li className="flex gap-3"><span className="font-bold shrink-0">High Risk:</span> Injuries from extreme sports (skydiving, bungee jumping).</li>
                      <li className="flex gap-3"><span className="font-bold shrink-0">Intoxication:</span> Incidents occurring while under the influence of alcohol or drugs.</li>
                      <li className="flex gap-3"><span className="font-bold shrink-0">Negligence:</span> Loss of unattended baggage in public areas.</li>
                   </ul>
                </div>
            </div>

            {/* CTA to Full Policy */}
            <div className="bg-silver-50 dark:bg-zinc-950 p-12 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 text-center space-y-6">
                <h2 className="text-2xl font-display font-bold">Need the fine print?</h2>
                <p className="text-silver-500 max-w-xl mx-auto">
                    Access the complete terms, conditions, definitions, and legal framework of the Flopcoast Protect+ policy.
                </p>
                <button 
                    onClick={() => onNavigate('INSURANCE_FULL_POLICY')}
                    className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg inline-flex items-center gap-2"
                >
                    View Full Policy Wording <ChevronRight size={18} />
                </button>
            </div>

            {/* Claims Process */}
            <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-10 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">How to File a Claim</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
                        <h4 className="font-bold">Notify Us</h4>
                        <p className="text-sm opacity-70">Report the incident within 24 hours via the Flopcoast App or website.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
                        <h4 className="font-bold">Document It</h4>
                        <p className="text-sm opacity-70">Keep all receipts, police reports, and medical records.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
                        <h4 className="font-bold">Get Paid</h4>
                        <p className="text-sm opacity-70">Approved claims are typically paid via bank transfer within 5 business days.</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default InsurancePolicy;

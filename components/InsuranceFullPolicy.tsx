
import React from 'react';
import { ArrowLeft, ScrollText, Gavel, FileText, AlertTriangle, Phone, Shield } from 'lucide-react';

interface InsuranceFullPolicyProps {
    onBack: () => void;
}

const InsuranceFullPolicy: React.FC<InsuranceFullPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-in fade-in slide-in-from-right-8">
      <div className="max-w-4xl mx-auto">
        
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors"
        >
            <ArrowLeft size={20} /> Back to Insurance Overview
        </button>

        <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 space-y-12 shadow-xl">
            <div className="border-b border-silver-200 dark:border-zinc-800 pb-8">
                <div className="flex items-center gap-3 mb-4">
                     <Shield className="text-black dark:text-white" size={32} />
                     <h2 className="text-3xl md:text-4xl font-display font-bold">
                        Flopcoast Protect+ Policy Wording
                     </h2>
                </div>
                <p className="text-silver-500 font-mono text-sm bg-silver-50 dark:bg-zinc-950 inline-block px-3 py-1 rounded border border-silver-200 dark:border-zinc-800">
                    Policy Series: FC-INS-2024-V2
                </p>
                <p className="text-sm text-silver-500 mt-6 leading-relaxed">
                    This policy is provided by Flopcoast under partnership with Floptropica International Insurance Ltd. (Doing business as FlopFII). All services related to Flopcoast Protect+ were provided under Floptropica International Insurance (FlopFII) under provisioned from Flopcoast Aviation Group. The following terms and conditions apply to all bookings where "Flopcoast Protect+" has been added. By purchasing this insurance, you acknowledge that you have read and understood the full policy wording.
                </p>
            </div>

            <div className="space-y-4">
                 <h3 className="text-xl font-bold flex items-center gap-2 text-silver-800 dark:text-silver-200">
                    <Gavel size={20} /> Definitions
                 </h3>
                 <p className="text-sm text-silver-600 dark:text-silver-400">
                    <strong>"We", "Us", "Our"</strong> refers to Floptropica International Insurance Ltd. (FlopFII).<br/>
                    <strong>"You", "Your", "Insured"</strong> refers to the person named on the flight booking and for whom the insurance premium has been paid.<br/>
                    <strong>"Covered Trip"</strong> means the period of travel starting from the flight departure and ending upon return or after 30 days, whichever is earlier.<br/>
                    <strong>"Immediate Family Member"</strong> means spouse, parent, child, sibling, grandparent, or grandchild.<br/>
                    <strong>"Pre-existing Medical Condition"</strong> means an illness, disease, or other condition during the 60-day period immediately prior to the Effective Date for which You received medical advice or treatment.
                 </p>
            </div>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><FileText size={20} /> Section 1: Trip Cancellation & Interruption</h3>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed text-sm md:text-base">
                    1.1 <strong>Coverage:</strong> We will reimburse the non-refundable trip costs if you are prevented from taking your trip due to a covered reason. Covered reasons include: 
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Sickness, injury, or death of you, a traveling companion, or immediate family member.</li>
                        <li>Inclement weather causing complete cessation of services for at least 24 hours.</li>
                        <li>Strike or industrial action unannounced at the time of booking.</li>
                        <li>Jury duty or court subpoena.</li>
                    </ul>
                    <br/>
                    1.2 <strong>Trip Interruption:</strong> If you must cut your trip short due to a covered reason, we will reimburse the unused portion of your pre-paid expenses plus the cost of a one-way economy ticket to return home, up to the policy limit.
                </p>
                <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border-l-4 border-black dark:border-white text-sm">
                    <strong>Exclusion:</strong> "Change of mind" or "Disinclination to travel" is NOT covered under this standard policy.
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><AlertTriangle size={20} /> Section 2: Emergency Medical Evacuation</h3>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed text-sm md:text-base">
                    2.1 <strong>Medical Expense:</strong> If you sustain an injury or suffer a sudden and unexpected illness during your trip, we will pay Reasonable and Customary Charges for necessary medical treatment up to $100,000. This includes hospital stays, surgery, and prescription medication.<br/><br/>
                    2.2 <strong>Emergency Evacuation:</strong> If local medical facilities are inadequate, coverage includes Emergency Medical Evacuation to the nearest suitable hospital or repatriation to your home country if medically necessary, as determined by our medical director.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><Phone size={20} /> Section 3: 24/7 Global Assistance</h3>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed text-sm md:text-base">
                    3.1 All policyholders have access to our multi-lingual emergency command center. Services include: Medical referrals, legal assistance referrals, lost passport assistance, and emergency message transmission.<br/>
                    3.2 You must contact Global Assistance as soon as reasonably possible in the event of a medical emergency or hospital admission. Failure to notify within 48 hours may limit coverage.
                </p>
                <p className="font-mono text-sm bg-black text-white dark:bg-white dark:text-black inline-block px-3 py-1 rounded">Emergency Hotline: +1-800-FLOP-HELP</p>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><FileText size={20} /> Section 4: Baggage Delay & Personal Effects</h3>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed text-sm md:text-base">
                    4.1 <strong>Delay:</strong> If your checked baggage is delayed by the airline for more than 12 hours, we will reimburse you up to $200 for essential items (toiletries, clothing) purchased before your bags arrive. Receipts are required.<br/><br/>
                    4.2 <strong>Loss/Damage:</strong> We will pay up to $2,500 for loss, theft, or damage to your baggage and personal effects during the covered trip. Valuables (cameras, jewelry, electronics) are limited to $500 per item and must be carried in hand luggage.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><FileText size={20} /> Section 5: Travel Documents</h3>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed text-sm md:text-base">
                    5.1 We will reimburse you up to $250 for the cost of replacing a passport or visa lost or stolen during your covered trip. This includes fees payable to the consulate and necessary travel expenses to the nearest consulate. Police report required within 24 hours of discovery.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><FileText size={20} /> Section 6: Personal Liability</h3>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed text-sm md:text-base">
                    6.1 We will cover damages you become legally liable to pay due to accidental bodily injury to a third party or accidental damage to third-party property during your trip, up to a limit of $50,000.<br/>
                    6.2 This does not cover liability arising from the use of motorized vehicles, aircraft, or watercraft, or liability arising from professional activities.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><Gavel size={20} /> Section 7: General Provisions</h3>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed text-sm md:text-base">
                    7.1 <strong>Subrogation:</strong> We have the right to recover against any third party who may be liable for the loss. You must assist us in this process.<br/>
                    7.2 <strong>Fraud:</strong> Any claim involving fraud, concealment, or misrepresentation of material facts will void the policy completely.<br/>
                    7.3 <strong>Jurisdiction:</strong> This policy is governed by the laws of Floptropica. Any disputes shall be settled in the courts of Potaxiene.<br/>
                    7.4 <strong>Duplication of Coverage:</strong> Benefits under this policy are in excess of all other valid and collectible insurance or indemnity.
                </p>
            </div>
            
            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><Shield size={20} /> Section 8: Privacy Notice</h3>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed text-sm md:text-base">
                    We value your privacy. Your personal information is collected to administer this policy and process claims. We do not sell your data to third parties. We may share information with medical providers or authorities as necessary to provide emergency assistance.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceFullPolicy;

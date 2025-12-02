
import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, XCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
            <p className="text-silver-500 dark:text-silver-400">Effective Date: January 1, 2024</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm space-y-8">
            <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                    <CheckCircle className="text-black dark:text-white" size={24}/> 1. Acceptance of Terms
                </h2>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed">
                    By accessing and using the Flopcoast Airways website ("Site") and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site.
                </p>
            </section>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                    <FileText className="text-black dark:text-white" size={24}/> 2. Booking Conditions
                </h2>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed mb-4">
                    All bookings made through our Site are subject to our Conditions of Carriage and applicable Fare Rules.
                </p>
                <ul className="space-y-2 text-silver-600 dark:text-silver-400 list-disc pl-5">
                    <li>You must be at least 18 years old to make a booking.</li>
                    <li>You are responsible for ensuring all passenger details are correct.</li>
                    <li>Prices are subject to change until payment is confirmed.</li>
                    <li>Flopcoast reserves the right to cancel bookings made with fraudulent payment methods.</li>
                </ul>
            </section>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                    <XCircle className="text-black dark:text-white" size={24}/> 3. Prohibited Conduct
                </h2>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed">
                    You agree not to use the Site for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Site. Specifically, you agree not to:
                </p>
                <ul className="mt-4 space-y-2 text-silver-600 dark:text-silver-400 list-disc pl-5">
                    <li>Use any robot, spider, or other automated device to access the Site.</li>
                    <li>Make any speculative, false, or fraudulent reservation.</li>
                    <li>Upload any viruses, trojan horses, or other malicious code.</li>
                </ul>
            </section>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-black dark:text-white" size={24}/> 4. Limitation of Liability
                </h2>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed">
                    To the maximum extent permitted by law, Flopcoast Airways shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
            </section>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                    <Scale className="text-black dark:text-white" size={24}/> 5. Governing Law
                </h2>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of Floptropica, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the courts located in Potaxiene.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

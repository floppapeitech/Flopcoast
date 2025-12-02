
import React from 'react';
import { Lock, Eye, Database, Globe, Cookie } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
            <p className="text-silver-500 dark:text-silver-400">Last Updated: May 15, 2024</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm space-y-8">
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <Lock size={24} className="text-black dark:text-white" />
                    <h2 className="text-2xl font-bold font-display">Introduction</h2>
                </div>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed">
                    Flopcoast Airways ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
            </section>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <Database size={24} className="text-black dark:text-white" />
                    <h2 className="text-2xl font-bold font-display">Data We Collect</h2>
                </div>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed mb-4">
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                </p>
                <ul className="space-y-3 text-silver-600 dark:text-silver-400 list-disc pl-5">
                    <li><strong className="text-black dark:text-white">Identity Data:</strong> First name, maiden name, last name, username, marital status, title, date of birth and gender.</li>
                    <li><strong className="text-black dark:text-white">Contact Data:</strong> Billing address, delivery address, email address and telephone numbers.</li>
                    <li><strong className="text-black dark:text-white">Financial Data:</strong> Bank account and payment card details.</li>
                    <li><strong className="text-black dark:text-white">Transaction Data:</strong> Details about payments to and from you and other details of products and services you have purchased from us.</li>
                    <li><strong className="text-black dark:text-white">Travel Data:</strong> Passport number, issuing country, expiration date, and redress number.</li>
                </ul>
            </section>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <Eye size={24} className="text-black dark:text-white" />
                    <h2 className="text-2xl font-bold font-display">How We Use Your Data</h2>
                </div>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="mt-4 space-y-2 text-silver-600 dark:text-silver-400 list-disc pl-5">
                    <li>To process and deliver your flight booking.</li>
                    <li>To manage our relationship with you (including notifying you about changes to our terms or privacy policy).</li>
                    <li>To administer and protect our business and this website.</li>
                    <li>To deliver relevant website content and advertisements to you.</li>
                </ul>
            </section>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <Globe size={24} className="text-black dark:text-white" />
                    <h2 className="text-2xl font-bold font-display">International Transfers</h2>
                </div>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed">
                    We share your personal data within the Flopcoast Group. This will involve transferring your data outside the European Economic Area (EEA). Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented.
                </p>
            </section>

            <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <Cookie size={24} className="text-black dark:text-white" />
                    <h2 className="text-2xl font-bold font-display">Cookies</h2>
                </div>
                <p className="text-silver-600 dark:text-silver-400 leading-relaxed">
                    You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

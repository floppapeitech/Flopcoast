
import React, { useState, useEffect } from 'react';
import { Lock, Shield, Mail, FileText, Printer, ArrowUp, Globe, Database, Scale, Eye } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: 'intro', label: '1. Introduction' },
    { id: 'controller', label: '2. Data Controller' },
    { id: 'data-collection', label: '3. Data We Collect' },
    { id: 'usage', label: '4. Purpose of Processing' },
    { id: 'disclosure', label: '5. Disclosure of Data' },
    { id: 'international', label: '6. International Transfers' },
    { id: 'security', label: '7. Data Security' },
    { id: 'retention', label: '8. Data Retention' },
    { id: 'rights', label: '9. Your Legal Rights' },
    { id: 'contact', label: '10. Contact Us' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <Shield size={14} /> Flopcoast Legal Center
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Privacy Policy</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                Transparency regarding the collection, usage, and protection of your personal data.
            </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-silver-400">Last Updated</span>
            <span className="font-mono text-sm font-medium">May 15, 2024</span>
            <span className="text-xs font-bold uppercase tracking-wider text-silver-400 mt-2">Reference</span>
            <span className="font-mono text-sm font-medium">POL-PRIV-2024-V3.2</span>
            <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 text-xs font-bold text-black dark:text-white hover:opacity-70 transition-opacity mt-4 bg-silver-100 dark:bg-zinc-800 px-4 py-2 rounded-full"
            >
                <Printer size={14} /> Print Document
            </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-1">
                <h3 className="text-xs font-bold uppercase text-silver-400 mb-4 px-4 tracking-widest">Table of Contents</h3>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all border-l-2 ${activeSection === section.id ? 'bg-silver-50 dark:bg-zinc-900 border-black dark:border-white text-black dark:text-white' : 'border-transparent text-silver-500 hover:bg-silver-50 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white'}`}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-9 space-y-16 max-w-4xl">
            
            <section id="intro" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">1. Introduction</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        Welcome to the Flopcoast Airways Privacy Policy. Flopcoast Airways ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from), use our mobile application, or fly with us, and tell you about your privacy rights and how the law protects you.
                    </p>
                    <p>
                        This privacy policy applies to all personal data collected by Flopcoast Airways, including data collected via our website <span className="font-mono text-xs bg-silver-100 dark:bg-zinc-800 px-1 rounded">www.flopcoast.com</span>, our mobile applications, our contact centers, and data provided to us by third parties (such as travel agents).
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="controller" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">2. Data Controller</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        Flopcoast Aviation Group Ltd. is the controller and responsible for your personal data. We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the DPO using the details set out in the "Contact Us" section below.
                    </p>
                    <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-xl border border-silver-100 dark:border-zinc-800 text-sm">
                        <p><strong>Legal Entity:</strong> Flopcoast Aviation Group Ltd.</p>
                        <p><strong>Registration Number:</strong> FC-883921-X</p>
                        <p><strong>Registered Office:</strong> 123 Runway Avenue, Potaxiene International Airport, Floptropica</p>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="data-collection" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">3. Data We Collect About You</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose space-y-4 text-sm md:text-base">
                    <p>
                        Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="space-y-4 mt-4">
                        <li className="flex gap-4 items-start">
                            <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg shrink-0 mt-1"><Lock size={16} className="text-black dark:text-white"/></div>
                            <div>
                                <strong className="text-black dark:text-white block">Identity Data</strong>
                                Includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth, gender, and passport number/expiry.
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg shrink-0 mt-1"><Mail size={16} className="text-black dark:text-white"/></div>
                            <div>
                                <strong className="text-black dark:text-white block">Contact Data</strong>
                                Includes billing address, delivery address, email address, and telephone numbers.
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg shrink-0 mt-1"><Database size={16} className="text-black dark:text-white"/></div>
                            <div>
                                <strong className="text-black dark:text-white block">Special Categories of Data</strong>
                                Includes details about your health (for special assistance requests), dietary requirements (which may disclose religious beliefs), and biometric data (for facial recognition boarding where applicable). We process this data only with your explicit consent or where necessary for reasons of substantial public interest.
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg shrink-0 mt-1"><FileText size={16} className="text-black dark:text-white"/></div>
                            <div>
                                <strong className="text-black dark:text-white block">Transaction Data</strong>
                                Includes details about payments to and from you and other details of products and services you have purchased from us, including ticket numbers, PNR, and seat assignments.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="usage" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">4. Purpose of Processing</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border border-silver-200 dark:border-zinc-800 rounded-lg text-sm mt-4">
                            <thead>
                                <tr className="bg-silver-50 dark:bg-zinc-900 border-b border-silver-200 dark:border-zinc-800">
                                    <th className="p-4 font-bold text-black dark:text-white w-1/3">Purpose/Activity</th>
                                    <th className="p-4 font-bold text-black dark:text-white">Type of Data</th>
                                    <th className="p-4 font-bold text-black dark:text-white">Lawful Basis</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-silver-100 dark:divide-zinc-800">
                                <tr>
                                    <td className="p-4 align-top">To register you as a new customer</td>
                                    <td className="p-4 align-top">Identity, Contact</td>
                                    <td className="p-4 align-top">Performance of a contract with you</td>
                                </tr>
                                <tr>
                                    <td className="p-4 align-top">To process and deliver your booking (Manage payments, fees, collect money)</td>
                                    <td className="p-4 align-top">Identity, Contact, Financial, Transaction</td>
                                    <td className="p-4 align-top">(a) Performance of a contract with you<br/>(b) Necessary for our legitimate interests (to recover debts due to us)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 align-top">To comply with legal obligations (e.g. Advanced Passenger Information)</td>
                                    <td className="p-4 align-top">Identity, Contact, Travel Document Data</td>
                                    <td className="p-4 align-top">Necessary to comply with a legal obligation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="disclosure" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">5. Disclosure of Your Data</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        We may have to share your personal data with the parties set out below for the purposes set out in the table in paragraph 4 above.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Internal Third Parties:</strong> Other companies in the Flopcoast Group acting as joint controllers or processors.</li>
                        <li><strong>External Third Parties:</strong> Service providers acting as processors who provide IT and system administration services, ground handling services at airports, and in-flight catering services.</li>
                        <li><strong>Government Authorities:</strong> Customs, immigration, police, public health, and other regulatory authorities in your country of departure, destination, or transit, requiring data for security or legal compliance.</li>
                        <li><strong>Partner Airlines:</strong> When your journey involves a codeshare flight or interline connection, we must share your data with the operating carrier.</li>
                    </ul>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="international" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">6. International Transfers</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        Due to the nature of our business, your personal data will be transferred to locations outside your country of residence. This typically involves transferring data to Floptropica (our headquarters) and to the countries to or through which you are traveling.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30 text-sm flex gap-4">
                        <Globe className="shrink-0 text-blue-600 dark:text-blue-400" size={24} />
                        <p>
                            Whenever we transfer your personal data out of the EEA or UK, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented: transferring to countries deemed to have an adequate level of protection, or using specific contracts (Standard Contractual Clauses) approved by the European Commission.
                        </p>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="security" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">7. Data Security</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                    </p>
                    <p>
                        We utilize industry-standard encryption protocols (TLS 1.2+) for data in transit and at rest. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="retention" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">8. Data Retention</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                    </p>
                    <p>
                        To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements. Generally, basic travel records (PNR data) are retained for 7 years after completion of travel for tax and audit purposes.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="rights" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">9. Your Legal Rights</h2>
                <p className="text-silver-600 dark:text-silver-400 leading-loose mb-6 text-sm md:text-base">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 border border-silver-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/50">
                        <strong className="block mb-2 text-black dark:text-white font-display text-lg">Request access</strong>
                        <span className="text-sm text-silver-500 leading-relaxed">Commonly known as a "data subject access request". This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</span>
                    </div>
                    <div className="p-6 border border-silver-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/50">
                        <strong className="block mb-2 text-black dark:text-white font-display text-lg">Request correction</strong>
                        <span className="text-sm text-silver-500 leading-relaxed">This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data.</span>
                    </div>
                    <div className="p-6 border border-silver-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/50">
                        <strong className="block mb-2 text-black dark:text-white font-display text-lg">Request erasure</strong>
                        <span className="text-sm text-silver-500 leading-relaxed">This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it.</span>
                    </div>
                    <div className="p-6 border border-silver-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/50">
                        <strong className="block mb-2 text-black dark:text-white font-display text-lg">Object to processing</strong>
                        <span className="text-sm text-silver-500 leading-relaxed">Where we are relying on a legitimate interest and there is something about your particular situation which makes you want to object to processing.</span>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="contact" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">10. Contact Us</h2>
                <div className="bg-black dark:bg-white text-white dark:text-black p-10 rounded-[2rem]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-xl mb-4 font-display">Data Protection Officer</h3>
                            <ul className="space-y-4 opacity-90 text-sm">
                                <li className="flex gap-3 items-center">
                                    <Mail size={18} />
                                    <a href="mailto:privacy@flopcoast.com" className="hover:underline">privacy@flopcoast.com</a>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Globe size={18} />
                                    <span>Flopcoast Aviation Group HQ</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Database size={18} className="mt-1" />
                                    <span>
                                        Legal Department, Building 4<br/>
                                        123 Runway Avenue<br/>
                                        Potaxiene, Floptropica
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="border-t md:border-t-0 md:border-l border-white/20 dark:border-black/20 pt-8 md:pt-0 md:pl-8">
                            <h3 className="font-bold text-xl mb-4 font-display">Supervisory Authority</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                You have the right to make a complaint at any time to the Floptropica Information Commissioner's Office (FICO), the supervisory authority for data protection issues. We would, however, appreciate the chance to deal with your concerns before you approach the FICO.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

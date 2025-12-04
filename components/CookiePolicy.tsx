
import React, { useState } from 'react';
import { Cookie, Settings, Shield, Info, Printer } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: 'intro', label: '1. What are Cookies?' },
    { id: 'types', label: '2. Types of Cookies We Use' },
    { id: 'third-party', label: '3. Third-Party Cookies' },
    { id: 'manage', label: '4. Managing Your Preferences' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <Cookie size={14} /> Flopcoast Legal Center
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Cookie Policy</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                How we use cookies and similar technologies to improve your experience.
            </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-silver-400">Last Updated</span>
            <span className="font-mono text-sm font-medium">January 10, 2024</span>
            <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 text-xs font-bold text-black dark:text-white hover:opacity-70 transition-opacity mt-4 bg-silver-100 dark:bg-zinc-800 px-4 py-2 rounded-full"
            >
                <Printer size={14} /> Print Policy
            </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-1">
                <h3 className="text-xs font-bold uppercase text-silver-400 mb-4 px-4 tracking-widest">Contents</h3>
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
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">1. What are Cookies?</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                    </p>
                    <p>
                        We use cookies to enhance your experience, such as remembering your log-in details, keeping your session secure, and analyzing how our website is used.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="types" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">2. Types of Cookies We Use</h2>
                <div className="space-y-6">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800">
                        <div className="flex items-center gap-3 mb-2">
                            <Shield size={20} className="text-green-600 dark:text-green-400" />
                            <h3 className="font-bold text-lg">Strictly Necessary Cookies</h3>
                        </div>
                        <p className="text-sm text-silver-500 leading-relaxed">
                            These cookies are essential for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800">
                        <div className="flex items-center gap-3 mb-2">
                            <Settings size={20} className="text-blue-600 dark:text-blue-400" />
                            <h3 className="font-bold text-lg">Functional Cookies</h3>
                        </div>
                        <p className="text-sm text-silver-500 leading-relaxed">
                            These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages (e.g., live chat).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800">
                        <div className="flex items-center gap-3 mb-2">
                            <Info size={20} className="text-purple-600 dark:text-purple-400" />
                            <h3 className="font-bold text-lg">Performance & Analytics</h3>
                        </div>
                        <p className="text-sm text-silver-500 leading-relaxed">
                            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                        </p>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="third-party" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">3. Third-Party Cookies</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        Some cookies are placed by third parties on our behalf. For example, we use Google Analytics to analyze website traffic. These third parties may also use cookies for their own purposes. We do not control these cookies and you should check the relevant third-party website for more information about these.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="manage" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">4. Managing Your Preferences</h2>
                <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 text-center">
                    <p className="text-silver-600 dark:text-silver-400 mb-6 leading-relaxed">
                        You can change your cookie preferences at any time by clicking the button below. This will reopen the cookie consent banner, allowing you to enable or disable non-essential cookies.
                    </p>
                    <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity">
                        Cookie Settings
                    </button>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
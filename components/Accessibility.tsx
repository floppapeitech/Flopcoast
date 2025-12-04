import React, { useState } from 'react';
import { Accessibility as AccessIcon, Printer, Monitor, Plane, UserCheck, MessageSquare, Shield, Info } from 'lucide-react';

const Accessibility: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: 'intro', label: '1. Our Commitment' },
    { id: 'digital', label: '2. Digital Accessibility' },
    { id: 'booking', label: '3. Booking Assistance' },
    { id: 'airport', label: '4. Airport Experience' },
    { id: 'onboard', label: '5. Onboard Features' },
    { id: 'feedback', label: '6. Feedback & Contact' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <AccessIcon size={14} /> Flopcoast Legal Center
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Accessibility Statement</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                Our dedication to providing an inclusive and barrier-free experience for all travelers.
            </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-silver-400">Last Reviewed</span>
            <span className="font-mono text-sm font-medium">June 01, 2024</span>
            <span className="text-xs font-bold uppercase tracking-wider text-silver-400 mt-2">Standards</span>
            <span className="font-mono text-sm font-medium">WCAG 2.1 AA / ADA</span>
            <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 text-xs font-bold text-black dark:text-white hover:opacity-70 transition-opacity mt-4 bg-silver-100 dark:bg-zinc-800 px-4 py-2 rounded-full"
            >
                <Printer size={14} /> Print Statement
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
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">1. Our Commitment</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        At Flopcoast Airways, we believe that travel should be accessible to everyone. We are committed to ensuring that our services, from booking a flight to arriving at your destination, are inclusive and dignified for passengers of all abilities.
                    </p>
                    <p>
                        We continuously strive to improve user experience for everyone and apply the relevant accessibility standards. This statement outlines our policies and the specific measures we take to accommodate passengers with disabilities.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="digital" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">2. Digital Accessibility</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                    </p>
                    <div className="flex gap-4 items-start bg-silver-50 dark:bg-zinc-950 p-6 rounded-xl border border-silver-100 dark:border-zinc-800">
                        <Monitor size={24} className="shrink-0 text-black dark:text-white mt-1"/>
                        <div>
                            <h4 className="font-bold text-black dark:text-white mb-2">Web Content Accessibility Guidelines (WCAG)</h4>
                            <p>
                                Our website is designed to conform to Level AA of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web content more accessible for people with a wide array of disabilities.
                            </p>
                        </div>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Screen Reader Compatibility:</strong> Our site is tested with major screen readers like NVDA and VoiceOver.</li>
                        <li><strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard input.</li>
                        <li><strong>Color Contrast:</strong> We maintain high contrast ratios to assist users with visual impairments.</li>
                        <li><strong>Resizable Text:</strong> Our site supports text resizing without loss of content or functionality.</li>
                    </ul>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="booking" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">3. Booking Assistance</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <p>
                        If you have difficulty using our website or mobile app to book your flight, our dedicated accessibility support team is available 24/7 to assist you.
                    </p>
                    <p>
                        We waive any telephone booking fees for passengers with disabilities who cannot use our digital channels. When booking, please inform us of any specific assistance you may require, such as wheelchair support or medical oxygen, at least 48 hours prior to departure.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="airport" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">4. Airport Experience</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose space-y-4 text-sm md:text-base text-justify">
                    <p>
                        We work closely with airport operators to ensure a seamless experience on the ground.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                            <strong className="block mb-2 text-black dark:text-white font-display text-lg">Check-in</strong>
                            <span className="text-sm text-silver-500 leading-relaxed">Dedicated accessible check-in counters with lower desks are available at all our hub airports.</span>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                            <strong className="block mb-2 text-black dark:text-white font-display text-lg">Priority Boarding</strong>
                            <span className="text-sm text-silver-500 leading-relaxed">Passengers requiring assistance are invited to board first to allow extra time to settle in comfortably.</span>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                            <strong className="block mb-2 text-black dark:text-white font-display text-lg">Mobility Aids</strong>
                            <span className="text-sm text-silver-500 leading-relaxed">We transport manual and electric wheelchairs free of charge. They do not count towards your baggage allowance.</span>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl">
                            <strong className="block mb-2 text-black dark:text-white font-display text-lg">Escort Service</strong>
                            <span className="text-sm text-silver-500 leading-relaxed">Assistance from check-in to the aircraft door is available upon request.</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="onboard" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">5. Onboard Features</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose text-justify space-y-4 text-sm md:text-base">
                    <div className="flex gap-4 items-start mb-6">
                        <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg shrink-0 mt-1"><Plane size={16} className="text-black dark:text-white"/></div>
                        <div>
                            <strong className="text-black dark:text-white block mb-2">Aircraft Design</strong>
                            <p>Most of our wide-body aircraft (A350, B787, A380) are equipped with accessible lavatories designed for passengers with reduced mobility. Aisle wheelchairs are available on board all flights to assist with movement between your seat and the lavatory.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start mb-6">
                        <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg shrink-0 mt-1"><UserCheck size={16} className="text-black dark:text-white"/></div>
                        <div>
                            <strong className="text-black dark:text-white block mb-2">Seating</strong>
                            <p>Seats with movable armrests are available in all classes to facilitate transfer. Our cabin crew can help identify these seats. Please note that for safety reasons, passengers with reduced mobility cannot be seated in emergency exit rows.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg shrink-0 mt-1"><Info size={16} className="text-black dark:text-white"/></div>
                        <div>
                            <strong className="text-black dark:text-white block mb-2">Safety Information</strong>
                            <p>Safety briefing cards are available in Braille. Our In-Flight Entertainment system includes content with Closed Captions and Audio Description.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="feedback" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">6. Feedback & Contact</h2>
                <div className="bg-black dark:bg-white text-white dark:text-black p-10 rounded-[2rem]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-xl mb-4 font-display">Accessibility Support Desk</h3>
                            <ul className="space-y-4 opacity-90 text-sm">
                                <li className="flex gap-3 items-center">
                                    <MessageSquare size={18} />
                                    <a href="mailto:access@flopcoast.com" className="hover:underline">access@flopcoast.com</a>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Shield size={18} className="mt-1" />
                                    <span>
                                        Available 24/7 for assistance requests<br/>
                                        Response time: Under 4 hours
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="border-t md:border-t-0 md:border-l border-white/20 dark:border-black/20 pt-8 md:pt-0 md:pl-8">
                            <h3 className="font-bold text-xl mb-4 font-display">Feedback</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                We welcome your feedback on the accessibility of our website and services. If you encounter any barriers, please let us know so we can address them promptly.
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

export default Accessibility;
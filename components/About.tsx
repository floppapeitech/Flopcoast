
import React, { useState } from 'react';
import { Award, Globe, Heart, ShieldCheck, MapPin, Users, TrendingUp, Star, Gift, Building, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <Building size={14} /> Corporate Profile
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">About Flopcoast</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                Redefining the journey since 1990.
            </p>
        </div>
        <div className="flex gap-2 bg-silver-100 dark:bg-zinc-900 p-1 rounded-full">
            {['overview', 'leadership', 'awards'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${activeTab === tab ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Sidebar Navigation (Desktop) */}
        <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-1">
                <h3 className="text-xs font-bold uppercase text-silver-400 mb-4 px-4 tracking-widest">Contents</h3>
                <button onClick={() => setActiveTab('overview')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'overview' ? 'bg-silver-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-silver-500 hover:bg-silver-50 dark:hover:bg-zinc-900'}`}>
                    Overview & History
                </button>
                <button onClick={() => setActiveTab('leadership')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'leadership' ? 'bg-silver-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-silver-500 hover:bg-silver-50 dark:hover:bg-zinc-900'}`}>
                    Leadership Team
                </button>
                <button onClick={() => setActiveTab('awards')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'awards' ? 'bg-silver-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-silver-500 hover:bg-silver-50 dark:hover:bg-zinc-900'}`}>
                    Awards & Recognition
                </button>
            </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-16">
            
            {activeTab === 'overview' && (
                <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4">
                    {/* Intro */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-bold">We are <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Flopcoast.</span></h2>
                        <p className="text-xl text-silver-500 dark:text-silver-400 leading-relaxed">
                            Proudly headquartered in Potaxiene, Floptropica. We bridge the gap between premium service and affordable travel, guided by our founding principles of inclusivity, innovation, and "friendly skies for all."
                        </p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-silver-400">
                            <MapPin size={16} /> Global HQ: 123 Runway Ave, Potaxiene, Floptropica
                        </div>
                    </div>

                    {/* History Section */}
                    <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800">
                        <h2 className="text-2xl font-display font-bold mb-8 text-center">Our Heritage</h2>
                        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-px before:bg-silver-200 dark:before:bg-zinc-800 before:-z-10">
                            
                            {/* 1990-1991 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2 md:text-right pl-12 md:pl-0">
                                    <h3 className="text-xl font-bold">1990: Origins</h3>
                                    <p className="text-silver-500 text-sm mt-1 leading-relaxed">
                                        Founded as <span className="font-semibold text-black dark:text-white">FloptropicalAir</span> by a group of Floptropicans led by Alejandra to modernize the nation's aviation. We launched with a Boeing 737-200, beginning charter operations in November 1990 and scheduled flights in March 1991.
                                    </p>
                                </div>
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black shadow-lg z-10"></div>
                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>

                            {/* 1995-2000 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2 hidden md:block"></div>
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-silver-300 dark:bg-zinc-700 border-4 border-white dark:border-black shadow-lg z-10"></div>
                                <div className="md:w-1/2 pl-12 md:pl-0">
                                    <h3 className="text-xl font-bold">1995-2000: Expansion</h3>
                                    <p className="text-silver-500 text-sm mt-1 leading-relaxed">
                                        Renamed to <span className="font-semibold text-black dark:text-white">Flopcoast Airways</span> in 1995; the old branding was phased out by 1997. In 2000, we launched our first long-haul routes utilizing the Airbus A300-600.
                                    </p>
                                </div>
                            </div>

                            {/* 2008-2013 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2 md:text-right pl-12 md:pl-0">
                                    <h3 className="text-xl font-bold">2008-2013: Transition</h3>
                                    <p className="text-silver-500 text-sm mt-1 leading-relaxed">
                                        Alejandra stepped down as CEO in 2008, replaced by co-founder Marcus Potaxie. Following economic challenges in 2009, routes were cut. In 2013, Oliver became CEO as Marcus departed for Floptropica Airports Management Co.
                                    </p>
                                </div>
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-silver-300 dark:bg-zinc-700 border-4 border-white dark:border-black shadow-lg z-10"></div>
                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>

                            {/* 2022 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2 hidden md:block"></div>
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-silver-300 dark:bg-zinc-700 border-4 border-white dark:border-black shadow-lg z-10"></div>
                                <div className="md:w-1/2 pl-12 md:pl-0">
                                    <h3 className="text-xl font-bold">2022: Turbulence</h3>
                                    <p className="text-silver-500 text-sm mt-1 leading-relaxed">
                                        In April, Flopcoast Airways and subsidiary FlopAirways filed for bankruptcy protection. The airline underwent a major restructuring, streamlining the fleet and reducing the workforce to ensure survival.
                                    </p>
                                </div>
                            </div>

                            {/* 2023 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2 md:text-right pl-12 md:pl-0">
                                    <h3 className="text-xl font-bold">2023: The Return</h3>
                                    <p className="text-silver-500 text-sm mt-1 leading-relaxed">
                                        We exited bankruptcy in May. In a historic move, <span className="font-bold text-black dark:text-white">Alejandra</span> returned as CEO in April, replacing Oliver. Marcus Potaxie also returned as COO. By December, the <span className="font-bold">Flopcoast Aviation Group</span> was formed.
                                    </p>
                                </div>
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black shadow-lg z-10"></div>
                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>

                            {/* 2024 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2 hidden md:block"></div>
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black shadow-lg z-10"></div>
                                <div className="md:w-1/2 pl-12 md:pl-0">
                                    <h3 className="text-xl font-bold">2024: A New Era</h3>
                                    <p className="text-silver-500 text-sm mt-1 leading-relaxed">
                                        Acquired by <span className="font-bold">The Floptropican Group</span> (85%) with founders retaining control. In March, we pivoted to a full-service medium/long-haul carrier, transferring short-haul to <span className="italic">Flopcoast Airways Regional</span>. Loyalty program rebranded to <span className="font-bold">Flopcoast Rewards</span> in July.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Mission Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                            <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mb-6">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">Our Philosophy</h3>
                            <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                                We believe "friendly skies" isn't just a slogan—it's a promise. From our ground crew in Potaxiene to our pilots, every member of the Flopcoast family is dedicated to making your journey as comfortable as it is memorable.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                            <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mb-6">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">Global Reach</h3>
                            <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                                Connecting destinations across Asia, South America, Europe, Africa, and North America. Whether you're flying for business in Seoul or leisure in Lima, Flopcoast brings the world closer to you.
                            </p>
                        </div>
                    </div>

                    {/* Community Engagement */}
                    <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                        <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                            <Gift className="text-pink-500"/> Community Engagement
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-2">Flopcoast Foundation</h4>
                                <p className="text-silver-500 text-sm leading-relaxed mb-4">
                                    Established in 2005, our foundation supports education and healthcare initiatives across Floptropica. We have built 12 schools and 4 clinics in rural areas.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Disaster Relief</h4>
                                <p className="text-silver-500 text-sm leading-relaxed mb-4">
                                    As the national carrier, we stand ready to assist. We provide cargo capacity for aid shipments and operate repatriation flights during global crises.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'leadership' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-display font-bold mb-4">Meet Our Leaders</h2>
                        <p className="text-silver-500">Guided by experience, innovation, and a passion for aviation.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* CEO */}
                        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-silver-200 dark:border-zinc-800 group">
                            <div className="h-64 bg-silver-200 dark:bg-zinc-800 relative">
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" alt="Alejandra" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold font-display">Alejandra</h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4">Founder & Chief Executive Officer</p>
                                <p className="text-sm text-silver-500 leading-relaxed">
                                    The visionary founder who started it all in 1990. Returned in 2023 to steer the airline back to profitability and innovation.
                                </p>
                            </div>
                        </div>

                        {/* COO */}
                        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-silver-200 dark:border-zinc-800 group">
                            <div className="h-64 bg-silver-200 dark:bg-zinc-800 relative">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" alt="COO" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold font-display">Marcus Potaxie</h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4">Chief Operating Officer</p>
                                <p className="text-sm text-silver-500 leading-relaxed">
                                    Marcus oversees daily operations, ensuring our 180+ daily flights run safely and on time.
                                </p>
                            </div>
                        </div>

                        {/* CFO */}
                        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-silver-200 dark:border-zinc-800 group">
                            <div className="h-64 bg-silver-200 dark:bg-zinc-800 relative">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" alt="CFO" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold font-display">Elena Da Silva</h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-silver-400 mb-4">Chief Financial Officer</p>
                                <p className="text-sm text-silver-500 leading-relaxed">
                                    Elena drives our financial strategy, maintaining the strong balance sheet that allows us to invest in new fleets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'awards' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <h2 className="text-3xl font-display font-bold mb-4">Excellence Recognized</h2>
                        <p className="text-silver-500">Our commitment to quality has been honored globally.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 flex items-center gap-6">
                            <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 shrink-0">
                                <Star size={40} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">Skytrax 2023</h3>
                                <p className="text-sm font-semibold mb-2">World's Best Cabin Crew (Top 10)</p>
                                <p className="text-xs text-silver-500 leading-relaxed">
                                    Recognized for our "Human Centric" service philosophy and genuine hospitality.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 flex items-center gap-6">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                <ShieldCheck size={40} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">APEX Health Safety</h3>
                                <p className="text-sm font-semibold mb-2">Diamond Status</p>
                                <p className="text-xs text-silver-500 leading-relaxed">
                                    The highest level of certification for airline health and safety standards.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 flex items-center gap-6">
                            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                <Award size={40} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">Business Traveler</h3>
                                <p className="text-sm font-semibold mb-2">Best Airline in Floptropica</p>
                                <p className="text-xs text-silver-500 leading-relaxed">
                                    Voted by frequent flyers for operational reliability and lounge quality.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 flex items-center gap-6">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                                <TrendingUp size={40} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">Air Cargo News</h3>
                                <p className="text-sm font-semibold mb-2">Cargo Airline of the Year</p>
                                <p className="text-xs text-silver-500 leading-relaxed">
                                    Honoring our robust logistics network and perishable handling capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};

export default About;

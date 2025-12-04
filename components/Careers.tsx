
import React, { useState } from 'react';
import { Briefcase, Heart, Plane, Users, ArrowRight, MapPin, Coffee, Zap, GraduationCap, BookOpen, Globe, DollarSign, Shield, Sun } from 'lucide-react';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('roles');

  const jobs = [
    { title: 'First Officer (A350/B787)', location: 'Potaxiene, Floptropica', type: 'Full-time', dept: 'Flight Operations' },
    { title: 'Senior Software Engineer', location: 'Remote / Hybrid', type: 'Full-time', dept: 'Technology' },
    { title: 'Cabin Crew Member', location: 'Multiple Bases', type: 'Full-time', dept: 'In-Flight Service' },
    { title: 'Customer Experience Manager', location: 'London (LHR)', type: 'Full-time', dept: 'Customer Support' },
    { title: 'Aircraft Maintenance Technician', location: 'New York (JFK)', type: 'Full-time', dept: 'Engineering' },
    { title: 'Marketing Specialist', location: 'Potaxiene, Floptropica', type: 'Full-time', dept: 'Marketing' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <Briefcase size={14} /> Careers at Flopcoast
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Join Our Crew</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                We're looking for dreamers, doers, and explorers.
            </p>
        </div>
        <div className="flex gap-2 bg-silver-100 dark:bg-zinc-900 p-1 rounded-full">
            {['roles', 'benefits', 'programs'].map((tab) => (
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
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-1">
                <h3 className="text-xs font-bold uppercase text-silver-400 mb-4 px-4 tracking-widest">Explore</h3>
                <button onClick={() => setActiveTab('roles')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'roles' ? 'bg-silver-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-silver-500 hover:bg-silver-50 dark:hover:bg-zinc-900'}`}>
                    Open Positions
                </button>
                <button onClick={() => setActiveTab('benefits')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'benefits' ? 'bg-silver-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-silver-500 hover:bg-silver-50 dark:hover:bg-zinc-900'}`}>
                    Why Flopcoast?
                </button>
                <button onClick={() => setActiveTab('programs')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'programs' ? 'bg-silver-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-silver-500 hover:bg-silver-50 dark:hover:bg-zinc-900'}`}>
                    Student & Pilot Programs
                </button>
            </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-9 space-y-16">
            
            {activeTab === 'roles' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 space-y-8">
                    {/* Culture Highlight */}
                    <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 md:p-16 mb-12 overflow-hidden relative">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-display font-bold">More than just a job.</h2>
                                <p className="opacity-80 text-lg leading-relaxed">
                                    At Flopcoast, we believe that happy employees make happy passengers. Our headquarters in Potaxiene is designed for collaboration, with open workspaces, quiet zones, and yes—free coffee.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Coffee size={20} /> Free artisanal coffee & snacks
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Zap size={20} /> Continuous learning budget
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden bg-zinc-800 dark:bg-zinc-200">
                                <img 
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                                    alt="Team Collaboration" 
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-display font-bold mb-6">Current Openings</h2>
                    <div className="space-y-4">
                        {jobs.map((job, idx) => (
                            <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors cursor-pointer group flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h3 className="text-xl font-bold font-display">{job.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-silver-500 mt-1">
                                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                        <span className="bg-silver-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-xs font-semibold">{job.type}</span>
                                    </div>
                                </div>
                                <button className="px-6 py-2 rounded-full border border-silver-200 dark:border-zinc-700 text-sm font-bold group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors flex items-center gap-2">
                                    Apply Now <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button className="text-sm font-bold underline decoration-2 underline-offset-4">View All 42 Openings</button>
                    </div>
                </div>
            )}

            {activeTab === 'benefits' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 space-y-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <Plane className="text-blue-500" /> Travel Privileges
                            </h2>
                            <ul className="space-y-4 text-silver-600 dark:text-silver-400 text-sm">
                                <li className="flex gap-3"><Globe size={16} className="shrink-0 mt-1"/> Unlimited standby travel for you, your spouse, and dependent children on Flopcoast network.</li>
                                <li className="flex gap-3"><Users size={16} className="shrink-0 mt-1"/> "Buddy Passes" for friends and extended family (10 per year).</li>
                                <li className="flex gap-3"><MapPin size={16} className="shrink-0 mt-1"/> Discounted "ZED fares" on over 50 partner airlines worldwide.</li>
                            </ul>
                        </div>

                        <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <Heart className="text-red-500" /> Health & Wellness
                            </h2>
                            <ul className="space-y-4 text-silver-600 dark:text-silver-400 text-sm">
                                <li className="flex gap-3"><Shield size={16} className="shrink-0 mt-1"/> Comprehensive medical, dental, and vision insurance from day one.</li>
                                <li className="flex gap-3"><Sun size={16} className="shrink-0 mt-1"/> 25 days paid vacation + public holidays + "Mental Health Days".</li>
                                <li className="flex gap-3"><Heart size={16} className="shrink-0 mt-1"/> Free access to on-site gyms and counseling services.</li>
                            </ul>
                        </div>

                        <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <DollarSign className="text-green-500" /> Financial Security
                            </h2>
                            <ul className="space-y-4 text-silver-600 dark:text-silver-400 text-sm">
                                <li className="flex gap-3"><DollarSign size={16} className="shrink-0 mt-1"/> Competitive salary with annual performance bonuses.</li>
                                <li className="flex gap-3"><Briefcase size={16} className="shrink-0 mt-1"/> 401(k) / Pension matching up to 8% of salary.</li>
                                <li className="flex gap-3"><BookOpen size={16} className="shrink-0 mt-1"/> Tuition reimbursement for job-related degrees.</li>
                            </ul>
                        </div>

                        <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <Users className="text-purple-500" /> Diversity & Inclusion
                            </h2>
                            <p className="text-sm text-silver-600 dark:text-silver-400 leading-relaxed mb-4">
                                We celebrate diversity and foster an environment where everyone can be their authentic self. We have 5 employee resource groups supporting LGBTQ+, Women in Aviation, and Multicultural employees.
                            </p>
                            <span className="text-xs font-bold uppercase tracking-wider bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full">Proudly Floptropican</span>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'programs' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 space-y-12">
                    
                    {/* Pilot Cadet Program */}
                    <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800 flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase">
                                Future Pilots
                            </div>
                            <h2 className="text-3xl font-display font-bold">Flopcoast Cadet Program</h2>
                            <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                                Zero to hero. Our fully sponsored cadet program takes you from no flying experience to the right seat of an A320 in 18 months. We cover training costs in exchange for a service bond.
                            </p>
                            <ul className="space-y-2 text-sm font-medium">
                                <li className="flex items-center gap-2"><Plane size={16}/> Guaranteed job upon completion</li>
                                <li className="flex items-center gap-2"><Globe size={16}/> Training in Potaxiene & Phoenix</li>
                            </ul>
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">
                                Download Brochure
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <div className="aspect-square rounded-2xl bg-silver-100 dark:bg-zinc-800 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1543891465-b9b2943bd439?q=80&w=2670&auto=format&fit=crop" alt="Pilot Training" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Graduate Scheme */}
                    <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800 flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <div className="aspect-square rounded-2xl bg-silver-100 dark:bg-zinc-800 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" alt="Graduates" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-6 order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase">
                                University Grads
                            </div>
                            <h2 className="text-3xl font-display font-bold">Global Graduate Scheme</h2>
                            <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                                A 2-year rotational program designed to build future leaders. Rotate through 4 different departments—from Operations Control to Marketing—and lead real projects with real impact.
                            </p>
                            <ul className="space-y-2 text-sm font-medium">
                                <li className="flex items-center gap-2"><GraduationCap size={16}/> Mentorship from VP level</li>
                                <li className="flex items-center gap-2"><Globe size={16}/> 6-month international placement</li>
                            </ul>
                            <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-bold text-sm hover:bg-purple-700 transition-colors">
                                View Requirements
                            </button>
                        </div>
                    </div>

                    {/* Internship Section (New) */}
                    <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800">
                        <h2 className="text-2xl font-display font-bold mb-6">Summer Internships</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800">
                                <h3 className="font-bold text-lg mb-2">Technology Intern</h3>
                                <p className="text-sm text-silver-500 mb-4">
                                    Work with our app development team to build the next generation of travel tools. JavaScript/React skills required.
                                </p>
                                <span className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Apply by April 1</span>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800">
                                <h3 className="font-bold text-lg mb-2">Engineering Intern</h3>
                                <p className="text-sm text-silver-500 mb-4">
                                    Support our maintenance crew in the hangars. Learn about aircraft systems and safety protocols.
                                </p>
                                <span className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Apply by April 1</span>
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

export default Careers;

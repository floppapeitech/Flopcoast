
import React from 'react';
import { Briefcase, Heart, Plane, Users, ArrowRight, MapPin, Coffee, Zap } from 'lucide-react';

const Careers: React.FC = () => {
  const jobs = [
    { title: 'First Officer (A350/B787)', location: 'Potaxiene, Floptropica', type: 'Full-time', dept: 'Flight Operations' },
    { title: 'Senior Software Engineer', location: 'Remote / Hybrid', type: 'Full-time', dept: 'Technology' },
    { title: 'Cabin Crew Member', location: 'Multiple Bases', type: 'Full-time', dept: 'In-Flight Service' },
    { title: 'Customer Experience Manager', location: 'London (LHR)', type: 'Full-time', dept: 'Customer Support' },
    { title: 'Aircraft Maintenance Technician', location: 'New York (JFK)', type: 'Full-time', dept: 'Engineering' },
    { title: 'Marketing Specialist', location: 'Potaxiene, Floptropica', type: 'Full-time', dept: 'Marketing' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      
      {/* Hero Section */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Join our <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Crew.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          We're looking for dreamers, doers, and explorers. Help us redefine the future of travel with friendly service and innovation.
        </p>
        <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
            View Open Roles
        </button>
      </div>

      {/* Values/Benefits */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Plane size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Travel the World</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                  Unlimited standby travel for you and your family on Flopcoast and partner airlines. Explore new destinations every weekend.
              </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Health & Wellness</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                  Comprehensive medical, dental, and vision coverage from day one. Plus, mental health support and gym memberships.
              </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                  <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Inclusive Culture</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                  We celebrate diversity and foster an environment where everyone can be their authentic self. Proudly Floptropican.
              </p>
          </div>
      </div>

      {/* Culture Section */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 md:p-20 mb-20 overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-display font-bold">More than just a job.</h2>
                  <p className="opacity-80 text-lg leading-relaxed">
                      At Flopcoast, we believe that happy employees make happy passengers. Our headquarters in Potaxiene is designed for collaboration, with open workspaces, quiet zones, and yes—free coffee.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                          <Coffee size={20} /> Free artisanal coffee & snacks
                      </li>
                      <li className="flex items-center gap-3">
                          <Zap size={20} /> Continuous learning & development budget
                      </li>
                      <li className="flex items-center gap-3">
                          <Briefcase size={20} /> Flexible work arrangements
                      </li>
                  </ul>
              </div>
              <div className="relative h-64 lg:h-96 rounded-3xl overflow-hidden bg-zinc-800 dark:bg-zinc-200">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover opacity-80"
                  />
              </div>
          </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8">Open Positions</h2>
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

    </div>
  );
};

export default Careers;


import React from 'react';
import { Award, Globe, Heart, ShieldCheck, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            We are <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Flopcoast.</span>
          </h1>
          <p className="text-xl text-silver-500 dark:text-silver-400 leading-relaxed max-w-2xl mx-auto">
            Proudly headquartered in Potaxiene, Floptropica. We bridge the gap between premium service and affordable travel, guided by our founding principles.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-silver-400">
             <MapPin size={16} /> HQ: Potaxiene, Floptropica
          </div>
        </div>

        {/* History Section - Updated Lore */}
        <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-10 border border-silver-200 dark:border-zinc-800">
           <h2 className="text-3xl font-display font-bold mb-8 text-center">Our History</h2>
           <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-1/2 before:w-px before:bg-silver-200 dark:before:bg-zinc-800 before:-z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="md:w-1/2 text-right">
                    <h3 className="text-xl font-bold">1990</h3>
                    <p className="text-silver-500">Founded as <span className="font-semibold text-black dark:text-white">FloptropicalAir</span> by a visionary group of Floptropicans aiming to revolutionize the nation's aviation industry with accessible, high-quality air travel.</p>
                 </div>
                 <div className="w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black shadow-lg z-10"></div>
                 <div className="md:w-1/2"></div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="md:w-1/2"></div>
                 <div className="w-4 h-4 rounded-full bg-silver-300 dark:bg-zinc-700 border-4 border-white dark:border-black shadow-lg z-10"></div>
                 <div className="md:w-1/2">
                    <h3 className="text-xl font-bold">1995</h3>
                    <p className="text-silver-500">Rebranded to <span className="font-semibold text-black dark:text-white">Flopcoast Airways</span> to reflect our expanding international reach beyond the tropics while maintaining our core values.</p>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="md:w-1/2 text-right">
                    <h3 className="text-xl font-bold">1997</h3>
                    <p className="text-silver-500">The last FloptropicalAir branding was officially phased out, marking the beginning of our modern era as a global carrier.</p>
                 </div>
                 <div className="w-4 h-4 rounded-full bg-silver-300 dark:bg-zinc-700 border-4 border-white dark:border-black shadow-lg z-10"></div>
                 <div className="md:w-1/2"></div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="md:w-1/2"></div>
                 <div className="w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black shadow-lg z-10"></div>
                 <div className="md:w-1/2">
                    <h3 className="text-xl font-bold">Today</h3>
                    <p className="text-silver-500">A leading carrier connecting Floptropica to the world with award-winning service, staying true to our FloptropicalAir roots.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mb-6">
              <Heart size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Our Philosophy</h3>
            <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
              We believe "friendly skies" isn't just a slogan—it's a promise. From our ground crew in Potaxiene to our pilots, every member of the Flopcoast family is dedicated to making your journey as comfortable as it is memorable.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Global Reach</h3>
            <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
              Connecting destinations across Asia, South America, Europe, Africa, and North America. Whether you're flying for business in Seoul or leisure in Lima, Flopcoast brings the world closer to you.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-silver-200 dark:border-zinc-800">
          <div className="text-center">
            <div className="text-4xl font-display font-bold mb-2">12M+</div>
            <div className="text-sm text-silver-500 uppercase tracking-wider font-semibold">Happy Passengers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold mb-2">60+</div>
            <div className="text-sm text-silver-500 uppercase tracking-wider font-semibold">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold mb-2">180</div>
            <div className="text-sm text-silver-500 uppercase tracking-wider font-semibold">Daily Flights</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold mb-2">24/7</div>
            <div className="text-sm text-silver-500 uppercase tracking-wider font-semibold">Support</div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
           <h2 className="text-3xl font-display font-bold text-center">Why Choose Us?</h2>
           <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6">
                 <ShieldCheck size={40} className="mb-4 text-silver-400" />
                 <h4 className="font-bold text-lg mb-2">Safety First</h4>
                 <p className="text-silver-500 text-sm">Maintained to the highest international standards.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                 <Award size={40} className="mb-4 text-silver-400" />
                 <h4 className="font-bold text-lg mb-2">Award Winning</h4>
                 <p className="text-silver-500 text-sm">Voted 'Best Value Airline' in Floptropica three years running.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                 <Heart size={40} className="mb-4 text-silver-400" />
                 <h4 className="font-bold text-lg mb-2">Human Centric</h4>
                 <p className="text-silver-500 text-sm">We treat people like people, not cargo.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;


import React from 'react';
import { ArrowLeft, Trophy, Music, Palette, Users, Heart } from 'lucide-react';
import { ViewState } from '../types';

const Sponsorships: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ABOUT')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to About Us
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Proud <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Partners.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          We believe in supporting the passions that move us. Flopcoast is proud to sponsor champions, artists, and innovators across Floptropica and the world.
        </p>
      </div>

      {/* Main Feature */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[3rem] p-12 md:p-20 mb-20 relative overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <Trophy size={64} className="mx-auto text-yellow-400" />
              <h2 className="text-4xl md:text-6xl font-display font-bold">Official Airline of the Floptropica National Team</h2>
              <p className="text-xl opacity-80 leading-relaxed">
                  Cheering on our athletes as they compete on the global stage. From training camps to the Olympic Games, we fly the flag (and the team) with pride.
              </p>
              <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                  Meet the Athletes
              </button>
          </div>
          {/* Confetti decor */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/50 via-transparent to-transparent"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 dark:text-purple-400">
                  <Palette size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Arts & Culture</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Supporting the Potaxiene Museum of Modern Art and the annual Floptropica Film Festival. Bringing creativity to new heights.
              </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
                  <Music size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Music & Events</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Headline sponsor of the Summeria Jazz Festival. Connecting fans with their favorite artists across the globe.
              </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-600 dark:text-pink-400">
                  <Heart size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Community</h3>
              <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-6">
                  Partnering with "Floptropica National Fund" to provide aviation scholarships for underprivileged youth in our hub cities.
              </p>
          </div>
      </div>

      <div className="bg-silver-50 dark:bg-zinc-950 rounded-[3rem] p-12 text-center border border-silver-200 dark:border-zinc-800">
          <h2 className="text-3xl font-display font-bold mb-6">Sponsorship Requests</h2>
          <p className="text-silver-500 max-w-xl mx-auto mb-8">
              Are you looking for a partner for your next event or initiative? We review sponsorship proposals on a quarterly basis.
          </p>
          <button className="border border-black dark:border-white px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              Submit Proposal
          </button>
      </div>

    </div>
  );
};

export default Sponsorships;


import React from 'react';
import { Tv, Music, Gamepad2, Headphones, Film, ArrowLeft } from 'lucide-react';
import { ViewState } from '../types';

const OnboardEntertainment: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Immersive <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Entertainment.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Time flies when you're having fun. Dive into thousands of hours of content on Flopcoast Studio™, our award-winning in-flight entertainment system.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
         <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all">
             <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                 <Film size={32} />
             </div>
             <h3 className="text-2xl font-display font-bold mb-4">Latest Blockbusters</h3>
             <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                 From Hollywood hits to international cinema, enjoy the latest releases in 4K definition. Our library is updated monthly with over 300 movies.
             </p>
         </div>
         <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all">
             <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                 <Tv size={32} />
             </div>
             <h3 className="text-2xl font-display font-bold mb-4">Binge-Worthy TV</h3>
             <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                 Catch up on full seasons of your favorite shows. From trending dramas to classic sitcoms and documentaries, there's something for everyone.
             </p>
         </div>
         <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all">
             <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                 <Music size={32} />
             </div>
             <h3 className="text-2xl font-display font-bold mb-4">Audio & Podcasts</h3>
             <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                 Relax with curated playlists, explore our vast album library, or listen to exclusive podcasts produced in partnership with top creators.
             </p>
         </div>
         <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all">
             <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                 <Gamepad2 size={32} />
             </div>
             <h3 className="text-2xl font-display font-bold mb-4">Games & Kids Zone</h3>
             <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                 Keep the little ones entertained with dedicated kids' movies, shows, and games. Challenge yourself with our selection of arcade classics.
             </p>
         </div>
         <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all">
             <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                 <Headphones size={32} />
             </div>
             <h3 className="text-2xl font-display font-bold mb-4">Bluetooth Pairing</h3>
             <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                 Connect your own wireless headphones directly to the seatback screen. Enjoy the entertainment you love with the comfort of your own gear.
             </p>
         </div>
      </div>

      <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Live TV & Sports</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
              Never miss a moment of the action. Watch live news and sports events on our satellite-connected Live TV channels, available on select long-haul aircraft.
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-70 font-display font-bold uppercase tracking-wider text-sm">
              <span>Sports 24</span> • <span>CNN International</span> • <span>BBC World News</span> • <span>CNBC</span>
          </div>
      </div>
    </div>
  );
};

export default OnboardEntertainment;

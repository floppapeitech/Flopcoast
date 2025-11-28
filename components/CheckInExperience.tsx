
import React from 'react';
import { Smartphone, Monitor, UserCheck, Clock, ShieldCheck, Map } from 'lucide-react';

const CheckInExperience: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Seamless <span className="text-silver-400 dark:text-zinc-600 italic font-serif">start.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          We've streamlined the check-in process to get you from the curb to the gate with ease. Choose the option that fits your style.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
         <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800">
            <Smartphone size={40} className="mb-6 text-black dark:text-white" />
            <h3 className="text-2xl font-display font-bold mb-3">Mobile App</h3>
            <p className="text-silver-500 leading-relaxed mb-4">
               Check in 24 hours before your flight, select your seat, and get your digital boarding pass instantly. Receive real-time gate updates.
            </p>
            <span className="text-xs font-bold uppercase tracking-wider bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">Recommended</span>
         </div>

         <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800">
            <Monitor size={40} className="mb-6 text-black dark:text-white" />
            <h3 className="text-2xl font-display font-bold mb-3">Kiosk Express</h3>
            <p className="text-silver-500 leading-relaxed">
               Use our self-service kiosks at the airport to print bag tags and boarding passes in under a minute. Friendly staff are nearby to assist.
            </p>
         </div>

         <div className="bg-silver-50 dark:bg-zinc-950 rounded-[2.5rem] p-8 border border-silver-200 dark:border-zinc-800">
            <UserCheck size={40} className="mb-6 text-black dark:text-white" />
            <h3 className="text-2xl font-display font-bold mb-3">Premium Counter</h3>
            <p className="text-silver-500 leading-relaxed">
               Business Class and Gold/Platinum members enjoy dedicated check-in desks for a personalized, expedited experience.
            </p>
         </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-12 border border-silver-200 dark:border-zinc-800 shadow-xl">
         <h2 className="text-3xl font-display font-bold mb-8">Check-in Timelines</h2>
         <div className="space-y-6">
            <div className="flex items-start gap-4">
               <div className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shrink-0">
                  <Clock size={20} />
               </div>
               <div>
                  <h4 className="font-bold text-lg">24 Hours Before</h4>
                  <p className="text-silver-500">Online and mobile check-in opens. Select your seat and add baggage.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-silver-200 dark:bg-zinc-700 text-black dark:text-white p-3 rounded-full shrink-0">
                  <Map size={20} />
               </div>
               <div>
                  <h4 className="font-bold text-lg">3 Hours Before</h4>
                  <p className="text-silver-500">Airport check-in and bag drop opens for international flights.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-silver-200 dark:bg-zinc-700 text-black dark:text-white p-3 rounded-full shrink-0">
                  <ShieldCheck size={20} />
               </div>
               <div>
                  <h4 className="font-bold text-lg">60 Minutes Before</h4>
                  <p className="text-silver-500">Check-in and bag drop closes for all flights. Please arrive at security early.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CheckInExperience;


import React from 'react';
import { HeartHandshake, Baby, Dog, Accessibility, Stethoscope, ChevronDown, ChevronRight, Brain, Battery, ShieldAlert, BadgeInfo } from 'lucide-react';

const SpecialServices: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Care & <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Assistance.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          We are committed to making travel accessible and comfortable for everyone. Explore our range of assistance services designed with you in mind.
        </p>
      </div>

      <div className="grid gap-8">
        
        {/* Disability Assistance */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0 text-black dark:text-white">
                <Accessibility size={32} />
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-display font-bold">Disability Assistance</h3>
                <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                    Our team is trained to assist passengers with reduced mobility, visual or hearing impairments, and other disabilities.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Wheelchair Service</h4>
                        <p className="text-sm text-silver-500">Available from check-in to the aircraft door. Please request at least 48 hours in advance.</p>
                    </div>
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Onboard Support</h4>
                        <p className="text-sm text-silver-500">Accessible lavatories and movable armrests are available on most aircraft. Our crew can assist with moving to/from the lavatory.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Cognitive Disabilities - NEW */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0 text-black dark:text-white">
                <Brain size={32} />
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-display font-bold">Cognitive & Sensory Support</h3>
                <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                    We recognize that travel can be overwhelming. We proudly support the Hidden Disabilities Sunflower Lanyard scheme to discreetly indicate that you may need extra time or assistance.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Sunflower Lanyards</h4>
                        <p className="text-sm text-silver-500">Available at our check-in counters. Staff are trained to recognize and offer proactive help.</p>
                    </div>
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Pre-Boarding</h4>
                        <p className="text-sm text-silver-500">We offer early boarding to allow passengers with sensory sensitivities time to settle in before the cabin gets busy.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Family Travel */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0 text-black dark:text-white">
                <Baby size={32} />
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-display font-bold">Family Travel & Infants</h3>
                <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                    Traveling with little ones? We offer priority boarding, bassinet seats, and special meals to make your family trip smoother.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Infants (Under 2)</h4>
                        <p className="text-sm text-silver-500">Travel on your lap for a reduced fare (usually 10%). One stroller and car seat can be checked for free.</p>
                    </div>
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Unaccompanied Minors</h4>
                        <p className="text-sm text-silver-500">Escorted service for children aged 5-14 traveling alone. Mandatory supervision from check-in to guardian pickup.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Pets */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0 text-black dark:text-white">
                <Dog size={32} />
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-display font-bold">Traveling with Pets</h3>
                <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                    Your furry friends are welcome on Flopcoast! We offer options for pets in the cabin and in the temperature-controlled hold.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Cabin Pets</h4>
                        <p className="text-sm text-silver-500">Small cats and dogs (under 8kg incl. carrier) can fly in the cabin on select flights. Fee applies.</p>
                    </div>
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Service Animals</h4>
                        <p className="text-sm text-silver-500">Recognized service dogs travel free of charge in the cabin. Documentation required.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Medical */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-silver-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0 text-black dark:text-white">
                <Stethoscope size={32} />
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-display font-bold">Medical Conditions</h3>
                <p className="text-silver-500 dark:text-silver-400 leading-relaxed">
                    If you have a medical condition or need special equipment (like oxygen), please contact us beforehand.
                </p>
                
                {/* Specific Medical Devices */}
                <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800 mb-4">
                    <div className="flex items-start gap-4">
                        <Battery className="text-blue-500 shrink-0 mt-1" size={20} />
                        <div>
                            <h4 className="font-bold text-lg mb-2">Medical Devices (CPAP/POC)</h4>
                            <p className="text-sm text-silver-500 leading-relaxed mb-2">
                                Portable Oxygen Concentrators (POC) and CPAP machines are permitted on board. They must be FAA-approved and have enough battery life for 150% of the flight duration.
                            </p>
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Medical Certificate Required</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Expectant Mothers</h4>
                        <p className="text-sm text-silver-500">Travel permitted up to 36 weeks (single pregnancy) with a doctor's certificate after 28 weeks.</p>
                    </div>
                    <div className="bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl">
                        <h4 className="font-bold mb-1">Dietary Requirements</h4>
                        <p className="text-sm text-silver-500">We cater to most medical and religious dietary needs. Order special meals at least 24 hours before flight.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Nut Policy Warning */}
        <div className="bg-orange-50 dark:bg-orange-950/20 rounded-[2rem] p-8 border border-orange-100 dark:border-orange-900/30 flex items-start gap-6">
            <ShieldAlert size={32} className="text-orange-600 shrink-0" />
            <div>
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-2">Allergy Policy</h3>
                <p className="text-sm text-orange-800 dark:text-orange-200/80 leading-relaxed">
                    We cannot guarantee a nut-free environment. Peanuts and tree nuts may be served on our flights or brought on board by other passengers. If you have a severe allergy, please inform the cabin crew upon boarding so we can make an announcement requesting passengers refrain from opening nut products.
                </p>
            </div>
        </div>

      </div>

      <div className="mt-16 bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Need to arrange assistance?</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              The best way to ensure your needs are met is to request services at the time of booking or via "Manage My Booking".
          </p>
          <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
              Contact Special Assistance Team
          </button>
      </div>
    </div>
  );
};

export default SpecialServices;

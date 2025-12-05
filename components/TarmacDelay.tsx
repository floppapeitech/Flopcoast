
import React from 'react';
import { ArrowLeft, Clock, AlertTriangle, Coffee, Info, Printer, Gavel } from 'lucide-react';
import { ViewState } from '../types';

const TarmacDelay: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <Gavel size={14} /> Flopcoast Legal Center
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Contingency Plan for Tarmac Delays</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                Our commitment to your comfort and safety during lengthy ground delays.
            </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-silver-400">Effective Date</span>
            <span className="font-mono text-sm font-medium">January 1, 2024</span>
            <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 text-xs font-bold text-black dark:text-white hover:opacity-70 transition-opacity mt-4 bg-silver-100 dark:bg-zinc-800 px-4 py-2 rounded-full"
            >
                <Printer size={14} /> Print Plan
            </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-100 dark:border-zinc-800">
              <p className="leading-relaxed text-silver-600 dark:text-silver-400 text-justify">
                  Flopcoast Airways is committed to providing the highest level of service to our customers. In compliance with U.S. Department of Transportation (DOT) regulations and international standards, we have established this Contingency Plan for Lengthy Tarmac Delays. This plan applies to all Flopcoast flights departing from or arriving at U.S. airports.
              </p>
          </div>

          <div className="space-y-8">
              <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                      <Clock size={24} /> Limits on Tarmac Delays
                  </h3>
                  <p className="text-silver-600 dark:text-silver-400 leading-relaxed mb-4">
                      For international flights operated by Flopcoast Airways departing from or arriving at a U.S. airport, we will not permit an aircraft to remain on the tarmac for more than <strong>four (4) hours</strong> before allowing passengers to deplane, unless:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-silver-600 dark:text-silver-400">
                      <li>The pilot-in-command determines there is a safety-related or security-related reason why the aircraft cannot leave its position on the tarmac to deplane passengers; or</li>
                      <li>Air traffic control advises the pilot-in-command that returning to the gate or another disembarkation point would significantly disrupt airport operations.</li>
                  </ul>
              </div>

              <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

              <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                      <Coffee size={24} /> Passenger Needs
                  </h3>
                  <p className="text-silver-600 dark:text-silver-400 leading-relaxed mb-4">
                      During a lengthy tarmac delay, Flopcoast Airways will provide:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-silver-600 dark:text-silver-400">
                      <li><strong>Food & Water:</strong> Adequate food and potable water no later than two hours after the aircraft leaves the gate (in the case of a departure) or touches down (in the case of an arrival), unless the pilot-in-command determines that safety or security considerations preclude such service.</li>
                      <li><strong>Lavatories:</strong> Operable lavatory facilities will be maintained while the aircraft remains on the tarmac.</li>
                      <li><strong>Medical Attention:</strong> Adequate medical attention if needed.</li>
                      <li><strong>Comfort:</strong> Cabin temperatures will be maintained at comfortable levels.</li>
                  </ul>
              </div>

              <div className="h-px bg-silver-200 dark:bg-zinc-800"></div>

              <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                      <Info size={24} /> Communication
                  </h3>
                  <p className="text-silver-600 dark:text-silver-400 leading-relaxed mb-4">
                      We will notify passengers regarding the status of the delay every 30 minutes, including the reasons for the delay if known. We will also notify passengers beginning 30 minutes after scheduled departure time (including any revised departure time that passengers were notified about before boarding) and every 30 minutes thereafter that they have the opportunity to deplane from an aircraft that is at the gate or another disembarkation area with the door open, if the opportunity to deplane actually exists.
                  </p>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 flex gap-4 items-start">
                  <AlertTriangle className="shrink-0 text-orange-500" size={24} />
                  <div className="text-sm text-silver-500">
                      <strong>Note:</strong> This plan has been coordinated with airport authorities (including terminal facility operators where applicable), U.S. Customs and Border Protection (CBP), and the Transportation Security Administration (TSA) at each U.S. airport that we serve, as well as our regular diversion airports.
                  </div>
              </div>
          </div>

          <div className="mt-12 flex justify-center">
              <button 
                  onClick={() => onNavigate('HELP')}
                  className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-black dark:hover:text-white"
              >
                  Contact Customer Relations
              </button>
          </div>

      </div>
    </div>
  );
};

export default TarmacDelay;

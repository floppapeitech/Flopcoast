
import React, { useState } from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, XCircle, Plane, Printer, Book, Briefcase, Gavel, FileCheck } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const [activeSection, setActiveSection] = useState('definitions');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: 'definitions', label: 'Art 1. Definitions' },
    { id: 'applicability', label: 'Art 2. Applicability' },
    { id: 'tickets', label: 'Art 3. Tickets' },
    { id: 'fares', label: 'Art 4. Fares & Taxes' },
    { id: 'reservations', label: 'Art 5. Reservations' },
    { id: 'checkin', label: 'Art 6. Check-in & Boarding' },
    { id: 'refusal', label: 'Art 7. Refusal of Carriage' },
    { id: 'baggage', label: 'Art 8. Baggage' },
    { id: 'schedules', label: 'Art 9. Schedules & Delays' },
    { id: 'refunds', label: 'Art 10. Refunds' },
    { id: 'conduct', label: 'Art 11. Conduct Onboard' },
    { id: 'liability', label: 'Art 12. Liability' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <Gavel size={14} /> Flopcoast Legal Center
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">General Conditions of Carriage</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                These conditions constitute the contract between the passenger and Flopcoast Airways.
            </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-silver-400">Effective Date</span>
            <span className="font-mono text-sm font-medium">January 1, 2024</span>
            <span className="text-xs font-bold uppercase tracking-wider text-silver-400 mt-2">Reference</span>
            <span className="font-mono text-sm font-medium">COC-INT-2024-V1</span>
            <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 text-xs font-bold text-black dark:text-white hover:opacity-70 transition-opacity mt-4 bg-silver-100 dark:bg-zinc-800 px-4 py-2 rounded-full"
            >
                <Printer size={14} /> Print Terms
            </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-1">
                <h3 className="text-xs font-bold uppercase text-silver-400 mb-4 px-4 tracking-widest">Articles</h3>
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
            
            <section id="definitions" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 1: Definitions</h2>
                <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] space-y-4 text-sm text-silver-600 dark:text-silver-400 leading-relaxed border border-silver-100 dark:border-zinc-800">
                    <p><strong>"Carrier"</strong> means Flopcoast Airways and any other air carrier that carries or undertakes to carry the passenger and/or their baggage hereunder.</p>
                    <p><strong>"Convention"</strong> means whichever of the following instruments are applicable:
                        <br/>- The Convention for the Unification of Certain Rules Relating to International Carriage by Air, signed at Warsaw, 12 October 1929 (Warsaw Convention).
                        <br/>- The Convention for the Unification of Certain Rules for International Carriage by Air, signed at Montreal, 28 May 1999 (Montreal Convention).
                    </p>
                    <p><strong>"SDR"</strong> means a Special Drawing Right as defined by the International Monetary Fund.</p>
                    <p><strong>"Tariff"</strong> means the published fares, charges and/or related Conditions of Carriage of an airline filed, where required, with the appropriate authorities.</p>
                    <p><strong>"Ticket"</strong> means the document entitled "Passenger Ticket and Baggage Check" or the Electronic Ticket, of which these Conditions form part.</p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="applicability" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 2: Applicability</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose space-y-4 text-sm md:text-base text-justify">
                    <p>
                        <strong>2.1 General:</strong> Except as provided in Articles 2.2, 2.4 and 2.5, these Conditions of Carriage apply to all flights, or flight segments, where our name or Airline Designator Code (FC) is indicated in the carrier box of the Ticket for that flight or flight segment.
                    </p>
                    <p>
                        <strong>2.2 Charter Operations:</strong> If Carriage is performed pursuant to a charter agreement, these Conditions of Carriage apply only to the extent they are incorporated by reference or otherwise in the charter agreement or the Ticket.
                    </p>
                    <p>
                        <strong>2.3 Code Shares:</strong> On some services we have arrangements with other carriers known as "Code Shares". This means that even if you have a reservation with us and hold a ticket where our name or Airline Designator Code is indicated as the carrier, another carrier may operate the aircraft. If such arrangements apply, we will advise you of the carrier operating the aircraft at the time you make a reservation.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="tickets" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 3: Tickets</h2>
                <div className="space-y-6 text-silver-600 dark:text-silver-400 leading-loose text-justify text-sm md:text-base">
                    <div>
                        <h3 className="font-bold text-black dark:text-white mb-2">3.1 General Provisions</h3>
                        <p>We will provide carriage only to the Passenger named in the Ticket, and you may be required to produce appropriate identification. A Ticket is not transferable.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-black dark:text-white mb-2">3.2 Period of Validity</h3>
                        <p>Except as otherwise provided in the Ticket, these Conditions, or in applicable Tariffs (which may limit the validity of a ticket, in which case the limitation will be shown on the Ticket), a Ticket is valid for:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>One year from the date of issue; or</li>
                            <li>Subject to the first travel occurring within one year from the date of issue, one year from the date of first travel under the Ticket.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-black dark:text-white mb-2">3.3 Coupon Sequence</h3>
                        <p>The Ticket you have purchased is valid only for the transportation as shown on the Ticket, from the place of departure via any Agreed Stopping Places to the final destination. The Ticket will not be honored and will lose its validity if all the Flight Coupons are not used in the sequence provided in the Ticket.</p>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="fares" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 4: Fares, Taxes, Fees and Charges</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose space-y-4 text-sm md:text-base text-justify">
                    <p>
                        <strong>4.1 Fares:</strong> Fares apply only for carriage from the airport at the point of origin to the airport at the point of destination, unless otherwise expressly stated. Fares do not include ground transport service between airports and between airports and town terminals.
                    </p>
                    <p>
                        <strong>4.2 Taxes, Fees and Charges:</strong> Applicable taxes, fees and charges imposed by government or other authority, or by the operator of an airport, shall be payable by you. At the time you purchase your Ticket, you will be advised of taxes, fees and charges not included in the fare, most of which will normally be shown separately on the Ticket.
                    </p>
                    <p>
                        <strong>4.3 Currency:</strong> Fares, taxes, fees and charges are payable in the currency of the country in which the Ticket is issued, unless another currency is indicated by us or our Authorized Agent, at or before the time payment is made.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="reservations" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 5: Reservations</h2>
                <div className="bg-silver-50 dark:bg-zinc-950 p-8 rounded-[2rem] border border-silver-100 dark:border-zinc-800 space-y-4 text-sm md:text-base text-silver-600 dark:text-silver-400">
                    <p>
                        <strong>5.1 Reservation Requirements:</strong> We or our Authorized Agent will record your reservation(s). Upon request we will provide you with a written confirmation of your reservation(s). Certain fares have conditions which limit or exclude your right to change or cancel reservations.
                    </p>
                    <p>
                        <strong>5.2 Ticketing Time Limits:</strong> If you have not paid for the Ticket prior to the specified ticketing time limit, as advised by us or our Authorized Agent, we may cancel your reservation.
                    </p>
                    <p>
                        <strong>5.3 Personal Data:</strong> You recognize that personal data has been given to us for the purposes of: making a reservation, purchasing a Ticket, obtaining ancillary services, developing and providing services, facilitating immigration and entry procedures, and making available such data to government agencies, in connection with your travel. For these purposes, you authorize us to retain and use such data and to transmit it to our own offices, Authorized Agents, government agencies, other Carriers or the providers of the above-mentioned services.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="checkin" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 6: Check-in and Boarding</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose space-y-4 text-sm md:text-base text-justify">
                    <p>
                        6.1 Check-in Deadlines are different at every airport and we recommend that you inform yourself about these Check-in Deadlines and honor them. We reserve the right to cancel your reservation if you do not comply with the Check-in Deadlines indicated.
                    </p>
                    <p>
                        6.2 You must be present at the boarding gate not later than the time specified by us when you check in.
                    </p>
                    <p>
                        6.3 We may cancel the space reserved for you if you fail to arrive at the boarding gate in time.
                    </p>
                    <p>
                        6.4 We will not be liable to you for any loss or expense incurred due to your failure to comply with the provisions of this Article.
                    </p>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="refusal" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 7: Refusal and Limitation of Carriage</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose space-y-4 text-sm md:text-base text-justify">
                    <p>In the reasonable exercise of our discretion, we may refuse to carry you or your Baggage if we have notified you in writing that we would not at any time after the date of such notice carry you on our flights. In this circumstance you will be entitled to a refund. We may also refuse to carry you or your Baggage if one or more of the following have occurred or we reasonably believe may occur:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Such action is necessary in order to comply with any applicable government laws, regulations, or orders;</li>
                        <li>The carriage of you or your Baggage may endanger or affect the safety, health, or materially affect the comfort of other passengers or crew;</li>
                        <li>Your mental or physical state, including your impairment from alcohol or drugs, presents a hazard or risk to yourself, to passengers, to crew, or to property;</li>
                        <li>You have committed misconduct on a previous flight, and we have reason to believe that such conduct may be repeated;</li>
                        <li>You have refused to submit to a security check;</li>
                        <li>You have not paid the applicable fare, taxes, fees or charges;</li>
                        <li>You do not appear to have valid travel documents, may seek to enter a country through which you may be in transit, or for which you do not have valid travel documents, destroy your travel documents during flight or refuse to surrender your travel documents to the flight crew, against receipt, when so requested.</li>
                    </ul>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="baggage" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 8: Baggage</h2>
                <div className="space-y-6 text-silver-600 dark:text-silver-400 leading-loose text-justify text-sm md:text-base">
                    <div>
                        <h3 className="font-bold text-black dark:text-white mb-2">8.1 Free Baggage Allowance</h3>
                        <p>You may carry some Baggage, free of charge, subject to our conditions and limitations, which are available upon request from us or our Authorized Agents and are available at www.flopcoast.com.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-black dark:text-white mb-2">8.2 Excess Baggage</h3>
                        <p>You will be required to pay a charge for carriage of Baggage in excess of the free Baggage allowance.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-black dark:text-white mb-2">8.3 Items Unacceptable as Baggage</h3>
                        <p>You must not include in your Baggage:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Items which are likely to endanger the aircraft or persons or property on board the aircraft, such as those specified in the International Civil Aviation Organization (ICAO) Technical Instructions for the Safe Transport of Dangerous Goods by Air and the International Air Transport Association (IATA) Dangerous Goods Regulations;</li>
                            <li>Items the carriage of which is prohibited by the applicable laws, regulations or orders of any state to be flown from or to;</li>
                            <li>Items which are reasonably considered by us to be unsuitable for carriage because they are dangerous, unsafe or by reason of their weight, size, shape or character, or which are fragile or perishable having regard to the type of aircraft being used.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="schedules" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 9: Schedules, Delays, Cancellation of Flights</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose space-y-4 text-sm md:text-base text-justify">
                    <p>
                        <strong>9.1 Schedules:</strong> The flight times shown in timetables may change between the date of publication and the date you actually travel. We do not guarantee them to you and they do not form part of your contract with us.
                    </p>
                    <p>
                        <strong>9.2 Cancellation, Rerouting, Delays, etc.:</strong> We will take all necessary measures to avoid delay in carrying you and your baggage. In the exercise of these measures and in order to prevent a flight cancellation, in exceptional circumstances we may arrange for a flight to be operated on our behalf by an alternative carrier and/or aircraft.
                    </p>
                    <p>
                        If we cancel a flight, fail to operate a flight reasonably according to the schedule, fail to stop at your destination or Stopover destination, or cause you to miss a connecting flight on which you hold a confirmed reservation, we shall, at your option, either:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Carry you at the earliest opportunity on another of our scheduled services on which space is available; or</li>
                        <li>Re-route you to the destination shown on your Ticket by our own services or those of another carrier, or by other mutually agreed means and class of transportation; or</li>
                        <li>Make a refund in accordance with the provisions of Article 10.</li>
                    </ul>
                </div>
            </section>

            <div className="h-px bg-silver-100 dark:bg-zinc-800 w-full"></div>

            <section id="liability" className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold mb-6 text-black dark:text-white">Article 12: Liability for Damage</h2>
                <div className="text-silver-600 dark:text-silver-400 leading-loose space-y-4 text-sm md:text-base text-justify">
                    <p>
                        <strong>12.1 International Carriage:</strong> Liability for International Carriage is subject to the rules and limitations of the Montreal Convention or Warsaw Convention as applicable.
                    </p>
                    <div className="bg-silver-50 dark:bg-zinc-950 p-6 rounded-2xl border border-silver-100 dark:border-zinc-800">
                        <h4 className="font-bold text-black dark:text-white mb-2">Montreal Convention Notice:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li><strong>Death or Injury:</strong> There are no financial limits to our liability for passenger death or bodily injury. For damages up to 128,821 SDRs, we will not contest the claim. Above that amount, we can defend ourselves against a claim by proving that we were not negligent or otherwise at fault.</li>
                            <li><strong>Delay:</strong> In case of passenger delay, we are liable for damage unless we took all reasonable measures to avoid the damage or it was impossible to take such measures. The liability for passenger delay is limited to 5,346 SDRs.</li>
                            <li><strong>Baggage:</strong> In case of baggage delay, destruction, loss or damage, our liability is limited to 1,288 SDRs per passenger.</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

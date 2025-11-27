
import React, { useState } from 'react';
import { Search, HelpCircle, MessageCircle, Phone, FileText, ChevronRight, ChevronDown, AlertTriangle, Award, Luggage, Coffee, Briefcase } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
      setOpenFaq(openFaq === question ? null : question);
  };

  const faqCategories = [
    {
      title: 'Booking & Reservations',
      icon: <FileText size={20} />,
      questions: [
          { q: 'How do I change my flight?', a: 'You can change your flight online through the "My Bookings" section. Simply enter your booking reference and last name. Note that change fees may apply depending on your fare class.' },
          { q: 'What is the cancellation policy?', a: 'Cancellation policies vary by ticket type. "Basic" fares are non-refundable after 24 hours. "Flexible" fares can be cancelled for a full refund up to 2 hours before departure.' },
          { q: 'How do I use my travel credits?', a: 'Travel credits are automatically linked to your Flopcoast account. Select "Apply Travel Credit" at the payment stage during your next booking.' },
          { q: 'Can I book for someone else?', a: 'Yes, you can book a flight for another person. Just enter their details in the Passenger Information section during checkout.' }
      ]
    },
    {
      title: 'Baggage Policies',
      icon: <Luggage size={20} />,
      questions: [
          { q: 'What is my baggage allowance?', a: 'Economy Class includes one carry-on (10kg) and one personal item. Checked baggage depends on your route and fare bundle, typically starting at 23kg for standard fares.' },
          { q: 'What are the dimensions for carry-on?', a: 'Maximum dimensions for carry-on bags are 55 x 40 x 23 cm (21.5 x 15.5 x 9 in), including handles and wheels.' },
          { q: 'What is the fee for excess baggage?', a: 'Excess baggage fees start at $50 per bag for the first extra bag. Overweight bags (23kg-32kg) incur an additional $75 fee.' },
          { q: 'Can I bring sports equipment?', a: 'Yes, sports equipment like golf clubs or skis count as one checked bag. If it exceeds standard dimensions, an oversize fee may apply.' }
      ]
    },
    {
      title: 'In-Flight Services',
      icon: <Coffee size={20} />,
      questions: [
          { q: 'Do you offer Wi-Fi on board?', a: 'Yes, high-speed Wi-Fi is available on most international flights. Messaging is free for all passengers, while streaming packages can be purchased.' },
          { q: 'What meal options are available?', a: 'We offer complimentary meals on long-haul flights. Special meals (vegetarian, kosher, gluten-free) can be requested up to 24 hours before departure.' },
          { q: 'Is there in-flight entertainment?', a: 'Our aircraft are equipped with personal seatback screens offering a wide selection of movies, TV shows, music, and games.' },
          { q: 'Do seats have power outlets?', a: 'Yes, most seats are equipped with USB ports. Premium Economy and Business Class seats also feature universal AC power outlets.' }
      ]
    },
    {
      title: 'Flopcoast Rewards',
      icon: <Award size={20} />,
      questions: [
          { q: 'How do I earn points?', a: 'Points are earned on every eligible flight based on distance flown and fare class. You can also earn points with our global partners and co-branded credit cards.' },
          { q: 'Do my points expire?', a: 'Points do not expire as long as you have at least one earning or redeeming activity every 24 months.' },
          { q: 'How do I upgrade my status?', a: 'Status is determined by the number of points earned in a calendar year. Tiers range from Basic to Ultimate, with increasing benefits like lounge access and bonus points.' },
          { q: 'Can I transfer points to family?', a: 'Yes, you can transfer up to 50,000 points per year to friends or family members for a small transaction fee.' }
      ]
    },
    {
      title: 'Special Assistance',
      icon: <Briefcase size={20} />,
      questions: [
          { q: 'Can I bring a pet?', a: 'Yes, small pets are allowed in the cabin for a fee of $125 each way. Larger pets must travel in the cargo hold. Please contact support 48 hours prior to departure.' },
          { q: 'I need wheelchair assistance.', a: 'Wheelchair assistance is available at all airports. Please request this service at least 48 hours before your flight via "Manage Trips" or by calling support.' },
          { q: 'Traveling with infants?', a: 'Infants under 2 years can travel on your lap for a reduced fare. Bassinets are available on long-haul flights but must be reserved in advance.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-display font-bold">How can we help?</h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Find answers to your travel questions or get in touch with our friendly support team.
        </p>
        
        <div className="max-w-xl mx-auto mt-8 relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search for answers (e.g. 'refund policy')" 
            className="w-full pl-12 pr-6 py-4 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 rounded-2xl shadow-sm outline-none focus:ring-2 ring-black dark:ring-white transition-all text-lg"
          />
        </div>
      </div>

      {/* Travel Advisory Section */}
      <div className="mb-16 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/50 p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row gap-6 items-start">
         <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full shrink-0">
            <AlertTriangle className="text-orange-600 dark:text-orange-400" size={24} />
         </div>
         <div>
            <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200 mb-2">Travel Advisory: Runway Construction at JFK</h3>
            <p className="text-orange-700 dark:text-orange-300/80 text-sm leading-relaxed">
               Please allow extra time for travel to John F. Kennedy International Airport (JFK) due to ongoing runway maintenance. 
               Departures may experience minor delays of 15-20 minutes. We apologize for the inconvenience.
            </p>
         </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-black dark:text-white group-hover:scale-110 transition-transform">
            <FileText size={24} />
          </div>
          <h3 className="text-xl font-bold font-display mb-2">My Bookings</h3>
          <p className="text-silver-500 mb-4 text-sm">View details, change seats, or request upgrades.</p>
          <span className="text-sm font-bold underline decoration-2 underline-offset-4">Manage Trips</span>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-black dark:text-white group-hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </div>
          <h3 className="text-xl font-bold font-display mb-2">Live Chat</h3>
          <p className="text-silver-500 mb-4 text-sm">Chat with our virtual assistant or a live agent 24/7.</p>
          <span className="text-sm font-bold underline decoration-2 underline-offset-4">Start Chat</span>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-black dark:text-white group-hover:scale-110 transition-transform">
            <Phone size={24} />
          </div>
          <h3 className="text-xl font-bold font-display mb-2">Call Us</h3>
          <p className="text-silver-500 mb-4 text-sm">Speak directly with our global support team.</p>
          <span className="text-sm font-bold underline decoration-2 underline-offset-4">View Numbers</span>
        </div>
      </div>

      {/* FAQ Sections */}
      <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faqCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg text-black dark:text-white">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.questions.map((item, qIdx) => (
                <li key={qIdx}>
                  <button 
                     onClick={() => toggleFaq(item.q)}
                     className={`flex items-center justify-between w-full text-left p-4 bg-white dark:bg-zinc-900 border border-silver-200 dark:border-zinc-800 hover:border-silver-400 dark:hover:border-zinc-600 transition-all group ${openFaq === item.q ? 'rounded-t-2xl border-b-0' : 'rounded-2xl'}`}
                  >
                    <span className="text-sm font-medium text-silver-700 dark:text-silver-300 group-hover:text-black dark:group-hover:text-white">{item.q}</span>
                    {openFaq === item.q ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  {openFaq === item.q && (
                      <div className="p-4 bg-white dark:bg-zinc-900 border border-t-0 border-silver-200 dark:border-zinc-800 rounded-b-2xl text-sm text-silver-500 animate-in fade-in slide-in-from-top-1">
                          {item.a}
                      </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Footer */}
      <div className="mt-20 bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 text-center relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Still need help?</h2>
          <p className="text-white/70 dark:text-black/70 max-w-lg mx-auto">
            Our dedicated support team is available 24 hours a day, 7 days a week to assist you with any questions or concerns.
          </p>
          <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
            Contact Support
          </button>
        </div>
        
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-black/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 dark:bg-black/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

    </div>
  );
};

export default HelpCenter;

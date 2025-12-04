
import React, { useState } from 'react';
import { Search, MessageCircle, Phone, FileText, ChevronRight, ChevronDown, AlertTriangle, Award, Luggage, Coffee, Briefcase, CheckCircle, Globe, DollarSign, Smartphone, Armchair, CreditCard, Shield, UserCog, Menu, HeartPulse, Truck, Handshake, Building2 } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('Booking');

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveCategory(id);
    }
  };

  const toggleFaq = (question: string) => {
      setOpenFaq(openFaq === question ? null : question);
  };

  const faqCategories = [
    {
      id: 'Booking',
      title: 'Booking & Reservations',
      icon: <FileText size={20} />,
      questions: [
          { q: 'How do I change my flight?', a: 'You can change your flight online through the "My Bookings" section. Simply enter your booking reference and last name. Note that change fees may apply depending on your fare class.' },
          { q: 'What is the cancellation policy?', a: 'Cancellation policies vary by ticket type. "Basic" fares are non-refundable after 24 hours. "Flexible" fares can be cancelled for a full refund up to 2 hours before departure.' },
          { q: 'How do I use my travel credits?', a: 'Travel credits are automatically linked to your Flopcoast account. Select "Apply Travel Credit" at the payment stage during your next booking.' },
          { q: 'Can I book for someone else?', a: 'Yes, you can book a flight for another person. Just enter their details in the Passenger Information section during checkout.' },
          { q: 'Can I hold a fare?', a: 'Yes, our "Price Lock" feature allows you to hold a fare for up to 72 hours for a small non-refundable fee. This secures the price while you finalize your plans.' },
          { q: 'How do group bookings work?', a: 'For parties of 10 or more passengers traveling on the same itinerary, please contact our Group Sales department for special rates and flexible payment options.' }
      ]
    },
    {
      id: 'Checkin',
      title: 'Check-in & Boarding',
      icon: <CheckCircle size={20} />,
      questions: [
          { q: 'When does online check-in open?', a: 'Online and mobile app check-in opens 24 hours before your scheduled departure time and closes 60 minutes before departure for international flights.' },
          { q: 'Can I use a mobile boarding pass?', a: 'Yes, mobile boarding passes are accepted at most airports we serve. You can access them via the Flopcoast App or save them to your mobile wallet.' },
          { q: 'What time do I need to be at the gate?', a: 'We recommend arriving at the gate at least 45 minutes before departure for domestic flights and 60 minutes for international flights. Gates close strictly 15 minutes before departure.' },
          { q: 'How does boarding work?', a: 'We board by zones. Pre-boarding is available for passengers needing assistance and families with infants, followed by First/Business Class and elite members, then general boarding by row number.' }
      ]
    },
    {
      id: 'Baggage',
      title: 'Baggage Policies',
      icon: <Luggage size={20} />,
      questions: [
          { q: 'What is my baggage allowance?', a: 'Economy Class includes one carry-on (10kg) and one personal item. Checked baggage depends on your route and fare bundle, typically starting at 23kg for standard fares.' },
          { q: 'What are the dimensions for carry-on?', a: 'Maximum dimensions for carry-on bags are 55 x 40 x 23 cm (21.5 x 15.5 x 9 in), including handles and wheels.' },
          { q: 'What is the fee for excess baggage?', a: 'Excess baggage fees start at $50 per bag for the first extra bag. Overweight bags (23kg-32kg) incur an additional $75 fee.' },
          { q: 'Can I bring sports equipment?', a: 'Yes, sports equipment like golf clubs or skis count as one checked bag. If it exceeds standard dimensions, an oversize fee may apply.' },
          { q: 'My baggage was damaged, what do I do?', a: 'Please report damaged baggage immediately at the Flopcoast Baggage Service Office in the arrival hall before leaving the airport. You must file a claim within 7 days.' },
          { q: 'Can I track my checked bags?', a: 'Yes, use the "Track My Bag" feature in the Flopcoast mobile app to see real-time scanning updates of your luggage.' }
      ]
    },
    {
      id: 'Documents',
      title: 'Travel Documents',
      icon: <Globe size={20} />,
      questions: [
          { q: 'Do I need a visa?', a: 'Visa requirements depend on your citizenship and destination. We recommend using our "Travel Ready Center" or checking with the consulate of the country you are visiting.' },
          { q: 'Passport validity rules?', a: 'Most countries require your passport to be valid for at least 6 months beyond your planned date of return. Please verify specific entry requirements before travel.' },
          { q: 'My name is spelled wrong on my ticket.', a: 'Minor spelling corrections (up to 3 characters) can be made free of charge by contacting support. Full name changes are generally not permitted.' },
          { q: 'What is APIS data?', a: 'Advance Passenger Information System (APIS) data is required by many government authorities (e.g., USA, UK). You must provide your passport details before travel via "Manage Booking".' }
      ]
    },
    {
      id: 'Payments',
      title: 'Payments & Billing',
      icon: <CreditCard size={20} />,
      questions: [
          { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and Flopcoast Gift Cards.' },
          { q: 'Can I pay in a different currency?', a: 'Yes, we support transactions in over 30 currencies. The exchange rate is fixed at the time of booking confirmation.' },
          { q: 'How do I get a receipt?', a: 'An official tax receipt is automatically sent to your email upon booking confirmation. You can also download past receipts from the "My Bookings" portal.' },
          { q: 'My payment was declined.', a: 'Please ensure you have sufficient funds and that your bank allows international transactions. If the issue persists, try a different card or contact your bank.' }
      ]
    },
    {
      id: 'Refunds',
      title: 'Refunds & Compensation',
      icon: <DollarSign size={20} />,
      questions: [
          { q: 'How do I request a refund?', a: 'If you have a refundable ticket or your flight was cancelled by us, you can request a refund via the online Refund Form. Refunds are typically processed within 7-10 business days.' },
          { q: 'Am I entitled to compensation for delays?', a: 'If your flight is delayed by more than 3 hours due to reasons within our control, you may be entitled to compensation under regulations like EU261 or local laws.' },
          { q: 'How do I claim expenses?', a: 'For expenses incurred during a disruption (e.g., hotel, meals), please retain all receipts and submit a claim form via our "Feedback & Claims" portal.' }
      ]
    },
    {
      id: 'Services',
      title: 'In-Flight Services',
      icon: <Coffee size={20} />,
      questions: [
          { q: 'Do you offer Wi-Fi on board?', a: 'Yes, high-speed Wi-Fi is available on most international flights. Messaging is free for all passengers, while streaming packages can be purchased.' },
          { q: 'What meal options are available?', a: 'We offer complimentary meals on long-haul flights. Special meals (vegetarian, kosher, gluten-free) can be requested up to 24 hours before departure.' },
          { q: 'Is there in-flight entertainment?', a: 'Our aircraft are equipped with personal seatback screens offering a wide selection of movies, TV shows, music, and games.' },
          { q: 'Do seats have power outlets?', a: 'Yes, most seats are equipped with USB ports. Premium Economy and Business Class seats also feature universal AC power outlets.' },
          { q: 'Can I pre-order Duty Free?', a: 'Yes, you can browse our catalog online and pre-order items for delivery to your seat. Pre-orders receive a 15% discount.' }
      ]
    },
    {
      id: 'Rewards',
      title: 'Flopcoast Rewards',
      icon: <Award size={20} />,
      questions: [
          { q: 'How do I earn points?', a: 'Points are earned on every eligible flight based on distance flown and fare class. You can also earn points with our global partners and co-branded credit cards.' },
          { q: 'Do my points expire?', a: 'Points do not expire as long as you have at least one earning or redeeming activity every 24 months.' },
          { q: 'How do I upgrade my status?', a: 'Status is determined by the number of points earned in a calendar year. Tiers range from Basic to Ultimate, with increasing benefits like lounge access and bonus points.' },
          { q: 'I am missing points from a flight.', a: 'You can claim missing points online up to 6 months after your flight. Keep your boarding pass and ticket number handy.' },
          { q: 'Can I transfer points to family?', a: 'Yes, you can transfer up to 50,000 points per year to friends or family members for a small transaction fee.' }
      ]
    },
    {
      id: 'App',
      title: 'Mobile App',
      icon: <Smartphone size={20} />,
      questions: [
          { q: 'What can I do on the app?', a: 'The Flopcoast App allows you to book flights, check in, track bags, view flight status, access digital entertainment, and manage your rewards account.' },
          { q: 'Is the app available offline?', a: 'Your boarding pass and itinerary are saved for offline access. However, real-time updates require an internet connection.' }
      ]
    },
    {
      id: 'Lounge',
      title: 'Lounge Access',
      icon: <Armchair size={20} />,
      questions: [
          { q: 'Who can access the lounge?', a: 'Lounge access is complimentary for Business/First Class passengers and Gold/Platinum/Ultimate rewards members. Some credit cards also offer access.' },
          { q: 'Can I buy lounge access?', a: 'Yes, single-visit passes can be purchased for select lounges via "Manage Booking" or at the lounge reception, subject to capacity.' },
          { q: 'Can I bring a guest?', a: 'Platinum and Ultimate members may bring one guest free of charge. Business Class passengers generally do not have guest privileges unless specified.' }
      ]
    },
    {
      id: 'Assistance',
      title: 'Special Assistance',
      icon: <Briefcase size={20} />,
      questions: [
          { q: 'Can I bring a pet?', a: 'Yes, small pets are allowed in the cabin for a fee of $125 each way. Larger pets must travel in the cargo hold. Please contact support 48 hours prior to departure.' },
          { q: 'I need wheelchair assistance.', a: 'Wheelchair assistance is available at all airports. Please request this service at least 48 hours before your flight via "Manage Trips" or by calling support.' },
          { q: 'Traveling with infants?', a: 'Infants under 2 years can travel on your lap for a reduced fare. Bassinets are available on long-haul flights but must be reserved in advance.' },
          { q: 'I have a nut allergy.', a: 'Please inform us at least 48 hours in advance. While we cannot guarantee a nut-free environment, we can refrain from serving nut products and make a PA announcement.' },
          { q: 'Unaccompanied minors?', a: 'We offer an Unaccompanied Minor service for children aged 5-14 traveling alone. This includes supervision from check-in to handover at the destination.' }
      ]
    },
    {
      id: 'Safety',
      title: 'Safety & Security',
      icon: <Shield size={20} />,
      questions: [
          { q: 'What are the rules for liquids?', a: 'You can carry liquids, aerosols, and gels in containers of 3.4 oz (100ml) or less, fitting into a single 1-quart clear plastic bag per passenger.' },
          { q: 'Do I need to remove my shoes?', a: 'At most checkpoints, you will need to remove your shoes unless you are eligible for expedited screening programs (like TSA PreCheck).' },
          { q: 'Can I bring batteries?', a: 'Spare lithium batteries must be packed in your carry-on luggage. They are strictly prohibited in checked baggage due to fire risk.' },
          { q: 'ID requirements?', a: 'For domestic travel, a valid government-issued photo ID is required. For international travel, a valid passport (with at least 6 months validity) is mandatory.' }
      ]
    },
    {
      id: 'Health',
      title: 'Health & Well-being',
      icon: <HeartPulse size={20} />,
      questions: [
          { q: 'Is the cabin air clean?', a: 'Yes, all our aircraft are equipped with hospital-grade HEPA filters that capture 99.9% of airborne particles, including viruses and bacteria. The cabin air is refreshed every 2-3 minutes.' },
          { q: 'What if I get sick on board?', a: 'Our cabin crew are trained in first aid and have access to medical kits and 24/7 ground-based medical support. If you feel unwell, please alert a crew member immediately.' },
          { q: 'Do I need a medical clearance?', a: 'If you have recently had surgery, a serious illness, or a communicable disease, you may be required to provide a "Fit to Fly" certificate from your doctor.' },
          { q: 'How do you combat jet lag?', a: 'Our modern aircraft (A350/B787) feature lower cabin altitude and dynamic LED lighting designed to align with your body clock and reduce fatigue.' }
      ]
    },
    {
      id: 'Cargo',
      title: 'Cargo & Logistics',
      icon: <Truck size={20} />,
      questions: [
          { q: 'Can I ship unaccompanied baggage?', a: 'Yes, Flopcoast Cargo offers "Personal Effects" shipping for excess luggage at a lower rate than excess baggage fees. Items must be dropped off at our cargo terminal.' },
          { q: 'Do you ship live animals?', a: 'Flopcoast Live™ specializes in the safe transport of animals. We offer climate-controlled environments and dedicated handlers. Booking is required 14 days in advance.' },
          { q: 'How do I track a shipment?', a: 'You can track your air waybill (AWB) in real-time via the Flopcoast Cargo website. Status updates are available from acceptance to delivery.' }
      ]
    },
    {
      id: 'Partners',
      title: 'Travel Partners',
      icon: <Handshake size={20} />,
      questions: [
          { q: 'Can I earn points on hotels?', a: 'Yes, book through Flopcoast Holidays or present your membership number at partner hotel chains (e.g., Marriott, Hilton) to earn 500 points per stay.' },
          { q: 'Do you offer car rental discounts?', a: 'Flopcoast members receive exclusive rates of up to 15% off with FlopCar and major international rental agencies. Points are earned on every rental.' },
          { q: 'What is a codeshare flight?', a: 'A codeshare is a flight operated by a partner airline but sold with a Flopcoast (FC) flight number. You earn points and status credits just as you would on our own metal.' }
      ]
    },
    {
      id: 'Corporate',
      title: 'Corporate Information',
      icon: <Building2 size={20} />,
      questions: [
          { q: 'Where is your headquarters?', a: 'Flopcoast Airways is headquartered at 123 Runway Avenue, Potaxiene International Airport, Floptropica.' },
          { q: 'How do I contact media relations?', a: 'For press inquiries, interviews, and filming requests, please email media@flopcoast.com. Our press office is open Mon-Fri, 9am-5pm.' },
          { q: 'Does Flopcoast sponsor events?', a: 'We are proud sponsors of major cultural and sporting events across Floptropica. Visit our Sponsorships page to apply for partnership opportunities.' },
          { q: 'Where can I find investor info?', a: 'Please visit our dedicated "Investor Relations" page for annual reports, stock information, and governance documents.' }
      ]
    },
    {
      id: 'Account',
      title: 'Account Support',
      icon: <UserCog size={20} />,
      questions: [
          { q: 'I forgot my password.', a: 'Click "Sign In" and then "Forgot Password". We will send you a secure link to reset your credentials.' },
          { q: 'How do I merge duplicate accounts?', a: 'If you have multiple frequent flyer numbers, please contact support with both numbers. We will merge your points and status history into a single account.' },
          { q: 'How do I update my profile?', a: 'Log in to your Dashboard and navigate to "Settings". You can update your contact info, passport details, and meal preferences there.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-silver-200 dark:border-zinc-800 pb-8 mb-12 gap-6">
        <div>
            <div className="flex items-center gap-2 text-silver-500 mb-2 text-xs font-bold uppercase tracking-widest">
                <MessageCircle size={14} /> Flopcoast Support
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white">Help Center</h1>
            <p className="text-silver-500 dark:text-silver-400 mt-4 max-w-2xl text-lg">
                Find answers, manage your trip, or contact our dedicated support team.
            </p>
        </div>
        <div className="w-full md:w-auto">
            <div className="relative group w-full md:w-80">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="text-silver-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={20} />
                </div>
                <input 
                    type="text" 
                    placeholder="Search topics..." 
                    className="w-full pl-12 pr-6 py-3 bg-silver-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800 rounded-full outline-none focus:ring-2 ring-black dark:ring-white transition-all"
                />
            </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-1">
                <h3 className="text-xs font-bold uppercase text-silver-400 mb-4 px-4 tracking-widest">Topics</h3>
                {faqCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => scrollToCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${activeCategory === category.id ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' : 'text-silver-500 hover:bg-silver-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white'}`}
                    >
                        <span className={activeCategory === category.id ? '' : 'opacity-70'}>{category.icon}</span>
                        {category.title}
                    </button>
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-9 space-y-12">
            
            {/* Travel Advisory Section */}
            <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/50 p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row gap-6 items-start">
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

            {/* Quick Actions Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-black dark:text-white group-hover:scale-110 transition-transform">
                        <FileText size={20} />
                    </div>
                    <h3 className="font-bold font-display mb-1">My Bookings</h3>
                    <p className="text-silver-500 mb-3 text-xs">Change seats or request upgrades.</p>
                    <span className="text-xs font-bold underline decoration-2 underline-offset-4">Manage Trips</span>
                </div>
                
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-black dark:text-white group-hover:scale-110 transition-transform">
                        <MessageCircle size={20} />
                    </div>
                    <h3 className="font-bold font-display mb-1">Live Chat</h3>
                    <p className="text-silver-500 mb-3 text-xs">Chat with our virtual assistant 24/7.</p>
                    <span className="text-xs font-bold underline decoration-2 underline-offset-4">Start Chat</span>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-silver-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-silver-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-black dark:text-white group-hover:scale-110 transition-transform">
                        <Phone size={20} />
                    </div>
                    <h3 className="font-bold font-display mb-1">Call Us</h3>
                    <p className="text-silver-500 mb-3 text-xs">Speak with global support.</p>
                    <span className="text-xs font-bold underline decoration-2 underline-offset-4">View Numbers</span>
                </div>
            </div>

            {/* FAQ Categories Rendered */}
            <div className="space-y-16">
                {faqCategories.map((category) => (
                    <div key={category.id} id={category.id} className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-silver-100 dark:border-zinc-800">
                            <div className="p-2 bg-silver-100 dark:bg-zinc-800 rounded-lg text-black dark:text-white">
                                {category.icon}
                            </div>
                            <h2 className="text-2xl font-display font-bold">{category.title}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {category.questions.map((item, qIdx) => (
                                <div key={qIdx} className="bg-white dark:bg-zinc-900 rounded-2xl border border-silver-200 dark:border-zinc-800 overflow-hidden">
                                    <button 
                                        onClick={() => toggleFaq(`${category.id}-${qIdx}`)}
                                        className="flex items-center justify-between w-full text-left p-5 hover:bg-silver-50 dark:hover:bg-zinc-800/50 transition-colors"
                                    >
                                        <span className="font-bold text-sm pr-4">{item.q}</span>
                                        {openFaq === `${category.id}-${qIdx}` ? <ChevronDown size={16} className="shrink-0"/> : <ChevronRight size={16} className="shrink-0 text-silver-400"/>}
                                    </button>
                                    {openFaq === `${category.id}-${qIdx}` && (
                                        <div className="px-5 pb-5 pt-0 text-sm text-silver-600 dark:text-silver-400 leading-relaxed animate-in fade-in slide-in-from-top-1">
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Footer */}
            <div className="bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 text-center relative overflow-hidden">
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
      </div>
    </div>
  );
};

export default HelpCenter;

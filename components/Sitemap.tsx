
import React from 'react';
import { ViewState } from '../types';
import { ArrowLeft, Map } from 'lucide-react';

interface SitemapProps {
    onNavigate: (view: ViewState) => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onNavigate }) => {
  const mapSections = [
      {
          title: 'Plan & Book',
          links: [
              { label: 'Search Flights', view: 'HOME' },
              { label: 'Flight Deals', view: 'FLIGHT_DEALS' },
              { label: 'Route Map', view: 'HOME' }, // Using home for interactive map section
              { label: 'Travel Alerts', view: 'TRAVEL_ALERTS' },
              { label: 'Optional Fees', view: 'FEES' },
          ]
      },
      {
          title: 'Travel Information',
          links: [
              { label: 'Check-in Guide', view: 'CHECKIN' },
              { label: 'Baggage Information', view: 'BAGGAGE' },
              { label: 'Special Services', view: 'SPECIAL_SERVICES' },
              { label: 'Our Fleet', view: 'FLEET' },
              { label: 'Lounges', view: 'LOUNGES' },
              { label: 'Cargo Services', view: 'CARGO' },
          ]
      },
      {
          title: 'Onboard Experience',
          links: [
              { label: 'First Class', view: 'FIRST_CLASS' },
              { label: 'Business Class', view: 'BUSINESS_CLASS' },
              { label: 'Premium Economy', view: 'PREMIUM_ECONOMY' },
              { label: 'Economy Class', view: 'ECONOMY' },
              { label: 'Entertainment', view: 'ENTERTAINMENT' },
              { label: 'Wi-Fi & Connectivity', view: 'CONNECTIVITY' },
          ]
      },
      {
          title: 'Loyalty',
          links: [
              { label: 'Flopcoast Rewards', view: 'REWARDS' },
              { label: 'Earning Points', view: 'REWARDS_EARNING' },
              { label: 'Redeeming Points', view: 'REWARDS_REDEMPTION' },
              { label: 'Elite Tiers', view: 'REWARDS_TIERS' },
          ]
      },
      {
          title: 'Support',
          links: [
              { label: 'Help Center', view: 'HELP' },
              { label: 'Flopcoast Insurance', view: 'INSURANCE' },
              { label: 'Accessibility', view: 'ACCESSIBILITY' },
          ]
      },
      {
          title: 'Corporate & Legal',
          links: [
              { label: 'About Us', view: 'ABOUT' },
              { label: 'Careers', view: 'CAREERS' },
              { label: 'Investor Relations', view: 'INVESTOR_RELATIONS' },
              { label: 'Media Center', view: 'PRESS' },
              { label: 'Sustainability', view: 'SUSTAINABILITY' },
              { label: 'Privacy Policy', view: 'PRIVACY_POLICY' },
              { label: 'Terms of Service', view: 'TERMS_OF_SERVICE' },
              { label: 'Cookie Policy', view: 'COOKIE_POLICY' },
          ]
      },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

       <div className="mb-12">
           <h1 className="text-4xl md:text-5xl font-display font-bold flex items-center gap-3">
               <Map size={40} className="text-silver-400" /> Sitemap
           </h1>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
           {mapSections.map((section, idx) => (
               <div key={idx} className="space-y-4">
                   <h2 className="text-xl font-bold font-display border-b border-silver-200 dark:border-zinc-800 pb-2">{section.title}</h2>
                   <ul className="space-y-2">
                       {section.links.map((link, lIdx) => (
                           <li key={lIdx}>
                               <button 
                                  onClick={() => onNavigate(link.view as ViewState)}
                                  className="text-silver-500 hover:text-black dark:hover:text-white hover:underline decoration-1 underline-offset-4 transition-all text-sm"
                               >
                                   {link.label}
                               </button>
                           </li>
                       ))}
                   </ul>
               </div>
           ))}
       </div>
    </div>
  );
};

export default Sitemap;

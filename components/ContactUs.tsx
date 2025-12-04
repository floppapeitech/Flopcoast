
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowLeft, Send } from 'lucide-react';
import { ViewState } from '../types';

const ContactUs: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Get in <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Touch.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Whether you have a question about your booking, feedback on your experience, or a media inquiry, we're here to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 md:p-16 border border-silver-200 dark:border-zinc-800 shadow-sm">
              <h2 className="text-3xl font-display font-bold mb-8">Send us a message</h2>
              <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-sm font-bold text-silver-500">First Name</label>
                          <input type="text" className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none" placeholder="Jane"/>
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-bold text-silver-500">Last Name</label>
                          <input type="text" className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none" placeholder="Doe"/>
                      </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-sm font-bold text-silver-500">Email Address</label>
                          <input type="email" className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none" placeholder="jane@example.com"/>
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-bold text-silver-500">Booking Reference (Optional)</label>
                          <input type="text" className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none" placeholder="FL-XXXXXX"/>
                      </div>
                  </div>
                  <div className="space-y-2">
                      <label className="text-sm font-bold text-silver-500">Subject</label>
                      <select className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none">
                          <option>General Inquiry</option>
                          <option>Booking Change / Cancellation</option>
                          <option>Baggage Issue</option>
                          <option>Feedback / Complaint</option>
                          <option>Flopcoast Rewards</option>
                      </select>
                  </div>
                  <div className="space-y-2">
                      <label className="text-sm font-bold text-silver-500">Message</label>
                      <textarea className="w-full bg-silver-50 dark:bg-zinc-950 p-4 rounded-xl border border-transparent focus:border-black dark:focus:border-white outline-none h-32 resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      <Send size={20} /> Send Message
                  </button>
              </form>
          </div>

          <div className="space-y-8">
              <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <h3 className="text-2xl font-display font-bold mb-6">Global Contact Center</h3>
                  <div className="space-y-6">
                      <div>
                          <div className="text-xs font-bold uppercase text-silver-400 mb-1">USA & Canada</div>
                          <div className="font-bold text-lg flex items-center gap-2"><Phone size={18}/> +1 800 FLOP-FLY</div>
                      </div>
                      <div>
                          <div className="text-xs font-bold uppercase text-silver-400 mb-1">UK & Europe</div>
                          <div className="font-bold text-lg flex items-center gap-2"><Phone size={18}/> +44 20 7946 0123</div>
                      </div>
                      <div>
                          <div className="text-xs font-bold uppercase text-silver-400 mb-1">Asia Pacific</div>
                          <div className="font-bold text-lg flex items-center gap-2"><Phone size={18}/> +65 6789 0123</div>
                      </div>
                      <div>
                          <div className="text-xs font-bold uppercase text-silver-400 mb-1">Floptropica (HQ)</div>
                          <div className="font-bold text-lg flex items-center gap-2"><Phone size={18}/> +99 1 234 5678</div>
                      </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-silver-200 dark:border-zinc-800">
                      <div className="flex items-center gap-2 text-sm text-silver-500">
                          <Clock size={16} /> Available 24/7
                      </div>
                  </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="text-2xl font-display font-bold mb-6">Headquarters</h3>
                  <address className="not-italic text-silver-600 dark:text-silver-300 leading-relaxed mb-6">
                      <strong>Flopcoast Aviation Group</strong><br/>
                      123 Runway Avenue<br/>
                      Building 4, Potaxiene Int'l Airport<br/>
                      Potaxiene, Floptropica
                  </address>
                  <button className="text-sm font-bold underline decoration-2 underline-offset-4 flex items-center gap-2">
                      <MapPin size={16} /> View on Map
                  </button>
              </div>
          </div>

      </div>
    </div>
  );
};

export default ContactUs;

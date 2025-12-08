
import React from 'react';
import { ArrowLeft, Utensils, Coffee, Wine, Crown, Star, Armchair, ChevronRight } from 'lucide-react';
import { ViewState } from '../types';

const InflightDining: React.FC<{onNavigate: (view: ViewState) => void}> = ({onNavigate}) => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto animate-fade-in-up">
       <button onClick={() => onNavigate('ONBOARD')} className="flex items-center gap-2 text-silver-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Onboard Experience
       </button>

      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">
          Taste the <span className="text-silver-400 dark:text-zinc-600 italic font-serif">Clouds.</span>
        </h1>
        <p className="text-xl text-silver-500 dark:text-silver-400 max-w-2xl mx-auto">
          Culinary excellence at 30,000 feet. Our seasonal menus are crafted by world-class chefs to delight your palate in every cabin class.
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] mb-20 relative group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop" alt="Gourmet Dining" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 p-12 z-20 max-w-xl">
              <h2 className="text-4xl font-display font-bold text-white mb-4">The Art of Plating</h2>
              <p className="text-white/90 text-lg">
                  We believe presentation matters. Enjoy meals served on fine porcelain with real glassware and cutlery, even in Economy.
              </p>
          </div>
      </div>

      {/* Cabin Class Dining Grid */}
      <div className="space-y-20">
          
          {/* First Class */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                  <div className="flex items-center gap-3 text-silver-400 font-bold uppercase tracking-wider text-sm">
                      <Crown size={18} /> First Class
                  </div>
                  <h3 className="text-4xl font-display font-bold">Dine on Demand</h3>
                  <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                      Your schedule, your menu. Order whatever you want, whenever you want from our extensive à la carte selection. Indulge in our signature caviar service, lobster thermidor, and vintage champagnes.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 font-medium"><Utensils size={18}/> 7-Course Tasting Menu</li>
                      <li className="flex items-center gap-3 font-medium"><Wine size={18}/> Rare Vintage Wines</li>
                      <li className="flex items-center gap-3 font-medium"><Coffee size={18}/> Freshly Brewed Espresso</li>
                  </ul>
                  <button className="flex items-center gap-2 font-bold underline decoration-2 underline-offset-4">
                      View Sample Menu <ChevronRight size={16} />
                  </button>
              </div>
              <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden h-96 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" alt="First Class Dining" className="w-full h-full object-cover" />
              </div>
          </div>

          {/* Business Class */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-[2.5rem] overflow-hidden h-96 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2670&auto=format&fit=crop" alt="Business Class Dining" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                  <div className="flex items-center gap-3 text-silver-400 font-bold uppercase tracking-wider text-sm">
                      <Star size={18} /> Business Class
                  </div>
                  <h3 className="text-4xl font-display font-bold">Restaurant Service</h3>
                  <p className="text-lg text-silver-500 dark:text-silver-400 leading-relaxed">
                      Experience a full restaurant-style service with appetizers, main courses, and a dessert trolley. Our "Book the Cook" service allows you to pre-order main courses up to 24 hours in advance.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 font-medium"><Utensils size={18}/> Book the Cook Exclusive Options</li>
                      <li className="flex items-center gap-3 font-medium"><Wine size={18}/> Sommelier-Selected Pairings</li>
                      <li className="flex items-center gap-3 font-medium"><Coffee size={18}/> Artisanal Chocolates</li>
                  </ul>
              </div>
          </div>

          {/* Premium & Economy */}
          <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">
                      <Coffee size={18} /> Premium Economy
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Elevated Favorites</h3>
                  <p className="text-silver-500 mb-6 leading-relaxed">
                      Choose from three delicious main course options served on porcelain tableware. Start with a welcome glass of champagne and end with a premium dessert.
                  </p>
                  <span className="text-sm font-bold bg-white dark:bg-zinc-900 px-4 py-2 rounded-full border border-silver-200 dark:border-zinc-800">Premium Wine Selection</span>
              </div>

              <div className="bg-silver-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 text-green-600 dark:text-green-400 font-bold uppercase tracking-wider text-sm mb-4">
                      <Armchair size={18} /> Economy Class
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Hearty & Wholesome</h3>
                  <p className="text-silver-500 mb-6 leading-relaxed">
                      Enjoy a complimentary hot meal on all international flights, featuring a choice of two main courses. Snacks and beverages are available throughout the flight.
                  </p>
                  <span className="text-sm font-bold bg-white dark:bg-zinc-900 px-4 py-2 rounded-full border border-silver-200 dark:border-zinc-800">Complimentary Beer & Wine</span>
              </div>
          </div>

      </div>

      <div className="mt-20 bg-black dark:bg-white text-white dark:text-black rounded-[3rem] p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Special Dietary Meals</h2>
          <p className="opacity-80 max-w-2xl mx-auto mb-8">
              We cater to medical, religious, and lifestyle dietary requirements. Please request your special meal at least 24 hours before departure via "Manage Booking".
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-wider">
              <span className="border border-white/20 dark:border-black/20 px-3 py-1 rounded-full">Vegan</span>
              <span className="border border-white/20 dark:border-black/20 px-3 py-1 rounded-full">Gluten Free</span>
              <span className="border border-white/20 dark:border-black/20 px-3 py-1 rounded-full">Halal</span>
              <span className="border border-white/20 dark:border-black/20 px-3 py-1 rounded-full">Kosher</span>
              <span className="border border-white/20 dark:border-black/20 px-3 py-1 rounded-full">Child Meal</span>
          </div>
      </div>

    </div>
  );
};

export default InflightDining;

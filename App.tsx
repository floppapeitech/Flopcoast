
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import About from './components/About';
import InteractiveMap from './components/InteractiveMap';
import FlightResults from './components/FlightResults';
import FlightDeals from './components/FlightDeals';
import HelpCenter from './components/HelpCenter';
import Rewards from './components/Rewards';
import RewardsCenter from './components/RewardsCenter';
import RewardsEarning from './components/RewardsEarning';
import RewardsRedemption from './components/RewardsRedemption';
import RewardsTiers from './components/RewardsTiers';
import UserSettings from './components/UserSettings';
import InsurancePolicy from './components/InsurancePolicy';
import InsuranceFullPolicy from './components/InsuranceFullPolicy';
import OnboardExperience from './components/OnboardExperience';
import CheckInExperience from './components/CheckInExperience';
import BaggageInfo from './components/BaggageInfo';
import Fleet from './components/Fleet';
import FirstClass from './components/FirstClass';
import BusinessClass from './components/BusinessClass';
import PremiumEconomy from './components/PremiumEconomy';
import EconomyClass from './components/EconomyClass';
import ProhibitedItems from './components/ProhibitedItems';
import OnboardEntertainment from './components/OnboardEntertainment';
import InternetConnectivity from './components/InternetConnectivity';
import SpecialServices from './components/SpecialServices';
import Sustainability from './components/Sustainability';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Careers from './components/Careers';
import InvestorRelations from './components/InvestorRelations';
import Accessibility from './components/Accessibility';
import Lounges from './components/Lounges';
import PressRoom from './components/PressRoom';
import Cargo from './components/Cargo';
import GeneralCargo from './components/GeneralCargo';
import FlopFresh from './components/FlopFresh';
import FlopLive from './components/FlopLive';
import CookiePolicy from './components/CookiePolicy';
import TravelAlerts from './components/TravelAlerts';
import OptionalFees from './components/OptionalFees';
import Sitemap from './components/Sitemap';
import PartnerAirlines from './components/PartnerAirlines';
import GroupTravel from './components/GroupTravel';
import MobileApp from './components/MobileApp';
import ContactUs from './components/ContactUs';
import Destinations from './components/Destinations';
import Sponsorships from './components/Sponsorships';
import BusinessSolutions from './components/BusinessSolutions';
import CreditCard from './components/CreditCard';
import GiftCards from './components/GiftCards';
import AirportGuide from './components/AirportGuide';
import Procurement from './components/Procurement';
import TarmacDelay from './components/TarmacDelay';
import TravelRequirements from './components/TravelRequirements';
import BidUpgrade from './components/BidUpgrade';
import HealthSafety from './components/HealthSafety';
import { User, ViewState, SearchCriteria } from './types';
import { INITIAL_USERS } from './services/mockData';

// Logout Confirmation Dialog
const LogoutDialog: React.FC<{ onConfirm: () => void; onCancel: () => void }> = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
    <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 max-w-sm w-full shadow-2xl border border-silver-200 dark:border-zinc-800 transform scale-100 animate-in zoom-in-95 duration-200">
      <h3 className="text-xl font-bold font-display mb-2">Sign Out</h3>
      <p className="text-silver-500 mb-8">Are you sure you want to sign out of your account?</p>
      <div className="flex gap-3">
        <button 
          onClick={onCancel}
          className="flex-1 py-3 rounded-full font-semibold border border-silver-200 dark:border-zinc-700 hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={onConfirm}
          className="flex-1 py-3 rounded-full font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  // --- State ---
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Search State
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | null>(null);
  
  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'LOGIN' | 'SIGNUP'>('LOGIN');
  
  // Transition State
  const [displayView, setDisplayView] = useState<ViewState>('HOME');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // --- Effects ---
  
  // Dark Mode Toggle Logic
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // View Transition Logic
  useEffect(() => {
    if (currentView !== displayView) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayView(currentView);
        setIsTransitioning(false);
      }, 300); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [currentView, displayView]);

  // --- Handlers ---

  const handleOpenAuth = () => {
    setAuthMode('LOGIN');
    setIsAuthModalOpen(true);
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    if (user.role === 'ADMIN') {
      setCurrentView('ADMIN');
    } else {
      setCurrentView('DASHBOARD');
    }
  };

  const handleSignup = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    setIsAuthModalOpen(false);
    setCurrentView('DASHBOARD');
  };

  const handleLogoutRequest = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setCurrentUser(null);
    setCurrentView('HOME');
    setShowLogoutConfirm(false);
  };

  const handleSearch = (criteria: SearchCriteria) => {
    setSearchCriteria(criteria);
    setCurrentView('FLIGHT_RESULTS');
    // Scroll to top when switching to results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateUser = (updatedUser: User) => {
    setCurrentUser(updatedUser);
    setUsers(prev => prev.map(u => u.id === updatedUser.id ? updatedUser : u));
  };

  const renderView = () => {
    switch (displayView) {
      case 'HOME':
        return (
          <>
            <Hero onSearch={handleSearch} />
            <HomeContent onNavigate={(view) => {
                setCurrentView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
            <InteractiveMap />
          </>
        );
      case 'FLIGHT_RESULTS':
        return (
          <FlightResults 
            criteria={searchCriteria || { from: '', to: '', date: '', passengers: 1, flightType: 'one-way', travelClass: 'Economy' }} 
            onBack={() => setCurrentView('HOME')}
            user={currentUser}
          />
        );
      case 'FLIGHT_DEALS':
        return <FlightDeals onNavigate={(view) => setCurrentView(view)} />;
      case 'DASHBOARD':
        return currentUser ? <Dashboard user={currentUser} onNavigate={setCurrentView} /> : <Hero onSearch={handleSearch} />; 
      case 'ADMIN':
        return currentUser?.role === 'ADMIN' ? <AdminPanel users={users} /> : <Hero onSearch={handleSearch} />; 
      case 'ABOUT':
        return <About />;
      case 'HELP':
        return <HelpCenter />;
      case 'REWARDS':
        return <Rewards onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'REWARDS_CENTER':
        return currentUser ? <RewardsCenter user={currentUser} onBack={() => setCurrentView('DASHBOARD')} /> : <Hero onSearch={handleSearch} />;
      case 'REWARDS_EARNING':
        return <RewardsEarning onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'REWARDS_REDEMPTION':
        return <RewardsRedemption onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'REWARDS_TIERS':
        return <RewardsTiers onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'SETTINGS':
        return currentUser ? <UserSettings user={currentUser} onBack={() => setCurrentView('DASHBOARD')} onUpdateUser={handleUpdateUser} /> : <Hero onSearch={handleSearch} />;
      case 'INSURANCE':
        return <InsurancePolicy onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'INSURANCE_FULL_POLICY':
        return <InsuranceFullPolicy onBack={() => {
            setCurrentView('INSURANCE');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'ONBOARD':
        return <OnboardExperience onNavigate={(view) => setCurrentView(view)} />;
      case 'CHECKIN':
        return <CheckInExperience />;
      case 'BAGGAGE':
        return <BaggageInfo onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'FLEET':
        return <Fleet />;
      case 'FIRST_CLASS':
        return <FirstClass onNavigate={(view) => setCurrentView(view)} />;
      case 'BUSINESS_CLASS':
        return <BusinessClass onNavigate={(view) => setCurrentView(view)} />;
      case 'PREMIUM_ECONOMY':
        return <PremiumEconomy onNavigate={(view) => setCurrentView(view)} />;
      case 'ECONOMY':
        return <EconomyClass onNavigate={(view) => setCurrentView(view)} />;
      case 'PROHIBITED_ITEMS':
        return <ProhibitedItems onBack={() => {
            setCurrentView('BAGGAGE');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'ENTERTAINMENT':
        return <OnboardEntertainment onNavigate={(view) => setCurrentView(view)} />;
      case 'CONNECTIVITY':
        return <InternetConnectivity onNavigate={(view) => setCurrentView(view)} />;
      case 'SPECIAL_SERVICES':
        return <SpecialServices />;
      case 'SUSTAINABILITY':
        return <Sustainability />;
      case 'PRIVACY_POLICY':
        return <PrivacyPolicy />;
      case 'TERMS_OF_SERVICE':
        return <TermsOfService />;
      case 'CAREERS':
        return <Careers />;
      case 'INVESTOR_RELATIONS':
        return <InvestorRelations />;
      case 'ACCESSIBILITY':
        return <Accessibility />;
      case 'LOUNGES':
        return <Lounges onNavigate={(view) => setCurrentView(view)} />;
      case 'PRESS':
        return <PressRoom onNavigate={(view) => setCurrentView(view)} />;
      case 'CARGO':
        return <Cargo onNavigate={(view) => setCurrentView(view)} />;
      case 'CARGO_GENERAL':
        return <GeneralCargo onNavigate={(view) => setCurrentView(view)} />;
      case 'CARGO_FRESH':
        return <FlopFresh onNavigate={(view) => setCurrentView(view)} />;
      case 'CARGO_LIVE':
        return <FlopLive onNavigate={(view) => setCurrentView(view)} />;
      case 'COOKIE_POLICY':
        return <CookiePolicy />;
      case 'TRAVEL_ALERTS':
        return <TravelAlerts onNavigate={(view) => setCurrentView(view)} />;
      case 'FEES':
        return <OptionalFees />;
      case 'SITEMAP':
        return <Sitemap onNavigate={(view) => setCurrentView(view)} />;
      case 'PARTNERS':
        return <PartnerAirlines onNavigate={(view) => setCurrentView(view)} />;
      case 'GROUP_TRAVEL':
        return <GroupTravel onNavigate={(view) => setCurrentView(view)} />;
      case 'MOBILE_APP':
        return <MobileApp onNavigate={(view) => setCurrentView(view)} />;
      case 'CONTACT':
        return <ContactUs onNavigate={(view) => setCurrentView(view)} />;
      case 'DESTINATIONS':
        return <Destinations onNavigate={(view) => setCurrentView(view)} />;
      case 'SPONSORSHIPS':
        return <Sponsorships onNavigate={(view) => setCurrentView(view)} />;
      case 'BUSINESS_SOLUTIONS':
        return <BusinessSolutions onNavigate={(view) => setCurrentView(view)} />;
      case 'CREDIT_CARD':
        return <CreditCard onNavigate={(view) => setCurrentView(view)} />;
      case 'GIFT_CARDS':
        return <GiftCards onNavigate={(view) => setCurrentView(view)} />;
      case 'AIRPORT_GUIDE':
        return <AirportGuide onNavigate={(view) => setCurrentView(view)} />;
      case 'PROCUREMENT':
        return <Procurement onNavigate={(view) => setCurrentView(view)} />;
      case 'TARMAC_DELAY':
        return <TarmacDelay onNavigate={(view) => setCurrentView(view)} />;
      case 'TRAVEL_REQUIREMENTS':
        return <TravelRequirements onNavigate={(view) => setCurrentView(view)} />;
      case 'BID_UPGRADE':
        return <BidUpgrade onNavigate={(view) => setCurrentView(view)} />;
      case 'HEALTH_SAFETY':
        return <HealthSafety onNavigate={(view) => setCurrentView(view)} />;
      default:
        return <Hero onSearch={handleSearch} />;
    }
  };

  return (
    <div className="min-h-screen bg-silver-50 dark:bg-black text-silver-900 dark:text-silver-50 font-sans transition-colors duration-500">
      
      <Navbar 
        user={currentUser} 
        currentView={currentView} 
        onNavigate={(view) => setCurrentView(view)} 
        onOpenAuth={handleOpenAuth} 
        onLogout={handleLogoutRequest}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Content Area with Fade Transition */}
      <main className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {renderView()}
      </main>

      <Footer onNavigate={(view) => {
         setCurrentView(view);
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Overlays */}
      {isAuthModalOpen && (
        <AuthModal 
          mode={authMode} 
          onLogin={handleLogin} 
          onSignup={handleSignup} 
          onCancel={() => setIsAuthModalOpen(false)} 
          users={users} 
          onSwitchMode={() => setAuthMode(prev => prev === 'LOGIN' ? 'SIGNUP' : 'LOGIN')} 
        />
      )}

      {showLogoutConfirm && (
        <LogoutDialog 
          onConfirm={confirmLogout} 
          onCancel={() => setShowLogoutConfirm(false)} 
        />
      )}
      
    </div>
  );
};

export default App;

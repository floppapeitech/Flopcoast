
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import About from './components/About';
import InteractiveMap from './components/InteractiveMap';
import FlightResults from './components/FlightResults';
import HelpCenter from './components/HelpCenter';
import Rewards from './components/Rewards';
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

  const renderView = () => {
    switch (displayView) {
      case 'HOME':
        return (
          <>
            <Hero onSearch={handleSearch} />
            <InteractiveMap />
          </>
        );
      case 'FLIGHT_RESULTS':
        return (
          <FlightResults 
            criteria={searchCriteria || { from: '', to: '', date: '', passengers: 1, flightType: 'one-way', travelClass: 'Economy' }} 
            onBack={() => setCurrentView('HOME')}
          />
        );
      case 'DASHBOARD':
        return currentUser ? <Dashboard user={currentUser} /> : <Hero onSearch={handleSearch} />; 
      case 'ADMIN':
        return currentUser?.role === 'ADMIN' ? <AdminPanel users={users} /> : <Hero onSearch={handleSearch} />; 
      case 'ABOUT':
        return <About />;
      case 'HELP':
        return <HelpCenter />;
      case 'REWARDS':
        return <Rewards />;
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

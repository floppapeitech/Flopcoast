
import React from 'react';
import { User, ViewState } from '../types';
import { Menu, X, Moon, Sun, LogOut } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  user: User | null;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onOpenAuth: () => void;
  onLogout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  currentView, 
  onNavigate, 
  onOpenAuth,
  onLogout,
  isDarkMode,
  toggleDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-4 left-3 right-3 md:top-6 md:left-8 md:right-8 z-50 flex flex-col items-center transition-all duration-300">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-silver-200 dark:border-zinc-800 rounded-full shadow-lg px-6 py-4 flex items-center justify-between w-full transition-all duration-300">
        
        {/* Logo */}
        <div 
          className="cursor-pointer group shrink-0" 
          onClick={() => onNavigate('HOME')}
        >
          <Logo className="text-black dark:text-white transition-transform group-hover:scale-105" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button 
            onClick={() => onNavigate('HOME')}
            className={`text-sm font-medium transition-colors ${currentView === 'HOME' ? 'text-black dark:text-white' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
          >
            Book Flight
          </button>
          <button 
             onClick={() => onNavigate('REWARDS')}
             className={`text-sm font-medium transition-colors ${currentView === 'REWARDS' ? 'text-black dark:text-white' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
          >
            Rewards
          </button>
          <button 
             onClick={() => onNavigate('ABOUT')}
             className={`text-sm font-medium transition-colors ${currentView === 'ABOUT' ? 'text-black dark:text-white' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
          >
            About Us
          </button>
          <button 
             onClick={() => onNavigate('HELP')}
             className={`text-sm font-medium transition-colors ${currentView === 'HELP' ? 'text-black dark:text-white' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
          >
            Help Center
          </button>
          
          {user?.role === 'ADMIN' && (
             <button 
             onClick={() => onNavigate('ADMIN')}
             className={`text-sm font-medium transition-colors ${currentView === 'ADMIN' ? 'text-black dark:text-white' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
           >
             Database
           </button>
          )}

          {user && (
            <button 
              onClick={() => onNavigate('DASHBOARD')}
              className={`text-sm font-medium transition-colors ${currentView === 'DASHBOARD' ? 'text-black dark:text-white' : 'text-silver-500 hover:text-black dark:hover:text-white'}`}
            >
              Dashboard
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors text-silver-600 dark:text-silver-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-silver-200 dark:border-zinc-700">
               <span className="text-xs font-medium hidden sm:block">
                  {user.name.split(' ')[0]}
               </span>
               <button
                onClick={onLogout}
                className="flex items-center gap-1 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-semibold px-4 py-2 rounded-full transition-colors"
               >
                 <LogOut size={14} />
                 Sign Out
               </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-silver-800 dark:hover:bg-silver-200 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg"
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-silver-800 dark:text-silver-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-silver-200 dark:border-zinc-800 rounded-2xl shadow-xl p-4 flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <button onClick={() => { onNavigate('HOME'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium">Book Flight</button>
          <button onClick={() => { onNavigate('REWARDS'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium text-silver-500">Rewards</button>
          <button onClick={() => { onNavigate('ABOUT'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium text-silver-500">About Us</button>
          <button onClick={() => { onNavigate('HELP'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium text-silver-500">Help Center</button>
          {user?.role === 'ADMIN' && (
             <button onClick={() => { onNavigate('ADMIN'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium">Admin Database</button>
          )}
          {user && (
             <button onClick={() => { onNavigate('DASHBOARD'); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium">Dashboard</button>
          )}
          {!user && (
             <button onClick={() => { onOpenAuth(); setIsMobileMenuOpen(false); }} className="p-3 text-left rounded-lg hover:bg-silver-50 dark:hover:bg-zinc-800 font-medium text-black dark:text-white">Sign In</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

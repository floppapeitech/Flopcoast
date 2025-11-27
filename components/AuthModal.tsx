
import React, { useState } from 'react';
import { User } from '../types';
import { X, Mail, Lock, User as UserIcon, AlertCircle } from 'lucide-react';

interface AuthModalProps {
  mode: 'LOGIN' | 'SIGNUP';
  onLogin?: (user: User) => void;
  onSignup?: (user: User) => void;
  onCancel: () => void;
  users?: User[]; // For checking credentials in mock DB
  onSwitchMode: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ mode, onLogin, onSignup, onCancel, users, onSwitchMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Admin Credentials (Hidden from UI, logic only)
  const ADMIN_EMAIL = 'admin@flopcoast.com';
  const ADMIN_PASS = "44thkf-f6hjnh6g;g';ybpjbo627dgwf19";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'LOGIN') {
      // 1. Check Admin Hardcoded
      if (formData.email === ADMIN_EMAIL && formData.password === ADMIN_PASS) {
        const adminUser = users?.find(u => u.email === ADMIN_EMAIL);
        if (adminUser && onLogin) {
            onLogin(adminUser);
            return;
        }
      } else if (formData.email === ADMIN_EMAIL && formData.password !== ADMIN_PASS) {
          setError("Invalid credentials."); // Obfuscate
          return;
      }

      // 2. Check Demo / Standard Users
      const foundUser = users?.find(u => u.email === formData.email);
      
      // Simple password check for Demo (mocking auth)
      if (foundUser) {
        if (formData.email === 'demo@flopcoast.com' && formData.password !== 'demo') {
            setError("Invalid credentials.");
            return;
        }
        if (onLogin) onLogin(foundUser);
      } else {
        setError("User not found.");
      }

    } else {
      // SIGNUP Logic
      if (!formData.name || !formData.email || !formData.password) {
        setError("All fields are required.");
        return;
      }
      
      const newUser: User = {
        id: `u-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        role: 'USER',
        awardsTier: 'Basic', // Updated to match new tier system
        awardsPoints: 0,
        upcomingFlights: [] // New users start with no flights
      };

      if (onSignup) onSignup(newUser);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-silver-200/50 dark:bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 max-w-md w-full shadow-2xl border border-silver-200 dark:border-zinc-800 relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button 
          onClick={onCancel}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-silver-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close"
        >
          <X size={20} className="text-silver-500" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold mb-2">
            {mode === 'LOGIN' ? 'Welcome Back' : 'Join Flopcoast'}
          </h2>
          <p className="text-silver-500">
            {mode === 'LOGIN' ? 'Enter your details to access your account.' : 'Start earning miles today.'}
          </p>
        </div>

        {/* Demo Credentials Hint - Shown only in Login */}
        {mode === 'LOGIN' && (
           <div className="mb-6 p-4 bg-silver-50 dark:bg-zinc-950/50 rounded-2xl border border-silver-200 dark:border-zinc-800 text-sm text-silver-500 text-center">
             <span className="font-bold block mb-1 text-silver-700 dark:text-silver-300">Try Demo Account:</span>
             Email: <code className="bg-silver-200 dark:bg-zinc-800 px-1 rounded text-silver-800 dark:text-silver-200">demo@flopcoast.com</code><br/>
             Password: <code className="bg-silver-200 dark:bg-zinc-800 px-1 rounded text-silver-800 dark:text-silver-200">demo</code>
           </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'SIGNUP' && (
            <div className="space-y-2">
              <label className="ml-3 text-xs font-bold uppercase tracking-wider text-silver-400">Full Name</label>
              <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-950 p-4 rounded-2xl border border-transparent focus-within:border-black dark:focus-within:border-white transition-colors">
                <UserIcon size={20} className="text-silver-400" />
                <input 
                  type="text" 
                  placeholder="Jane Doe" 
                  className="bg-transparent w-full outline-none font-medium placeholder-silver-400"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="ml-3 text-xs font-bold uppercase tracking-wider text-silver-400">Email Address</label>
            <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-950 p-4 rounded-2xl border border-transparent focus-within:border-black dark:focus-within:border-white transition-colors">
              <Mail size={20} className="text-silver-400" />
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="bg-transparent w-full outline-none font-medium placeholder-silver-400"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="ml-3 text-xs font-bold uppercase tracking-wider text-silver-400">Password</label>
            <div className="flex items-center gap-3 bg-silver-50 dark:bg-zinc-950 p-4 rounded-2xl border border-transparent focus-within:border-black dark:focus-within:border-white transition-colors">
              <Lock size={20} className="text-silver-400" />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="bg-transparent w-full outline-none font-medium placeholder-silver-400"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-sm px-2 animate-pulse">
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity shadow-xl mt-4">
            {mode === 'LOGIN' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-silver-500">
            {mode === 'LOGIN' ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button 
            onClick={onSwitchMode}
            className="ml-2 font-bold hover:underline decoration-2 underline-offset-4 decoration-silver-300"
          >
            {mode === 'LOGIN' ? 'Sign Up' : 'Sign In'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AuthModal;

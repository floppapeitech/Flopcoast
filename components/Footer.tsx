
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';
import Logo from './Logo';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate?: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-silver-50 dark:bg-zinc-950 pt-20 pb-10 px-6 md:px-12 border-t border-silver-200 dark:border-zinc-800 transition-colors duration-500">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <Logo className="text-black dark:text-white" />
            </div>
            <p className="text-silver-500 dark:text-silver-400 text-sm leading-relaxed max-w-xs">
              Redefining premium travel with accessibility at its core. Proudly Floptropican.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <FooterLink href="#" onClick={() => onNavigate?.('HOME')}>Destinations</FooterLink>
              <FooterLink href="#" onClick={() => onNavigate?.('REWARDS')}>Rewards Program</FooterLink>
              <FooterLink href="#">Travel Experience</FooterLink>
              <FooterLink href="#">Lounges</FooterLink>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="#" onClick={() => onNavigate?.('ABOUT')}>About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Investor Relations</FooterLink>
              <FooterLink href="#">Sustainability</FooterLink>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <FooterLink href="#" onClick={() => onNavigate?.('HELP')}>Help Center</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Baggage Information</FooterLink>
              <FooterLink href="#">Special Assistance</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-silver-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-silver-500 dark:text-silver-400 text-sm">
             <Globe size={16} />
             <span>English (US)</span>
          </div>
          <div className="flex gap-8 text-sm text-silver-500 dark:text-silver-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Accessibility</a>
          </div>
          <div className="text-sm text-silver-400 dark:text-zinc-600">
            © {new Date().getFullYear()} Flopcoast Airways. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-silver-200 dark:border-zinc-700 flex items-center justify-center text-silver-600 dark:text-silver-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
    {icon}
  </a>
);

const FooterLink: React.FC<{ children: React.ReactNode; href: string; onClick?: () => void }> = ({ children, href, onClick }) => (
  <li>
    <a 
      href={href} 
      onClick={(e) => { 
        if (onClick) { 
          e.preventDefault(); 
          onClick(); 
        } 
      }}
      className="text-silver-500 dark:text-silver-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;

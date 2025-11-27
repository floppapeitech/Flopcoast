
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Top Right Square - Dark Grey in Light Mode, White in Dark Mode */}
        <rect x="20" y="0" width="10" height="10" className="fill-silver-600 dark:fill-white" />
        
        {/* Middle Square - Dark Grey in Light Mode, Light Grey in Dark Mode */}
        <rect x="10" y="10" width="10" height="10" className="fill-silver-600 dark:fill-silver-300" />
        
        {/* Bottom Left Square - Black in Light Mode, Light Grey in Dark Mode */}
        <rect x="0" y="20" width="10" height="10" className="fill-black dark:fill-silver-300" />
      </svg>
      <span className="font-display font-bold text-lg md:text-xl tracking-tight">
        Flopcoast
      </span>
    </div>
  );
};

export default Logo;

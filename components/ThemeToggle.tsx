import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 ${className}`}
    >
      <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform text-[20px] dark:text-yellow-400">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;

import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
  title: string;
  showBack?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title, showBack = true }) => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-white dark:bg-background-dark overflow-x-hidden transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
        <div className="flex items-center gap-3">
          {showBack && (
            <button 
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-text-main dark:text-white transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
          <h1 className="text-lg font-bold text-text-main dark:text-white truncate max-w-[200px]">{title}</h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar animate-fade-in-up">
        {children}
      </main>
    </div>
  );
};

export default Layout;

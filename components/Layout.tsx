
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  showBack?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ title, children, showBack = true }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-full relative overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between">
        {showBack ? (
          <button 
            onClick={() => navigate(-1)}
            className="text-text-main dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-90"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        ) : <div className="size-12" />}
        
        <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          {title}
        </h2>
        <div className="size-12" />
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar animate-fade-in-up">
        {children}
      </main>
    </div>
  );
};

export default Layout;

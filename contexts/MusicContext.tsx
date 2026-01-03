import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => setIsPlaying(prev => !prev);
  const playMusic = () => setIsPlaying(true);
  const pauseMusic = () => setIsPlaying(false);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, playMusic, pauseMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

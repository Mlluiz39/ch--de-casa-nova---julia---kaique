
import React from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import RSVP from './pages/RSVP';
import GiftList from './pages/GiftList';
import Contact from './pages/Contact';

const AppContent: React.FC = () => {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl transition-all duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/gifts" element={<GiftList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

import { MusicProvider } from './contexts/MusicContext';
import { ThemeProvider } from './contexts/ThemeContext';
import BackgroundMusic from './components/BackgroundMusic';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MusicProvider>
        <HashRouter>
          <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 dark:bg-black/90 p-0 sm:p-4 transition-colors duration-300">
            <BackgroundMusic />
            <AppContent />
          </div>
        </HashRouter>
      </MusicProvider>
    </ThemeProvider>
  );
};

export default App;

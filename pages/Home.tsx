
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-pattern overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50vh] h-[50vh] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[60vh] h-[60vh] rounded-full bg-gradient-to-tl from-secondary/5 to-transparent blur-3xl opacity-60"></div>
      </div>

      {/* Header: Music Toggle */}
      <div className="relative z-10 flex justify-end pt-8 px-6 pb-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <button aria-label="Toggle Music" className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 active:scale-95">
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform text-[20px]">
            music_note
          </span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-background-dark animate-pulse"></span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-20 h-20 mb-8 rounded-full bg-secondary/5 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="material-symbols-outlined text-secondary text-4xl opacity-80">
            home
          </span>
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-secondary/60 dark:text-white/60 font-semibold mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          21 de Março • 13h
        </p>

        <h1 className="text-secondary dark:text-white font-serif text-[42px] leading-[1.1] text-center mb-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <span className="block">Chá de</span>
          <span className="block text-primary italic">Casa Nova</span>
        </h1>

        <div className="w-12 h-1 bg-secondary/20 rounded-full my-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}></div>

        <h2 className="text-2xl text-secondary dark:text-gray-200 font-medium tracking-tight text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          Julia <span className="text-primary mx-1">&amp;</span> Kaique
        </h2>

        <p className="mt-4 text-center text-secondary/70 dark:text-gray-400 text-sm max-w-[260px] leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Venha celebrar conosco este novo capítulo de nossas vidas em nosso novo lar.
        </p>

        {/* Hero Image */}
        <div className="mt-8 mb-4 w-full h-48 rounded-xl overflow-hidden relative shadow-lg animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <img 
            alt="Cozy modern living room interior" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
            src={IMAGES.HOME_HERO}
          />
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="relative z-10 px-6 pb-10 pt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <button 
          onClick={() => navigate('/details')}
          className="relative w-full group overflow-hidden rounded-full bg-primary p-[1px] shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98]"
        >
          <div className="relative flex h-14 w-full items-center justify-center rounded-full bg-primary group-hover:bg-primary-dark transition-colors duration-300">
            <span className="mr-2 text-base font-bold tracking-wide text-white uppercase">Ver Convite</span>
            <span className="material-symbols-outlined text-white transition-transform duration-300 group-hover:translate-x-1" style={{ fontSize: '20px' }}>
              arrow_forward
            </span>
          </div>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
        </button>
        <p className="text-center text-xs text-secondary/40 dark:text-white/30 mt-4 font-medium uppercase tracking-widest">
          Toque para abrir
        </p>
      </div>
    </div>
  );
};

export default Home;

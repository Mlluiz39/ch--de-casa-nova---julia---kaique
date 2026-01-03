
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { IMAGES, EVENT_DATE } from '../constants';
import { useCountdown } from '../hooks/useCountdown';

const Details: React.FC = () => {
  const navigate = useNavigate();
  const timeLeft = useCountdown(EVENT_DATE);

  return (
    <Layout title="Detalhes do Evento">
      <div className="px-4 py-3">
        {/* Header Hero Image */}
        <div className="relative flex flex-col justify-end overflow-hidden rounded-xl min-h-[450px] shadow-sm group">
          <img 
            src={IMAGES.DETAILS_HERO} 
            alt="Casal"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="relative flex flex-col p-6 z-10">
            <p className="text-white tracking-wide text-sm font-medium uppercase mb-1 opacity-90">Minha Casa</p>
            <h1 className="text-white tracking-tight text-4xl font-extrabold leading-tight">Julia &amp; Kaique</h1>
          </div>
        </div>
      </div>

      {/* Headline & Quote */}
      <div className="flex flex-col px-6 pt-6 pb-2 text-center">
        <h2 className="text-primary tracking-tight text-[32px] font-extrabold leading-tight pb-4">Chá de Casa Nova</h2>
        <p className="text-[#181111]/70 dark:text-white/70 text-lg font-medium leading-relaxed italic">
          "Um momento importante, enquanto nos preparamos para essa nova etapa."
        </p>
      </div>

      {/* Date & Time Card */}
      <div className="px-4 py-6">
        <div className="bg-background-light dark:bg-white/5 rounded-lg p-6 flex flex-col items-center justify-center border border-gray-100 dark:border-white/10">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span className="text-sm font-bold uppercase tracking-wider">Sábado</span>
          </div>
          <h3 className="text-[#181111] dark:text-white text-3xl font-extrabold leading-tight tracking-[-0.015em] text-center mb-1">
            21 de Março
          </h3>
          <p className="text-[#181111]/60 dark:text-white/60 text-lg font-medium">2026 • 13h</p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="flex gap-3 px-4 justify-center mb-8">
        <CountdownCircle value={timeLeft.days} label="Dias" isHighlight />
        <CountdownCircle value={timeLeft.hours} label="Horas" />
        <CountdownCircle value={timeLeft.minutes} label="Min" />
        <CountdownCircle value={timeLeft.seconds} label="Seg" />
      </div>

      {/* Navigation Buttons Row */}
      <div className="grid grid-cols-2 gap-4 px-4 mb-8">
        <button 
          onClick={() => navigate('/gifts')}
          className="flex flex-col items-center justify-center gap-2 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-primary">redeem</span>
          <span className="text-sm font-bold">Lista de Presentes</span>
        </button>
        <button 
          onClick={() => navigate('/contact')}
          className="flex flex-col items-center justify-center gap-2 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-secondary">chat</span>
          <span className="text-sm font-bold">Falar Conosco</span>
        </button>
      </div>

      {/* Location Section */}
      <div className="px-4 py-8 flex flex-col gap-6 bg-gray-50 dark:bg-black/20 rounded-t-3xl border-t border-gray-100 dark:border-white/5">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-primary text-[28px]">location_on</span>
          </div>
          <h3 className="text-[#181111] dark:text-white text-xl font-bold">Localização</h3>
          <p className="text-[#181111]/70 dark:text-white/70 text-base max-w-[80%] leading-snug">
            R. São Luís, 83 – Jardim São Francisco<br/>São Paulo – SP
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("R. São Luís, 83 – Jardim São Francisco, São Paulo – SP")}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-12 px-4 rounded-full border border-gray-200 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group"
          >
            <img alt="Google Maps" className="w-5 h-5 opacity-80" src={IMAGES.MAPS_ICON} />
            <span className="text-[#181111] dark:text-white font-bold text-sm">Google Maps</span>
          </a>
          <a 
            href={`https://waze.com/ul?q=${encodeURIComponent("R. São Luís, 83 – Jardim São Francisco, São Paulo – SP")}&navigate=yes`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-12 px-4 rounded-full border border-gray-200 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group"
          >
            <img alt="Waze" className="w-5 h-5 opacity-80" src={IMAGES.WAZE_ICON} />
            <span className="text-[#181111] dark:text-white font-bold text-sm">Waze</span>
          </a>
        </div>
      </div>

      {/* Sticky Footer RSVP Button */}
      <div className="sticky bottom-6 px-4 pb-4 w-full mt-auto z-40">
        <button 
          onClick={() => navigate('/rsvp')}
          className="w-full h-14 bg-primary text-white rounded-full font-bold text-lg shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">check_circle</span>
          Confirmar Presença
        </button>
      </div>
    </Layout>
  );
};

const CountdownCircle: React.FC<{ value: number; label: string; isHighlight?: boolean }> = ({ value, label, isHighlight }) => (
  <div className="flex flex-col items-center gap-2 w-1/4">
    <div className={`flex aspect-square w-full items-center justify-center rounded-full border ${
      isHighlight 
        ? 'bg-primary/10 border-primary/20 text-primary' 
        : 'bg-background-light dark:bg-white/5 border-transparent text-text-main dark:text-white'
    }`}>
      <p className={`text-2xl font-extrabold leading-tight`}>{value.toString().padStart(2, '0')}</p>
    </div>
    <p className="text-[#181111]/60 dark:text-white/60 text-[10px] font-bold uppercase tracking-wider">{label}</p>
  </div>
);

export default Details;

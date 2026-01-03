
import React from 'react';
import Layout from '../components/Layout';
import { IMAGES } from '../constants';

const GiftList: React.FC = () => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://happygiftlist.com/pt/lista-de-desejos/wlcpjlnw');
    alert('Link copiado!');
  };

  return (
    <Layout title="Lista de Presentes">
      <div className="flex-1 flex flex-col items-center">
        {/* Hero Image */}
        <div className="w-full px-4 py-4">
          <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-2xl min-h-[260px] shadow-sm relative" style={{ 
            backgroundImage: `url("${IMAGES.GIFT_LIST_HERO}")` 
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* Headline Section */}
        <div className="w-full px-6 pt-2 text-center">
          <h2 className="text-[#181111] dark:text-white tracking-tight text-[32px] font-extrabold leading-tight pb-1">Julia e Kaique</h2>
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Casa Nova</p>
        </div>

        {/* Body Text */}
        <div className="w-full px-6 pb-6 text-center">
          <p className="text-[#181111]/70 dark:text-gray-300 text-base font-medium leading-relaxed max-w-[320px] mx-auto">
            A sua presença é o nosso maior presente! Mas, se quiser nos mimar com algo para o nosso novo lar, criamos uma lista de desejos online.
          </p>
        </div>

        {/* Actions */}
        <div className="w-full px-4 py-2 flex flex-col gap-3 max-w-[360px] mx-auto">
          <a 
            href="https://happygiftlist.com/pt/lista-de-desejos/wlcpjlnw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary hover:bg-primary-dark transition-all text-white gap-3 shadow-lg shadow-primary/20 active:scale-95"
          >
            <span className="material-symbols-outlined text-[24px]">redeem</span>
            <span className="text-base font-bold leading-normal tracking-wide">Ver Lista de Presentes</span>
          </a>
          <button 
            onClick={handleCopyLink}
            className="flex w-full items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-transparent text-[#181111] dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors gap-2 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">content_copy</span>
            <span className="text-sm font-bold leading-normal">Copiar Link</span>
          </button>
        </div>

        {/* Spacer */}
        <div className="h-10"></div>
      </div>
    </Layout>
  );
};

export default GiftList;


import React from 'react';
import Layout from '../components/Layout';
import { IMAGES } from '../constants';

const Contact: React.FC = () => {
  return (
    <Layout title="Contato">
      <div className="flex-1 flex flex-col pb-8">
        {/* Hero Image Section */}
        <div className="w-full px-4 pt-2">
          <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <img 
                src={IMAGES.CONTACT_HERO} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                alt="Living room" 
            />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-wider uppercase bg-secondary/90 backdrop-blur-sm rounded-full">Julia e Kaique</span>
              <h3 className="text-2xl font-bold leading-tight">Minha Casa</h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-6 pt-8 pb-4 flex flex-col items-center text-center">
          <div className="size-16 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
            <span className="material-symbols-outlined text-[32px]">mark_email_unread</span>
          </div>
          <h1 className="text-[#181111] dark:text-white tracking-tight text-[32px] font-extrabold leading-tight mb-4">
            Fale Conosco
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base font-medium leading-relaxed max-w-[300px]">
            Estamos muito felizes em celebrar este momento com você. Clique no botão abaixo para tirar dúvidas ou avisar algo.
          </p>
        </div>

        {/* Decorative Separator */}
        <div className="flex items-center justify-center gap-4 py-6 opacity-40">
          <div className="h-px w-12 bg-primary/30 dark:bg-white/20"></div>
          <span className="material-symbols-outlined text-primary/50 text-[18px]">local_florist</span>
          <div className="h-px w-12 bg-primary/30 dark:bg-white/20"></div>
        </div>

        {/* WhatsApp Button */}
        <div className="flex flex-col gap-4 px-6 w-full items-center">
          <a 
            href="https://wa.me/5511966721431" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-[320px] group relative flex items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            <span className="mr-2 text-[24px] material-symbols-outlined">chat</span>
            <span className="text-lg font-bold tracking-wide relative z-10">Conversar no WhatsApp</span>
          </a>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 font-bold uppercase tracking-[0.2em]">
            Responderemos em breve
          </p>
        </div>

        {/* Location Mini Card */}
        <div className="mt-8 mx-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm flex items-start gap-4">
          <div className="size-10 rounded-full bg-primary/10 flex shrink-0 items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">location_on</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-[#181111] dark:text-white mb-1">Localização</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">Rua São Luis, 77 - Jardim São Francisco<br/>São Paulo, SP</p>
          </div>
          <button 
            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua São Luis, 77 - Jardim São Francisco, São Paulo, SP")}`, '_blank')}
            className="text-secondary hover:text-secondary/80 font-bold text-sm self-center active:scale-95 transition-colors"
          >
            Ver mapa
          </button>
        </div>
      </div>
      
      {/* Footer Decoration */}
      <div className="mt-auto h-12 w-full bg-gradient-to-t from-white/20 to-transparent"></div>
    </Layout>
  );
};

export default Contact;

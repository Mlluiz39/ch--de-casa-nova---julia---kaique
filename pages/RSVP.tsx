
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { IMAGES } from '../constants';

const RSVP: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalConfirmed, setTotalConfirmed] = useState<number | null>(null);

  // PLACEHOLDER URL - User needs to replace this with their deployed Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9d6mkDB1UowBON5zD4DX7wGimJEI5DV4r2vYu2eR5m6dI-5kkZc9stPmDDsoAFdCUSA/exec';

  React.useEffect(() => {
    const fetchGuestCount = async () => {
      try {
        // If placeholder, simulate a random number for demo purposes
        if (GOOGLE_SCRIPT_URL.includes('placeholder')) {
           // Simulate network delay
           await new Promise(resolve => setTimeout(resolve, 1000));
           // Start with 42 (from design) and add some random mock increments
           setTotalConfirmed(42 + Math.floor(Math.random() * 5));
           return;
        }

        const response = await fetch(GOOGLE_SCRIPT_URL);
        const data = await response.json();
        if (data && typeof data.count === 'number') {
          setTotalConfirmed(data.count);
        }
      } catch (error) {
        console.error('Error fetching guest count:', error);
        // Fallback or just keep loading state if preferred
        setTotalConfirmed(42); 
      }
    };

    fetchGuestCount();
  }, []);

  const handleAddGuest = () => {
    setGuests([...guests, '']);
  };

  const handleRemoveGuest = (index: number) => {
    const newGuests = [...guests];
    newGuests.splice(index, 1);
    setGuests(newGuests);
  };

  const handleGuestNameChange = (index: number, value: string) => {
    const newGuests = [...guests];
    newGuests[index] = value;
    setGuests(newGuests);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name,
      phone,
      guests: guests.filter(g => g.trim() !== '').join(', '),
      total_guests: 1 + guests.filter(g => g.trim() !== '').length,
      notes,
      date: new Date().toISOString()
    };

    try {
      // For now, we simulate success if the URL is placeholder, but attempt the fetch
      // effectively documenting how it should work.
      if (GOOGLE_SCRIPT_URL.includes('placeholder')) {
        console.log('Mock Submission:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
      }

      setIsSubmitted(true);
      setTimeout(() => {
          navigate('/details');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Houve um erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
      return (
          <div className="flex flex-col h-screen w-full items-center justify-center p-6 bg-white dark:bg-background-dark text-center">
              <div className="w-48 h-64 rounded-xl overflow-hidden shadow-lg mb-6 border-4 border-white dark:border-white/10 rotate-[-3deg]">
                <img src={IMAGES.RSVP_SUCCESS} alt="Sucesso" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl font-extrabold mb-2 text-[#181111] dark:text-white">Tudo certo!</h2>
              <p className="text-text-muted dark:text-gray-400">Presença confirmada com sucesso.<br/>Mal podemos esperar para te ver!</p>
          </div>
      );
  }

  return (
    <Layout title="Confirmar Presença">
      {/* Header Image */}
      <div className="px-4 py-3">
        <div className="relative flex flex-col justify-end overflow-hidden rounded-xl min-h-[450px] shadow-sm group">
          <img 
            src={IMAGES.RSVP_HERO} 
            alt="Casal"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 z-20">
            <p className="text-white text-[10px] font-bold uppercase tracking-wider">21 Mar • 13h</p>
          </div>
          
          <div className="relative flex flex-col p-6 z-10">
            <p className="text-white/90 text-sm font-medium mb-1">Minha Casa</p>
            <h1 className="text-white tracking-tight text-[28px] font-bold leading-tight">Julia &amp; Kaique</h1>
          </div>
        </div>
      </div>

      <div className="px-6 py-2">
        <p className="text-text-muted dark:text-gray-300 text-base font-normal leading-relaxed text-center">
          Mal podemos esperar para celebrar essa nova fase com você! Por favor, confirme sua presença abaixo.
        </p>
      </div>

      {/* Confirmed Guests Widget */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl p-5 bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm">
          <div className="flex flex-col gap-1">
            <p className="text-text-muted dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest">Amigos Confirmados</p>
            <div className="flex items-baseline gap-2">
              <p className="text-text-main dark:text-white text-4xl font-bold leading-tight">
                {totalConfirmed === null ? (
                   <span className="animate-pulse opacity-50">...</span>
                ) : (
                  totalConfirmed
                )}
              </p>
              <p className="text-success text-[10px] font-bold bg-success/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +3 hoje
              </p>
            </div>
          </div>
          <div className="flex -space-x-3">
            {IMAGES.AVATARS.map((src, i) => (
              <img key={i} src={src} className="w-10 h-10 border-2 border-white dark:border-surface-dark rounded-full object-cover" alt="Guest" />
            ))}
            <div className="flex items-center justify-center w-10 h-10 text-xs font-bold text-white bg-primary border-2 border-white dark:border-surface-dark rounded-full">
              +{totalConfirmed ? Math.max(0, totalConfirmed - 3) : 39}
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-4 pb-32">
        <div className="flex flex-col gap-2">
          <label className="text-text-main dark:text-white text-sm font-bold ml-2" htmlFor="name">Seu Nome Completo</label>
          <div className="relative">
            <input 
              id="name" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-14 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-6 text-text-main dark:text-white placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all shadow-sm" 
              placeholder="Ex: Ana Souza" 
              type="text" 
            />
            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">person</span>
          </div>
        </div>

        {/* Dynamic Guests Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between ml-2">
             <label className="text-text-main dark:text-white text-sm font-bold">Quem vai com você?</label>
             <button 
                type="button" 
                onClick={handleAddGuest}
                className="text-primary text-xs font-bold uppercase tracking-wider hover:text-primary-dark transition-colors flex items-center gap-1"
             >
               <span className="material-symbols-outlined text-[16px]">add</span>
               Adicionar
             </button>
          </div>
          
          {guests.length === 0 && (
             <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-dashed border-gray-200 dark:border-white/10 text-center">
               <p className="text-sm text-text-muted/70 dark:text-gray-500">Nenhum acompanhante adicionado.</p>
             </div>
          )}

          {guests.map((guest, index) => (
            <div key={index} className="flex gap-2 animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
                <div className="relative flex-1">
                    <input 
                    required
                    value={guest}
                    onChange={(e) => handleGuestNameChange(index, e.target.value)}
                    className="w-full h-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-6 text-text-main dark:text-white placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all shadow-sm" 
                    placeholder={`Nome do acompanhante ${index + 1}`}
                    type="text" 
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted/50 text-[18px]">group</span>
                </div>
                <button 
                    type="button"
                    onClick={() => handleRemoveGuest(index)}
                    className="size-12 shrink-0 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                    aria-label="Remover acompanhante"
                >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-main dark:text-white text-sm font-bold ml-2" htmlFor="phone">Telefone (WhatsApp)</label>
          <div className="relative">
            <input 
              id="phone" 
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-14 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-6 text-text-main dark:text-white placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all shadow-sm" 
              placeholder="(11) 99999-9999" 
              type="tel" 
            />
            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">call</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-main dark:text-white text-sm font-bold ml-2" htmlFor="notes">Observações <span className="font-normal text-xs opacity-50">(Opcional)</span></label>
          <textarea 
            id="notes" 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-32 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark p-5 text-text-main dark:text-white placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all shadow-sm resize-none" 
            placeholder="Alguma restrição alimentar ou recado para nós?"
          />
        </div>

        {/* Fixed Bottom Submit */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-10 z-50">
          <div className="w-full max-w-md mx-auto">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-primary hover:bg-primary-dark active:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
            >
              {isSubmitting ? (
                  <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  Confirmar Presença
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default RSVP;

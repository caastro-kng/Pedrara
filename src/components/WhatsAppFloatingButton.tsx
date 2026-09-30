import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!SALON_INFO.whatsappUrl) return null;

  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3">
      {showTooltip && (
        <div className="bg-[#1A1A1D] text-[#FAF8F5] text-xs py-2 px-3.5 shadow-xl border border-white/10 hidden sm:flex items-center gap-2 animate-fadeIn font-sans">
          <span>Concierge PEDRARA disponível via WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={SALON_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-12 h-12 bg-[#1A1A1D] text-[#C5A880] border border-[#C5A880]/60 shadow-xl flex items-center justify-center hover:bg-[#C5A880] hover:text-[#1A1A1D] transition-all duration-300 group"
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};

import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { FadeIn } from './FadeIn';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#1A1A1D] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative architectural hairlines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-white via-white/40 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A880]/30 text-[#DFCCA6] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Atendimento com Hora Marcada</span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-[1.15] [text-wrap:balance]">
            Seu próximo momento começa aqui.
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.25}>
          <p className="text-base sm:text-lg text-[#FAF8F5]/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Escolha seu serviço e deixe o restante com a PEDRARA. Uma equipe pronta para receber você com excelência técnica e conforto absoluto.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn direction="up" delay={0.35}>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-9 py-4 bg-[#C5A880] text-[#1A1A1D] text-xs font-sans uppercase tracking-[0.16em] font-medium hover:bg-[#DFCCA6] transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl"
            >
              <span>Agendar horário</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-[#FAF8F5] text-xs font-sans uppercase tracking-[0.16em] font-medium hover:border-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A880]" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.45}>
          <div className="pt-8 text-xs text-[#7E7E88] font-sans">
            <span>{SALON_INFO.address.full}</span>
            <span className="mx-2">·</span>
            <span>{SALON_INFO.phoneDisplay}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

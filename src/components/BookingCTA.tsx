import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { FadeIn } from './FadeIn';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => (
  <section className="py-16 sm:py-20 bg-[#1A1A1D] text-[#FAF8F5] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-1/3 w-px h-full bg-white/40" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-white/40" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <FadeIn direction="up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFCCA6]">Agendamento</span>
            <h2 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-[1.05]">
              Seu próximo momento começa aqui.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#FAF8F5]/70 max-w-xl font-light">
              Escolha o serviço de interesse e fale com a PEDRARA para confirmar os detalhes do atendimento.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={onOpenBooking}
              className="w-full px-7 py-3.5 bg-[#C5A880] text-[#1A1A1D] text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-[#DFCCA6] transition-colors flex items-center justify-center gap-2"
            >
              Agendar horário <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-7 py-3.5 border border-white/20 text-[#FAF8F5] text-[11px] uppercase tracking-[0.16em] font-medium hover:border-white transition-colors flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#C5A880]" />
              Falar no Instagram
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
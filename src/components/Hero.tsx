import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps { onOpenBooking: () => void; }

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => (
  <section id="hero" className="relative min-h-[88vh] sm:min-h-[94vh] flex items-end overflow-hidden pt-28 pb-14 sm:pb-20 bg-[#262421]">
    <div className="absolute inset-0">
      <ImageWithFallback
        src=""
        alt=""
        className="w-full h-full object-cover"
        containerClassName="w-full h-full border-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D]/88 via-[#1A1A1D]/54 to-[#1A1A1D]/24" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#C5A880]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#DFCCA6] font-medium">
            PEDRARA Salon
          </span>
        </div>

        <h1 className="text-[clamp(3.2rem,8vw,7.2rem)] font-serif font-light text-[#FAF8F5] leading-[0.95] tracking-[-0.035em]">
          Beleza em movimento.
          <br />
          <span className="italic font-normal">Precisão em cada detalhe.</span>
        </h1>

        <p className="mt-7 max-w-xl text-sm sm:text-lg text-[#FAF8F5]/78 font-light leading-relaxed">
          {SALON_INFO.subheadline}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={onOpenBooking}
            className="px-7 py-4 bg-[#FAF8F5] text-[#1A1A1D] text-[11px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-3 hover:bg-[#C5A880] transition-colors"
          >
            Agendar horário <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#manifesto"
            className="px-7 py-4 border border-white/30 text-white text-[11px] uppercase tracking-[0.16em] text-center hover:border-white transition-colors"
          >
            Conhecer a PEDRARA
          </a>
        </div>

        <div className="mt-12 sm:mt-16 pt-5 border-t border-white/15 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/50">
          <span>Mulheres · Homens · Crianças</span>
          <span className="hidden sm:inline">Fotografia real em breve</span>
        </div>
      </div>
    </div>
  </section>
);
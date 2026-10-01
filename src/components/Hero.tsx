import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps { onOpenBooking: () => void; }

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => (
  <section id="hero" className="relative min-h-[78vh] sm:min-h-[84vh] flex items-end overflow-hidden pt-24 pb-12 sm:pb-16 bg-[#262421]">
    <div className="absolute inset-0">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2200&q=90"
        alt="Interior de salão de beleza contemporâneo"
        className="w-full h-full object-cover object-center scale-[1.02] hover:scale-[1.05] transition-transform duration-[1400ms]"
        containerClassName="w-full h-full border-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D]/88 via-[#1A1A1D]/48 to-[#1A1A1D]/18" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#C5A880]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#DFCCA6] font-medium">
            PEDRARA Salon
          </span>
        </div>

        <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-serif font-light text-[#FAF8F5] leading-[0.96] tracking-[-0.035em]">
          Beleza em movimento.
          <br />
          <span className="italic font-normal">Precisão em cada detalhe.</span>
        </h1>

        <p className="mt-6 max-w-xl text-sm sm:text-lg text-[#FAF8F5]/80 font-light leading-relaxed">
          {SALON_INFO.subheadline}
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 bg-[#FAF8F5] text-[#1A1A1D] text-[11px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-3 hover:bg-[#C5A880] transition-colors"
          >
            Agendar horário <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#servicos"
            className="px-7 py-3.5 border border-white/30 text-white text-[11px] uppercase tracking-[0.16em] text-center hover:border-white hover:bg-white/5 transition-colors"
          >
            Ver serviços
          </a>
        </div>
      </div>
    </div>
  </section>
);
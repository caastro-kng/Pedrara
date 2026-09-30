import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-start overflow-hidden pb-16 pt-32 sm:pb-24">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=88"
          alt="Experiência PEDRARA Salon"
          fallbackTitle="PEDRARA Salon Interior"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          containerClassName="w-full h-full"
        />
        {/* Measured Scrim for Media Overlays (4.5:1 contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D]/90 via-[#1A1A1D]/55 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Subtle Tagline / Sub-lead */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#DFCCA6] font-sans font-medium">
              PEDRARA Salon · São Paulo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#FAF8F5] leading-[1.08] tracking-tight [text-wrap:balance]">
            Beleza em movimento.<br />
            <span className="italic font-normal text-[#FAF8F5]/95">
              Precisão em cada detalhe.
            </span>
          </h1>

          {/* Secondary Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#FAF8F5]/85 font-sans font-light max-w-2xl leading-relaxed [text-wrap:balance]">
            {SALON_INFO.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#FAF8F5] text-[#1A1A1D] text-xs font-sans uppercase tracking-[0.16em] font-medium hover:bg-[#C5A880] hover:text-[#1A1A1D] transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg"
            >
              <span>Agendar horário</span>
              <ArrowRight className="w-4 h-4 text-[#1A1A1D] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#manifesto"
              className="px-8 py-4 bg-transparent text-[#FAF8F5] border border-[#FAF8F5]/30 text-xs font-sans uppercase tracking-[0.16em] font-medium hover:border-[#FAF8F5] hover:bg-white/5 transition-all duration-300 text-center"
            >
              Conhecer o salão
            </a>
          </div>
        </div>

        {/* Scroll Micro-Animation Indicator */}
        <div className="mt-14 sm:mt-20 flex items-center justify-between border-t border-white/15 pt-6 text-white/60 text-xs font-sans">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#DFCCA6]">
              Mulheres · Homens · Crianças
            </span>
          </div>

          <a
            href="#manifesto"
            className="flex items-center gap-2 group hover:text-white transition-colors"
            aria-label="Rolar para a próxima seção"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] hidden sm:inline-block">
              Deslize para explorar
            </span>
            <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1">
              <span className="w-1 h-2 bg-[#C5A880] rounded-full animate-bounce mt-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

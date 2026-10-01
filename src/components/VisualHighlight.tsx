import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

export const VisualHighlight: React.FC = () => (
  <section className="relative w-full h-[46vh] sm:h-[52vh] min-h-[360px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=2200&q=90"
        alt="Cabelo com movimento e acabamento editorial"
        className="w-full h-full object-cover object-center hover:scale-[1.04] transition-transform duration-[1200ms]"
        containerClassName="w-full h-full border-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D]/78 via-[#1A1A1D]/42 to-[#1A1A1D]/55" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <FadeIn direction="up">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#DFCCA6]">Fluxo Lapidado</span>
        <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-serif text-[#FAF8F5] font-light leading-[1.05]">
          Precisão que estrutura.<br />
          <span className="italic">Movimento que revela.</span>
        </h2>
      </FadeIn>
    </div>
  </section>
);
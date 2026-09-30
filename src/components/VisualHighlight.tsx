import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

export const VisualHighlight: React.FC = () => {
  return (
    <section className="relative w-full h-[65vh] sm:h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src=""
          alt="Conceito PEDRARA: Precisão e Movimento"
          fallbackTitle="Precisão e Movimento"
          className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          containerClassName="w-full h-full"
        />
        {/* Cinematic Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D]/80 via-[#1A1A1D]/45 to-[#1A1A1D]/75" />
      </div>

      {/* Superimposed Editorial Phrase */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <FadeIn direction="up">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#DFCCA6] font-sans font-medium">
              Manifesto Visual
            </span>
            <span className="w-8 h-[1px] bg-[#C5A880]" />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} distance={30}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#FAF8F5] font-light leading-[1.12] [text-wrap:balance]">
            Precisão que estrutura.<br />
            <span className="italic font-normal text-[#FAF8F5]/90">
              Movimento que revela.
            </span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.35}>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#FAF8F5]/70 font-sans max-w-md mx-auto pt-2">
            O conceito estético da PEDRARA Salon
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

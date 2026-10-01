import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

export const Manifesto: React.FC = () => (
  <section id="manifesto" className="py-16 sm:py-20 bg-[#FAF8F5] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <FadeIn direction="up">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">PEDRARA SALON</span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-serif text-[#1A1A1D] leading-[1.08] [text-wrap:balance]">
              Cada detalhe revela uma nova versão de você.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#52525A] font-light leading-relaxed max-w-xl">
              Técnica, cuidado e personalidade em uma experiência de beleza feita sob medida para diferentes estilos, idades e momentos.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-[#D8D5CF]/80 pt-5">
              <div>
                <span className="block text-lg sm:text-2xl font-serif text-[#1A1A1D]">Sob medida</span>
                <span className="text-[10px] text-[#7E7E88] uppercase tracking-wider">Atendimento</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-serif text-[#1A1A1D]">Completo</span>
                <span className="text-[10px] text-[#7E7E88] uppercase tracking-wider">Beleza</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-serif text-[#1A1A1D]">Para todos</span>
                <span className="text-[10px] text-[#7E7E88] uppercase tracking-wider">Públicos</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-6">
          <FadeIn direction="up" delay={0.15} distance={24}>
            <div className="aspect-[5/4] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1500&q=88"
                alt="Atendimento e cuidado em salão de beleza"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);
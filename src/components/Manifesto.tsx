import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Text Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
                  PEDRARA SALON
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#1A1A1D] leading-[1.12] [text-wrap:balance]">
                  Cada detalhe revela uma nova versão de você.
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="w-12 h-[1px] bg-[#C5A880]" />
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="space-y-4 text-base sm:text-lg text-[#52525A] font-sans font-light leading-relaxed">
                <p>
                  A PEDRARA une técnica, cuidado e personalidade para transformar cada atendimento em uma experiência feita sob medida.
                </p>
                <p>
                  Trabalhamos beleza de forma completa, respeitando estilo, identidade e individualidade. Do corte arquitetado à coloração que respeita a fibra capilar, nosso olhar se dedica a revelar o seu melhor ângulo sem artificialismos.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#D8D5CF]/70 pt-6">
                <div>
                  <span className="block text-2xl sm:text-3xl font-serif text-[#1A1A1D]">
                    Sob Medida
                  </span>
                  <span className="text-xs text-[#7E7E88] uppercase tracking-wider font-sans">
                    Diagnóstico e Visagismo
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-serif text-[#1A1A1D]">
                    Sem Rótulos
                  </span>
                  <span className="text-xs text-[#7E7E88] uppercase tracking-wider font-sans">
                    Mulheres, Homens & Kids
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-2xl sm:text-3xl font-serif text-[#1A1A1D]">
                    Saúde do Fio
                  </span>
                  <span className="text-xs text-[#7E7E88] uppercase tracking-wider font-sans">
                    Protocolos Biomiméticos
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Asymmetric Dual Editorial Image Composition */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="up" delay={0.25} distance={30}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Primary Larger Image */}
                <div className="w-4/5 aspect-[4/5] ml-auto overflow-hidden shadow-sm">
                  <ImageWithFallback
                    src=""
                    alt="Processo criativo e cuidado na PEDRARA Salon"
                    fallbackTitle="Técnica & Cuidados PEDRARA"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Secondary Overlapping Image */}
                <div className="absolute -bottom-8 sm:-bottom-12 left-0 w-3/5 aspect-[3/4] border-8 border-[#FAF8F5] shadow-xl overflow-hidden hidden sm:block">
                  <ImageWithFallback
                    src=""
                    alt="Detalhes arquitetônicos do salão PEDRARA"
                    fallbackTitle="Arquitetura & Conforto"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Refined Graphic Watermark Line */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#C5A880]/40 pointer-events-none" />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};


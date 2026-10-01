import React from 'react';
import { FadeIn } from './FadeIn';

export const ExperienceSection: React.FC = () => {
  const pillars = [
    ['01', 'Escuta', 'Entender o que você procura antes de qualquer transformação.'],
    ['02', 'Técnica', 'Execução cuidadosa, acabamento preciso e atenção aos detalhes.'],
    ['03', 'Personalidade', 'Resultados pensados para combinar com seu estilo e sua rotina.'],
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#D8D5CF]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">Experiência PEDRARA</span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-serif text-[#1A1A1D] leading-[1.08]">
                Mais que um atendimento. <span className="italic">Uma experiência.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm text-[#52525A] font-light leading-relaxed">
              Uma jornada simples: ouvir, executar com precisão e entregar um resultado que faça sentido para você.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(([num, title, description], idx) => (
            <FadeIn key={num} direction="up" delay={0.1 * (idx + 1)}>
              <article className="border-t border-[#D8D5CF] pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl text-[#C5A880]">{num}</span>
                  <h3 className="text-2xl font-serif text-[#1A1A1D]">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-[#52525A] font-light leading-relaxed">{description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
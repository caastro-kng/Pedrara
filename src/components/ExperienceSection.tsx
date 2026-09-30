import React from 'react';
import { FadeIn } from './FadeIn';

export const ExperienceSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Escuta',
      lead: 'Cada atendimento começa entendendo o que você procura.',
      description:
        'Não iniciamos nenhum procedimento sem antes sentar, ouvir sua rotina, suas preferências e analisar suas características faciais. A empatia é a base da nossa entrega.',
    },
    {
      num: '02',
      title: 'Técnica',
      lead: 'Profissionais preparados para executar com precisão.',
      description:
        'Formação contínua nas principais escolas globais de visagismo, química capilar e barbearia clássica. Ferramental esterilizado e produtos biomiméticos de padrão mundial.',
    },
    {
      num: '03',
      title: 'Personalidade',
      lead: 'Resultados pensados para combinar com você.',
      description:
        'Rejeitamos a padronização e os modismos efêmeros. Nosso compromisso é esculpir uma beleza atemporal, sustentável e que se mantenha impecável no seu dia a dia.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden border-b border-[#D8D5CF]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
              Experiência PEDRARA
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#1A1A1D] leading-[1.12] [text-wrap:balance]">
              Mais que um atendimento.<br />
              <span className="italic font-normal">Uma experiência.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#52525A] font-light max-w-xl">
              Desenhamos um ambiente acusticamente pensado para desacelerar o ritmo da cidade e proporcionar momentos de verdadeiro autocuidado.
            </p>
          </div>
        </FadeIn>

        {/* 3 Pillars Grid with Large Graphic Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((pillar, idx) => (
            <FadeIn key={pillar.num} direction="up" delay={0.15 * (idx + 1)}>
              <div
                className="relative pt-6 border-t border-[#D8D5CF] flex flex-col justify-between group hover:border-[#C5A880] transition-colors duration-500 h-full"
              >
                {/* Pillar Number */}
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#D8D5CF] group-hover:text-[#C5A880] transition-colors duration-500">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#7E7E88]">
                    Pilar Fundamental
                  </span>
                </div>

                {/* Title & Body */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1D]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1D] font-medium leading-snug">
                    {pillar.lead}
                  </p>
                  <p className="text-xs sm:text-sm text-[#52525A] font-light leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle hover accent line */}
                <div className="mt-8 pt-4 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#C5A880] group-hover:w-12 transition-all duration-300" />
                  <span className="text-[10px] uppercase tracking-wider text-[#7E7E88]">
                    Garantia PEDRARA
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

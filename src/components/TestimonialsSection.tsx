import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/salonData';
import { FadeIn } from './FadeIn';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-[#D8D5CF]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
              Relatos
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1D] [text-wrap:balance]">
              Experiências que ficam
            </h2>
            <p className="text-xs sm:text-sm text-[#7E7E88] font-light">
              Depoimentos de clientes que confiaram sua imagem e bem-estar ao nosso time.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {TESTIMONIALS_LIST.map((item, idx) => (
            <FadeIn key={item.id} direction="up" delay={0.15 * (idx + 1)} className="h-full">
              <div
                className="bg-white border border-[#D8D5CF]/70 p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#C5A880] transition-colors duration-300 shadow-sm h-full"
              >
                {/* Quote Mark */}
                <div className="mb-6 text-[#C5A880]/60">
                  <Quote className="w-8 h-8 rotate-180" />
                </div>

                {/* Quote Text */}
                <p className="font-serif text-lg sm:text-xl text-[#1A1A1D] leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>

                {/* Attribution */}
                <div className="pt-6 border-t border-[#EAE8E3] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-sans font-medium text-[#1A1A1D]">
                      {item.author}
                    </h4>
                    <p className="text-xs text-[#7E7E88] font-sans">
                      {item.service}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-sans">
                    {item.tag}
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

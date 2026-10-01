import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

interface TeamSectionProps {
  onSelectProfessionalToBook: (proId: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectProfessionalToBook }) => (
  <section id="equipe" className="py-16 sm:py-20 bg-[#FAF8F5]">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <FadeIn direction="up">
            <div className="aspect-[16/10] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1600&q=88"
                alt="Ambiente e equipe em salão de beleza"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5">
          <FadeIn direction="up" delay={0.12}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">Equipe PEDRARA</span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-serif text-[#1A1A1D] leading-[1.08]">
              Pessoas que cuidam de cada detalhe.
            </h2>
            <p className="mt-5 text-sm text-[#52525A] font-light leading-relaxed">
              Os perfis reais dos profissionais serão adicionados nesta área. No MVP, mantemos a apresentação mais direta e deixamos o foco na experiência do salão.
            </p>
            <button
              onClick={() => onSelectProfessionalToBook('any')}
              className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-medium border-b border-[#1A1A1D] pb-1 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
            >
              Agendar atendimento <ArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);
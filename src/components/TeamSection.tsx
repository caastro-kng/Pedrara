import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

interface TeamSectionProps {
  onSelectProfessionalToBook: (proId: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectProfessionalToBook }) => {
  return (
    <section id="equipe" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
                Especialistas
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1D] [text-wrap:balance]">
                Quem transforma cada detalhe
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#7E7E88] max-w-md font-light leading-relaxed">
              Nossa equipe reúne talentos com vivência internacional em corte, química de preservação capilar e estética integrativa.
            </p>
          </div>
        </FadeIn>

        {/* Team Grid (Desktop: 4 columns, Mobile: natural horizontal scroll) */}
        <div className="flex overflow-x-auto pb-6 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 scrollbar-none snap-x snap-mandatory">
          {TEAM_MEMBERS.map((member, index) => (
            <FadeIn key={member.id} direction="up" delay={0.12 * (index + 1)} className="min-w-[280px] sm:min-w-0 snap-start h-full">
              <div
                className="group relative flex flex-col justify-between bg-white border border-[#D8D5CF]/70 p-4 transition-all duration-500 hover:shadow-lg hover:border-[#C5A880] h-full"
              >
                {/* Vertical Portrait */}
                <div className="aspect-[3/4] overflow-hidden bg-[#EFECE6] relative mb-5">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    fallbackTitle={member.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Experience Tag */}
                  {member.experienceYears > 0 ? (
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 border border-[#D8D5CF]/50 text-[10px] uppercase tracking-wider text-[#1A1A1D]">
                      {member.experienceYears} anos exp.
                    </div>
                  ) : null}
                </div>

                {/* Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif text-[#1A1A1D] group-hover:text-[#C5A880] transition-colors">
                      {member.name}
                    </h3>
                    <button
                      onClick={() => onSelectProfessionalToBook(member.id)}
                      className="p-1 text-[#7E7E88] hover:text-[#1A1A1D] transition-colors"
                      title="Agendar atendimento"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs font-medium text-[#C5A880] tracking-wide">
                    {member.specialty}
                  </p>

                  <p className="text-[11px] text-[#7E7E88] line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-5 pt-3 border-t border-[#EAE8E3]">
                  <button
                    onClick={() => onSelectProfessionalToBook(member.id)}
                    className="w-full py-2 text-center text-[11px] uppercase tracking-[0.14em] font-medium text-[#52525A] group-hover:text-[#1A1A1D] group-hover:bg-[#F4F1EB] transition-colors"
                  >
                    Agendar atendimento
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

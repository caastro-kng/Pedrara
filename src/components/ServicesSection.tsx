import React, { useState } from 'react';
import { ArrowRight, Sparkles, ChevronRight, Clock } from 'lucide-react';
import { SERVICES_CATEGORIES, SERVICES_LIST } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

interface ServicesSectionProps {
  onOpenBookingWithService?: (serviceId: string) => void;
  onOpenAllServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookingWithService,
  onOpenAllServices,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SERVICES_CATEGORIES[0].id);

  const activeCategory = SERVICES_CATEGORIES.find((c) => c.id === activeCategoryId) || SERVICES_CATEGORIES[0];
  const categoryServices = SERVICES_LIST.filter((s) => s.category === activeCategory.id);

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
                Especialidades
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1D] [text-wrap:balance]">
                Serviços desenhados para valorizar sua autenticidade.
              </h2>
            </div>
            <button
              onClick={onOpenAllServices}
              className="self-start md:self-auto group flex items-center gap-3 text-xs uppercase tracking-[0.16em] font-sans font-medium text-[#1A1A1D] hover:text-[#C5A880] transition-colors pb-1 border-b border-[#1A1A1D] hover:border-[#C5A880]"
            >
              <span>Ver todos os serviços</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

        {/* Editorial Tab Selector */}
        <FadeIn direction="up" delay={0.15}>
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 scrollbar-none border-b border-[#D8D5CF]">
            {SERVICES_CATEGORIES.map((cat, index) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`py-3 px-4 text-xs sm:text-sm font-sans tracking-wide transition-all duration-300 relative whitespace-nowrap ${
                    isActive
                      ? 'text-[#1A1A1D] font-semibold'
                      : 'text-[#7E7E88] hover:text-[#1A1A1D]'
                  }`}
                >
                  <span className="text-[10px] text-[#C5A880] font-mono mr-2">
                    0{index + 1}
                  </span>
                  {cat.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880]" />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Dynamic Editorial Content Panel */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <FadeIn direction="up" delay={0.2}>
              <div className="aspect-[4/5] overflow-hidden bg-[#FAF8F5] border border-[#D8D5CF]/80 shadow-md">
                <ImageWithFallback
                  src={activeCategory.heroImage}
                  alt={activeCategory.title}
                  fallbackTitle={activeCategory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Minimalist Floating Accent */}
              <div className="absolute -bottom-4 -right-4 bg-[#FAF8F5] border border-[#D8D5CF] p-4 hidden sm:block max-w-[220px]">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block font-sans">
                  PEDRARA Standard
                </span>
                <p className="text-xs text-[#52525A] font-serif italic mt-1">
                  {activeCategory.subtitle}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Service Details & List (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn direction="up" delay={0.25}>
              <div className="space-y-3">
                <span className="text-xs text-[#7E7E88] uppercase tracking-[0.2em]">
                  {activeCategory.subtitle}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif text-[#1A1A1D]">
                  {activeCategory.title}
                </h3>
                <p className="text-sm sm:text-base text-[#52525A] font-light leading-relaxed max-w-xl">
                  {activeCategory.description}
                </p>
              </div>
            </FadeIn>

            {/* Curated Service Items in this category */}
            <FadeIn direction="up" delay={0.3}>
              <div className="divide-y divide-[#D8D5CF] border-t border-b border-[#D8D5CF]">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/item hover:bg-[#FAF8F5]/60 transition-colors px-2 -mx-2"
                  >
                    <div className="space-y-1 max-w-md">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-serif text-[#1A1A1D] group-hover/item:text-[#C5A880] transition-colors">
                          {service.name}
                        </h4>
                        <span className="text-[10px] text-[#7E7E88] font-sans uppercase">
                          · {service.audience}
                        </span>
                      </div>
                      <p className="text-xs text-[#52525A] leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 self-start sm:self-auto shrink-0">
                      <span className="text-xs text-[#7E7E88] flex items-center gap-1 font-sans">
                        <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                        {service.duration}
                      </span>
                      <button
                        onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                        className="px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-medium text-[#1A1A1D] border border-[#1A1A1D] hover:bg-[#1A1A1D] hover:text-[#FAF8F5] transition-colors"
                      >
                        Agendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#7E7E88] italic">
                  Atendimento para todos os públicos com agendamento prévio.
                </span>
                <button
                  onClick={onOpenAllServices}
                  className="text-xs uppercase tracking-[0.12em] text-[#C5A880] hover:text-[#1A1A1D] font-medium flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver cardápio completo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};


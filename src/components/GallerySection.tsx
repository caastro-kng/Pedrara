import React from 'react';
import { Instagram, Maximize2, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS, SALON_INFO } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
                Editorial de Trabalhos
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1D] [text-wrap:balance]">
                Galeria & Criações
              </h2>
            </div>

            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-sans font-medium text-[#1A1A1D] hover:text-[#C5A880] transition-colors pb-1 border-b border-[#1A1A1D] hover:border-[#C5A880]"
            >
              <Instagram className="w-4 h-4 text-[#C5A880]" />
              <span>Ver mais no Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeIn>

        {/* Asymmetrical Fashion Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Item 1 - Tall Portrait (cols 1-5) */}
          <div className="md:col-span-5">
            <FadeIn direction="up" delay={0.15}>
              <div
                onClick={() => onOpenLightbox(0)}
                className="aspect-[3/4] relative group overflow-hidden cursor-pointer bg-[#EFECE6] border border-[#D8D5CF]"
              >
                <ImageWithFallback
                  src={GALLERY_ITEMS[0].image}
                  alt={GALLERY_ITEMS[0].title}
                  fallbackTitle={GALLERY_ITEMS[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFCCA6]">
                    {GALLERY_ITEMS[0].category}
                  </span>
                  <h4 className="text-lg font-serif">{GALLERY_ITEMS[0].title}</h4>
                  <p className="text-xs text-white/80 line-clamp-1">{GALLERY_ITEMS[0].caption}</p>
                </div>
                <div className="absolute top-4 right-4 p-2 bg-black/40 text-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Items 2 & 3 (cols 6-12) */}
          <div className="md:col-span-7 flex flex-col gap-6 sm:gap-8">
            {/* Item 2 - Landscape */}
            <FadeIn direction="up" delay={0.2}>
              <div
                onClick={() => onOpenLightbox(1)}
                className="aspect-[16/10] relative group overflow-hidden cursor-pointer bg-[#EFECE6] border border-[#D8D5CF]"
              >
                <ImageWithFallback
                  src={GALLERY_ITEMS[1].image}
                  alt={GALLERY_ITEMS[1].title}
                  fallbackTitle={GALLERY_ITEMS[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFCCA6]">
                    {GALLERY_ITEMS[1].category}
                  </span>
                  <h4 className="text-lg font-serif">{GALLERY_ITEMS[1].title}</h4>
                  <p className="text-xs text-white/80 line-clamp-1">{GALLERY_ITEMS[1].caption}</p>
                </div>
                <div className="absolute top-4 right-4 p-2 bg-black/40 text-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </FadeIn>

            {/* Sub-grid of 2 items (Item 3 & 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <FadeIn direction="up" delay={0.25}>
                <div
                  onClick={() => onOpenLightbox(2)}
                  className="aspect-[4/5] relative group overflow-hidden cursor-pointer bg-[#EFECE6] border border-[#D8D5CF]"
                >
                  <ImageWithFallback
                    src={GALLERY_ITEMS[2].image}
                    alt={GALLERY_ITEMS[2].title}
                    fallbackTitle={GALLERY_ITEMS[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-[#DFCCA6]">
                      {GALLERY_ITEMS[2].category}
                    </span>
                    <h4 className="text-base font-serif">{GALLERY_ITEMS[2].title}</h4>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div
                  onClick={() => onOpenLightbox(3)}
                  className="aspect-[4/5] relative group overflow-hidden cursor-pointer bg-[#EFECE6] border border-[#D8D5CF]"
                >
                  <ImageWithFallback
                    src={GALLERY_ITEMS[3].image}
                    alt={GALLERY_ITEMS[3].title}
                    fallbackTitle={GALLERY_ITEMS[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-[#DFCCA6]">
                      {GALLERY_ITEMS[3].category}
                    </span>
                    <h4 className="text-base font-serif">{GALLERY_ITEMS[3].title}</h4>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Items 5 & 6 below */}
          <div className="md:col-span-6">
            <FadeIn direction="up" delay={0.35}>
              <div
                onClick={() => onOpenLightbox(4)}
                className="aspect-[16/10] relative group overflow-hidden cursor-pointer bg-[#EFECE6] border border-[#D8D5CF]"
              >
                <ImageWithFallback
                  src={GALLERY_ITEMS[4].image}
                  alt={GALLERY_ITEMS[4].title}
                  fallbackTitle={GALLERY_ITEMS[4].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFCCA6]">
                    {GALLERY_ITEMS[4].category}
                  </span>
                  <h4 className="text-lg font-serif">{GALLERY_ITEMS[4].title}</h4>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-6">
            <FadeIn direction="up" delay={0.4}>
              <div
                onClick={() => onOpenLightbox(5)}
                className="aspect-[16/10] relative group overflow-hidden cursor-pointer bg-[#EFECE6] border border-[#D8D5CF]"
              >
                <ImageWithFallback
                  src={GALLERY_ITEMS[5].image}
                  alt={GALLERY_ITEMS[5].title}
                  fallbackTitle={GALLERY_ITEMS[5].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFCCA6]">
                    {GALLERY_ITEMS[5].category}
                  </span>
                  <h4 className="text-lg font-serif">{GALLERY_ITEMS[5].title}</h4>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Note */}
        <FadeIn direction="up" delay={0.45}>
          <div className="mt-12 text-center">
            <p className="text-xs text-[#7E7E88]">
              Todos os cortes e procedimentos são realizados sob consulta prévia e teste de mecha quando aplicável.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

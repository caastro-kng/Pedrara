import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS, SALON_INFO } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const items = GALLERY_ITEMS.slice(0, 4);

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-9">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">Galeria</span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-serif text-[#1A1A1D]">Resultados & inspiração</h2>
            </div>
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-medium border-b border-[#1A1A1D] pb-1 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors self-start"
            >
              <Instagram className="w-4 h-4" />
              Ver Instagram
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {items.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={0.08 * (index + 1)}>
              <button
                type="button"
                onClick={() => onOpenLightbox(index)}
                className="group w-full text-left"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#EDE8DF]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pt-3">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#C5A880]">{item.category}</span>
                  <h3 className="text-base sm:text-lg font-serif text-[#1A1A1D] mt-0.5">{item.title}</h3>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
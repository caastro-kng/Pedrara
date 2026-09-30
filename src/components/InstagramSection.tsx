import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, SALON_INFO } from '../data/salonData';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#D8D5CF]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium block">
                Comunidade & Bastidores
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1D]">
                {SALON_INFO.instagramHandle}
              </h3>
            </div>

            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1A1A1D] text-xs font-sans uppercase tracking-[0.14em] font-medium text-[#1A1A1D] hover:bg-[#1A1A1D] hover:text-[#FAF8F5] transition-colors self-start sm:self-auto"
            >
              <Instagram className="w-4 h-4 text-[#C5A880]" />
              <span>Seguir no Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>

        {/* 4-Item Preview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <FadeIn key={post.id} direction="up" delay={0.1 * (idx + 1)}>
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square relative group overflow-hidden bg-[#EFECE6] border border-[#D8D5CF]/50 block"
              >
                <ImageWithFallback
                  src={post.image}
                  alt={post.caption}
                  fallbackTitle="Instagram Post"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <p className="text-[11px] line-clamp-2 leading-snug">{post.caption}</p>
                  {post.likes ? (
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#DFCCA6]">
                      <Instagram className="w-3 h-3" />
                      <span>{post.likes} curtidas</span>
                    </div>
                  ) : null}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

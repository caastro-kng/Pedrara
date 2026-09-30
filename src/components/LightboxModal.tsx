import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { SALON_INFO } from '../data/salonData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-20"
        aria-label="Fechar galeria"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors z-20 hidden sm:block"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors z-20 hidden sm:block"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Main Image Frame */}
      <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
        <div className="max-h-[72vh] overflow-hidden rounded-none shadow-2xl border border-white/10">
          <ImageWithFallback
            src={current.image}
            alt={current.title}
            fallbackTitle={current.title}
            className="max-h-[72vh] w-auto object-contain mx-auto"
            containerClassName="max-h-[72vh]"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-xl text-white/90 space-y-1">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880]">
            <span>{current.category}</span>
            <span>·</span>
            <span className="text-white/40">{currentIndex + 1} / {items.length}</span>
          </div>
          <h4 className="text-xl font-serif">{current.title}</h4>
          <p className="text-xs text-white/70">{current.caption}</p>

          <div className="pt-2">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:underline"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Ver no Instagram @pedrarasalon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

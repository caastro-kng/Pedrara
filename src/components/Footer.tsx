import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contato" className="bg-[#FAF8F5] border-t border-[#D8D5CF] text-[#1A1A1D] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#D8D5CF]/80">
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl tracking-[0.06em] font-light">{SALON_INFO.name}</span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A880] font-medium">{SALON_INFO.subname}</span>
            </div>
            <p className="text-sm text-[#52525A] font-light leading-relaxed max-w-md">
              Um espaço de beleza para mulheres, homens e crianças. Esta versão inicial do site será completada com as informações oficiais, fotos reais e canais de atendimento da PEDRARA.
            </p>
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] border-b border-[#1A1A1D] pb-1 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C5A880]" />
              {SALON_INFO.instagramHandle}
            </a>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-medium block">Navegação</span>
            <div className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-[#52525A]">
              <a href="#manifesto" className="hover:text-[#1A1A1D]">O Salão</a>
              <a href="#servicos" className="hover:text-[#1A1A1D]">Serviços</a>
              <a href="#equipe" className="hover:text-[#1A1A1D]">Equipe</a>
              <a href="#galeria" className="hover:text-[#1A1A1D]">Galeria</a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-medium block">Informações</span>
            <p className="text-xs text-[#7E7E88] leading-relaxed">
              Endereço, WhatsApp e horários serão inseridos após validação dos dados oficiais.
            </p>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E7E88]">
          <p>© {new Date().getFullYear()} PEDRARA Salon.</p>
          <button onClick={scrollToTop} className="flex items-center gap-1.5 text-[#1A1A1D] hover:text-[#C5A880] uppercase tracking-wider text-[10px]">
            Topo <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
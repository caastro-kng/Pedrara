import React from 'react';
import { ArrowUp, Instagram, MessageSquare, MapPin, Clock, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#FAF8F5] border-t border-[#D8D5CF] text-[#1A1A1D] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#D8D5CF]/80">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.06em] font-light">
                {SALON_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A880] font-sans font-medium">
                {SALON_INFO.subname}
              </span>
            </div>

            <p className="text-sm text-[#52525A] font-light leading-relaxed max-w-sm">
              Um espaço de beleza contemporâneo focado em visagismo, saúde capilar, harmonia e bem-estar integral. Atendemos mulheres, homens e crianças.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#D8D5CF] flex items-center justify-center text-[#1A1A1D] hover:bg-[#1A1A1D] hover:text-[#FAF8F5] transition-colors"
                aria-label="WhatsApp PEDRARA"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#D8D5CF] flex items-center justify-center text-[#1A1A1D] hover:bg-[#1A1A1D] hover:text-[#FAF8F5] transition-colors"
                aria-label="Instagram PEDRARA"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium block">
              Menu
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-sans">
              <li>
                <a href="#hero" className="text-[#52525A] hover:text-[#1A1A1D] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#manifesto" className="text-[#52525A] hover:text-[#1A1A1D] transition-colors">
                  O Salão
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#52525A] hover:text-[#1A1A1D] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-[#52525A] hover:text-[#1A1A1D] transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-[#52525A] hover:text-[#1A1A1D] transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#52525A] hover:text-[#1A1A1D] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium block">
              Localização & Contato
            </span>
            
            <div className="space-y-3 text-xs text-[#52525A] leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address.full}</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#1A1A1D] transition-colors">
                  {SALON_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={SALON_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1A1A1D] transition-colors"
                >
                  {SALON_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium block">
              Horários
            </span>
            <div className="space-y-2.5 text-xs text-[#52525A]">
              {SALON_INFO.hours.map((h, i) => (
                <div key={i} className="border-b border-[#EAE8E3] pb-1.5 last:border-b-0">
                  <span className="block font-medium text-[#1A1A1D]">{h.days}</span>
                  <span className="text-[#7E7E88] text-[11px]">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E7E88]">
          <p>© {new Date().getFullYear()} PEDRARA Salon. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Valores e consultas sob avaliação personalizada</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#1A1A1D] hover:text-[#C5A880] transition-colors font-medium uppercase tracking-wider text-[10px]"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

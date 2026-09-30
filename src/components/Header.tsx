import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'O Salão', href: '#manifesto' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#D8D5CF]/60 py-3.5 shadow-sm text-[#1A1A1D]'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="group flex items-baseline gap-2 tracking-tight transition-transform duration-300"
          aria-label="PEDRARA Salon Página Inicial"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.08em] font-normal">
            PEDRARA
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.35em] font-sans font-medium transition-colors ${
              isScrolled ? 'text-[#C5A880]' : 'text-[#DFCCA6]'
            }`}
          >
            SALON
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-sans uppercase tracking-[0.16em]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-1 transition-colors duration-200 hover:text-[#C5A880] ${
                isScrolled ? 'text-[#52525A]' : 'text-white/85'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans uppercase tracking-[0.14em] font-medium transition-all duration-300 whitespace-nowrap ${
              isScrolled
                ? 'bg-[#1A1A1D] text-[#FAF8F5] hover:bg-[#C5A880] hover:text-[#1A1A1D]'
                : 'bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#1A1A1D]'
            }`}
          >
            <span>Agendar horário</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#1A1A1D]' : 'text-white'
            }`}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#FAF8F5] border-t border-[#D8D5CF] p-8 flex flex-col justify-between text-[#1A1A1D] z-50 animate-fadeIn">
          <div className="space-y-6 pt-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">
              Navegação
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#1A1A1D] hover:text-[#C5A880] transition-colors py-1 border-b border-[#EAE8E3]/60 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#D8D5CF] space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 text-center text-xs uppercase tracking-[0.16em] font-medium bg-[#1A1A1D] text-[#FAF8F5] hover:bg-[#C5A880] transition-colors"
            >
              Agendar horário
            </button>
            <div className="text-center text-xs text-[#7E7E88]">
              {SALON_INFO.address.full}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

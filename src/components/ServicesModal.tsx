import React, { useState } from 'react';
import { X, Search, Clock, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, SERVICES_CATEGORIES } from '../data/salonData';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceToBook,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesQuery =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#D8D5CF] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE8E3] bg-[#F4F1EB]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium">
              Menu Completo de Serviços
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#1A1A1D]">
              O portfólio PEDRARA Salon
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7E7E88] hover:text-[#1A1A1D] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="px-6 py-4 border-b border-[#EAE8E3] bg-white flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-sans whitespace-nowrap transition-colors border ${
                activeCategory === 'all'
                  ? 'bg-[#1A1A1D] text-[#FAF8F5] border-[#1A1A1D]'
                  : 'bg-transparent text-[#52525A] border-[#D8D5CF] hover:border-[#1A1A1D]'
              }`}
            >
              Todos ({SERVICES_LIST.length})
            </button>
            {SERVICES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-sans whitespace-nowrap transition-colors border ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A1D] text-[#FAF8F5] border-[#1A1A1D]'
                    : 'bg-transparent text-[#52525A] border-[#D8D5CF] hover:border-[#1A1A1D]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-[#7E7E88] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar serviço..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#D8D5CF] focus:border-[#C5A880] outline-none text-[#1A1A1D]"
            />
          </div>
        </div>

        {/* Services List */}
        <div className="overflow-y-auto px-6 py-6 divide-y divide-[#EAE8E3] space-y-0">
          {filteredServices.length === 0 ? (
            <div className="py-12 text-center text-[#7E7E88] text-sm">
              Nenhum serviço encontrado para sua busca.
            </div>
          ) : (
            filteredServices.map((service) => (
              <div
                key={service.id}
                className="py-5 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2.5 text-xs text-[#7E7E88]">
                    <span className="font-medium text-[#C5A880] uppercase tracking-wider text-[10px]">
                      {service.audience}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </span>
                  </div>
                  <h4 className="text-lg font-serif text-[#1A1A1D] group-hover:text-[#C5A880] transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-xs text-[#52525A] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      onSelectServiceToBook(service.id);
                      onClose();
                    }}
                    className="px-4 py-2.5 bg-[#FAF8F5] border border-[#1A1A1D] text-[#1A1A1D] text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#1A1A1D] hover:text-[#FAF8F5] transition-colors flex items-center gap-2"
                  >
                    <span>Agendar este</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info note */}
        <div className="px-6 py-3.5 bg-[#F4F1EB] border-t border-[#EAE8E3] text-center text-[11px] text-[#7E7E88]">
          Diagnóstico e consultoria de harmonia visual inclusos em todos os atendimentos.
        </div>
      </div>
    </div>
  );
};

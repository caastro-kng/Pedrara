import React, { useEffect, useState } from 'react';
import { X, Instagram, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST, SALON_INFO } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialServiceId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || SERVICES_LIST[0]?.id || '');

  useEffect(() => {
    if (initialServiceId) setSelectedServiceId(initialServiceId);
  }, [initialServiceId]);

  if (!isOpen) return null;

  const selectedService = SERVICES_LIST.find((item) => item.id === selectedServiceId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#D8D5CF] shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE8E3]">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-medium">
              Agendamento
            </span>
            <h3 className="text-2xl font-serif text-[#1A1A1D] mt-1">
              Reserve seu momento
            </h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#7E7E88] hover:text-[#1A1A1D]" aria-label="Fechar">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-7 sm:px-8 space-y-6">
          <p className="text-sm text-[#52525A] leading-relaxed">
            O agendamento online completo ainda está sendo preparado. Nesta versão inicial, escolha o serviço de interesse e fale diretamente com a PEDRARA pelo Instagram.
          </p>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.18em] text-[#7E7E88] mb-2">
              Serviço de interesse
            </label>
            <select
              value={selectedServiceId}
              onChange={(event) => setSelectedServiceId(event.target.value)}
              className="w-full px-4 py-3 bg-white border border-[#D8D5CF] focus:border-[#C5A880] outline-none text-sm text-[#1A1A1D]"
            >
              {SERVICES_LIST.map((service) => (
                <option key={service.id} value={service.id}>{service.name}</option>
              ))}
            </select>
          </div>

          {selectedService ? (
            <div className="border-l border-[#C5A880] pl-4">
              <p className="font-serif text-xl text-[#1A1A1D]">{selectedService.name}</p>
              <p className="text-xs text-[#7E7E88] mt-1">{selectedService.tagline}</p>
            </div>
          ) : null}

          <a
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-5 bg-[#1A1A1D] text-[#FAF8F5] text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2 hover:bg-[#C5A880] hover:text-[#1A1A1D] transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Falar com a PEDRARA no Instagram
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <p className="text-[10px] text-[#7E7E88] text-center leading-relaxed">
            WhatsApp, telefone e sistema de agenda serão conectados quando os dados oficiais forem adicionados.
          </p>
        </div>
      </div>
    </div>
  );
};
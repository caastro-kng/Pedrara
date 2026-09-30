import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare } from 'lucide-react';
import { SERVICES_LIST, TEAM_MEMBERS, SALON_INFO } from '../data/salonData';
import { BookingState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || SERVICES_LIST[0].id);
  const [selectedProfessional, setSelectedProfessional] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('10:00');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  useEffect(() => {
    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isOpen) return null;

  const currentService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];
  const professionalObj = TEAM_MEMBERS.find((p) => p.id === selectedProfessional);
  const professionalName = professionalObj ? professionalObj.name : 'Primeiro profissional disponível';

  const timeSlots = [
    '09:00', '09:30', '10:00', '11:00', '13:00', '14:30', '16:00', '17:30', '18:30'
  ];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá, gostaria de agendar um horário na PEDRARA Salon.\n\n` +
      `• Serviço: ${currentService.name}\n` +
      `• Profissional: ${professionalName}\n` +
      `• Data sugerida: ${selectedDate}\n` +
      `• Horário: ${selectedTime}\n` +
      `• Nome: ${clientName || 'Não informado'}\n` +
      `• Telefone: ${clientPhone || 'Não informado'}\n` +
      (notes ? `• Observações: ${notes}\n` : '')
    );
    window.open(`https://wa.me/5511987654321?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#D8D5CF] rounded-none shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE8E3] bg-[#F4F1EB]">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A880] font-sans uppercase font-medium">
              Agendamento Personalizado
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#1A1A1D] mt-0.5">
              Reserve seu momento na PEDRARA
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

        {/* Content Body */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF8F5] border border-[#C5A880] flex items-center justify-center text-[#C5A880]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-serif text-[#1A1A1D]">
                Solicitação registrada com sucesso
              </h4>
              <p className="text-sm text-[#52525A] max-w-md mx-auto leading-relaxed">
                Agradecemos sua preferência, <strong className="text-[#1A1A1D] font-medium">{clientName || 'Cliente'}</strong>. Nossa concierge entrará em contato em breve pelo telefone fornecido para confirmar todos os detalhes do seu horário.
              </p>
              
              <div className="p-4 bg-[#F4F1EB] border border-[#EAE8E3] text-left max-w-md mx-auto text-xs space-y-1.5 text-[#52525A]">
                <div className="flex justify-between">
                  <span className="text-[#7E7E88]">Serviço:</span>
                  <span className="font-medium text-[#1A1A1D]">{currentService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7E88]">Profissional:</span>
                  <span className="font-medium text-[#1A1A1D]">{professionalName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7E88]">Data & Horário:</span>
                  <span className="font-medium text-[#1A1A1D]">{selectedDate} às {selectedTime}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 text-xs tracking-[0.1em] uppercase font-medium bg-[#1A1A1D] text-[#FAF8F5] hover:bg-[#C5A880] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                  Acelerar confirmação via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 text-xs tracking-[0.1em] uppercase font-medium border border-[#D8D5CF] text-[#52525A] hover:text-[#1A1A1D] transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDirectSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#7E7E88] font-medium mb-2">
                  01. Selecione o Serviço
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#D8D5CF] focus:border-[#C5A880] focus:ring-0 outline-none text-sm text-[#1A1A1D] transition-colors"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} ({srv.duration})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-[#7E7E88] mt-1.5 italic">
                  {currentService.tagline}
                </p>
              </div>

              {/* Professional Selection */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#7E7E88] font-medium mb-2">
                  02. Profissional de Preferência
                </label>
                <select
                  value={selectedProfessional}
                  onChange={(e) => setSelectedProfessional(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#D8D5CF] focus:border-[#C5A880] focus:ring-0 outline-none text-sm text-[#1A1A1D] transition-colors"
                >
                  <option value="any">Primeiro profissional disponível</option>
                  {TEAM_MEMBERS.map((pro) => (
                    <option key={pro.id} value={pro.id}>
                      {pro.name} — {pro.specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#7E7E88] font-medium mb-2">
                    03. Data Desejada
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white border border-[#D8D5CF] focus:border-[#C5A880] outline-none text-sm text-[#1A1A1D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#7E7E88] font-medium mb-2">
                    04. Horário Preferencial
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D8D5CF] focus:border-[#C5A880] outline-none text-sm text-[#1A1A1D]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EAE8E3]">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#7E7E88] font-medium mb-2">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Clara Silveira"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D8D5CF] focus:border-[#C5A880] outline-none text-sm text-[#1A1A1D]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#7E7E88] font-medium mb-2">
                    WhatsApp para Contato
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 90000-0000"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D8D5CF] focus:border-[#C5A880] outline-none text-sm text-[#1A1A1D]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#7E7E88] font-medium mb-1">
                  Observações ou Necessidades Especiais (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Cabelo com mechas prévias, preferência por toalha fria, etc."
                  className="w-full px-4 py-2.5 bg-white border border-[#D8D5CF] focus:border-[#C5A880] outline-none text-sm text-[#1A1A1D] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 bg-[#1A1A1D] text-[#FAF8F5] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#C5A880] hover:text-[#1A1A1D] transition-colors"
                >
                  Solicitar Agendamento
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3.5 px-6 border border-[#C5A880] text-[#1A1A1D] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#F4F1EB] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                  Enviar por WhatsApp
                </button>
              </div>

              <p className="text-[11px] text-[#7E7E88] text-center">
                Atendimento sob medida para mulheres, homens e crianças. Cancelamentos com até 4h de antecedência.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

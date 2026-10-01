/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { VisualHighlight } from './components/VisualHighlight';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServicesModal } from './components/ServicesModal';
import { LightboxModal } from './components/LightboxModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { GALLERY_ITEMS } from './data/salonData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [servicesModalOpen, setServicesModalOpen] = useState(false);
  const [selectedServiceToBook, setSelectedServiceToBook] = useState<string | undefined>(undefined);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceToBook(serviceId);
    setBookingModalOpen(true);
  };

  const handleSelectServiceFromCatalog = (serviceId: string) => {
    setSelectedServiceToBook(serviceId);
    setBookingModalOpen(true);
  };

  const handleSelectProfessional = (_proId: string) => {
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1D] selection:bg-[#C5A880]/30 selection:text-[#1A1A1D]">
      {/* 01 — Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 02 — Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 03 — Manifesto / Apresentação */}
        <Manifesto />

        {/* 04 — Serviços */}
        <ServicesSection
          onOpenBookingWithService={(serviceId) => handleOpenBooking(serviceId)}
          onOpenAllServices={() => setServicesModalOpen(true)}
        />

        {/* 05 — Experiência PEDRARA */}
        <ExperienceSection />

        {/* 06 — Destaque Visual */}
        <VisualHighlight />

        {/* 07 — Equipe */}
        <TeamSection onSelectProfessionalToBook={handleSelectProfessional} />

        {/* 08 — Galeria / Resultados */}
        <GallerySection onOpenLightbox={(idx) => setLightboxIndex(idx)} />

        {/* 10 — CTA de Agendamento */}
        <BookingCTA onOpenBooking={() => handleOpenBooking()} />

      </main>

      {/* 12 — Footer */}
      <Footer />

      {/* Floating Concierge Action */}
      <WhatsAppFloatingButton />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceToBook}
      />

      <ServicesModal
        isOpen={servicesModalOpen}
        onClose={() => setServicesModalOpen(false)}
        onSelectServiceToBook={handleSelectServiceFromCatalog}
      />

      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}

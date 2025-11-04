'use client';

import { useEffect } from 'react';
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PixSection } from "@/components/sections/pix-section";
import { PaymentLinkSection } from "@/components/sections/payment-link-section";
import { CheckoutSection } from "@/components/sections/checkout-section";
import { CardsSection } from "@/components/sections/cards-section";
import { StatsSection } from "@/components/sections/stats-section";
import { MediaSection } from "@/components/sections/media-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  useEffect(() => {
    // Função para fazer scroll até a seção
    const scrollToHash = () => {
      const hash = window.location.hash;
      
      if (hash) {
        // Aguarda um pouco para garantir que a página foi renderizada
        const timer = setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerOffset = 80; // Altura do header fixo
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);

        return timer;
      }
    };

    // Scroll inicial se houver hash
    const initialTimer = scrollToHash();

    // Listener para mudanças no hash
    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      if (initialTimer) clearTimeout(initialTimer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PixSection />
      <PaymentLinkSection />
      <CheckoutSection />
      <CardsSection />
      <StatsSection />
      <MediaSection />
      <ContactSection />
    </>
  );
}

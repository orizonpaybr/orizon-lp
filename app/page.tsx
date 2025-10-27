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

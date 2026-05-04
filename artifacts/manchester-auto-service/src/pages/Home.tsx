import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { AreasCovered } from "@/components/sections/AreasCovered";
import { MapSection } from "@/components/sections/MapSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/ui/StickyWhatsApp";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustBadges />
        <ServicesSection />
        <BookingSection />
        <AreasCovered />
        <MapSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
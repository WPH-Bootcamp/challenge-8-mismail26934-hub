import { Navbar } from '../components/layout/Navbar';
import { ContactSection } from '../components/sections/ContactSection';
import { FaqSection } from '../components/sections/FaqSection';
import { HeroSection } from '../components/sections/HeroSection';
import { IndustrySection } from '../components/sections/IndustrySection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { StatisticSection } from '../components/sections/StatisticSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { Footer } from '../components/layout/Footer';

export function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-page text-fg'>
      <Navbar />
      <main className='pt-16 md:pt-18 lg:pt-21'>
        <HeroSection />
        <PartnersSection />
        <StatisticSection />
        <ProcessSection />
        <ServicesSection />
        <IndustrySection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

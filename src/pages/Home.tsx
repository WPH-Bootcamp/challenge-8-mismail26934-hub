import { Navbar } from '../components/layout/Navbar';
import { FaqSection } from '../components/sections/FaqSection';
import { HeroSection } from '../components/sections/HeroSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { StatisticSection } from '../components/sections/StatisticSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';

export function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-page text-fg'>
      <Navbar />
      <main className='pt-16 md:pt-[72px] lg:pt-[84px]'>
        <HeroSection />
        <PartnersSection />
        <StatisticSection />
        <ProcessSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
    </div>
  );
}

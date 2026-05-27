import { Navbar } from '../components/layout/Navbar';
import { FaqSection } from '../components/sections/FaqSection';
import { HeroSection } from '../components/sections/HeroSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';

export function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-page text-fg'>
      <Navbar />
      <main className='pt-16 md:pt-[72px] lg:pt-[84px]'>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
    </div>
  );
}

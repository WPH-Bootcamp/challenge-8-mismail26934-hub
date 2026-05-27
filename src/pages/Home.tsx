import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ServicesSection } from '../components/sections/ServicesSection';

export function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-page text-fg'>
      <Navbar />
      <main className='pt-16 md:pt-[72px] lg:pt-[84px]'>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
      </main>
    </div>
  );
}

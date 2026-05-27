import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';

export function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-page text-fg'>
      <Navbar />
      <main className='pt-16 md:pt-[72px] lg:pt-[84px]'>
        <HeroSection />
      </main>
    </div>
  );
}

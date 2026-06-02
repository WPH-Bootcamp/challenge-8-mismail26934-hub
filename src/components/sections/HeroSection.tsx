import heroImageDark from '../../assets/images/sections/Hero_Image_Dark.png';
import heroImageLight from '../../assets/images/sections/Hero_Image_Light.png';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';

export function HeroSection() {
  const { isDark } = useTheme();
  const heroImage = isDark ? heroImageDark : heroImageLight;

  return (
    <section id='about' className='overflow-x-hidden bg-page lg:-mt-21'>
      <div className='container-page hero-container'>
        <div className='hero-section__inner lg:pb-0'>
          <img
            key={heroImage}
            src={heroImage}
            alt='3D tech illustration supporting the hero message about IT solutions and smarter growth'
            aria-hidden
            className='hero-section__image hidden lg:block'
          />
          <div className='relative flex w-full flex-col items-start px-4 gap-10 lg:justify-start lg:pt-hero-content lg:pl-gutter'>
            <header className='flex w-full min-w-0 max-w-hero-copy flex-col items-start gap-2'>
              <h1 className="hero-title w-full font-['Quicksand',Helvetica]">
                <p className='hero-title__line--lead text-fg'>
                  Your Tech Partner for
                </p>
                <p className='hero-title__line text-primary-light'>
                  Smarter Growth
                </p>
              </h1>
              <p className='w-full text-body-md-semibold text-fg lg:text-xl lg:font-semibold lg:leading-hero-subtitle'>
                We deliver tailored IT solutions to help you scale with speed
                and confidence.
              </p>
            </header>
            <Button
              href='#contact'
              size='lg'
              className='w-full text-body-sm-bold lg:min-h-12 lg:w-50 lg:text-body-md-bold'
            >
              Let's Talk
            </Button>
          </div>

          <div className='relative z-10 mt-6 flex justify-center md:mt-8 lg:hidden'>
            <img
              key={heroImage}
              src={heroImage}
              alt='3D tech illustration supporting the hero message about IT solutions and smarter growth'
              className='h-auto w-full max-h-hero-mobile max-w-hero-image object-contain sm:max-h-hero-mobile-sm'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

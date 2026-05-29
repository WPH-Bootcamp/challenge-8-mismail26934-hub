import heroImageDark from '../../assets/images/sections/Hero_Image_Dark.png';
import heroImageLight from '../../assets/images/sections/Hero_Image_Light.png';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';

export function HeroSection() {
  const { isDark } = useTheme();
  const heroImage = isDark ? heroImageDark : heroImageLight;

  return (
    <section id='about' className='overflow-x-hidden bg-page'>
      <div className='mx-auto max-w-[1440px] px-4 pb-8 pt-8 md:px-10 md:pb-10 lg:px-0 lg:pb-0 lg:pt-0'>
        <div className='hero-section__inner lg:pb-0'>
          <img
            key={heroImage}
            src={heroImage}
            alt=''
            aria-hidden
            className='hero-section__image hidden lg:block'
          />
          <div className='relative flex w-full flex-col items-start gap-10 lg:min-h-[747px] lg:justify-start lg:pt-[120px] lg:pl-[140px]'>
            <header className='flex w-full min-w-0 max-w-[653px] flex-col items-start gap-2'>
              <h1 className="hero-title w-full font-['Quicksand',Helvetica] lg:w-[653px]">
                <span className='hero-title__line--lead text-fg'>
                  Your Tech Partner for
                </span>
                <span className='hero-title__line text-primary-light'>
                  Smarter Growth
                </span>
              </h1>
              <p className='w-full text-body-md-semibold text-fg lg:text-xl lg:font-semibold lg:leading-[34px]'>
                We deliver tailored IT solutions to help you scale with speed
                and confidence.
              </p>
            </header>
            <Button
              href='#contact'
              size='lg'
              className='w-full text-body-sm-bold lg:min-h-12 lg:w-[200px] lg:text-body-md-bold'
            >
              Let's Talk
            </Button>
          </div>

          <div className='relative z-10 mt-6 flex justify-center md:mt-8 lg:hidden'>
            <img
              key={heroImage}
              src={heroImage}
              alt='3D illustration of mobile technology and IT solutions'
              className='h-auto w-full max-h-[391px] max-w-[747px] object-contain sm:max-h-[440px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

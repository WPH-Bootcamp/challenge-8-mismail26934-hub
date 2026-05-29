import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import doubleQuote from '../../assets/images/avatars/double-quote.png';
import { testimonials } from '../../data/testimonials';
import { cn } from '../../lib/cn';
import { SectionHeader } from '../ui/SectionHeader';

function FilledStar() {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      className='h-4 w-4 shrink-0 fill-accent-gold md:h-5 md:w-5'
      aria-hidden='true'
    >
      <path d='M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.35l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z' />
    </svg>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  isActive,
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  isActive: boolean;
}) {
  return (
    <div className='relative w-[min(calc(100vw-2rem),361px)] shrink-0 overflow-visible pt-7 pb-10 md:w-[420px] md:pt-8 md:pb-10 lg:w-[594px] lg:pt-9'>
      <div
        className={cn(
          'testimonial-card-highlight relative isolate z-[1] box-border flex min-h-[280px] w-full flex-none flex-col items-center gap-4 overflow-visible rounded-2xl bg-card-solid border border-card px-4 pb-12 pt-5 md:gap-5 md:px-5 md:pt-6 lg:h-[292px] lg:min-h-0 lg:gap-6 lg:px-6',
          isActive && 'testimonial-card-highlight--active'
        )}
      >
        <div
          className='pointer-events-none absolute left-[10.42%] top-0 z-[3] -translate-y-1/2'
          aria-hidden='true'
        >
          <div className='relative h-14 w-14 md:h-16 md:w-16 lg:h-[72px] lg:w-[72px]'>
            <img
              src={doubleQuote}
              alt=''
              className='absolute top-[20.83%] right-[10.42%] bottom-[20.83%] left-[10.42%] h-full w-full object-contain'
            />
          </div>
        </div>

        <div
          className='relative z-[2] flex gap-0.5 md:gap-1'
          aria-label='5 out of 5 stars'
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <FilledStar key={i} />
          ))}
        </div>

        <p className='relative z-[2] text-center text-body-sm-semibold text-fg md:text-base md:font-semibold md:leading-7 lg:text-lg lg:leading-8'>
          {quote}
        </p>

        <div className='relative z-[2] text-center'>
          <p className='text-body-sm-semibold text-fg md:text-base lg:text-lg lg:font-semibold'>
            {name}
          </p>
          <p className='text-body-sm-semibold text-primary md:text-base lg:text-lg lg:font-semibold'>
            {role}
          </p>
        </div>

        <img
          src={avatar}
          alt={name}
          className='absolute bottom-0 left-1/2 z-30 h-16 w-16 -translate-x-1/2 translate-y-1/2 rounded-full border-4 border-avatar-ring object-cover md:h-[70px] md:w-[70px] lg:h-[75px] lg:w-[75px]'
        />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,

      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: false,
    },
    [autoplayPlugin.current]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section id='testimonials' className='container-page section-padding'>
      <div className='flex flex-col items-center md:mb-10 lg:mb-16'>
        <SectionHeader
          title='What Partners Say About Working With Us'
          subtitle='Trusted voices. Real experiences. Proven results.'
        />
      </div>

      <div className='testimonials-carousel-wrapper'>
        <div className='testimonials-embla-viewport relative pt-2 pb-12 md:pb-14 lg:pb-12'>
          <div ref={emblaRef} className='testimonials-embla overflow-hidden'>
            <div className='testimonials-embla-container flex touch-pan-y'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className='testimonials-embla-slide min-w-0 shrink-0 grow-0 basis-auto pl-4 md:pl-5'
                >
                  <TestimonialCard
                    {...testimonial}
                    isActive={activeIndex === index}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-20 w-[10%] md:w-[12%] lg:w-[15%]' />
          <div className='marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-20 w-[10%] md:w-[12%] lg:w-[15%]' />
        </div>

        <div
          className='flex w-full justify-center px-4 md:px-6 lg:px-8'
          dir='ltr'
        >
          <div
            className='testimonials-dots'
            role='tablist'
            aria-label='Testimonial progress'
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type='button'
                onClick={() => scrollTo(index)}
                className={cn(
                  'testimonials-dot cursor-pointer border-0 p-0',
                  activeIndex === index && 'testimonials-dot-active'
                )}
                role='tab'
                aria-label={testimonial.name}
                aria-selected={activeIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

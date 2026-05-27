import { useEffect, useRef, useState } from 'react';
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
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className='relative w-[min(calc(100vw-2rem),361px)] shrink-0 overflow-visible pt-7 pb-10 md:w-[420px] md:pt-8 md:pb-10 lg:w-[594px] lg:pt-9'>
      <div className='testimonial-card-highlight relative isolate z-[1] box-border flex min-h-[280px] w-full flex-none flex-col items-center gap-4 overflow-visible rounded-2xl bg-card-solid border border-card px-4 pb-12 pt-5 md:gap-5 md:px-5 md:pt-6 lg:h-[292px] lg:min-h-0 lg:gap-6 lg:px-6'>
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
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!track || !viewport) return;

    const updateActiveDot = () => {
      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenter = viewportRect.left + viewportRect.width / 2;
      const cards = track.querySelectorAll<HTMLElement>(
        '[data-testimonial-index]'
      );

      let centeredIndex: number | null = null;
      let centeredDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isCenterInsideCard =
          rect.left <= viewportCenter && rect.right >= viewportCenter;
        if (!isCenterInsideCard) return;

        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        const index = Number(card.dataset.testimonialIndex);

        if (distance < centeredDistance) {
          centeredDistance = distance;
          centeredIndex = index;
        }
      });

      if (centeredIndex !== null) {
        const nextIndex = centeredIndex;
        setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
      }
    };

    updateActiveDot();
    viewport.addEventListener('scroll', updateActiveDot, { passive: true });
    window.addEventListener('resize', updateActiveDot);

    return () => {
      viewport.removeEventListener('scroll', updateActiveDot);
      window.removeEventListener('resize', updateActiveDot);
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    isDraggingRef.current = true;
    startXRef.current = event.clientX;
    startScrollLeftRef.current = viewport.scrollLeft;
    setIsDragging(true);
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const deltaX = event.clientX - startXRef.current;
    viewport.scrollLeft = startScrollLeftRef.current - deltaX;
  };

  const stopDragging = (pointerId?: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    isDraggingRef.current = false;
    setIsDragging(false);
    if (pointerId !== undefined && viewport.hasPointerCapture(pointerId)) {
      viewport.releasePointerCapture(pointerId);
    }
  };

  return (
    <section id='testimonials' className='section-padding'>
      <div className='container-page mb-8 flex flex-col items-center md:mb-10 lg:mb-16'>
        <SectionHeader
          title='What Partners Say About Working With Us'
          subtitle='Trusted voices. Real experiences. Proven results.'
        />
      </div>

      <div className='testimonials-marquee-wrapper'>
        <div
          ref={viewportRef}
          className={cn(
            'testimonials-marquee-viewport relative w-full cursor-grab pt-2 pb-12 md:pb-14 lg:pb-12',
            isDragging && 'is-dragging'
          )}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={(event) => stopDragging(event.pointerId)}
          onPointerCancel={(event) => stopDragging(event.pointerId)}
          onPointerLeave={() => stopDragging()}
        >
          <div
            ref={trackRef}
            className='testimonials-marquee-track flex w-max items-start gap-4 px-4 md:gap-5 md:px-6 lg:gap-5 lg:px-8 xl:gap-5'
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                data-testimonial-index={index}
                className='snap-center'
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          <div className='marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-20 w-[10%] md:w-[12%] lg:w-[15%]' />
          <div className='marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-20 w-[10%] md:w-[12%] lg:w-[15%]' />
        </div>

        <div
          className='testimonials-dots flex items-center justify-center gap-2 pb-2 md:gap-2.5 lg:pb-0'
          role='tablist'
          aria-label='Testimonial progress'
        >
          {testimonials.map((testimonial, index) => (
            <span
              key={testimonial.name}
              className={cn(
                'testimonials-dot',
                activeIndex === index && 'testimonials-dot-active'
              )}
              role='tab'
              aria-label={testimonial.name}
              aria-selected={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

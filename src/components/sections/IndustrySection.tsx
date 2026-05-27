import { useState } from 'react';
import { industries } from '../../data/industries';
import { cn } from '../../lib/cn';
import { SectionHeader } from '../ui/SectionHeader';

export function IndustrySection() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active =
    industries.find((item) => item.id === activeId) ?? industries[0];

  return (
    <section id='industries' className='section-padding'>
      <div className='container-page flex flex-col gap-6 md:gap-10 lg:gap-16'>
        <SectionHeader
          title='Built for Your Industry'
          subtitle="We've helped companies across industries launch smarter, faster, and more securely."
          align='left'
          className='max-w-3xl'
        />

        <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(140px,auto)_1fr] lg:items-start lg:gap-12 xl:gap-20'>
          <nav className='flex flex-col gap-3 lg:gap-8' aria-label='Industries'>
            {industries.map((industry) => {
              const isActive = activeId === industry.id;
              return (
                <button
                  key={industry.id}
                  type='button'
                  onClick={() => setActiveId(industry.id)}
                  className='flex items-center gap-1.5 text-left lg:gap-3'
                >
                  <span
                    className={cn(
                      'h-6 w-1 shrink-0 rounded-full transition-colors lg:h-8',
                      isActive ? 'bg-primary' : 'bg-muted-dark'
                    )}
                  />
                  <span
                    className={cn(
                      'whitespace-nowrap text-body-md-bold transition-colors lg:text-xl lg:font-bold',
                      isActive ? 'text-fg' : 'text-muted-dark'
                    )}
                  >
                    {industry.label}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className='flex min-w-0 flex-col gap-4 sm:gap-5 lg:max-w-[840px]'>
            <p className='w-full text-body-sm-medium leading-7 text-fg sm:text-base sm:leading-8 lg:text-lg lg:font-medium'>
              {active.description}
            </p>
            <img
              src={active.image}
              alt={active.label}
              className='h-[200px] w-full rounded-xl object-cover md:h-[280px] lg:h-[351px] lg:rounded-3xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

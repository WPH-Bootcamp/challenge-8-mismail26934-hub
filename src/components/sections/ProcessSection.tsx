import { useState } from 'react';
import { processSteps } from '../../data/process';
import { cn } from '../../lib/cn';
import { SectionHeader } from '../ui/SectionHeader';

function ProcessCard({
  title,
  description,
  defaultOpen = true,
  mobile,
}: {
  title: string;
  description: string;
  defaultOpen?: boolean;
  mobile?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <button
      type='button'
      onClick={() => setIsOpen((open) => !open)}
      aria-expanded={isOpen}
      className={cn(
        'flex w-full items-start justify-between gap-4 rounded-2xl border border-border bg-surface text-left transition-colors hover:border-border-muted',
        mobile ? 'p-4' : 'p-6'
      )}
    >
      <div className='flex min-w-0 flex-1 flex-col gap-1'>
        <h3
          className={cn(
            'font-bold text-fg',
            mobile ? 'text-body-md-bold' : 'text-xl'
          )}
        >
          {title}
        </h3>
        <div
          className={cn(
            'grid transition-[grid-template-rows,opacity] duration-300 ease-in-out',
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          )}
        >
          <div className='overflow-hidden'>
            <p
              className={cn(
                'pt-1 text-muted',
                mobile
                  ? 'text-body-sm-medium'
                  : 'text-base font-medium leading-relaxed'
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
      <svg
        className={cn(
          'h-6 w-6 shrink-0 text-muted transition-transform duration-300 ease-in-out',
          !isOpen && 'rotate-180'
        )}
        viewBox='0 0 24 24'
        fill='none'
        aria-hidden='true'
      >
        <path
          d='M6 15l6-6 6 6'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </button>
  );
}

function ProcessMarker({
  number,
  mobile,
}: {
  number: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        'relative z-10 flex shrink-0 items-center justify-center rounded-full bg-primary',
        mobile
          ? 'h-10 w-10 p-[6.67px] shadow-[0_0_0_4px_var(--theme-page-bg)]'
          : 'h-12 w-12 shadow-[0_0_0_6px_var(--theme-page-bg)]'
      )}
    >
      <span
        className={cn(
          'text-center font-bold text-white',
          mobile ? 'text-xs' : 'text-base'
        )}
      >
        {number}
      </span>
    </div>
  );
}

function ProcessTimelineRail({
  isLast,
  mobile,
}: {
  isLast: boolean;
  mobile?: boolean;
}) {
  if (isLast) return null;

  return (
    <div
      className={cn(
        'w-px flex-1 bg-border',
        mobile ? 'mt-1 min-h-4' : 'mt-0 min-h-4'
      )}
      aria-hidden='true'
    />
  );
}

export function ProcessSection() {
  const lastStepIndex = processSteps.length - 1;

  return (
    <section id='process' className='section-padding'>
      <div className='container-page flex flex-col items-center gap-6 lg:gap-16'>
        <SectionHeader
          title='Our Process'
          subtitle='Clear steps. Smart execution. Results you can count on.'
        />

        <div className='flex w-full max-w-xl flex-col lg:hidden'>
          <div className='flex flex-col gap-4'>
            {processSteps.map((step, index) => (
              <div key={step.number} className='flex items-stretch gap-3'>
                <div className='flex w-10 shrink-0 flex-col items-center'>
                  <ProcessMarker number={step.number} mobile />
                  <ProcessTimelineRail
                    isLast={index === lastStepIndex}
                    mobile
                  />
                </div>
                <div className='min-w-0 flex-1'>
                  <ProcessCard
                    title={step.title}
                    description={step.description}
                    mobile
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='hidden w-full max-w-5xl lg:block'>
          <div className='flex flex-col gap-4'>
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className='grid grid-cols-[1fr_48px_1fr] items-stretch gap-6'
              >
                <div className='flex justify-end'>
                  {step.side === 'left' ? (
                    <div className='w-full max-w-[400px]'>
                      <ProcessCard
                        title={step.title}
                        description={step.description}
                      />
                    </div>
                  ) : (
                    <div className='w-full max-w-[400px]' aria-hidden='true' />
                  )}
                </div>
                <div className='flex flex-col items-center'>
                  <ProcessMarker number={step.number} />
                  <ProcessTimelineRail isLast={index === lastStepIndex} />
                </div>
                <div className='flex justify-start'>
                  {step.side === 'right' ? (
                    <div className='w-full max-w-[400px]'>
                      <ProcessCard
                        title={step.title}
                        description={step.description}
                      />
                    </div>
                  ) : (
                    <div className='w-full max-w-[400px]' aria-hidden='true' />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

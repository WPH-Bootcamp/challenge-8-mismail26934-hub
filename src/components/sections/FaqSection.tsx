import { faqs } from '../../data/faqs.ts';
import { Accordion } from '../ui/Accordion.tsx';
import { ConsultationCard } from '../ui/ConsultationCard.tsx';
import { Separator } from '../ui/Separator.tsx';

export function FaqSection() {
  return (
    <section id='faq' className='section-padding'>
      <div className='container-page flex flex-col gap-6 lg:gap-12'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6'>
          <h2 className='max-w-[331px] text-display-sm font-bold text-fg lg:max-w-sm lg:text-display-xl'>
            Need Help? Start Here.
          </h2>
          <p className='text-body-sm-medium text-muted lg:max-w-xs lg:text-lg lg:font-medium lg:text-right lg:leading-8'>
            Everything you need to know — all in one place.
          </p>
        </div>
        <Separator className='bg-border-muted' />
        <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[73px]'>
          <div className='min-w-0 flex-1'>
            <Accordion items={faqs} />
          </div>
          <div className='w-full lg:w-auto lg:shrink-0'>
            <ConsultationCard />
          </div>
        </div>
      </div>
    </section>
  );
}

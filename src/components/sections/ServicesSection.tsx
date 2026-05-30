import { serviceRows } from '../../data/services.ts';
import { ServiceCard } from '../ui/ServiceCard.tsx';
import { SectionHeader } from '../ui/SectionHeader.tsx';

export function ServicesSection() {
  return (
    <section id='services' className='section-padding'>
      <div className='container-page flex flex-col items-center gap-10 lg:gap-16'>
        <SectionHeader
          title='Smart IT Solutions That Grow With You'
          subtitle='Tailored tech to boost efficiency, security, and results.'
          className='[&_h2]:font-semibold'
        />
        <div className='flex w-full flex-wrap justify-center gap-5 lg:justify-between lg:gap-10'>
          {serviceRows.flat().map((service) => (
            <div
              key={service.title}
              className='w-full min-w-[280px] max-w-[400px] flex-[1_1_320px]'
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

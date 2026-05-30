import { serviceRows } from '../../data/services.ts';
import { ServiceCard } from '../ui/ServiceCard.tsx';
import { SectionHeader } from '../ui/SectionHeader.tsx';

export function ServicesSection() {
  return (
    <section id='services' className='section-padding'>
      <div className='container-page section-stack'>
        <SectionHeader
          title='Smart IT Solutions That Grow With You'
          subtitle='Tailored tech to boost efficiency, security, and results.'
          className='[&_h2]:font-semibold'
        />
        <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {serviceRows.flat().map((service) => (
            <div key={service.title} className='min-w-0'>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className='service-card group'>
      <div className='service-card-border' aria-hidden='true' />
      <div className='relative flex flex-col gap-5 rounded-2xl bg-surface px-5 pb-5 pt-12 lg:px-5 lg:pb-6 lg:pt-16'>
        <img
          src={service.image}
          alt=''
          className='absolute left-5 -top-service-icon-offset z-[2] h-16 w-16 object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 lg:-top-service-icon-offset-lg lg:h-20 lg:w-20'
          aria-hidden='true'
        />
        <div className='flex flex-col gap-1'>
          <h3 className='text-body-md-bold text-fg lg:text-xl lg:font-bold'>
            {service.title}
          </h3>
          <p className='text-body-sm-medium text-muted lg:text-base lg:font-medium lg:leading-relaxed'>
            {service.description}
          </p>
        </div>
      </div>
    </article>
  );
}

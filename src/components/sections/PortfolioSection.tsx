import { portfolios } from '../../data/portfolio.ts';
import { SectionHeader } from '../ui/SectionHeader';

export function PortfolioSection() {
  return (
    <section
      id='projects'
      className='section-padding flex w-full flex-col items-center gap-16'
    >
      <SectionHeader
        title="From Vision to Launch! Projects We're Proud Of"
        subtitle='Take a closer look at our recent work powering startups, enterprises, and everything in between.'
        className='max-w-none [&_h2]:text-display-xl [&_p]:text-lg [&_p]:font-medium [&_p]:leading-8 [&_p]:text-muted'
      />
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {portfolios.map((portfolio) => (
          <article
            key={portfolio.title}
            className='group flex flex-col items-start gap-3 transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-within:-translate-y-1.5 motion-reduce:transition-none'
          >
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className='h-[373px] w-full rounded-2xl object-cover object-center transition-[transform,box-shadow] duration-300 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_16px_40px_rgba(255,98,62,0.2)] group-focus-within:scale-[1.02] group-focus-within:shadow-[0_16px_40px_rgba(255,98,62,0.2)] motion-reduce:transition-none'
            />
            <div className='flex w-full flex-col items-start'>
              <span className='text-base font-medium leading-[30px] text-primary'>
                {portfolio.category}
              </span>
              <h3 className='text-xl font-bold leading-[34px] text-fg transition-colors duration-300 ease-out group-hover:text-primary group-focus-within:text-primary motion-reduce:transition-none'>
                {portfolio.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

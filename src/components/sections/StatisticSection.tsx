import { stats } from '../../data/statistic';
import { SectionHeader } from '../ui/SectionHeader';

export function StatisticSection() {
  return (
    <section className='section-padding section-padding-lg'>
      <div className='container-page flex flex-col items-center gap-6 md:gap-10 lg:gap-16'>
        <SectionHeader
          title='End-to-End IT Solutions That Drive Results'
          subtitle='From strategy to execution, we deliver solutions that grow your business.'
        />
        <div className='flex w-full flex-wrap items-center justify-center gap-4 md:gap-5 xl:gap-6'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='flex aspect-square size-[172.5px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-surface p-4 md:size-[180px] md:p-5 lg:size-[200px] lg:p-6 xl:size-[220px] xl:p-6'
            >
              <div className='text-display-lg font-bold text-primary lg:text-display-2xl'>
                {stat.value}
              </div>
              <div className='px-2 text-center text-body-sm-semibold text-fg lg:max-w-[180px] lg:px-3 lg:text-xl lg:font-semibold lg:leading-snug'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

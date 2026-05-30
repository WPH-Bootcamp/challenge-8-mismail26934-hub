import { Button } from './Button';
import consultationImage from '../../assets/images/sections/consultation.png';

export function ConsultationCard() {
  return (
    <aside className='consultation-container mx-auto shrink-0 lg:mx-0'>
      <div className='flex w-full flex-col items-start gap-1'>
        <h3 className='text-display-sm font-bold text-white'>
          Let's talk it through
        </h3>
        <p className='text-body-sm-medium font-semibold leading-8 text-white'>
          book a free consultation with our team.
        </p>
      </div>

      <img
        src={consultationImage}
        alt='Team consultation meeting'
        className='consultation-image'
      />

      <Button
        variant='white'
        className='consultation-button w-full text-display-xs'
      >
        Free Consultation
      </Button>
    </aside>
  );
}

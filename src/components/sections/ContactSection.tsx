import { useState, type FormEvent } from 'react';
import { serviceOptions } from '../../data/services';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import { SectionHeader } from '../ui/SectionHeader';
import { Textarea } from '../ui/textarea';
import { MessageReceivedPopup } from '../modals/MessagePopup';
import messageReceivedImage from '../../assets/images/modals/message-received.png';

export function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Web Development',
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section id='contact' className='section-padding'>
      <div className='container-page flex flex-col items-center gap-10 pb-0 pt-2 lg:gap-16 lg:pt-0'>
        <SectionHeader
          title="Ready to Start? Let's Talk."
          subtitle="Tell us what you need, and we'll get back to you soon."
        />
        <form
          onSubmit={handleSubmit}
          className='flex w-full max-w-contact flex-col gap-10'
        >
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='name' className='text-form-label'>
                Name
              </label>
              <Input
                id='name'
                name='name'
                placeholder='Enter your name'
                required
                className='text-body-responsive'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='email' className='text-form-label'>
                Email
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
                required
                className='text-body-responsive'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='message' className='text-form-label'>
                Message
              </label>
              <Textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                required
                className='min-h-textarea text-body-responsive lg:min-h-30'
              />
            </div>
            <fieldset className='flex flex-col gap-3.5'>
              <legend className='text-form-label'>Services</legend>
              <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-10'>
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className='inline-flex cursor-pointer items-center gap-3'
                  >
                    <Checkbox
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    <span className='text-body-responsive text-fg lg:font-medium'>
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <Button
            type='submit'
            className='w-full py-3 text-body-sm-bold lg:text-base lg:font-bold'
          >
            Send
          </Button>
        </form>
        <MessageReceivedPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onBackHome={() => {
            setIsPopupOpen(false);
            window.location.href = '/';
          }}
          imageSrc={messageReceivedImage}
        />
      </div>
    </section>
  );
}

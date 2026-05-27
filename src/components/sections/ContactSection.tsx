import { useState, type FormEvent } from 'react';
import { serviceOptions } from '../../data/services';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import { SectionHeader } from '../ui/SectionHeader';
import { Textarea } from '../ui/Textarea';

export function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Web Development',
  ]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          className='flex w-full max-w-[720px] flex-col gap-10'
        >
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='name'
                className='text-body-sm-bold text-fg lg:text-sm lg:font-bold'
              >
                Name
              </label>
              <Input
                id='name'
                name='name'
                placeholder='Enter your name'
                required
                className='text-body-sm-medium lg:text-base'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='email'
                className='text-body-sm-bold text-fg lg:text-sm lg:font-bold'
              >
                Email
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
                required
                className='text-body-sm-medium lg:text-base'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='phone'
                className='text-body-sm-bold text-fg lg:text-sm lg:font-bold'
              >
                Phone Number
              </label>
              <Input
                id='phone'
                name='phone'
                type='tel'
                placeholder='Enter your phone number'
                className='text-body-sm-medium lg:text-base'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='message'
                className='text-body-sm-bold text-fg lg:text-sm lg:font-bold'
              >
                Message
              </label>
              <Textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                required
                className='min-h-[134px] text-body-sm-medium lg:min-h-[120px] lg:text-base'
              />
            </div>
            <fieldset className='flex flex-col gap-3.5'>
              <legend className='text-body-sm-bold text-fg lg:text-sm lg:font-bold'>
                Services
              </legend>
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
                    <span className='text-body-sm-medium text-fg lg:text-base lg:font-medium'>
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
      </div>
    </section>
  );
}

import airbnbLogo from '../../assets/images/company-logo/airbnb.png';
import adobeLogo from '../../assets/images/company-logo/adobe.png';
import databricksLogo from '../../assets/images/company-logo/databricks.png';
import dropboxLogo from '../../assets/images/company-logo/dropbox.png';
import paypallLogo from '../../assets/images/company-logo/paypall.png';
import postmanLogo from '../../assets/images/company-logo/postman.png';
import upworkLogo from '../../assets/images/company-logo/upwork.png';
import zoomLogo from '../../assets/images/company-logo/zoom.png';
import netflixLogo from '../../assets/images/company-logo/netflix.png';

const partners = [
  { name: 'Adobe', src: adobeLogo },
  { name: 'Upwork', src: upworkLogo },
  { name: 'Zoom', src: zoomLogo },
  { name: 'Postman', src: postmanLogo },
  { name: 'Databricks', src: databricksLogo },
  { name: 'Airbnb', src: airbnbLogo },
  { name: 'Dropbox', src: dropboxLogo },
  { name: 'PayPal', src: paypallLogo },
  { name: 'Netflix', src: netflixLogo },
];

const marqueePartners = [...partners, ...partners];

export function PartnersSection() {
  return (
    <section className='overflow-x-hidden pb-12 pt-8'>
      <div className='container-page flex flex-col items-center px-4 md:px-10 lg:px-[140px]'>
        <h2 className='text-center text-display-xs font-bold text-fg'>
          Trusted by Global Innovators &amp; Leading Brands
        </h2>

        <div className='partners-marquee-viewport relative mt-10 w-full pt-2 pb-12 md:pb-14 lg:pb-12'>
          <div className='partners-marquee-track flex w-max items-center gap-16 px-4 md:px-6 lg:px-8'>
            {marqueePartners.map((partner, index) => (
              <img
                key={`${partner.name}-${index}`}
                src={partner.src}
                alt={partner.name}
                draggable={false}
                className='partners-logo h-8 w-auto max-w-none shrink-0 object-contain'
              />
            ))}
          </div>
          <div className='marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-20 w-[10%] md:w-[12%] lg:w-[15%]' />
          <div className='marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-20 w-[10%] md:w-[12%] lg:w-[15%]' />
        </div>
      </div>
    </section>
  );
}

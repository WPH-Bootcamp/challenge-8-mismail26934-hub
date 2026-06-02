import logoSymbol from '../../assets/images/icon/logo-symbol.png';
import facebookIcon from '../../assets/images/social-media/facebook.png';
import instagramIcon from '../../assets/images/social-media/instagram.png';
import linkedinIcon from '../../assets/images/social-media/linkedin.png';
import tiktokIcon from '../../assets/images/social-media/tiktok.png';
import { footerLinks } from '../../data/navigation';
import { Separator } from '../ui/Separator';

const socialLinks = [
  { href: 'https://id.linkedin.com/', icon: linkedinIcon, label: 'LinkedIn' },
  {
    href: 'https://www.instagram.com/',
    icon: instagramIcon,
    label: 'Instagram',
  },
  { href: 'https://www.facebook.com/', icon: facebookIcon, label: 'Facebook' },
  { href: 'https://www.tiktok.com/', icon: tiktokIcon, label: 'TikTok' },
];

export function Footer() {
  return (
    <section className='section-padding'>
      <div className='container-page'>
        <div className='flex flex-col gap-6 rounded-3xl border border-border-muted bg-surface p-5 sm:p-6 md:gap-8 md:p-8 lg:gap-10 lg:p-10'>
          <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-start'>
            <div className='order-1 flex shrink-0 items-center gap-2.5 lg:order-2'>
              <img
                src={logoSymbol}
                alt='TechPartner Logo'
                className='h-8 w-8 object-contain'
                aria-hidden='true'
              />
              <span className='font-logo text-xl font-semibold text-logo sm:text-2xl'>
                Your Logo
              </span>
            </div>
            <h2 className='order-2 max-w-footer-title text-display-sm font-bold text-fg lg:order-1 lg:max-w-xs lg:text-display-lg'>
              LET'S DISCUSS YOUR IDEAS
            </h2>
          </div>

          <Separator className='bg-border-muted' />

          <div className='flex flex-col gap-6'>
            <footer className='flex flex-col items-start justify-between gap-6 md:flex-row md:flex-wrap md:items-center'>
              <nav
                className='flex flex-col gap-2 items-start p-0 md:flex-row md:flex-wrap md:max-w-full'
                aria-label='Footer'
              >
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className='shrink-0 whitespace-nowrap rounded-full py-1 px-4 text-body-responsive text-fg transition-colors text-sm hover:bg-hover lg:font-medium lg:leading-8'
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className='flex items-center gap-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='social-link flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-80'
                  >
                    <img
                      src={social.icon}
                      alt=''
                      className='social-icon object-contain'
                    />
                  </a>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

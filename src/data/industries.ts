import industryImage from '../assets/images/sections/industry.png';
import type { IndustryItem } from '../types';

export const industries: IndustryItem[] = [
  {
    id: 'fintech',
    label: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: industryImage,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    description:
      'Launch storefronts and marketplaces optimized for conversion, inventory management, and seamless checkout experiences.',
    image: industryImage,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    description:
      'Deliver HIPAA-aware platforms that improve patient engagement, clinical workflows, and operational efficiency.',
    image: industryImage,
  },
];

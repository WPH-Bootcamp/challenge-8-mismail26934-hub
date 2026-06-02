import industryImage from '../assets/images/sections/industry.png';
import ecommerceImage from '../assets/images/sections/e-commerce.png';
import healthcareImage from '../assets/images/sections/healthcare.png';

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
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: ecommerceImage,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: healthcareImage,
  },
];

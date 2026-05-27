import webDevIcon from '../assets/images/icon/web-dev.png';
import mobAppIcon from '../assets/images/icon/mob-app-dev.png';
import uiUxIcon from '../assets/images/icon/ui-ux-design.png';
import cloudIcon from '../assets/images/icon/cloud-solution.png';
import softwareIcon from '../assets/images/icon/software-dev.png';
import itInfraIcon from '../assets/images/icon/it-infr.png';
import cyberIcon from '../assets/images/icon/cyber-serv.png';
import qaIcon from '../assets/images/icon/qa-solution.png';
import consultingIcon from '../assets/images/icon/it-consulting-support.png';
import type { ServiceItem } from '../types';

export const serviceRows: ServiceItem[][] = [
  [
    {
      title: 'Web Development',
      description: 'Build fast, scalable, and SEO-friendly websites.',
      image: webDevIcon,
    },
    {
      title: 'Mobile App Development',
      description: 'Native & cross-platform apps tailored to user needs.',
      image: mobAppIcon,
    },
    {
      title: 'UI/UX Design',
      description: 'Delight users with intuitive and beautiful interfaces.',
      image: uiUxIcon,
    },
  ],
  [
    {
      title: 'Cloud Solutions',
      description:
        'Secure and flexible cloud infrastructure for your growth.',
      image: cloudIcon,
    },
    {
      title: 'Software Development',
      description: 'Custom solutions built around your business logic.',
      image: softwareIcon,
    },
    {
      title: 'IT Infrastructure',
      description: 'Scale your backend with reliable tech foundations.',
      image: itInfraIcon,
    },
  ],
  [
    {
      title: 'Cybersecurity Services',
      description: 'Stay protected with enterprise-grade security.',
      image: cyberIcon,
    },
    {
      title: 'QA Solutions',
      description: 'Ensure performance with rigorous testing frameworks.',
      image: qaIcon,
    },
    {
      title: 'IT Consulting & Support',
      description: 'Make smarter tech decisions with expert guidance.',
      image: consultingIcon,
    },
  ],
];

export const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Solutions',
  'Software Development',
  'Other',
];


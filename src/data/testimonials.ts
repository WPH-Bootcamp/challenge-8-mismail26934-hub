import avatar1 from '../assets/images/avatars/avatar-1.png';
import avatar2 from '../assets/images/avatars/avatar-2.png';
import avatar3 from '../assets/images/avatars/avatar-3.png';
import type { TestimonialItem } from '../types';

export const testimonials: TestimonialItem[] = [
  {
    quote:
      '"Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively."',
    name: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    avatar: avatar1,
  },
  {
    quote:
      '"The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch."',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    avatar: avatar2,
  },
  {
    quote:
      '"The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product."',
    name: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    avatar: avatar3,
  },
];

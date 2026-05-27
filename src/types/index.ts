/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

import type { ReactNode } from 'react';

// ==========================================
// UI Component Types
// ==========================================

export type ButtonVariant = 'primary' | 'ghost' | 'white';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

// ==========================================
// Navigation Types
// ==========================================

export interface NavItem {
  label: string;
  href: string;
}

// ==========================================
// Service Types
// ==========================================

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  highlighted?: boolean;
}

export interface PortfolioItem {
  category: string;
  title: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  side: 'left' | 'right';
  title: string;
  description: string;
}
// ==========================================
// TODO: Add more types as needed!
// ==========================================

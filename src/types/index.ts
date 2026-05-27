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
// TODO: Add more types as needed!
// ==========================================


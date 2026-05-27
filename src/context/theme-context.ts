import { createContext } from 'react';
import type { Theme } from '../lib/theme';

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

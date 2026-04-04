'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type ThemeName = 'neon' | 'sunset' | 'tropical' | 'purple' | 'ocean';

export const THEMES: { id: ThemeName; name: string; emoji: string; description: string }[] = [
  { id: 'neon', name: 'Neon Beach', emoji: '🌊', description: 'Dark & electric' },
  { id: 'sunset', name: 'Sunset Vibes', emoji: '🌅', description: 'Warm & fiery' },
  { id: 'tropical', name: 'Tropical Pop', emoji: '🌴', description: 'Lush & vibrant' },
  { id: 'purple', name: 'Electric Purple', emoji: '💜', description: 'Bold & mystic' },
  { id: 'ocean', name: 'Ocean Breeze', emoji: '☀️', description: 'Light & breezy' },
];

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'neon', setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('neon');

  useEffect(() => {
    const saved = localStorage.getItem('dftd-theme') as ThemeName | null;
    if (saved && THEMES.some(t => t.id === saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    const attr = theme === 'neon' ? '' : theme;
    if (attr) {
      document.documentElement.setAttribute('data-theme', attr);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('dftd-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

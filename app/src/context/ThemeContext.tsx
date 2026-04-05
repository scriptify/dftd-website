'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type ThemeName = 'neon' | 'poster' | 'beach-day';

export const THEMES: { id: ThemeName; name: string }[] = [
  { id: 'poster', name: 'Original Colors' },
  { id: 'neon', name: 'Green Dark' },
  { id: 'beach-day', name: 'Light Theme' },
];

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'poster', setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('poster');

  useEffect(() => {
    const saved = localStorage.getItem('dftd-theme') as ThemeName | null;
    if (saved && THEMES.some(t => t.id === saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    const attr = theme === 'poster' ? '' : theme;
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

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme } from '../types';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'light' | 'dark';
  updateEffectiveTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      effectiveTheme: 'light',
      setTheme: (theme: Theme) => {
        set({ theme });
        get().updateEffectiveTheme();
      },
      updateEffectiveTheme: () => {
        const { theme } = get();
        let effectiveTheme: 'light' | 'dark' = 'light';

        if (theme === 'system') {
          effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        } else {
          effectiveTheme = theme;
        }

        set({ effectiveTheme });

        // Update DOM
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(effectiveTheme);
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  // Este useEffect se encarga de inicializar el tema.
  useEffect(() => {
    const initialTheme = localStorage.getItem('theme');
    if (initialTheme) {
      setIsDarkMode(initialTheme === 'dark');
    } else {
      const systemTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(systemTheme);
    }
  }, []);

  // Este useEffect actualiza el tema según el estado y las preferencias del sistema.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    if (isDarkMode !== null) {
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return {
    isDarkMode,
    toggleTheme,
  };
};

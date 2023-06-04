import { useEffect, useState } from "react";

export const useDarkMode = (): {
  isDarkMode: boolean;
  toggleTheme: () => void;
} => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    return storedTheme === "dark" || systemTheme.matches;
  });

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    setIsDarkMode((prevMode) => {
      const systemMatches = systemTheme.matches;
      const storedTheme =
        typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      if (storedTheme === "dark" || storedTheme === "light") {
        return storedTheme === "dark";
      } else if (prevMode !== systemMatches) {
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", systemMatches ? "dark" : "light");
        }
        return systemMatches;
      }
      return prevMode;
    });

    systemTheme.addEventListener("change", handleThemeChange);

    return () => {
      systemTheme.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "dark");
      }
    } else {
      root.classList.remove("dark");
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newMode ? "dark" : "light");
      }
      return newMode;
    });
  };

  return { isDarkMode, toggleTheme };
};

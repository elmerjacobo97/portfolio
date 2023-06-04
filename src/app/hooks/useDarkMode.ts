"use client";

import { useEffect, useState } from "react";

const getInitialMode = (): boolean => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTheme = window.localStorage.getItem("theme") as string;
    if (storedTheme) {
      return storedTheme === "dark";
    }

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    return systemTheme.matches;
  }

  return false;
};

export const useDarkMode = (): {
  isDarkMode: boolean;
  toggleTheme: () => void;
} => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialMode);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    setIsDarkMode((prevMode) => {
      const storedTheme = window.localStorage.getItem("theme") as string;
      if (storedTheme) {
        return storedTheme === "dark";
      } else if (prevMode !== systemTheme.matches) {
        if (typeof window !== "undefined" && window.localStorage) {
          window.localStorage.setItem(
            "theme",
            systemTheme.matches ? "dark" : "light"
          );
        }
        return systemTheme.matches;
      }
      return prevMode;
    });

    systemTheme.addEventListener("change", handleThemeChange);

    return () => {
      systemTheme.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (isDarkMode) {
        window.document.documentElement.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        window.document.documentElement.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem("theme", newMode ? "dark" : "light");
      }
      return newMode;
    });
  };

  return { isDarkMode, toggleTheme };
};

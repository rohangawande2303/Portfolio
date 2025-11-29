"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true); // Always true

  useEffect(() => {
    // Force dark mode class on mount
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // We keep the context provider structure in case we want to add features later,
  // but setDarkMode is effectively a no-op or we just don't expose it if we want to be strict.
  // For now, we'll expose it but the effect above enforces dark mode on mount.

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

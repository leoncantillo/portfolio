import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const THEME_STORAGE_KEY = "portfolio-theme";

function getSavedTheme() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    return getSavedTheme() ?? getSystemTheme();
  });
  const [hasUserPreference, setHasUserPreference] = useState(() =>
    typeof window !== "undefined" && getSavedTheme() !== null
  );

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
    setHasUserPreference(true);
  };

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (!hasUserPreference) return undefined;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // The visual preference still works when browser storage is unavailable.
    }

    return undefined;
  }, [hasUserPreference, theme]);

  useEffect(() => {
    if (hasUserPreference) return undefined;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [hasUserPreference]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

"use client";
import { useContext, useEffect, useState } from "react";
// Define the type for the theme
import { createContext } from "react";

type Theme = "light" | "dark";
export type ThemePreference = Theme | "system";

// Create a context with a default value of 'light' for the theme
export const ThemeContext = createContext<{
  theme: ThemePreference;
  setTheme: (newTheme: ThemePreference) => void;
}>({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themePreference, setThemePreference] = useState<ThemePreference>(
    (localStorage.getItem("theme") as ThemePreference) ?? "system"
  );

  const reflectTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
  };

  const setTheme = (pref: ThemePreference) => {
    setThemePreference(pref);
    localStorage.setItem("theme", pref);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const systemPreferedTheme: Theme = mediaQuery.matches ? "dark" : "light";
    const effectiveTheme: Theme =
      pref === "system" ? systemPreferedTheme : pref;
    reflectTheme(effectiveTheme);
  };
  useEffect(() => {
    setTheme(themePreference);
  },[]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      if (themePreference === "system") {
        reflectTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, [themePreference]);

  return (
    <ThemeContext.Provider value={{ theme: themePreference, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext);

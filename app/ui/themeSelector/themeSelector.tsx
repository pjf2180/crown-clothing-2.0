import React, { useContext, useState } from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import {
  ThemePreference,
  useAppTheme,
} from "@/app/themeProvider";

export function ThemeSelector() {
  // Define the possible states and corresponding icons
  const themes: ThemePreference[] = ["light", "dark", "system"];
  const { theme, setTheme } = useAppTheme();

  // Function to cycle through the states
  const handleToggle = () => {
    const nextThemeIdx = (themes.indexOf(theme) + 1) % themes.length;
    const nextTheme = themes[nextThemeIdx];
    setTheme(nextTheme);
  };

  // Choose the icon based on the current state
  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <SunIcon className="h-6 w-6 text-yellow-500" />;
      case "dark":
        return <MoonIcon className="h-6 w-6 text-gray-900" />;
      case "system":
        return <ComputerDesktopIcon className="h-6 w-6 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleToggle}
    >
      {renderIcon()}
    </div>
  );
}

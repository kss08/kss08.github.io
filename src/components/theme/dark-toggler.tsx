import React from "react";
import { Theme } from "./theme-context";

interface ThemeTogglerProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      aria-label="darktoggler"
      onClick={toggleTheme}
      className="py-1.5 px-3 bg-fuchsia-500"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;

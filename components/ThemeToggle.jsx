"use client";

import { useEffect, useState } from "react";
import { Palette } from "lucide-react";

const themes = ["pink", "purple", "blue", "green", "orange"];

const ThemeToggle = () => {
  const [index, setIndex] = useState(0); 

  
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      themes[index]
    );
  }, [index]);

  const changeTheme = () => {
    setIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <button
      onClick={changeTheme}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        bg-gradient-to-br from-black via-zinc-900 to-zinc-800
        border border-white/10
        shadow-[0_0_18px_var(--ring)]
        hover:scale-110 transition-all
      "
      aria-label="Change accent theme"
    >
      <Palette className="w-5 h-5 text-white" />
    </button>
  );
};

export default ThemeToggle;

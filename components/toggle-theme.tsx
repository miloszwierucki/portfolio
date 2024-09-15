"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ToogleButton() {
  const [activeTheme, setActiveTheme] = useState<string>("system");

  useEffect(() => {
    // Get saved theme
    const savedTheme = localStorage.theme;
    if (savedTheme === "system" || !savedTheme) {
      applySystemTheme();
      setActiveTheme("system");
    } else {
      applyTheme(savedTheme);
      setActiveTheme(savedTheme);
    }

    // Chnage theme on system preference change
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === "system") {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  // Apply theme
  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  };

  // Handle theme change
  const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme);
    localStorage.theme = newTheme;

    if (newTheme === "system") {
      applySystemTheme();
    } else {
      applyTheme(newTheme);
    }
  };

  // Apply system theme
  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="fixed right-0 top-0 z-50 flex items-center gap-1">
      <button
        onClick={() => handleThemeChange("light")}
        className={`transition-color w-fit rounded-lg text-sm duration-200 ${
          activeTheme === "light"
            ? "bg-cyan-800 text-gray-50"
            : "bg-slate-500 text-gray-100"
        }`}
      >
        Light
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`transition-color w-fit rounded-lg text-sm duration-200 ${
          activeTheme === "dark"
            ? "bg-cyan-800 text-gray-50"
            : "bg-slate-500 text-gray-100"
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => handleThemeChange("system")}
        className={`transition-color w-fit rounded-lg text-sm duration-200 ${
          activeTheme === "system"
            ? "bg-cyan-800 text-gray-50"
            : "bg-slate-500 text-gray-100"
        }`}
      >
        System
      </button>
      <div className="space-x-2">
        <Link href="/en">EN</Link>
        <span>|</span>
        <Link href="/pl">PL</Link>
      </div>
    </div>
  );
}

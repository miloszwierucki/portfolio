"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTina } from "tinacms/dist/react";
import { useParams } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

import {
  defaultCursor,
  languageCursor,
  pointerCursor,
  themeCursor,
} from "@/lib/cursor";
import { useThemeStore } from "@/store/useThemeStore";
import {
  SettingsQuery,
  SettingsQueryVariables,
} from "@/tina/__generated__/types";

export default function ControllerClient(props: {
  data: SettingsQuery;
  variables: SettingsQueryVariables;
  query: string;
}) {
  const { theme, changeTheme } = useThemeStore();
  const params = useParams<{ lang: string }>();
  const pathname = usePathname();
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  useEffect(() => {
    // Get saved theme
    const savedTheme = localStorage.theme;
    if (savedTheme === "system" || !savedTheme) {
      applySystemTheme();
      changeTheme("system");
    } else {
      applyTheme(savedTheme);
      changeTheme(savedTheme);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    changeTheme(newTheme);
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
    <nav className="fixed inset-x-0 bottom-5 z-20 mx-auto flex max-w-fit items-center justify-center space-x-1 rounded-xl bg-cod-gray-100/5 px-4 py-2 text-base shadow-lg ring-1 ring-cod-gray-200/20 backdrop-blur-md dark:ring-cod-gray-200/15">
      {data.settings.navbar &&
        data.settings.navbar.map((item) =>
          item ? (
            <Link
              key={item.label}
              href={item.href}
              onMouseEnter={pointerCursor}
              onMouseLeave={defaultCursor}
              className={`grid max-h-9 place-content-center rounded-lg px-3 py-2 transition-[background] duration-500 hover:bg-cod-gray-200/20 ${
                pathname.includes(item.href) && "font-medium"
              }`}
            >
              {item.label}
            </Link>
          ) : null
        )}

      <p>|</p>

      <button
        onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
        onMouseEnter={themeCursor}
        onMouseLeave={defaultCursor}
        className="grid max-h-9 place-content-center rounded-lg px-3 py-2 transition-[background] duration-500 hover:bg-cod-gray-200/20"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" && (
            <motion.div
              key="dark"
              initial={{ rotate: 90, opacity: 0.5 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0.5 }}
              transition={{
                rotate: { duration: 0.2 },
                opacity: { duration: 0.2, delay: 0.1 },
              }}
            >
              <Moon size={20} />
            </motion.div>
          )}
          {theme === "light" && (
            <motion.div
              key="light"
              initial={{ rotate: 90, opacity: 0.5 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0.5 }}
              transition={{
                rotate: { duration: 0.2 },
                opacity: { duration: 0.2, delay: 0.1 },
              }}
            >
              <Sun size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <button
        className="grid max-h-9 place-content-center rounded-lg px-3 py-2 text-lg transition-[background] duration-300 hover:bg-cod-gray-200/20"
        onMouseEnter={languageCursor}
        onMouseLeave={defaultCursor}
      >
        <AnimatePresence mode="wait" initial={false}>
          {params.lang === "pl" && (
            <motion.div
              key="pl"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/en">🇵🇱</Link>
            </motion.div>
          )}
          {params.lang === "en" && (
            <motion.div
              key="en"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/pl">🇬🇧</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </nav>
  );
}

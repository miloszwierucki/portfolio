"use client";

import { AnimatePresence, motion } from "framer-motion";
import { tinaField, useTina } from "tinacms/dist/react";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { Sun, Moon, EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";

import { useThemeStore } from "@/store/useThemeStore";
import { Link } from "@/i18n/routing";
import {
  SettingsQuery,
  SettingsQueryVariables,
} from "@/tina/__generated__/types";
import {
  defaultCursor,
  languageCursor,
  pointerCursor,
  themeCursor,
} from "@/lib/cursor";

export default function ControllerClient(props: {
  data: SettingsQuery;
  variables: SettingsQueryVariables;
  query: string;
}) {
  const [open, setOpen] = useState(false);
  const { theme, changeTheme } = useThemeStore();
  const params = useParams<{ locale: string }>();
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
    <nav className="fixed inset-x-0 bottom-3 z-20 mx-auto flex max-w-fit flex-col items-center justify-center gap-1 rounded-xl bg-cod-gray-100/5 px-4 py-2 text-sm shadow-lg ring-1 ring-cod-gray-200/20 backdrop-blur-md md:flex-row xl:bottom-5 xl:text-base dark:ring-cod-gray-200/15">
      <div className="flex items-center space-x-1">
        {data.settings.navbar &&
          data.settings.navbar.map((item) =>
            item ? (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={pointerCursor}
                onMouseLeave={defaultCursor}
                data-tina-field={tinaField(item, "label")}
                className={`grid max-h-9 place-content-center rounded-lg px-3 py-1.5 transition-[background] duration-500 hover:bg-cod-gray-200/20 xl:py-2 ${
                  pathname.includes(item.href) && "font-medium"
                }`}
              >
                {item.label}
              </Link>
            ) : null
          )}
        <button
          className="grid max-h-9 place-content-center rounded-lg px-2 py-1.5 transition-[background] duration-500 hover:bg-cod-gray-200/20 md:hidden"
          onMouseEnter={pointerCursor}
          onMouseLeave={defaultCursor}
          onClick={() => setOpen(!open)}
        >
          <EllipsisVertical className="size-4" />
        </button>
      </div>

      <p className="hidden px-0.5 md:block">|</p>

      <div
        className={`flex items-center space-x-1 ${open ? "" : "hidden"} md:flex`}
      >
        <button
          onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
          onMouseEnter={themeCursor}
          onMouseLeave={defaultCursor}
          className="grid max-h-9 place-content-center rounded-lg px-3 py-1.5 transition-[background] duration-500 hover:bg-cod-gray-200/20 xl:py-2"
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
                <Moon className="size-4 xl:size-5" />
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
          className="grid max-h-9 place-content-center rounded-lg py-1.5 text-base transition-[background] duration-300 hover:bg-cod-gray-200/20 xl:text-lg"
          onMouseEnter={languageCursor}
          onMouseLeave={defaultCursor}
        >
          <AnimatePresence mode="wait" initial={false}>
            {params.locale === "pl" && (
              <motion.div
                key="pl"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="size-full px-3 py-1.5 xl:py-2"
                  href={`${pathname.replace("/pl", "/").replace("//", "/")}`}
                  locale="en"
                >
                  🇵🇱
                </Link>
              </motion.div>
            )}
            {params.locale === "en" && (
              <motion.div
                key="en"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="size-full px-3 py-1.5 xl:py-2"
                  href={`${pathname.replace("/en", "/").replace("//", "/")}`}
                  locale="pl"
                >
                  🇬🇧
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </nav>
  );
}

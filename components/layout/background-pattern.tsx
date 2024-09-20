"use client";

import React, { useEffect, useState } from "react";

import { useThemeStore } from "@/store/useThemeStore";
import Particles from "@/components/ui/particles";

export default function BackgroundPattern() {
  const [color, setColor] = useState("#ffffff");
  const { theme } = useThemeStore();

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="gradient after:opacity-[0.03]">
      {/* <div className="gradient fixed left-0 top-0 z-[-1] flex h-screen w-screen items-center justify-center bg-zinc-50 bg-dot-black/[0.2] after:opacity-10 dark:bg-zinc-900 dark:bg-dot-cod-gray-200/10 dark:after:opacity-5">
      Radial gradient for the container to give a faded look
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-50 opacity-80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-zinc-900" />
   </div> */}
      <Particles
        className="absolute inset-0 opacity-50"
        quantity={120}
        ease={80}
        size={1.5}
        color={color}
        refresh
      />
    </div>
  );
}

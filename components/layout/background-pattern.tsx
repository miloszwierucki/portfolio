"use client";

import React from "react";

import { useThemeStore } from "@/store/useThemeStore";
import Particles from "@/components/ui/particles";

export default function BackgroundPattern() {
  const { theme } = useThemeStore();
  const color = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="gradient after:opacity-[0.03]">
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

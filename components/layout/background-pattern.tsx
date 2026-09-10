"use client";

import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";

export default function BackgroundPattern() {
  const [particleColor, setParticleColor] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const updateParticleColor = () => {
      setParticleColor(
        getComputedStyle(root).getPropertyValue("--particle-color").trim()
      );
    };
    const observer = new MutationObserver(updateParticleColor);

    updateParticleColor();
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gradient after:opacity-[0.03]">
      {particleColor && (
        <Particles
          className="absolute inset-0 opacity-50"
          quantity={120}
          ease={80}
          size={1.5}
          color={particleColor}
          refresh
        />
      )}
    </div>
  );
}

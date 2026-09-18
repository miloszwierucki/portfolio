"use client";

import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";

type BackgroundPatternType = "particles" | "editorial";

function ParticlePattern() {
  const [particleColor, setParticleColor] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const updateParticleColor = () => {
      const color = getComputedStyle(root)
        .getPropertyValue("--particle-color")
        .trim();

      setParticleColor(color);
    };
    const observer = new MutationObserver(updateParticleColor);

    updateParticleColor();
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  if (!particleColor) return null;

  return (
    <Particles
      className="absolute inset-0 opacity-50"
      quantity={120}
      ease={80}
      size={1.5}
      color={particleColor}
      refresh
    />
  );
}

export default function BackgroundPattern({
  pattern,
}: {
  pattern: BackgroundPatternType;
}) {
  return (
    <div
      className={
        pattern === "particles" ? "gradient after:opacity-[0.03]" : undefined
      }
    >
      {pattern === "particles" && <ParticlePattern />}
      {pattern === "editorial" && (
        <div className="editorial-pattern" aria-hidden="true">
          <div className="editorial-pattern__grid" />
          <div className="editorial-pattern__texture" />
          <span className="editorial-pattern__mark editorial-pattern__mark--top-left" />
          <span className="editorial-pattern__mark editorial-pattern__mark--top-right" />
          <span className="editorial-pattern__mark editorial-pattern__mark--bottom-left" />
          <span className="editorial-pattern__mark editorial-pattern__mark--bottom-right" />
        </div>
      )}
    </div>
  );
}

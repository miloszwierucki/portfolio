"use client";

import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";

type BackgroundPatternType = "particles" | "editorial";

export default function BackgroundPattern() {
  const [particleColor, setParticleColor] = useState<string | null>(null);
  const [pattern, setPattern] = useState<BackgroundPatternType | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const updatePattern = () => {
      const styles = getComputedStyle(root);
      const nextPattern = styles
        .getPropertyValue("--background-pattern")
        .trim();

      setParticleColor(styles.getPropertyValue("--particle-color").trim());
      setPattern(nextPattern === "editorial" ? "editorial" : "particles");
    };
    const observer = new MutationObserver(updatePattern);

    updatePattern();
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gradient after:opacity-[0.03]">
      {pattern === "particles" && particleColor && (
        <Particles
          className="absolute inset-0 opacity-50"
          quantity={120}
          ease={80}
          size={1.5}
          color={particleColor}
          refresh
        />
      )}
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

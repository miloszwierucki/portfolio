import React from "react";

export function BackgroundPattern() {
  return (
    <div className="gradient fixed left-0 top-0 z-[-1] flex h-screen w-screen items-center justify-center bg-zinc-50 bg-dot-black/[0.2] dark:bg-zinc-950 dark:bg-dot-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-50 opacity-80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-zinc-950" />
    </div>
  );
}

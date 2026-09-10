"use client";

import {
  Footprints,
  Languages,
  MousePointer2,
  Palette,
  Pipette,
  Pointer,
  WandSparkles,
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

import { CursorVariant, useCursorStore } from "@/store/useCursorStore";

const customCursorQuery =
  "(min-width: 1025px) and (hover: hover) and (pointer: fine)";

const cursorIcons: Record<CursorVariant, ReactNode> = {
  default: <MousePointer2 size={28} strokeWidth={1} />,
  pointer: <Pointer size={28} strokeWidth={1} />,
  language: <Languages size={28} strokeWidth={1} />,
  theme: <Palette size={28} strokeWidth={1} />,
  discovery: <WandSparkles size={28} strokeWidth={1} />,
  path: <Footprints size={28} strokeWidth={1} />,
  filter: <Pipette size={28} strokeWidth={1} />,
};

const CustomCursor = () => {
  const cursor = useCursorStore((state) => state.cursor);
  const setCursor = useCursorStore((state) => state.setCursor);
  const resetCursor = useCursorStore((state) => state.resetCursor);

  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const mediaQuery = window.matchMedia(customCursorQuery);

    const deactivateCursor = () => {
      setVisible(false);
      resetCursor();
      document.documentElement.classList.remove("custom-cursor-active");
    };

    const handlePointerMove = (event: PointerEvent) => {
      const supportsCustomCursor =
        event.pointerType === "mouse" && mediaQuery.matches;

      if (!supportsCustomCursor) {
        deactivateCursor();
        return;
      }

      cursorX.set(event.clientX - 8);
      cursorY.set(event.clientY - 8);

      const cursorTarget =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-cursor]")
          : null;
      const cursorVariant = cursorTarget?.dataset.cursor;
      const nextCursor =
        cursorVariant && cursorVariant in cursorIcons
          ? (cursorVariant as CursorVariant)
          : "default";

      if (useCursorStore.getState().cursor !== nextCursor) {
        if (nextCursor === "default") resetCursor();
        else setCursor(nextCursor);
      }

      setVisible(true);
      document.documentElement.classList.add("custom-cursor-active");
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        deactivateCursor();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        deactivateCursor();
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", deactivateCursor);
    mediaQuery.addEventListener("change", deactivateCursor);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", deactivateCursor);
      mediaQuery.removeEventListener("change", deactivateCursor);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY, resetCursor, setCursor]);

  return visible ? (
    <motion.div
      className="text-subtle-foreground drop-shadow-cursor pointer-events-none fixed top-0 left-0 z-9999"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    >
      {cursorIcons[cursor]}
    </motion.div>
  ) : null;
};

export default CustomCursor;

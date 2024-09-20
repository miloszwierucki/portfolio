"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { useCursorStore } from "@/store/useCursorStore";

const CustomCursor = () => {
  const cursor = useCursorStore((state) => state.cursor);

  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 600, damping: 50 }; // { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);

      if (visible === false) {
        setVisible(true);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseLeave = () => {
      setVisible(false);
    };
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return visible ? (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 text-cod-gray-400 drop-shadow-lg"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      {cursor}
    </motion.div>
  ) : null;
};

export default CustomCursor;

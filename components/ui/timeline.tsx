"use client";

import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { defaultCursor, pathCursor } from "@/lib/cursor";
import { useThemeStore } from "@/store/useThemeStore";

export const Timeline = ({
  children,
  containerRef,
}: {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });

  const [svgHeight, setSvgHeight] = useState(0);
  const [variant, setVariant] = useState({
    track: "var(--cod-gray-200)",
    thumb: "var(--zinc-50)",
    opacity: 0.2,
  });
  const { theme } = useThemeStore();

  useEffect(() => {
    setVariant(
      theme === "dark"
        ? {
            track: "var(--cod-gray-200)",
            thumb: "var(--zinc-50)",
            opacity: 0.2,
          }
        : {
            track: "var(--cod-gray-200)",
            thumb: "var(--zinc-900)",
            opacity: 0.4,
          }
    );
  }, [theme]);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight - 80);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const y1 = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.5, 0.9],
      [0, svgHeight - 300, svgHeight]
    ),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0, svgHeight - 400, svgHeight - 200]
    ),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <section
      className="relative"
      ref={contentRef}
      onMouseEnter={pathCursor}
      onMouseLeave={defaultCursor}
    >
      <svg
        viewBox={`0 0 23 ${svgHeight}`}
        width="23"
        height={svgHeight} // Set the SVG height
        aria-hidden="true"
        className="absolute left-1.5 top-6 md:left-2.5"
      >
        <motion.path
          d={`M 1 0V -36 l 9.5 24 V ${svgHeight}`}
          fill="none"
          stroke={variant.track}
          strokeOpacity={variant.opacity}
          transition={{
            duration: 10,
          }}
        />
        <motion.path
          d={`M 1 0V -36 l 9.5 24 V ${svgHeight}`}
          fill="none"
          stroke="url(#gradient)"
          filter="url(#shadow)"
          strokeWidth="3"
          strokeOpacity="0.6"
          className="motion-reduce:hidden"
          transition={{
            duration: 10,
          }}
        />
        <defs>
          <motion.linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={y1} // set y1 for gradient
            y2={y2} // set y2 for gradient
          >
            <stop stopColor={variant.thumb} stopOpacity="0" />
            <stop stopColor={variant.thumb} />
            <stop offset="0.325" stopColor={variant.thumb} />
            <stop offset="1" stopColor={variant.thumb} stopOpacity="0" />
          </motion.linearGradient>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="0.4"
              floodColor={variant.thumb}
              floodOpacity="1"
            />
          </filter>
        </defs>
      </svg>

      <div className="w-full md:w-3/4">{children}</div>
    </section>
  );
};

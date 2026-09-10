"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";

export const Timeline = ({
  children,
  containerRef,
}: {
  children: ReactNode;
  containerRef: RefObject<HTMLDivElement | null>;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight - 80);
    }
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
    <section className="relative" ref={contentRef} data-cursor="path">
      <svg
        viewBox={`0 0 23 ${svgHeight}`}
        width="23"
        height={svgHeight} // Set the SVG height
        aria-hidden="true"
        className="absolute top-6 left-1.5 xl:left-2 2xl:left-2.5"
      >
        <motion.path
          d={`M 1 0V -36 l 9.5 24 V ${svgHeight}`}
          fill="none"
          stroke="var(--timeline-track)"
          strokeOpacity="var(--timeline-track-opacity)"
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
            <stop stopColor="var(--timeline-thumb)" stopOpacity="0" />
            <stop stopColor="var(--timeline-thumb)" />
            <stop offset="0.325" stopColor="var(--timeline-thumb)" />
            <stop
              offset="1"
              stopColor="var(--timeline-thumb)"
              stopOpacity="0"
            />
          </motion.linearGradient>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="0.4"
              floodColor="var(--timeline-thumb)"
              floodOpacity="1"
            />
          </filter>
        </defs>
      </svg>

      <div className="w-full lg:w-3/4">{children}</div>
    </section>
  );
};

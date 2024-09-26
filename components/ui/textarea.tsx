"use client";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React, { forwardRef, useEffect, useState } from "react";

import { useThemeStore } from "@/store/useThemeStore";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    const radius = 80;
    const [visible, setVisible] = useState(false);
    const [variant, setVariant] = useState({
      gradient: "var(--zinc-50)",
    });

    const { theme } = useThemeStore();

    useEffect(() => {
      setVariant(
        theme === "dark"
          ? {
              gradient: "var(--zinc-50)",
            }
          : {
              gradient: "var(--zinc-900)",
            }
      );
    }, [theme]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <div>
        <motion.div
          style={{
            background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          ${variant.gradient},
          transparent 90%
        )
      `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="group/input rounded-lg p-[1.5px] transition duration-300"
        >
          <div className="rounded-lg bg-zinc-50 dark:bg-zinc-900">
            <textarea
              aria-invalid={error ? "true" : undefined}
              aria-describedby={error ? "message-error" : undefined}
              rows={6}
              className={cn(
                "dark:placeholder-text-neutral-600 flex w-full resize-none rounded-lg border-none bg-cod-gray-100/5 px-3.5 py-3 text-base shadow-sm ring-1 ring-cod-gray-200/20 backdrop-blur transition duration-300 placeholder:text-neutral-500 group-hover/input:shadow-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:ring-cod-gray-200/15",
                className
              )}
              ref={ref}
              {...props}
            />
          </div>
        </motion.div>
        {error && (
          <div
            id="message-error"
            role="alert"
            className="ml-2 flex flex-col text-sm text-red-600 md:col-span-2"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

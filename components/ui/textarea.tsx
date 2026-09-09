"use client";

import {
  forwardRef,
  MouseEvent,
  TextareaHTMLAttributes,
  useState,
} from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

import { useThemeStore } from "@/store/useThemeStore";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    const radius = 80;
    const [visible, setVisible] = useState(false);
    const { theme } = useThemeStore();
    const gradient =
      theme === "dark"
        ? "color-mix(in srgb, var(--color-zinc-50) 50%, transparent)"
        : "color-mix(in srgb, var(--color-zinc-900) 50%, transparent)";

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: MouseEvent<HTMLDivElement>) {
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
          ${gradient},
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
                "dark:placeholder-text-neutral-600 scrollbar-thumb-rounded-full bg-cod-gray-100/5 ring-cod-gray-200/20 dark:ring-cod-gray-200/15 scrollbar-thumb-cod-gray-200 dark:scrollbar-thumb-cod-gray-200 flex w-full resize-none scrollbar-thin scrollbar-track-transparent rounded-lg border-none px-3.5 py-3 text-base shadow-sm ring-1 backdrop-blur transition duration-300 group-hover/input:shadow-none placeholder:text-neutral-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 lg:py-2 lg:text-sm xl:py-2.5 2xl:py-3 2xl:text-base",
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
            className="mt-1 ml-2 flex flex-col text-xs text-red-600 md:col-span-2 md:text-sm"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

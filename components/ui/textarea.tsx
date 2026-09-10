"use client";

import { ComponentPropsWithRef } from "react";
import { motion } from "motion/react";

import { useControlSpotlight } from "@/components/ui/use-control-spotlight";
import { cn } from "@/lib/utils";

export interface TextareaProps extends ComponentPropsWithRef<"textarea"> {
  error?: string;
}

export const Textarea = ({
  className,
  error,
  ref,
  ...props
}: TextareaProps) => {
  const spotlight = useControlSpotlight();

  return (
    <div>
      <motion.div
        style={{ background: spotlight.background }}
        onMouseMove={spotlight.handleMouseMove}
        onMouseEnter={spotlight.handleMouseEnter}
        onMouseLeave={spotlight.handleMouseLeave}
        className="group/input rounded-control p-[1.5px] transition duration-300"
      >
        <div className="bg-input-surface rounded-control">
          <textarea
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? "message-error" : undefined}
            rows={6}
            className={cn(
              "bg-input-background ring-input-border placeholder:text-input-placeholder scrollbar-thumb-scrollbar-thumb hover:scrollbar-thumb-scrollbar-thumb-hover scrollbar-track-scrollbar-track scrollbar-thumb-rounded-scrollbar rounded-control shadow-control flex w-full resize-none scrollbar-thin border-none px-3.5 py-3 text-base ring-1 backdrop-blur transition duration-300 group-hover/input:shadow-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 lg:py-2 lg:text-sm xl:py-2.5 2xl:py-3 2xl:text-base",
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
          className="text-input-error mt-1 ml-2 flex flex-col text-xs md:col-span-2 md:text-sm"
        >
          {error}
        </div>
      )}
    </div>
  );
};

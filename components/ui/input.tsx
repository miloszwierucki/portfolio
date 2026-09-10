"use client";

import { ComponentPropsWithRef } from "react";
import { motion } from "motion/react";

import { useControlSpotlight } from "@/components/ui/use-control-spotlight";
import { cn } from "@/lib/utils";

export interface InputProps extends ComponentPropsWithRef<"input"> {
  error?: string;
}

export const Input = ({
  className,
  type,
  error,
  ref,
  ...props
}: InputProps) => {
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
          <input
            type={type}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? "input-error" : undefined}
            className={cn(
              "bg-input-background ring-input-border placeholder:text-input-placeholder rounded-control flex w-full resize-none border-none px-3.5 py-3 text-base shadow-sm ring-1 backdrop-blur transition duration-300 group-hover/input:shadow-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 lg:py-2 lg:text-sm xl:py-2.5 2xl:py-3 2xl:text-base",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </motion.div>

      {error && (
        <div
          role="alert"
          className="text-input-error mt-1 ml-2 flex flex-col text-xs md:col-span-2 md:text-sm"
        >
          {error}
        </div>
      )}
    </div>
  );
};

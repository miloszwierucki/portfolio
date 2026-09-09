"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils";

const Label = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof LabelPrimitive.Root>) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-base leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 lg:text-sm 2xl:text-base",
      className
    )}
    {...props}
  />
);

export { Label };

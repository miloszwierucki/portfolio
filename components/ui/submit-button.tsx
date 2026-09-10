"use client";

import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const SubmitButton = ({
  label,
  pendingLabel,
  className,
}: {
  label: ReactNode;
  pendingLabel: ReactNode;
  className?: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        "border-inverse-background before:bg-inverse-background hover:text-inverse-foreground rounded-control relative z-0 flex h-12 items-center justify-center gap-2 overflow-hidden border py-3 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:transition-transform before:duration-1000 before:content-[''] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 lg:h-10 lg:text-sm 2xl:h-12 2xl:text-base",
        className
      )}
      aria-disabled={pending}
      type="submit"
      disabled={pending}
      aria-label="Wyślij wiadomość"
    >
      {pending ? `${pendingLabel}` : `${label}`}
    </button>
  );
};

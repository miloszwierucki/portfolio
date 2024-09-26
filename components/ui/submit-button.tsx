"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";

export const SubmitButton = ({
  label,
  pendingLabel,
  className,
}: {
  label: React.ReactNode | string;
  pendingLabel: React.ReactNode | string;
  className?: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        "relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-lg border-[1px] border-zinc-900 py-3 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-900 before:transition-transform before:duration-1000 before:content-[''] hover:text-neutral-200 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 dark:border-zinc-50 dark:before:bg-zinc-50 hover:dark:text-neutral-900",
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

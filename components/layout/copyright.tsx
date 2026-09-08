import { cn } from "@/lib/utils";

export function Copyright({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={cn("self-end text-xs opacity-60", className)}>
      Designed & Developed by Miłosz Wierucki ©
      <time dateTime={currentYear.toString()}>{currentYear}</time>
    </div>
  );
}

import { cn } from "@/lib/utils";

export function Copyright({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={cn(
        "font-label self-end text-[0.625rem] opacity-60",
        className
      )}
    >
      Designed & Developed by Miłosz Wierucki ©
      <time dateTime={currentYear.toString()}>{currentYear}</time>
    </div>
  );
}

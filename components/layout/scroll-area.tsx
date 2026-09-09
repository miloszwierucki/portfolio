"use client";

import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const ScrollArea = ({
  children,
  className,
  onScroll,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) => {
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const updateFades = (element: HTMLDivElement) => {
    setShowTopFade(element.scrollTop > 1);
    setShowBottomFade(
      element.scrollTop + element.clientHeight < element.scrollHeight - 1
    );
  };

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    updateFades(element);

    const resizeObserver = new ResizeObserver(() => updateFades(element));
    const mutationObserver = new MutationObserver(() => updateFades(element));

    resizeObserver.observe(element);
    mutationObserver.observe(element, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [children]);

  return (
    <div className="relative min-h-0 flex-1">
      <div
        ref={(element) => {
          scrollRef.current = element;

          if (typeof ref === "function") ref(element);
          else if (ref) ref.current = element;
        }}
        className={cn(
          "scrollbar-thumb-cod-gray-200 dark:scrollbar-thumb-cod-gray-200 h-full scrollbar-thin scrollbar-track-transparent overflow-y-auto",
          showTopFade &&
            showBottomFade &&
            "mask-[linear-gradient(to_bottom,transparent_0,#000_1.5rem,#000_calc(100%-1.5rem),transparent_100%)]",
          showTopFade &&
            !showBottomFade &&
            "mask-[linear-gradient(to_bottom,transparent_0,#000_1.5rem)]",
          !showTopFade &&
            showBottomFade &&
            "mask-[linear-gradient(to_bottom,#000_calc(100%-1.5rem),transparent_100%)]",
          className
        )}
        onScroll={(event) => {
          updateFades(event.currentTarget);
          onScroll?.(event);
        }}
        onLoadCapture={(event) => updateFades(event.currentTarget)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

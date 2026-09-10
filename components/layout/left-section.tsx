"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

import { SidebarQuery, SidebarQueryVariables } from "@tina/__generated__/types";

export const LeftSection = (props: {
  data: SidebarQuery;
  variables: SidebarQueryVariables;
  query: string;
  className?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showBottomFade, setShowBottomFade] = useState(false);
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;

    const updateBottomFade = () => {
      const hasOverflow =
        scrollElement.scrollHeight > scrollElement.clientHeight + 1;
      const isAtBottom =
        scrollElement.scrollTop + scrollElement.clientHeight >=
        scrollElement.scrollHeight - 1;

      setShowBottomFade(hasOverflow && !isAtBottom);
    };

    const resizeObserver = new ResizeObserver(updateBottomFade);
    resizeObserver.observe(scrollElement);
    scrollElement.addEventListener("scroll", updateBottomFade, {
      passive: true,
    });
    updateBottomFade();

    return () => {
      resizeObserver.disconnect();
      scrollElement.removeEventListener("scroll", updateBottomFade);
    };
  }, [data.sidebar.blocks]);

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 md:gap-2 lg:gap-4",
          props.className
        )}
      >
        <div
          className="bg-surface-strong rounded-navigation shadow-panel mt-2 grid aspect-square w-3/5 place-content-center overflow-hidden"
          data-tina-field={tinaField(data.sidebar, "image")}
        >
          {data.sidebar.image && (
            <Image
              className="drop-shadow-media pointer-events-none mx-auto w-11/12 object-contain saturate-[1.25]"
              src={data.sidebar.image}
              alt="Person profile picture"
              width={400}
              height={400}
              loading="eager"
            />
          )}
        </div>

        <h1
          className="font-heading text-center text-3xl font-semibold md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl"
          data-tina-field={tinaField(data.sidebar, "name")}
        >
          {data.sidebar.name}
        </h1>

        <div
          className="bg-surface-muted before:animate-backgroundMove text-foreground rounded-control shadow-control font-label relative inline-flex justify-center px-3.5 py-2.5 text-center text-sm font-medium whitespace-nowrap before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,var(--shimmer)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat md:text-xs md:whitespace-normal lg:whitespace-nowrap 2xl:text-sm"
          data-tina-field={tinaField(data.sidebar, "role")}
        >
          {data.sidebar.role}
        </div>
      </div>

      <div
        className={cn(
          "bg-separator my-6 h-[1.5px] w-full md:my-4 lg:my-6",
          props.className
        )}
      />

      {data.sidebar.blocks && (
        <div
          ref={scrollRef}
          className={cn(
            "flex min-h-0 flex-1 scrollbar-none overflow-y-auto",
            props.className
          )}
        >
          <div className="flex h-max w-full flex-col gap-2 md:items-center lg:items-stretch 2xl:gap-3">
            {data.sidebar.blocks.map(
              (block) =>
                block && (
                  <Link
                    key={block.label}
                    href={block.action}
                    data-cursor="pointer"
                    data-tina-field={tinaField(block, "action")}
                  >
                    <div className="hover:shadow-control flex w-full items-center gap-2 px-4 py-2 text-base text-nowrap duration-300 md:w-fit md:text-sm lg:w-full lg:px-1 xl:gap-4 xl:px-2 2xl:px-4 2xl:text-lg">
                      <div
                        className="bg-surface-muted rounded-control grid size-10 shrink-0 grow-0 place-content-center 2xl:size-12"
                        data-tina-field={tinaField(block, "icon")}
                      >
                        <Icon
                          name={block.icon as keyof typeof Icon}
                          className="size-5.5 2xl:size-6"
                        />
                      </div>
                      <div
                        className="flex flex-col md:hidden lg:flex 2xl:ml-2"
                        data-tina-field={tinaField(block, "text")}
                      >
                        <span
                          className="text-muted-foreground font-label text-xs md:text-sm lg:text-xs 2xl:text-sm"
                          data-tina-field={tinaField(block, "label")}
                        >
                          {block.label}
                        </span>
                        {block.text}
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      )}

      {showBottomFade && (
        <div className="bg-surface-fade pointer-events-none absolute right-0 bottom-0 left-0 hidden h-14 mask-[linear-gradient(to_bottom,transparent,#000_85%)] lg:block" />
      )}
    </>
  );
};

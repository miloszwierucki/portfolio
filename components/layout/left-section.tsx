"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import Image from "next/image";

import Icon from "@/components/ui/icon";
import { Link } from "@/i18n/navigation";
import {
  SidebarQuery,
  SidebarQueryVariables,
} from "@/tina/__generated__/types";
import { cn } from "@/lib/utils";

export const LeftSection = (props: {
  data: SidebarQuery;
  variables: SidebarQueryVariables;
  query: string;
  className?: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 md:gap-2 lg:gap-4",
          props.className
        )}
      >
        <div
          className="bg-cod-gray-200/20 mt-2 grid aspect-square w-3/5 place-content-center overflow-hidden rounded-xl shadow-lg"
          data-tina-field={tinaField(data.sidebar, "image")}
        >
          {data.sidebar.image && (
            <Image
              className="pointer-events-none mx-auto w-11/12 object-contain drop-shadow-lg saturate-[1.25]"
              src={data.sidebar.image}
              alt="Person profile picture"
              width={400}
              height={400}
              loading="eager"
            />
          )}
        </div>

        <h1
          className="font-jakarta text-center text-3xl font-semibold md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl"
          data-tina-field={tinaField(data.sidebar, "name")}
        >
          {data.sidebar.name}
        </h1>

        <div
          className="dark:before:bg-[linear-gradient(45deg,transparent_25%,var(--color-white)_50%,transparent_75%,transparent_100%)]/50 bg-cod-gray-200/10 before:animate-backgroundMove dark:bg-cod-gray-200/5 relative inline-flex justify-center rounded-lg px-3.5 py-2.5 text-center text-sm font-medium whitespace-nowrap text-slate-800 shadow before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,var(--color-white)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat focus:ring focus:ring-slate-500/50 focus:outline-none focus-visible:ring focus-visible:ring-slate-500/50 focus-visible:outline-none md:text-xs md:whitespace-normal lg:whitespace-nowrap 2xl:text-sm dark:text-neutral-200"
          data-tina-field={tinaField(data.sidebar, "role")}
        >
          {data.sidebar.role}
        </div>
      </div>

      <div
        className={cn(
          "bg-cod-gray-200/40 dark:bg-cod-gray-200/15 my-6 h-[1.5px] w-full md:my-4 lg:my-6",
          props.className
        )}
      />

      {data.sidebar.blocks && (
        <div
          className={cn(
            "flex flex-1 scrollbar-none overflow-y-scroll",
            props.className
          )}
        >
          <div className="mb-10 flex h-max w-full flex-col gap-2 md:items-center lg:items-stretch 2xl:gap-3">
            {data.sidebar.blocks.map(
              (block) =>
                block && (
                  <Link
                    key={block.label}
                    href={block.action}
                    data-cursor="pointer"
                    data-tina-field={tinaField(block, "action")}
                  >
                    <div className="flex w-full items-center gap-2 px-4 py-2 text-base text-nowrap duration-300 hover:shadow-sm md:w-fit md:text-sm lg:w-full lg:px-1 xl:gap-4 xl:px-2 2xl:px-4 2xl:text-lg">
                      <div
                        className="bg-cod-gray-200/10 dark:bg-cod-gray-200/5 grid size-10 shrink-0 grow-0 place-content-center rounded-lg 2xl:size-12"
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
                          className="text-xs text-neutral-500 md:text-sm lg:text-xs 2xl:text-sm"
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
    </>
  );
};

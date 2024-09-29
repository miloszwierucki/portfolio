"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import Image from "next/image";
import Link from "next/link";

import { defaultCursor, pointerCursor } from "@/lib/cursor";
import Icon from "@/components/ui/icon";
import {
  SidebarQuery,
  SidebarQueryVariables,
} from "@/tina/__generated__/types";

export const LeftSection = (props: {
  data: SidebarQuery;
  variables: SidebarQueryVariables;
  query: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div
          className="mt-2 grid aspect-square w-3/5 place-content-center overflow-hidden rounded-xl bg-cod-gray-200/20 shadow-lg"
          data-tina-field={tinaField(data.sidebar, "image")}
        >
          {data.sidebar.image && (
            <Image
              className="pointer-events-none mx-auto w-11/12 object-contain drop-shadow-lg saturate-[1.25]"
              src={data.sidebar.image}
              alt="Person profile picture"
              width={400}
              height={400}
            />
          )}
        </div>

        <h1
          className="text-center font-jakarta text-3xl font-semibold"
          data-tina-field={tinaField(data.sidebar, "name")}
        >
          {data.sidebar.name}
        </h1>

        <div
          className="relative inline-flex justify-center whitespace-nowrap rounded-lg bg-cod-gray-200/10 px-3.5 py-2.5 text-sm font-medium text-slate-800 shadow before:absolute before:inset-0 before:animate-backgroundMove before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 dark:bg-cod-gray-200/5 dark:text-neutral-200 dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)]"
          data-tina-field={tinaField(data.sidebar, "role")}
        >
          {data.sidebar.role}
        </div>
      </div>

      <div className="my-6 h-[1.5px] w-full bg-cod-gray-200/40 dark:bg-cod-gray-200/15"></div>

      {data.sidebar.blocks && (
        <div className="flex flex-1 overflow-y-scroll scrollbar-none">
          <div className="flex w-full flex-col gap-2 md:gap-3">
            {data.sidebar.blocks.map(
              (block) =>
                block && (
                  <Link
                    key={block.label}
                    href={block.action}
                    onMouseEnter={pointerCursor}
                    onMouseLeave={defaultCursor}
                    data-tina-field={tinaField(block, "action")}
                  >
                    <div className="flex w-full items-center gap-2 rounded-md px-4 py-2 text-base duration-300 hover:shadow-md md:gap-4 md:text-lg">
                      <div
                        className="grid size-10 shrink-0 grow-0 place-content-center rounded-lg bg-cod-gray-200/10 md:size-12 dark:bg-cod-gray-200/5"
                        data-tina-field={tinaField(block, "icon")}
                      >
                        <Icon name={block.icon as keyof typeof Icon} />
                      </div>
                      <div
                        className="ml-2 flex flex-col"
                        data-tina-field={tinaField(block, "text")}
                      >
                        <span
                          className="text-xs text-neutral-500 md:text-sm"
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

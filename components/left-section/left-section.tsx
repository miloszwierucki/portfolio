"use client";

// import Image from "next/image";
import { useTina, tinaField } from "tinacms/dist/react";
import { MousePointer2, Pointer } from "lucide-react";

import {
  SidebarQuery,
  SidebarQueryVariables,
} from "@/tina/__generated__/types";
import Link from "next/link";
import Icon from "../icon";
import { useCursorStore } from "../custom-cursor";
// import ShinyButton from "../shiny-box";

export const LeftSection = (props: {
  data: SidebarQuery;
  variables: SidebarQueryVariables;
  query: string;
}) => {
  const changeCursor = useCursorStore((state) => state.changeCursor);
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  function socialEnter() {
    changeCursor(<Pointer size={28} strokeWidth={1} />);
  }

  function socialLeave() {
    changeCursor(<MousePointer2 size={28} strokeWidth={1} />);
  }

  return (
    <div className="flex h-[calc(100vh-18rem)] flex-col">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="mt-2 aspect-square w-3/5 rounded-xl bg-cod-gray-900 shadow-lg"></div>
        {/* <Image
          className="w-3/5 rounded-xl"
          src={photo}
          alt="Miłosz"
          width={100}
          height={100}
        /> */}
        <h1
          className="text-center text-3xl font-semibold"
          data-tina-field={tinaField(data.sidebar, "name")}
        >
          {data.sidebar.name}
        </h1>

        <div
          className="before:animate-backgroundMove relative inline-flex justify-center whitespace-nowrap rounded-lg bg-slate-200 px-3.5 py-2.5 text-sm font-medium text-slate-800 shadow before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 dark:bg-cod-gray-200/5 dark:text-slate-200 dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)]"
          data-tina-field={tinaField(data.sidebar, "role")}
        >
          {data.sidebar.role}
        </div>
      </div>

      <div className="my-6 h-[1px] w-full bg-slate-200/50 dark:bg-cod-gray-900"></div>

      {data.sidebar.blocks && (
        <div className="flex grow overflow-y-auto scrollbar-none">
          <div className="flex flex-col gap-3">
            {data.sidebar.blocks.map(
              (block) =>
                block && (
                  <Link
                    key={block.label}
                    href={block.action}
                    onMouseEnter={socialEnter}
                    onMouseLeave={socialLeave}
                    data-tina-field={tinaField(block, "action")}
                  >
                    <div className="flex items-center gap-4 rounded-md px-4 py-2 text-lg duration-300 hover:shadow-md">
                      <div
                        className="grid h-12 w-12 place-content-center rounded-lg bg-cod-gray-200/5"
                        data-tina-field={tinaField(block, "icon")}
                      >
                        <Icon name={block.icon as keyof typeof Icon} />
                      </div>
                      <div
                        className="ml-2 flex flex-col"
                        data-tina-field={tinaField(block, "text")}
                      >
                        <span
                          className="text-sm opacity-50"
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
    </div>
  );
};

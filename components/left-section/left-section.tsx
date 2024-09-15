"use client";

// import Image from "next/image";
import { useTina, tinaField } from "tinacms/dist/react";

import {
  SidebarQuery,
  SidebarQueryVariables,
} from "@/tina/__generated__/types";
import Link from "next/link";
import Icon from "../icon";
// import ShinyButton from "../shiny-box";

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
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="aspect-square w-3/5 rounded-xl bg-cod-gray-900 shadow-lg"></div>
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
      </div>
      {/* <ShinyButton
        className="text-sm"
        data-tina-field={tinaField(data.sidebar, "role")}
        text={data.sidebar.role}
      /> */}
      {data.sidebar.blocks && (
        <div className="flex flex-col gap-2">
          {data.sidebar.blocks.map(
            (block) =>
              block && (
                <Link key={block.label} href={block.action}>
                  <div className="flex items-center gap-4 px-4 py-2 shadow-md">
                    <div className="size-12 rounded-lg bg-cod-gray-100">
                      <Icon name={block.icon as keyof typeof Icon} />
                    </div>
                    <span className="ml-2">{block.label}</span>
                  </div>
                </Link>
              )
          )}
        </div>
      )}
    </div>
  );
};

"use client";

import { defaultCursor, pointerCursor } from "@/lib/cursor";
import { PageQuery, PageQueryVariables } from "@/tina/__generated__/types";
import Link from "next/link";
import { useTina, tinaField } from "tinacms/dist/react";
import { Components, TinaMarkdown } from "tinacms/dist/rich-text";
import BlurFade from "../ui/blur-fade";

export const HomePage = (props: {
  data: PageQuery;
  variables: PageQueryVariables;
  query: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const components: Components<{
    a: { url: string; children: React.ReactNode };
  }> = {
    a: (props) => (
      <Link
        onMouseEnter={pointerCursor}
        onMouseLeave={defaultCursor}
        href={props!.url}
        className="hover:underline hover:underline-offset-4"
      >
        {props!.children}
      </Link>
    ),
  };

  return (
    <div className="flex flex-col">
      <h1 className="relative mb-2 w-fit font-jakarta text-2xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-3/4 after:rounded-md after:bg-cod-gray-200/20 after:content-[''] after:dark:bg-zinc-900/20">
        O mnie
      </h1>
      <div
        data-tina-field={tinaField(data.page, "body")}
        className="markdown whitespace-pre-line text-lg"
      >
        <BlurFade inView>
          <TinaMarkdown content={data.page.body} components={components} />
        </BlurFade>
      </div>
    </div>
  );
};

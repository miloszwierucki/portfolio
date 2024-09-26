"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { MarkdownComponents } from "@/components/markdown-components";
import { defaultCursor, pointerCursor } from "@/lib/cursor";
import BlurFade from "@/components/ui/blur-fade";
import {
  PrivacyQuery,
  PrivacyQueryVariables,
} from "@/tina/__generated__/types";

export const PrivacyPage = (props: {
  data: PrivacyQuery;
  variables: PrivacyQueryVariables;
  query: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll pb-5 scrollbar-thin scrollbar-thumb-transparent">
      <h1
        className="relative mb-7 w-fit font-jakarta text-3xl font-semibold after:absolute after:-bottom-3 after:left-0 after:h-2 after:w-3/4 after:rounded-sm after:bg-cod-gray-200/10 after:content-[''] dark:after:dark:bg-cod-gray-200/5"
        data-tina-field={tinaField(data.privacy, "title")}
      >
        {data.privacy.title}
      </h1>

      <div className="flex flex-1 flex-col px-3">
        {data.privacy.description && (
          <BlurFade inView>
            <div
              data-tina-field={tinaField(data.privacy, "description")}
              className="markdown whitespace-pre-line text-lg"
            >
              <TinaMarkdown
                content={data.privacy.description}
                components={MarkdownComponents(pointerCursor, defaultCursor)}
              />
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
};

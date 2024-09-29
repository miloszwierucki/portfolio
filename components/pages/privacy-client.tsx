"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { MarkdownComponents } from "@/components/markdown-components";
import { defaultCursor, pointerCursor } from "@/lib/cursor";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";
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
      <Header content={data.privacy} />

      <div className="flex flex-1 flex-col px-1 md:px-3">
        {data.privacy.description && (
          <BlurFade>
            <div
              data-tina-field={tinaField(data.privacy, "description")}
              className="markdown whitespace-pre-line text-base md:text-lg"
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

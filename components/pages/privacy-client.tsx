"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { MarkdownComponents } from "@/components/markdown-components";
import { ScrollArea } from "@/components/layout/scroll-area";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";

import { PrivacyQuery, PrivacyQueryVariables } from "@tina/__generated__/types";

export const PrivacyPage = (props: {
  data: PrivacyQuery;
  variables: PrivacyQueryVariables;
  query: string;
  className?: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", props.className)}>
      <Header content={data.privacy} />

      <ScrollArea className="flex flex-col px-1 pb-5 md:px-2 xl:px-3">
        {data.privacy.description && (
          <BlurFade>
            <div
              data-tina-field={tinaField(data.privacy, "description")}
              className="markdown text-base whitespace-pre-line 2xl:text-lg"
            >
              <TinaMarkdown
                content={data.privacy.description}
                components={MarkdownComponents()}
              />
            </div>
          </BlurFade>
        )}
      </ScrollArea>
    </div>
  );
};

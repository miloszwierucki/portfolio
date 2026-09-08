"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useState } from "react";

import { ExpandableCardGrid } from "@/components/ui/ext-cards-grid";
import { ProjectFilter } from "@/components/ui/project-filter";
import {
  PortfolioQuery,
  PortfolioQueryVariables,
} from "@/tina/__generated__/types";
import { MarkdownComponents } from "@/components/markdown-components";
import { defaultCursor, pointerCursor } from "@/lib/cursor";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";

export const PortfolioPage = (props: {
  data: PortfolioQuery;
  variables: PortfolioQueryVariables;
  query: string;
  className?: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const [activeType, setActiveType] = useState<string | null>(null);
  const shownProjects = activeType
    ? data.portfolio.projects?.filter(
        (project) => project && project.type === activeType
      )
    : data.portfolio.projects;

  const types = [
    "all",
    ...Array.from(
      new Set(
        data.portfolio.projects
          ?.map((project) => project && project.type)
          .filter((type) => type !== null)
      )
    ),
  ];

  return (
    <div
      className={cn(
        "scrollbar-thumb-cod-gray-200 dark:scrollbar-thumb-cod-gray-200 flex flex-1 scrollbar-thin scrollbar-track-transparent flex-col overflow-y-auto pb-5",
        props.className
      )}
    >
      <Header content={data.portfolio} />

      <div className="flex px-1 md:px-2 xl:px-3">
        {data.portfolio.description && (
          <BlurFade>
            <div
              data-tina-field={tinaField(data.portfolio, "description")}
              className="markdown text-base whitespace-pre-line 2xl:text-lg"
            >
              <TinaMarkdown
                content={data.portfolio.description}
                components={MarkdownComponents(pointerCursor, defaultCursor)}
              />
            </div>
          </BlurFade>
        )}
      </div>

      {shownProjects && shownProjects.length > 0 && (
        <div className="flex flex-col gap-4 md:gap-2 2xl:gap-4">
          {types && (
            <ProjectFilter
              types={types}
              activeType={activeType}
              setActiveType={setActiveType}
            />
          )}
          <ExpandableCardGrid data={shownProjects} />
        </div>
      )}
    </div>
  );
};

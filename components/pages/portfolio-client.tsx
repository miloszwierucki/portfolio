"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useState } from "react";

import { MarkdownComponents } from "@/components/markdown-components";
import { ExpandableCardGrid } from "@/components/ui/ext-cards-grid";
import { ProjectFilter } from "@/components/ui/project-filter";
import { ScrollArea } from "@/components/layout/scroll-area";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";

import {
  PortfolioQuery,
  PortfolioQueryVariables,
} from "@tina/__generated__/types";

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
    <div className={cn("flex min-h-0 flex-1 flex-col", props.className)}>
      <Header content={data.portfolio} />

      {data.portfolio.description && (
        <BlurFade>
          <div
            data-tina-field={tinaField(data.portfolio, "description")}
            className="markdown px-1 text-base whitespace-pre-line md:px-2 xl:px-3 2xl:text-lg"
          >
            <TinaMarkdown
              content={data.portfolio.description}
              components={MarkdownComponents()}
            />
          </div>
        </BlurFade>
      )}

      {data.portfolio.projects && data.portfolio.projects.length > 0 && (
        <ProjectFilter
          types={types}
          activeType={activeType}
          setActiveType={setActiveType}
        />
      )}

      <ScrollArea className="pb-5">
        {shownProjects && shownProjects.length > 0 && (
          <ExpandableCardGrid data={shownProjects} />
        )}
      </ScrollArea>
    </div>
  );
};

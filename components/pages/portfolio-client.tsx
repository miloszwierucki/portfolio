"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { useEffect, useState } from "react";

import { ExpandableCardGrid } from "@/components/ui/ext-cards-grid";
import { ProjectFilter } from "@/components/ui/project-filter";
import {
  PortfolioQuery,
  PortfolioQueryVariables,
} from "@/tina/__generated__/types";
import { MarkdownComponents } from "../markdown-components";
import { defaultCursor, pointerCursor } from "@/lib/cursor";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import BlurFade from "../ui/blur-fade";

export const PortfolioPage = (props: {
  data: PortfolioQuery;
  variables: PortfolioQueryVariables;
  query: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const [shownProjects, setShownProjects] = useState<
    PortfolioQuery["portfolio"]["projects"]
  >(data.portfolio.projects || []);
  const [activeType, setActiveType] = useState<string | null>(null);

  const types = [
    "all",
    ...Array.from(
      new Set(
        shownProjects
          ?.map((project) => project && project.type)
          .filter((type) => type !== null)
      )
    ),
  ];

  useEffect(() => {
    activeType
      ? setShownProjects(
          data.portfolio.projects?.filter(
            (project) => project && project.type === activeType
          )
        )
      : setShownProjects(data.portfolio.projects);
  }, [activeType]);

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll pb-5 scrollbar-thin scrollbar-thumb-transparent">
      <h1
        className="relative mb-7 w-fit font-jakarta text-3xl font-semibold after:absolute after:-bottom-3 after:left-0 after:h-2 after:w-3/4 after:rounded-sm after:bg-cod-gray-200/10 after:content-[''] dark:after:dark:bg-cod-gray-200/5"
        data-tina-field={tinaField(data.portfolio, "title")}
      >
        {data.portfolio.title}
      </h1>

      {data.portfolio.description && (
        <BlurFade inView>
          <div
            data-tina-field={tinaField(data.portfolio, "description")}
            className="markdown whitespace-pre-line text-lg"
          >
            <TinaMarkdown
              content={data.portfolio.description}
              components={MarkdownComponents(pointerCursor, defaultCursor)}
            />
          </div>
        </BlurFade>
      )}

      {shownProjects && shownProjects.length > 0 && (
        <div className="flex flex-col gap-4">
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

"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useEffect, useState } from "react";

import { ExpandableCardGrid } from "@/components/ui/ext-cards-grid";
import { ProjectFilter } from "@/components/ui/project-filter";
import {
  PortfolioQuery,
  PortfolioQueryVariables,
} from "@/tina/__generated__/types";
import { MarkdownComponents } from "../markdown-components";
import { defaultCursor, pointerCursor } from "@/lib/cursor";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";

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
        data.portfolio.projects
          ?.map((project) => project && project.type)
          .filter((type) => type !== null)
      )
    ),
  ];

  useEffect(() => {
    if (activeType) {
      setShownProjects(
        data.portfolio.projects?.filter(
          (project) => project && project.type === activeType
        )
      );
    } else {
      setShownProjects(data.portfolio.projects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeType]);

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll pb-5 scrollbar-thin scrollbar-thumb-transparent">
      <Header content={data.portfolio} />

      <div className="flex px-1 md:px-2 xl:px-3">
        {data.portfolio.description && (
          <BlurFade>
            <div
              data-tina-field={tinaField(data.portfolio, "description")}
              className="markdown whitespace-pre-line text-base xl:text-lg"
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
        <div className="flex flex-col gap-4 md:gap-2 xl:gap-4">
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

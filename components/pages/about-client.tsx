"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { CircleDotDashed } from "lucide-react";
import { useRef } from "react";

import { MarkdownComponents } from "@/components/markdown-components";
import { ScrollArea } from "@/components/layout/scroll-area";
import { Copyright } from "@/components/layout/copyright";
import { Timeline } from "@/components/ui/timeline";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

import { AboutQuery, AboutQueryVariables } from "@tina/__generated__/types";

export const AboutPage = (props: {
  data: AboutQuery;
  variables: AboutQueryVariables;
  query: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", props.className)}>
      <Header content={data.about} />

      <ScrollArea
        ref={containerRef}
        className="flex flex-col px-1 pb-5 md:px-2 xl:px-3"
      >
        {data.about.description && (
          <BlurFade>
            <div
              data-tina-field={tinaField(data.about, "description")}
              className="markdown text-base whitespace-pre-line 2xl:text-lg"
            >
              <TinaMarkdown
                content={data.about.description}
                components={MarkdownComponents()}
              />
            </div>
          </BlurFade>
        )}

        {data.about.timeline && (
          <Timeline containerRef={containerRef}>
            {data.about.timeline.map(
              (timeline, i) =>
                timeline && (
                  <BlurFade inView key={i}>
                    <div className="font-heading mt-2 mb-3 flex w-fit items-center gap-3 text-xl font-medium xl:mt-3 xl:mb-4 xl:gap-4 xl:text-2xl 2xl:mt-4 2xl:mb-6 2xl:text-[1.75rem]">
                      {timeline.icon && (
                        <div className="bg-icon-surface rounded-control grid size-8 shrink-0 grow-0 place-content-center xl:size-9 2xl:size-10">
                          <Icon
                            name={timeline.icon as keyof typeof Icon}
                            data-tina-field={tinaField(timeline, "icon")}
                            className="size-4 xl:size-5 2xl:size-6"
                          />
                        </div>
                      )}
                      <h2 data-tina-field={tinaField(timeline, "title")}>
                        {timeline.title}
                      </h2>
                    </div>

                    {timeline.items &&
                      timeline.items.map((item, index) => (
                        <article
                          key={`content-${index}`}
                          className={`group ml-1.5 flex flex-row space-x-6 xl:mt-0 xl:ml-2 xl:space-x-8 ${i === timeline.items!.length - 1 ? "mb-4" : "mb-7"}`}
                        >
                          <CircleDotDashed
                            className="group-hover:animate-spin-slow z-50 size-5 shrink-0 grow-0 2xl:size-6"
                            stroke="var(--subtle-foreground)"
                          />

                          <div className="flex flex-col">
                            <h3
                              className="font-company w-fit text-lg font-semibold 2xl:text-xl"
                              data-tina-field={tinaField(item, "company")}
                            >
                              <span className="rounded-highlight -ml-2 bg-[linear-gradient(to_top,var(--company-highlight)_50%,transparent_50%)] box-decoration-clone px-2">
                                {item?.company}
                              </span>
                            </h3>

                            <p
                              className="text-subtle-foreground font-period mb-2 text-xs font-medium xl:text-sm 2xl:text-base"
                              data-tina-field={tinaField(item, "period")}
                            >
                              {item?.period}
                            </p>

                            <div
                              data-tina-field={tinaField(item, "description")}
                              className="markdown text-sm whitespace-pre-line xl:text-base 2xl:text-lg"
                            >
                              <TinaMarkdown
                                content={item?.description}
                                components={MarkdownComponents()}
                              />
                            </div>
                          </div>
                        </article>
                      ))}
                  </BlurFade>
                )
            )}
          </Timeline>
        )}

        <Copyright />
      </ScrollArea>
    </div>
  );
};

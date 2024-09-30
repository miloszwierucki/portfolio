"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { CircleDotDashed } from "lucide-react";
import { useRef } from "react";

import { AboutQuery, AboutQueryVariables } from "@/tina/__generated__/types";
import { MarkdownComponents } from "@/components/markdown-components";
import { defaultCursor, pointerCursor } from "@/lib/cursor";
import { Timeline } from "@/components/ui/timeline";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";
import Icon from "@/components/ui/icon";

export const AboutPage = (props: {
  data: AboutQuery;
  variables: AboutQueryVariables;
  query: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div
      className="flex flex-1 flex-col overflow-y-scroll pb-5 scrollbar-thin scrollbar-thumb-transparent"
      ref={containerRef}
    >
      <Header content={data.about} />

      <div className="flex flex-1 flex-col px-1 md:px-2 xl:px-3">
        {data.about.description && (
          <BlurFade>
            <div
              data-tina-field={tinaField(data.about, "description")}
              className="markdown whitespace-pre-line text-base xl:text-lg"
            >
              <TinaMarkdown
                content={data.about.description}
                components={MarkdownComponents(pointerCursor, defaultCursor)}
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
                    <div className="mb-3 mt-2 flex w-fit items-center gap-3 font-jakarta text-xl font-medium xl:mb-6 xl:mt-4 xl:gap-4 xl:text-[1.75rem]">
                      {timeline.icon && (
                        <div className="grid size-8 shrink-0 grow-0 place-content-center rounded-lg bg-[#F2F2F1] xl:size-10 dark:bg-[#2E3031]">
                          <Icon
                            name={timeline.icon as keyof typeof Icon}
                            data-tina-field={tinaField(timeline, "icon")}
                            className="size-4 xl:size-[24px]"
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
                          className={`group ml-1.5 flex flex-row space-x-6 xl:ml-2 xl:mt-0 xl:space-x-8 ${i === timeline.items!.length - 1 ? "mb-4" : "mb-7"}`}
                        >
                          <CircleDotDashed
                            className="z-50 size-5 shrink-0 grow-0 group-hover:animate-spin-slow xl:size-[24px]"
                            stroke="var(--cod-gray-400)"
                          />

                          <div className="flex flex-col">
                            <h3
                              className="relative w-fit font-jakarta text-lg font-semibold after:absolute after:-bottom-0.5 after:-left-2 after:-z-10 after:h-3/5 after:w-[calc(100%_+_1rem)] after:rounded-sm after:bg-cod-gray-200/10 after:content-[''] xl:text-xl dark:after:dark:bg-cod-gray-200/5"
                              data-tina-field={tinaField(item, "company")}
                            >
                              {item?.company}
                            </h3>

                            <p
                              className="mb-2 text-sm font-medium text-cod-gray-400 xl:text-lg"
                              data-tina-field={tinaField(item, "period")}
                            >
                              {item?.period}
                            </p>

                            <div
                              data-tina-field={tinaField(item, "description")}
                              className="markdown whitespace-pre-line text-sm xl:text-lg"
                            >
                              <TinaMarkdown
                                content={item?.description}
                                components={MarkdownComponents(
                                  pointerCursor,
                                  defaultCursor
                                )}
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
      </div>

      <div className="self-end text-xs opacity-60">
        Designed & Developed by Miłosz Wierucki ©2024
      </div>
    </div>
  );
};

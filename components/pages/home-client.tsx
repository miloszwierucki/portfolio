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
import Icon from "@/components/ui/icon";

export const HomePage = (props: {
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
      <h1
        className="relative mb-7 w-fit font-jakarta text-3xl font-semibold after:absolute after:-bottom-3 after:left-0 after:h-2 after:w-3/4 after:rounded-sm after:bg-cod-gray-200/10 after:content-[''] dark:after:dark:bg-cod-gray-200/5"
        data-tina-field={tinaField(data.about, "title")}
      >
        {data.about.title}
      </h1>

      <div className="flex flex-1 flex-col px-3">
        {data.about.description && (
          <BlurFade inView>
            <div
              data-tina-field={tinaField(data.about, "description")}
              className="markdown whitespace-pre-line text-lg"
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
                    <div className="mb-6 mt-4 flex w-fit items-center gap-4 font-jakarta text-[1.75rem] font-medium">
                      {timeline.icon && (
                        <div className="grid size-10 shrink-0 grow-0 place-content-center rounded-lg bg-[#F2F2F1] dark:bg-[#2E3031]">
                          <Icon
                            name={timeline.icon as keyof typeof Icon}
                            data-tina-field={tinaField(timeline, "icon")}
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
                          className={`group ml-2 flex flex-row space-x-8 ${i === timeline.items!.length - 1 ? "mb-4" : "mb-7"}`}
                        >
                          <CircleDotDashed
                            className="z-50 shrink-0 grow-0 group-hover:animate-spin-slow"
                            stroke="var(--cod-gray-400)"
                          />

                          <div className="flex flex-col">
                            <h3
                              className="relative w-fit font-jakarta text-xl font-semibold after:absolute after:-bottom-0.5 after:-left-2 after:-z-10 after:h-3/5 after:w-[calc(100%_+_1rem)] after:rounded-sm after:bg-cod-gray-200/10 after:content-[''] dark:after:dark:bg-cod-gray-200/5"
                              data-tina-field={tinaField(item, "company")}
                            >
                              {item?.company}
                            </h3>

                            <p
                              className="mb-2 text-lg font-medium text-cod-gray-400"
                              data-tina-field={tinaField(item, "period")}
                            >
                              {item?.period}
                            </p>

                            <div
                              data-tina-field={tinaField(item, "description")}
                              className="markdown whitespace-pre-line text-lg"
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

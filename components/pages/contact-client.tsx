"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useRef } from "react";

import { MarkdownComponents } from "@/components/markdown-components";
import { ContactForm } from "@/components/layout/contact-form";
import { defaultCursor, pointerCursor } from "@/lib/cursor";
import BlurFade from "@/components/ui/blur-fade";
import {
  ContactQuery,
  ContactQueryVariables,
} from "@/tina/__generated__/types";

export const ContactPage = (props: {
  data: ContactQuery;
  variables: ContactQueryVariables;
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
        data-tina-field={tinaField(data.contact, "title")}
      >
        {data.contact.title}
      </h1>

      <div className="flex h-full flex-col gap-4 px-3">
        {data.contact.description && (
          <BlurFade inView>
            <div
              data-tina-field={tinaField(data.contact, "description")}
              className="markdown whitespace-pre-line text-lg"
            >
              <TinaMarkdown
                content={data.contact.description}
                components={MarkdownComponents(pointerCursor, defaultCursor)}
              />
            </div>
          </BlurFade>
        )}

        <BlurFade inView>
          <ContactForm
            className="px-1 py-2"
            email={data.contact.email}
            name={data.contact.name}
            message={data.contact.message}
            privacy={data.contact.privacy}
            button={data.contact.button}
          />
        </BlurFade>
      </div>

      <div className="self-end text-xs opacity-60">
        Designed & Developed by Miłosz Wierucki ©2024
      </div>
    </div>
  );
};

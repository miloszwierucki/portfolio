"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useRef } from "react";

import { MarkdownComponents } from "@/components/markdown-components";
import { ContactForm } from "@/components/layout/contact-form";
import { defaultCursor, pointerCursor } from "@/lib/cursor";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";
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
      <Header content={data.contact} />

      <div className="flex h-full flex-col gap-4 px-1 md:px-2 xl:px-3">
        {data.contact.description && (
          <BlurFade>
            <div
              data-tina-field={tinaField(data.contact, "description")}
              className="markdown whitespace-pre-line text-base xl:text-lg"
            >
              <TinaMarkdown
                content={data.contact.description}
                components={MarkdownComponents(pointerCursor, defaultCursor)}
              />
            </div>
          </BlurFade>
        )}

        <BlurFade>
          <ContactForm
            className="mb-6 px-1 py-2 lg:mb-0"
            email={data.contact.email}
            name={data.contact.name}
            message={data.contact.message}
            privacy={data.contact.privacy}
            button={data.contact.button}
          />
        </BlurFade>
      </div>

      <div className="hidden self-end text-xs opacity-60 lg:block">
        Designed & Developed by Miłosz Wierucki ©2024
      </div>
    </div>
  );
};

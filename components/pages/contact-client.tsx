"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { MarkdownComponents } from "@/components/markdown-components";
import { ContactForm } from "@/components/layout/contact-form";
import { ScrollArea } from "@/components/layout/scroll-area";
import { Copyright } from "@/components/layout/copyright";
import BlurFade from "@/components/ui/blur-fade";
import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";

import { ContactQuery, ContactQueryVariables } from "@tina/__generated__/types";

export const ContactPage = (props: {
  data: ContactQuery;
  variables: ContactQueryVariables;
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
      <Header content={data.contact} />

      <ScrollArea className="flex flex-col gap-4 px-1 pb-5 md:px-2 xl:px-3">
        {data.contact.description && (
          <BlurFade>
            <div
              data-tina-field={tinaField(data.contact, "description")}
              className="markdown text-base whitespace-pre-line 2xl:text-lg"
            >
              <TinaMarkdown
                content={data.contact.description}
                components={MarkdownComponents()}
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
      </ScrollArea>

      <Copyright className="hidden lg:block" />
    </div>
  );
};

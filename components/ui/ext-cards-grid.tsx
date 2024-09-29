/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tinaField } from "tinacms/dist/react";

import { defaultCursor, discoveryCursor, pointerCursor } from "@/lib/cursor";
import { MarkdownComponents } from "@/components/markdown-components";
import { PortfolioQuery } from "@/tina/__generated__/types";
import { useOutsideClick } from "@/lib/use-outside-click";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { CodeXml, ExternalLink } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

export function ExpandableCardGrid({
  data,
}: {
  data: PortfolioQuery["portfolio"]["projects"];
}) {
  const [active, setActive] = useState<
    | {
        __typename: "PortfolioProjects";
        title: string;
        type?: string | null;
        image?: string | null;
        preview?: string | null;
        codeLink?: string | null;
        previewLink?: string | null;
        content?: any;
      }
    | null
    | boolean
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Background Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/15"
          />
        )}
      </AnimatePresence>

      {/* Expandable Card */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden rounded-2xl bg-zinc-50 shadow-lg ring-1 ring-cod-gray-200/20 backdrop-blur after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-cod-gray-100/5 after:content-[''] md:h-fit md:max-h-[90%] dark:bg-zinc-900 dark:ring-cod-gray-200/15"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                data-tina-field={tinaField(active, "image")}
              >
                {active.image && (
                  <div
                    style={
                      {
                        "--image-url": `url(${active.image})`,
                        "--preview-url": `url(${active.preview})`,
                      } as React.CSSProperties
                    }
                    className={cn(
                      "relative h-64 w-full overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-[image:var(--image-url)] bg-cover bg-top p-2 shadow-md md:h-80",
                      // Preload hover image by setting it in a pseudo-element
                      `before:absolute before:inset-0 before:z-[-1] before:bg-[image:var(--preview-url)] before:opacity-0`,
                      "hover:bg-[image:var(--preview-url)] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-15 hover:after:content-['']",
                      "transition-all duration-500"
                    )}
                  />
                )}
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      data-tina-field={tinaField(active, "title")}
                      className="font-jakarta text-base font-semibold"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`type-${active.title}-${id}`}
                      data-tina-field={tinaField(active, "type")}
                      className="text-base text-neutral-500"
                    >
                      {active.type}
                    </motion.p>
                  </div>

                  <div className="flex items-center gap-2">
                    {active.previewLink && (
                      <motion.a
                        layout
                        data-tina-field={tinaField(active, "previewLink")}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.previewLink}
                        onMouseEnter={pointerCursor}
                        onMouseLeave={defaultCursor}
                        target="_blank"
                        className="grid size-8 shrink-0 grow-0 place-content-center rounded-lg bg-cod-gray-200/10 transition-[background] duration-500 hover:bg-cod-gray-200/20 dark:bg-cod-gray-200/5"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {active.codeLink && (
                      <motion.a
                        layout
                        data-tina-field={tinaField(active, "codeLink")}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.codeLink}
                        onMouseEnter={pointerCursor}
                        onMouseLeave={defaultCursor}
                        target="_blank"
                        className="grid size-8 shrink-0 grow-0 place-content-center rounded-lg bg-cod-gray-200/10 transition-[background] duration-500 hover:bg-cod-gray-200/20 dark:bg-cod-gray-200/5"
                      >
                        <CodeXml size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="relative px-4">
                  <motion.div
                    layout
                    data-tina-field={tinaField(active, "content")}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-56 flex-col items-start gap-1 overflow-y-auto pb-8 scrollbar-none [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] md:h-fit"
                  >
                    <TinaMarkdown
                      content={active.content}
                      components={MarkdownComponents(
                        pointerCursor,
                        defaultCursor
                      )}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Cards */}
      <ul className="mx-auto grid w-full grid-cols-1 items-start gap-1 md:grid-cols-3 md:gap-2">
        {data &&
          data.map(
            (card, idx) =>
              card && (
                <BlurFade inView delay={0.25 + idx * 0.05} key={card.title}>
                  <motion.div
                    layoutId={`card-${card.title}-${id}`}
                    data-tina-field={tinaField(card, "title")}
                    onMouseEnter={discoveryCursor}
                    onMouseLeave={defaultCursor}
                    onClick={() => setActive(card)}
                    className="flex flex-col rounded-2xl p-2"
                  >
                    <div className="flex w-full flex-col gap-2">
                      <motion.div
                        layoutId={`image-${card.title}-${id}`}
                        data-tina-field={tinaField(card, "image")}
                      >
                        {card.image && (
                          <div
                            style={
                              {
                                "--image-url": `url(${card.image})`,
                                "--preview-url": `url(${card.preview})`,
                              } as React.CSSProperties
                            }
                            className={cn(
                              "relative h-52 w-full overflow-hidden rounded-2xl bg-[image:var(--image-url)] bg-cover bg-top p-2 shadow-lg md:h-60",
                              // Preload hover image by setting it in a pseudo-element
                              `before:absolute before:inset-0 before:z-[-1] before:bg-[image:var(--preview-url)] before:opacity-0`,
                              "hover:bg-[image:var(--preview-url)] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-15 hover:after:content-['']",
                              "transition-all duration-500"
                            )}
                          />
                        )}
                      </motion.div>
                      <div className="ml-2 flex flex-col items-start justify-center">
                        <motion.h3
                          layoutId={`title-${card.title}-${id}`}
                          data-tina-field={tinaField(card, "title")}
                          className="font-jakarta text-base font-semibold"
                        >
                          {card.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`type-${card.title}-${id}`}
                          data-tina-field={tinaField(card, "type")}
                          className="text-sm text-neutral-500"
                        >
                          {card.type}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </BlurFade>
              )
          )}
      </ul>
    </>
  );
}

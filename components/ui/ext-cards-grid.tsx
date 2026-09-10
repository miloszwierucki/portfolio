/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CSSProperties, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { CodeXml, ExternalLink } from "lucide-react";
import { tinaField } from "tinacms/dist/react";
import { createPortal } from "react-dom";

import { MarkdownComponents } from "@/components/markdown-components";
import { useOutsideClick } from "@/lib/use-outside-click";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

import { PortfolioQuery } from "@tina/__generated__/types";

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
      {typeof document !== "undefined" &&
        createPortal(
          <>
            <AnimatePresence>
              {active && typeof active === "object" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-overlay fixed inset-0 z-90"
                />
              )}
            </AnimatePresence>

            {/* Expandable Card */}
            <AnimatePresence>
              {active && typeof active === "object" ? (
                <div className="fixed inset-0 z-100 grid place-items-center p-4">
                  <motion.div
                    layoutId={`card-${active.title}-${id}`}
                    ref={ref}
                    role="dialog"
                    aria-modal="true"
                    aria-label={active.title}
                    className="ring-border after:bg-surface bg-surface-elevated rounded-panel grid max-h-[calc(100dvh-2rem)] w-full max-w-125 grid-rows-[auto_minmax(0,1fr)] overflow-hidden shadow-lg ring-1 backdrop-blur after:pointer-events-none after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:content-[''] md:max-h-[85dvh]"
                  >
                    <motion.div
                      layoutId={`image-${active.title}-${id}`}
                      data-tina-field={tinaField(active, "image")}
                      className="shrink-0"
                    >
                      {active.image && (
                        <div
                          style={
                            {
                              "--image-url": `url(${active.image})`,
                              "--preview-url": `url(${active.preview})`,
                            } as CSSProperties
                          }
                          className={cn(
                            "rounded-tl-media rounded-tr-media relative h-64 w-full overflow-hidden bg-(image:--image-url) bg-cover bg-top p-2 shadow-md xl:h-72 2xl:h-80",
                            // Preload hover image by setting it in a pseudo-element
                            `before:absolute before:inset-0 before:z-[-1] before:bg-(image:--preview-url) before:opacity-0`,
                            "hover:after:bg-overlay hover:bg-(image:--preview-url) hover:after:absolute hover:after:inset-0 hover:after:content-['']",
                            "transition-all duration-500"
                          )}
                        />
                      )}
                    </motion.div>

                    <div className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)]">
                      <div className="flex shrink-0 items-start justify-between px-4 py-3">
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
                            className="text-muted-foreground text-base"
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
                              data-cursor="pointer"
                              target="_blank"
                              className="bg-surface-muted hover:bg-surface-hover rounded-control grid size-8 shrink-0 grow-0 place-content-center transition-[background] duration-500"
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
                              data-cursor="pointer"
                              target="_blank"
                              className="bg-surface-muted hover:bg-surface-hover rounded-control grid size-8 shrink-0 grow-0 place-content-center transition-[background] duration-500"
                            >
                              <CodeXml size={20} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      <div className="scrollbar-thumb-scrollbar-thumb hover:scrollbar-thumb-scrollbar-thumb-hover scrollbar-track-scrollbar-track scrollbar-thumb-rounded-scrollbar relative min-h-0 scrollbar-thin scrollbar-gutter-stable overflow-y-auto px-4">
                        <motion.div
                          data-tina-field={tinaField(active, "content")}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-start gap-1 pr-1 pb-4"
                        >
                          <TinaMarkdown
                            content={active.content}
                            components={MarkdownComponents()}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : null}
            </AnimatePresence>
          </>,
          document.body
        )}

      {/* Cards */}
      <ul className="grid w-full grid-cols-1 items-start gap-1 md:grid-cols-2 md:gap-2 xl:grid-cols-3">
        {data &&
          data.map(
            (card, idx) =>
              card && (
                <BlurFade inView delay={0.25 + idx * 0.05} key={card.title}>
                  <motion.div
                    layoutId={`card-${card.title}-${id}`}
                    data-tina-field={tinaField(card, "title")}
                    data-cursor="discovery"
                    onClick={() => setActive(card)}
                    className="rounded-panel flex flex-col p-2"
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
                              } as CSSProperties
                            }
                            className={cn(
                              "rounded-media relative h-52 w-full overflow-hidden bg-(image:--image-url) bg-cover bg-top p-2 shadow-lg md:h-44 lg:h-56 xl:h-48 2xl:h-60",
                              // Preload hover image by setting it in a pseudo-element
                              `before:absolute before:inset-0 before:z-[-1] before:bg-(image:--preview-url) before:opacity-0`,
                              "hover:after:bg-overlay hover:bg-(image:--preview-url) hover:after:absolute hover:after:inset-0 hover:after:content-['']",
                              "transition-all duration-500"
                            )}
                          />
                        )}
                      </motion.div>
                      <div className="ml-2 flex flex-col items-start justify-center">
                        <motion.h3
                          layoutId={`title-${card.title}-${id}`}
                          data-tina-field={tinaField(card, "title")}
                          className="font-jakarta text-base font-semibold md:text-sm 2xl:text-base"
                        >
                          {card.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`type-${card.title}-${id}`}
                          data-tina-field={tinaField(card, "type")}
                          className="text-muted-foreground text-sm md:text-xs 2xl:text-sm"
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

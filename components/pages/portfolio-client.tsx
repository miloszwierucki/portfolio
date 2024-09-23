"use client";

// import { defaultCursor, pointerCursor } from "@/lib/cursor";
import {
  PortfolioQuery,
  PortfolioQueryVariables,
} from "@/tina/__generated__/types";
// import Link from "next/link";
import { useTina, tinaField } from "tinacms/dist/react";
import { ExpandableCardGrid } from "../ui/ext-cards-grid";
// import { Components, TinaMarkdown } from "tinacms/dist/rich-text";
// import BlurFade from "@/components/ui/blur-fade";
// import { Timeline } from "@/components/ui/timeline";
// import { useRef } from "react";
// import { CircleDotDashed } from "lucide-react";
// import Icon from "@/components/ui/icon";

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

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll pb-5 scrollbar-thin scrollbar-thumb-transparent">
      <h1
        className="relative mb-7 w-fit font-jakarta text-3xl font-semibold after:absolute after:-bottom-3 after:left-0 after:h-2 after:w-3/4 after:rounded-sm after:bg-cod-gray-200/10 after:content-[''] dark:after:dark:bg-cod-gray-200/5"
        data-tina-field={tinaField(data.portfolio, "title")}
      >
        {data.portfolio.title}
      </h1>

      {data.portfolio.projects && (
        <ExpandableCardGrid data={data.portfolio.projects} />
      )}
    </div>
  );
};

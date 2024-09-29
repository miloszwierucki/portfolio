import { Layers } from "lucide-react";
import React from "react";

import { filterCursor, defaultCursor } from "@/lib/cursor";

export const ProjectFilter = ({
  types,
  activeType,
  setActiveType,
}: {
  types: string[];
  activeType: string | null;
  setActiveType: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div className="inset-x-0 bottom-5 z-20 flex w-full items-center space-x-1 py-2 text-base md:px-4">
      <div className="w-max pr-1 text-neutral-500">Filter:</div>
      <div className="flex w-3/4 flex-1 overflow-x-scroll scrollbar-none">
        <div className="flex w-max flex-row items-center space-x-1">
          {types.map((type) => (
            <TagButton
              type={type}
              key={type}
              isActive={type === activeType}
              setActiveType={setActiveType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TagButton = ({
  type,
  isActive,
  setActiveType,
}: {
  type: string;
  isActive?: boolean;
  setActiveType: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <button
      className={`grid max-h-9 w-max place-content-center rounded-lg px-3 py-1.5 transition-[background] duration-500 hover:bg-cod-gray-200/20 md:py-2 ${
        isActive && "bg-cod-gray-200/20 font-medium"
      }`}
      onClick={() => {
        setActiveType(type === "all" ? null : type);
      }}
      onMouseEnter={filterCursor}
      onMouseLeave={defaultCursor}
    >
      {type === "all" ? <Layers size={20} strokeWidth={1.5} /> : type}
    </button>
  );
};

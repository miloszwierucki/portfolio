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
    <div className="inset-x-0 bottom-5 z-20 flex max-w-fit items-center justify-center space-x-1 px-4 py-2 text-base">
      <span className="text-neutral-500">Filter:</span>
      {types.map((type) => (
        <TagButton
          type={type}
          key={type}
          isActive={type === activeType}
          setActiveType={setActiveType}
        />
      ))}
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
      className={`grid max-h-9 place-content-center rounded-lg px-3 py-2 transition-[background] duration-500 hover:bg-cod-gray-200/20 ${
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

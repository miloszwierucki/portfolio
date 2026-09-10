import { Dispatch, SetStateAction } from "react";
import { Layers } from "lucide-react";

export const ProjectFilter = ({
  types,
  activeType,
  setActiveType,
}: {
  types: string[];
  activeType: string | null;
  setActiveType: Dispatch<SetStateAction<string | null>>;
}) => {
  return (
    <div className="font-label inset-x-0 bottom-5 z-20 flex w-full items-center space-x-1 py-2 text-sm md:px-2 lg:px-4 lg:py-0 2xl:py-2">
      <div className="text-muted-foreground w-max pr-1">Filter:</div>
      <div className="flex w-3/4 flex-1 scrollbar-none overflow-x-scroll">
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
  setActiveType: Dispatch<SetStateAction<string | null>>;
}) => {
  return (
    <button
      className={`hover:bg-surface-hover rounded-control grid max-h-9 w-max place-content-center px-3 py-1.5 transition-[background] duration-500 md:py-2 ${
        isActive && "bg-surface-hover font-medium"
      }`}
      onClick={() => {
        setActiveType(type === "all" ? null : type);
      }}
      data-cursor="filter"
    >
      {type === "all" ? <Layers size={20} strokeWidth={1.5} /> : type}
    </button>
  );
};

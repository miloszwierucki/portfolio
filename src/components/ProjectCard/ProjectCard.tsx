import { ProjectCardProps } from "./ProjectCard.types";
import { HiOutlineCode } from "react-icons/hi";
import { FC } from "react";

const ActionButton = ({ styles, text, href, state }: any) => {
  return (
    <button
      className={`${
        state && "hover:translate-y-[-0.2rem] duration-300"
      } ${styles}`}
    >
      {state ? (
        <a
          className="w-full h-full flex justify-center items-center"
          href={href}
        >
          {text}
        </a>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          {text}
        </div>
      )}
    </button>
  );
};

export const ProjectCard: FC<ProjectCardProps> = ({
  name,
  description,
  img,
  isCode,
  codeLink,
  previewLink,
  disable,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center w-[22.5rem] h-[34rem] bg-white rounded-2xl shadow-lg ${
        disable && "opacity-60 scale-90"
      } cursor-pointer duration-300`}
    >
      <img
        src={img}
        alt={`Photo of ${name}`}
        className="w-full h-60 rounded-t-2xl object-cover"
      />
      <div className="w-[18.75rem] text-center h-full">
        <h2 className="text-2xl font-semibold mt-6">{name}</h2>
        <p className="text-[1rem] mt-2">{description}</p>
      </div>
      <div className="flex justify-between mb-7 text-xl font-semibold w-[18.75rem] text-white">
        {isCode ? (
          <>
            <ActionButton
              styles="w-16 h-10 text-3xl rounded-md shadow-md text-black"
              text={<HiOutlineCode />}
              href={codeLink}
              state={!disable}
            />
            <ActionButton
              styles="w-2/3 h-10 rounded-md bg-gradient-to-tr from-teal-600 to-emerald-200 shadow-md"
              text="Live code"
              href={previewLink}
              state={!disable}
            />
          </>
        ) : (
          <ActionButton
            styles="w-full h-10 rounded-md bg-gradient-to-tr from-teal-600 to-emerald-200 shadow-md"
            text="Preview"
            href={previewLink}
            state={!disable}
          />
        )}
      </div>
    </div>
  );
};

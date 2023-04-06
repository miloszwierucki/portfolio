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
      className={`bg-white w-[22.5rem] h-[34rem] rounded-2xl shadow-lg flex flex-col items-center 3xl:w-[26.5rem] 3xl:h-[38rem] ${
        disable ? "opacity-60 scale-80 xl:scale-90" : "scale-90 xl:scale-100"
      } cursor-pointer duration-300`}
    >
      <img
        src={img}
        alt={`Photo of ${name}`}
        className="w-full h-60 rounded-t-2xl object-cover 3xl:h-64"
      />
      <div className="text-center w-[18.75rem] h-full 3xl:w-[23rem]">
        <h2 className="text-2xl font-semibold mt-6 3xl:text-[1.75rem]">
          {name}
        </h2>
        <p className="text-[1rem] mt-2 3xl:text-xl">{description}</p>
      </div>
      <div className="text-white text-xl font-semibold w-[18.75rem] mb-7 flex justify-between 3xl:w-[23rem]">
        {isCode ? (
          <>
            <ActionButton
              styles="text-black text-3xl w-16 h-10 rounded-md shadow-md 3xl:text-4xl 3xl:w-20 3xl:h-12"
              text={<HiOutlineCode />}
              href={codeLink}
              state={!disable}
            />
            <ActionButton
              styles="bg-gradient-to-tr from-teal-600 to-emerald-200 w-2/3 h-10 rounded-md  shadow-md 3xl:text-2xl 3xl:h-12"
              text="Live code"
              href={previewLink}
              state={!disable}
            />
          </>
        ) : (
          <ActionButton
            styles="bg-gradient-to-tr from-teal-600 to-emerald-200 w-full h-10 rounded-md  shadow-md 3xl:text-2xl 3xl:h-12"
            text="Preview"
            href={previewLink}
            state={!disable}
          />
        )}
      </div>
    </div>
  );
};

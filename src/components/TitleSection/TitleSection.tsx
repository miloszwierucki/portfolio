import { FC } from "react";

export const TitleSection: FC<TitleSectionProps> = ({ title, description }) => (
  <>
    <h2 className="text-[2.5rem] leading-9 font-bold px-5 md:px-12 lg:text-5xl xl:text-6xl xl:px-28 3xl:text-7xl 3xl:px-32">
      {title}
    </h2>
    <p className="text-lg px-5 mt-2 md:px-12 lg:text-xl xl:text-2xl xl:px-28 3xl:text-3xl 3xl:px-32">
      {description}
    </p>
  </>
);

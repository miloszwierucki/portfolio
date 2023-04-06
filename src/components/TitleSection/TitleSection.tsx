import { useTranslation } from "react-i18next";
import { FC } from "react";

export const TitleSection: FC<TitleSectionProps> = ({ title, description }) => {
  const { t } = useTranslation();

  return (
    <div className="px-5 md:px-12 xl:px-28 3xl:px-32">
      <h2 className="text-[2.5rem] leading-9 font-bold lg:text-5xl xl:text-6xl 3xl:text-7xl">
        {t(title)}
      </h2>
      <p className="text-lg mt-2 lg:text-xl xl:text-2xl 3xl:text-3xl">
        {t(description)}
      </p>
    </div>
  );
};

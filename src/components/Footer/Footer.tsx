import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#746E6E]">
      <div className="text-background text-xs border-background h-10 px-4 mx-5 mt-20 opacity-40 border-t flex justify-between items-center md:mx-12 lg:text-base lg:mt-36 xl:mx-24 xl:text-lg">
        <p>©2023 {t("footer.rights")}</p>
        <p>{t("footer.made")}</p>
      </div>
    </footer>
  );
};

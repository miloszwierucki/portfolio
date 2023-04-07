import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18n";
import { BsList } from "react-icons/bs";
import { useState } from "react";

const menuData = [
  {
    name: "projects",
    link: "#projects",
  },
  {
    name: "skills",
    link: "#skills",
  },
  {
    name: "contact",
    link: "#contact",
  },
];

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const body = document.querySelector("body");
  const { t } = useTranslation();

  if (isMenuOpen) {
    body?.classList.add("overflow-hidden");
  } else {
    body?.classList.remove("overflow-hidden");
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="px-5 pt-5 flex justify-between items-center md:px-12 md:pt-6 xl:px-28 xl:pt-8 3xl:px-32 3xl:pt-10">
      <div className="text-2xl font-semibold sm:text-3xl lg:text-4xl xl:text-[2.5rem] 3xl:text-[3.25rem]">
        Miłosz Wierucki
      </div>
      <nav className="relative">
        <ul
          className={`text-2xl flex items-center xl:text-2xl 3xl:text-4xl ${
            isMenuOpen
              ? "text-white w-full h-[100vh] bg-black left-0 top-0 flex-col justify-center  fixed z-[2]"
              : "hidden md:flex"
          }`}
        >
          {menuData.map(({ name, link }) => (
            <li
              key={name}
              className={`hover:scale-110 duration-300 ${
                isMenuOpen && "my-12"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <a
                href={link}
                className="rounded-md px-2 py-2 hover:shadow-sm 3xl:px-10 lg:px-4 lg:mx-2 duration-300"
              >
                {t(name)}
              </a>
            </li>
          ))}
          <li className="text-gray-300 text-xl fixed bottom-4 md:pl-2 md:text-black md:text-sm md:static xl:text-xl">
            <button
              className="hover:text-gray-500 md:hover:text-gray-700 duration-300"
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            {" | "}
            <button
              className="hover:text-gray-500 md:hover:text-gray-700 duration-300"
              onClick={() => changeLanguage("pl")}
            >
              PL
            </button>
          </li>
        </ul>
        <div
          className={`text-4xl drop-shadow-sm cursor-pointer z-10 hover:scale-110 md:hidden ${
            isMenuOpen && "text-white top-5 right-5 fixed"
          } duration-300`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BsList />
        </div>
      </nav>
    </header>
  );
};

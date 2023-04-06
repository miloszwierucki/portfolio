import { BsList } from "react-icons/bs";
import { useState } from "react";

const menuData = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-5 pt-5 flex justify-between items-center md:px-12 md:pt-6 xl:px-28 xl:pt-8 3xl:px-32 3xl:pt-10">
      <div className="text-2xl font-semibold sm:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[3.25rem]">
        Miłosz Wierucki
      </div>
      <nav className="relative">
        <ul
          className={
            isMenuOpen
              ? "text-white w-full h-[100vh] bg-black left-0 top-0 flex-col justify-center items-center fixed z-[2]"
              : "text-2xl hidden md:flex xl:text-3xl 3xl:text-4xl"
          }
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
                className="rounded-md px-6 py-2 hover:shadow-sm lg:px-8 3xl:px-10 duration-300"
              >
                {name}
              </a>
            </li>
          ))}
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

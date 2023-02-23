import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const MenuArray = [
  {
    name: "Home",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
];

const MenuButton = ({ name, state, id }: any) => {
  return (
    <div
      className={`flex justify-center mx-1 py-2 px-4 w-20 bg-red-200 pointer duration-300 delay-[${
        id * 100
      }ms] ${
        state ? "translate-y-0 opacity-100" : "translate-y-[-10rem] opacity-0"
      }`}
    >
      {name}
    </div>
  );
};

export const Menu: any = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="h-14 bg-red-100 flex items-center">
      <>
        {MenuArray.map((item, index) => (
          <MenuButton
            key={index}
            name={item.name}
            state={showMenu}
            id={index}
          />
        ))}
      </>
      <FiMenu
        size="2rem"
        color="blue"
        className="cursor-pointer"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
    </nav>
  );
};

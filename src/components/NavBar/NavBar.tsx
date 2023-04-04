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
  return (
    <header className="flex justify-between items-center pt-8 px-28">
      <div className="text-5xl font-semibold">Miłosz Wierucki</div>
      <nav>
        <ul className="flex text-3xl">
          {menuData.map(({ name, link }) => (
            <li key={name}>
              <a href={link} className="px-8 hover:shadow-md">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

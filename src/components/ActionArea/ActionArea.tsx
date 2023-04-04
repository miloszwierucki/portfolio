import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const SocialData = [
  {
    link: "https://www.linkedin.com/in/milosz-wierucki/",
    icons: BsLinkedin,
  },
  {
    link: "https://www.instagram.com/m.wierucky/",
    icons: GrInstagram,
  },
  {
    link: "https://github.com/miloszwierucki",
    icons: BsGithub,
  },
];

const Social = ({ link, icons }: { link: string; icons: any }) => {
  return (
    <a
      href={link}
      className="text-[2.75rem] mr-3 hover:text-[#453A3A] duration-300"
    >
      {icons({ className: "drop-shadow" })}
    </a>
  );
};

export const ActionArea = () => (
  <div className="flex items-center mt-8 text-secondary">
    <div className="bg-secondary text-white text-2xl font-bold w-[22rem] h-12 drop-shadow rounded-md mr-3 hover:bg-[#453A3A] duration-300">
      <a href="#contact" className="flex h-full justify-center items-center">
        Contact me
      </a>
    </div>
    {SocialData.map(({ link, icons }, index) => (
      <Social key={index} link={link} icons={icons} />
    ))}
  </div>
);

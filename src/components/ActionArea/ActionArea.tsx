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
      className="text-4xl mr-3 hover:text-[#453A3A] xl:text-[2.75rem] duration-300"
    >
      {icons({ className: "drop-shadow" })}
    </a>
  );
};

export const ActionArea = () => (
  <div className="text-secondary mt-8 flex flex-col-reverse xl:flex-row xl:items-center">
    <div className="text-white text-lg font-bold bg-secondary drop-shadow rounded-md w-64 h-10 mr-3 hover:bg-[#453A3A] xl:text-2xl xl:w-[22rem] xl:h-12 duration-300">
      <a href="#contact" className="h-full flex justify-center items-center">
        Contact me
      </a>
    </div>
    <div className="mb-3 flex xl:mb-0">
      {SocialData.map(({ link, icons }, index) => (
        <Social key={index} link={link} icons={icons} />
      ))}
    </div>
  </div>
);

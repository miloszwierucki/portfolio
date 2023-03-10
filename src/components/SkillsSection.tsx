import { useState } from "react";

const SkillsAssets = [
  {
    name: "React",
    image: "src/assets/react-original.svg",
    type: "tech",
  },
  {
    name: "TypeScript",
    image: "src/assets/typescript-original.svg",
    type: "tech",
  },
  {
    name: "JavaScript",
    image: "src/assets/javascript-original.svg",
    type: "tech",
  },
  {
    name: "HTML5",
    image: "src/assets/html5-original.svg",
    type: "tech",
  },
  {
    name: "CSS3",
    image: "src/assets/css3-original.svg",
    type: "tech",
  },
  {
    name: "Sass",
    image: "src/assets/sass-original.svg",
    type: "tech",
  },
  {
    name: "TailwindCSS",
    image: "src/assets/tailwindcss-original.svg",
    type: "tech",
  },
  {
    name: "VsCode",
    image: "src/assets/vscode-original.svg",
    type: "tool",
  },
  {
    name: "Git",
    image: "src/assets/git-original.svg",
    type: "tool",
  },
];

const Skill: any = ({ name, img }: { name: any; img: any }) => {
  const [showName, setShowName] = useState(false);
  return (
    <div className="m-2 w-24 text-md h-[7.5rem] flex flex-col items-center justify-between hover:drop-shadow-md duration-1000 2xl:h-32 2xl:text-lg 2xl:m-4 md:w-20 sm:m-1 xs:w-16 xs:h-20 xs:text-xs">
      <img
        src={img}
        alt={name}
        className="w-20 h-20 hover:scale-110 duration-300 2xl:w-[5.5rem] 2xl:h-[5.5rem] md:w-[4.5rem] md:h-[4.5rem] xs:w-12 xs:h-12"
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
      />
      {showName && name}
    </div>
  );
};

export const SkillsSection: any = () => {
  return (
    <div className="relative bg-[#FCF6EC] w-full h-72 flex flex-col 2xl:h-80 xs:h-[36rem]">
      <h2 className="text-[2rem] font-semibold px-36 mb-10 mt-16 2xl:text-4xl 2xl:mt-20 md:px-28 xs:px-4 xs:text-2xl">
        I'm currently developing and using:
      </h2>
      <div className="flex justify-between px-32 z-10 md:px-16 xs:px-6">
        <div className="flex xs:flex-wrap">
          {SkillsAssets.filter((skill) => skill.type === "tech").map(
            ({ name, image }, index) => (
              <Skill key={index} name={name} img={image} />
            )
          )}
        </div>
        <div className="flex">
          {SkillsAssets.filter((skill) => skill.type === "tool").map(
            ({ name, image }, index) => (
              <Skill key={index} name={name} img={image} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

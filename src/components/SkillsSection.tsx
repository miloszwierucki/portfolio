import { useState } from "react";
import blob from "../assets/blobSkill.svg";
import waves from "../assets/wave2.svg";

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
    <div className="m-4 text-sm h-28 flex flex-col items-center justify-between hover:drop-shadow-md duration-1000">
      <img
        src={img}
        alt={name}
        className="w-20 h-20 hover:scale-110 duration-300"
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
      />
      {showName && name}
    </div>
  );
};

export const SkillsSection: any = () => {
  return (
    <div className="relative bg-[#FCF6EC] w-full h-72 flex flex-col">
      <h2 className="text-[2rem] font-semibold px-36 mb-10 mt-16">
        I'm currently developing and using:
      </h2>
      <div className="flex justify-between px-32 z-10">
        <div className="flex">
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

      <img
        src={blob}
        alt="blob"
        className="absolute w-1/3 right-0 top-0 translate-x-[15%] translate-y-[-15%] z-0"
      />

      <img
        src={waves}
        alt="waves"
        className="w-full bottom-0 translate-y-[100%] absolute pointer-events-none z-[-1]"
      />
    </div>
  );
};

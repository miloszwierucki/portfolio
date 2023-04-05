import { useState } from "react";
import { TitleSection } from "../../components/TitleSection/TitleSection";

const SkillsAssets = [
  {
    name: "React",
    image: "/react-original.svg",
  },
  {
    name: "TypeScript",
    image: "/typescript-original.svg",
  },
  {
    name: "JavaScript",
    image: "/javascript-original.svg",
  },
  {
    name: "HTML5",
    image: "/html5-original.svg",
  },
  {
    name: "CSS3",
    image: "/css3-original.svg",
  },
  {
    name: "Sass",
    image: "/sass-original.svg",
  },
  {
    name: "TailwindCSS",
    image: "/tailwindcss-original.svg",
  },
  {
    name: "VsCode",
    image: "/vscode-original.svg",
  },
  {
    name: "Git",
    image: "/git-original.svg",
  },
];

const Skill: any = ({ name, img }: { name: any; img: any }) => {
  const [showName, setShowName] = useState(false);

  return (
    <div className="w-[4.5rem] h-28 flex flex-col items-center z-10 hover:drop-shadow-md lg:w-24 duration-1000">
      <img
        src={img}
        alt={`Logo of ${name}`}
        className="w-[3.5rem] mb-3 hover:scale-110 lg:w-[4.5rem] lg:mb-4 duration-300"
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
      />
      {showName && name}
    </div>
  );
};

export const SkillSection = () => {
  return (
    <section
      id="skills"
      className="bg-background mt-24 pt-20 relative lg:mt-32 skill-background"
    >
      <TitleSection
        title="Skills"
        description="I'm currently developing and using"
      />
      <div className="px-5 mx-auto mt-12 flex flex-wrap md:px-12 lg:mt-8 xl:px-28 lg:mx-0 lg:justify-normal">
        {SkillsAssets.map(({ name, image }, index) => (
          <Skill key={index} name={name} img={image} />
        ))}
      </div>
    </section>
  );
};

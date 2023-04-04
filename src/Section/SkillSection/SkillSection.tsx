import { useState } from "react";

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
    <div className="w-24 h-24 flex flex-col items-center justify-between hover:drop-shadow-md duration-1000">
      <img
        src={img}
        alt={`Logo of ${name}`}
        className="w-[4.5rem] hover:scale-110 duration-300 mb-4"
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
      />
      {showName && name}
    </div>
  );
};

export const SkillSection = () => {
  return (
    <section className="skill-background relative mt-32 pt-20 bg-background px-28">
      <h2 className="text-6xl font-bold">Skills</h2>
      <p className="text-2xl mt-2">I'm currently developing and using</p>
      <div className="flex mt-8">
        {SkillsAssets.map(({ name, image }, index) => (
          <Skill key={index} name={name} img={image} />
        ))}
      </div>
    </section>
  );
};

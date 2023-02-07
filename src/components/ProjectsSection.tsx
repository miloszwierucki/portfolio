import { useState } from "react";
import clickSound from "../assets/click.mp3";

const ProjectAssets = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Project 2",
    description: "jakis opis",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Project 3",
    description: "This is a project",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Project 4",
    description: "This is a project",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Project 5",
    description: "This is a project",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Project 6",
    description: "This is a project",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Project 7",
    description: "This is a project",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
];

const ActionButton = ({ styles, hover, text, href, state }: any) => {
  return (
    <button className={`${state && hover} ${styles}`}>
      {state ? (
        <a
          className="w-full h-full flex justify-center items-center"
          href={href}
        >
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export const ProjectsSection: any = () => {
  const [current, setCurrent] = useState(3);

  const audio = new Audio(clickSound);
  audio.volume = 0.05;

  return (
    <section className="flex flex-col items-center overflow-x-hidden">
      <h1 className="text-5xl font-bold mb-16 mt-24">Projects</h1>
      <div
        className={`flex translate-x-[${current * -24 + 72}rem] duration-300`}
      >
        {ProjectAssets.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrent(index);
              audio.play();
            }}
            className={`${
              current !== index ? `opacity-40` : `scale-110`
            } shadow-[0_0_20px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_-10px_rgba(0,0,0,0.4)] duration-300 min-w-[20rem] h-[28rem] flex flex-col items-center p-4 m-4 rounded-3xl relative box-content cursor-pointer`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-[20rem] rounded-2xl"
            />
            <h3 className="text-2xl mt-4">{project.name}</h3>
            <p>{project.description}</p>
            <div className="flex bottom-6 absolute w-[20rem] h-8 justify-between">
              <ActionButton
                styles="bg-slate-100 shadow-md rounded h-full w-1/4 duration-300"
                hover="hover:bg-slate-200"
                text="</>"
                href={project.code}
                state={current === index}
              />
              <ActionButton
                styles="bg-slate-200 shadow-md rounded h-full w-4/6 duration-300"
                hover="hover:bg-slate-300"
                text="Live"
                href={project.live}
                state={current === index}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-12">
        <button
          onClick={() => setCurrent(current > 0 ? current - 1 : 0)}
          className="bg-slate-300 shadow-md rounded-md w-12 h-8 m-4 hover:bg-slate-400 duration-300"
        >
          {"<-"}
        </button>
        <button
          onClick={() => setCurrent(current < 6 ? current + 1 : 6)}
          className="bg-slate-300 shadow-md rounded-md w-12 h-8 m-4 hover:bg-slate-400 duration-300"
        >
          {"->"}
        </button>
      </div>
    </section>
  );
};

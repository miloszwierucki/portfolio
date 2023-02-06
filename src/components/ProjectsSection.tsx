import { useState } from "react";

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

export const ProjectsSection: any = () => {
  const [current, setCurrent] = useState(3);

  return (
    <section className="flex flex-col overflow-x-hidden">
      <div
        className={`flex translate-x-[${current * -24 + 72}rem] duration-300`}
      >
        {ProjectAssets.map((project, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
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
              <a
                href={project.code}
                className="bg-slate-100 shadow-md rounded h-full w-1/4 flex justify-center items-center hover:bg-slate-200 duration-300"
              >
                {"</>"}
              </a>
              <a
                href={project.live}
                className="bg-slate-200 shadow-md rounded h-full w-4/6 flex items-center justify-center hover:bg-slate-300 duration-300"
              >
                {"Live"}
              </a>
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

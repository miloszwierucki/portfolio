import { useState } from "react";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import clickSound from "../assets/click.mp3";
const blob = "src/assets/blobCorner.svg";

const ProjectAssets = [
  {
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    image: "https://picsum.photos/300/200",
    code: "https://google.com",
    live: "https://google.com",
  },
  {
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
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
    <section className="flex flex-col h-[67.5rem] w-full relative z-0 2xl:h-[77.5rem]">
      <div
        className={`absolute w-1/3 h-screen top-[-5rem] z-[-1] bg-[url('${blob}')] bg-[100%,100%] bg-no-repeat bg-left-top`}
      ></div>
      <h2 className="text-6xl font-bold px-36 mb-24 mt-32 2xl:text-[5rem] 2xl:mt-48">
        My Projects
      </h2>
      <div
        className={`flex justify-center translate-x-[${
          current * -24 + 72
        }rem] duration-300`}
      >
        {ProjectAssets.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrent(index);
              audio.play();
            }}
            className={`${
              current !== index ? `opacity-50` : `scale-110`
            } shadow-[0_0_15px_-5px_rgba(0,0,0,0.25)] hover:shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)] duration-300 min-w-[22rem] h-[32rem] flex flex-col items-center m-6 rounded-2xl relative box-content cursor-pointer z-10 2xl:min-w-[24rem] 2xl:h-[36rem] 2xl:m-8`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[45%] rounded-t-2xl"
            />
            <h3 className="text-xl font-semibold my-4 2xl:text-2xl">
              {project.name}
            </h3>
            <p className="text-[0.925rem] text-center px-8 font-['Encode_Sans_Semi_Condensed'] 2xl:text-[1rem]">
              {project.description}
            </p>
            <div className="flex bottom-6 absolute px-8 w-full h-10 justify-between">
              <ActionButton
                styles="shadow-[0_0_5px_-1px_rgba(0,0,0,0.15)] rounded h-full w-12 font-['Encode_Sans_Semi_Condensed'] duration-300"
                hover="hover:shadow-[0_0_5px_-1px_rgba(0,0,0,0.30)] hover:translate-y-[-0.2rem]"
                text="</>"
                href={project.code}
                state={current === index}
              />
              <ActionButton
                styles="shadow-[0_0_5px_-1px_rgba(0,0,0,0.15)] bg-gradient-to-r from-[#46A399] via-[#7FC6B8] to-[#B8E9D7] rounded h-full w-9/12 font-['Raleway'] font-medium duration-300"
                hover="hover:shadow-[0_0_5px_-1px_rgba(0,0,0,0.30)] hover:translate-y-[-0.2rem]"
                text="Live preview"
                href={project.live}
                state={current === index}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="h-8 flex justify-center mt-12">
        <button
          onClick={() => setCurrent(current > 0 ? current - 1 : 0)}
          className="text-3xl text-stone-500 hover:shadow-sm rounded-md px-4 duration-300 2xl:text-4xl"
        >
          <RxDoubleArrowLeft className="animate-bounceLeft" />
        </button>
        <button
          onClick={() =>
            setCurrent(
              current < ProjectAssets.length - 1
                ? current + 1
                : ProjectAssets.length - 1
            )
          }
          className="text-3xl text-stone-500 hover:shadow-sm rounded-md px-4 duration-300 2xl:text-4xl"
        >
          <RxDoubleArrowRight className="animate-bounceRight" />
        </button>
      </div>
    </section>
  );
};

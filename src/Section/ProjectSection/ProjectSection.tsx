import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { ProjectCardProps } from "../../components/ProjectCard/ProjectCard.types";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import clickSound from "../../assets/click.mp3";
import { useEffect, useRef, useState } from "react";

const projectData: ProjectCardProps[] = [
  {
    name: "Lorem ipsum dolor 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    isCode: true,
    codeLink: "",
    previewLink: "",
    disable: false,
  },
  {
    name: "Lorem ipsum dolor 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    isCode: true,
    codeLink: "",
    previewLink: "",
    disable: true,
  },
  {
    name: "Lorem ipsum dolor 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    isCode: false,
    codeLink: "",
    previewLink: "",
    disable: true,
  },
  {
    name: "Lorem ipsum dolor 4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    isCode: true,
    codeLink: "",
    previewLink: "",
    disable: true,
  },
];

export const ProjectSection = () => {
  const [current, setCurrent] = useState(1);
  const length = projectData.length - 1;
  const audio = new Audio(clickSound);
  audio.volume = 0.05;

  //const lgWidthScreen = window.matchMedia("(min-width: 1536px)");
  const lgWidthScreen = window.matchMedia("(min-width: 1024px)");
  const translateContainerRef = useRef(null) as any; // TODO: Someday fix this

  const translateCondition = (index: number, condition?: string) => {
    let indexCondition = index;
    let widthProjectPattern = 22;

    if (condition === "left") {
      indexCondition = index === 0 ? 0 : index - 1;
    } else if (condition === "right") {
      indexCondition = index < length ? index + 1 : length;
    }
    setCurrent(indexCondition);
    audio.play();

    if (lgWidthScreen.matches) {
      widthProjectPattern = 22.5;
    }

    translateContainerRef.current!.style.transform = `translateX(${
      4.25 - widthProjectPattern * (indexCondition - 1)
    }rem)`;
  };

  useEffect(() => {
    translateCondition(current);
  }, [current]);

  return (
    <section className="mt-96 px-28">
      <h2 className="text-6xl font-bold">Projects</h2>
      <p className="text-2xl mt-2">Here are some of my works</p>
      <div
        ref={translateContainerRef}
        className="inline-flex mt-10 duration-300"
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            {...{ ...project, disable: index !== current }}
            onClick={() => translateCondition(index)}
          />
        ))}
      </div>
      <div className="h-8 flex justify-center mt-12">
        <button
          onClick={() => {
            translateCondition(current, "left");
          }}
          className="text-3xl text-stone-500 hover:shadow-sm rounded-md px-4 duration-300 2xl:text-4xl"
        >
          <RxDoubleArrowLeft className="animate-bounceLeft" />
        </button>
        <button
          onClick={() => {
            translateCondition(current, "right");
          }}
          className="text-3xl text-stone-500 hover:shadow-sm rounded-md px-4 duration-300 2xl:text-4xl"
        >
          <RxDoubleArrowRight className="animate-bounceRight" />
        </button>
      </div>
    </section>
  );
};

import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { ProjectCardProps } from "../../components/ProjectCard/ProjectCard.types";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import clickSound from "../../assets/click.mp3";
import { useEffect, useRef, useState } from "react";
import { TitleSection } from "../../components/TitleSection/TitleSection";

const projectData: ProjectCardProps[] = [
  {
    name: "Lorem ipsum dolor 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    isCode: true,
    codeLink: "",
    previewLink: "",
  },
  {
    name: "Lorem ipsum dolor 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    isCode: true,
    codeLink: "",
    previewLink: "",
  },
  {
    name: "Lorem ipsum dolor 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    isCode: false,
    codeLink: "",
    previewLink: "",
  },
  {
    name: "Lorem ipsum dolor 4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas enim non vulputate elementum cras nunc mauris donec tellus. Ultrices sit pulvinar habitant odio ac dignissim etiam et in. Accumsan congue enim sagittis et faucibus.",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    isCode: true,
    codeLink: "",
    previewLink: "",
  },
];

export const ProjectSection = () => {
  const [current, setCurrent] = useState(1);
  const length = projectData.length;
  const audio = new Audio(clickSound);
  audio.volume = 0.05;

  const translateContainerRef = useRef(null) as any; // TODO: Someday fix this

  const translateCondition = (index: number, condition?: string) => {
    const widthContainer = translateContainerRef.current?.offsetWidth;
    const widthCard = widthContainer / length;
    let indexCondition = index;

    if (condition === "left") {
      indexCondition = index === 0 ? 0 : index - 1;
    } else if (condition === "right") {
      indexCondition = index < length - 1 ? index + 1 : length - 1;
    }
    setCurrent(indexCondition);

    translateContainerRef.current!.style.transform = `translateX(${
      -widthCard * (indexCondition + 1 / 2)
    }px)`;
  };

  useEffect(() => {
    translateCondition(current);
  }, [current]);

  return (
    <section
      id="projects"
      className="pt-16 mt-32 sm:mt-44 xl:mt-[22rem] 3xl:mt-[23rem]"
    >
      <TitleSection title="Projects" description="Here are some of my works" />
      <div
        ref={translateContainerRef}
        className="ml-[50vw] mt-10 inline-flex duration-300"
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            {...{ ...project, disable: index !== current }}
            onClick={() => {
              translateCondition(index);
              audio.play();
            }}
          />
        ))}
      </div>
      <div className="h-8 mt-4 flex justify-center xl:mt-12 3xl:h-14">
        <button
          onClick={() => {
            audio.play();
            translateCondition(current, "left");
          }}
          className="text-stone-500 text-3xl rounded-md px-4 hover:shadow-sm 2xl:text-4xl 3xl:text-5xl 3xl:px-8 duration-300"
        >
          <RxDoubleArrowLeft className="animate-bounceLeft" />
        </button>
        <button
          onClick={() => {
            audio.play();
            translateCondition(current, "right");
          }}
          className="text-stone-500 text-3xl rounded-md px-4 hover:shadow-sm 2xl:text-4xl 3xl:text-5xl 3xl:px-8 duration-300"
        >
          <RxDoubleArrowRight className="animate-bounceRight" />
        </button>
      </div>
    </section>
  );
};

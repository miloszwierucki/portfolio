import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { projectSort, projectData } from "../../data/projectData";
import { useEffect, useRef, useState } from "react";
import clickSound from "../../assets/click.mp3";

export const ProjectSection = () => {
  const [current, setCurrent] = useState(1);
  const [selected, setSelected] = useState(projectSort.all);
  const audio = new Audio(clickSound);
  audio.volume = 0.05;

  const translateContainerRef = useRef(null) as any; // TODO: Someday fix this
  const length = projectData.filter((project) =>
    selected === "all" ? project : project.type === selected
  ).length;

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
      <TitleSection
        title="projects"
        description="projectsSection.description"
      />
      <div className="px-5 mt-4 md:px-12 xl:px-28 3xl:px-32">
        <button
          onClick={() => {
            setSelected((cur) =>
              cur === projectSort.code ? projectSort.all : projectSort.code
            );
            setCurrent(0);
          }}
          className="bg-gradient-to-tr from-teal-500 via-emerald-300 to-lime-300 px-4 mr-2 shadow-md rounded-xl hover:scale-105 bg-size-200 bg-pos-100 hover:bg-pos-0 duration-300"
        >
          Code
        </button>
        <button
          onClick={() => {
            setSelected((cur) =>
              cur === projectSort.visualisation
                ? projectSort.all
                : projectSort.visualisation
            );
            setCurrent(0);
          }}
          className="bg-gradient-to-tr from-teal-500 via-emerald-300 to-lime-300 px-4 mr-2 shadow-md rounded-xl hover:scale-105 bg-size-200 bg-pos-100 hover:bg-pos-0 duration-300"
        >
          Visualisation
        </button>
      </div>
      <div
        ref={translateContainerRef}
        className="ml-[50vw] mt-4 inline-flex lg:mt-10 duration-300"
      >
        {projectData
          .filter((project) =>
            selected === "all" ? project : project.type === selected
          )
          .map((project, index) => (
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

import { ProjectCardProps } from "../components/ProjectCard/ProjectCard.types";

export enum projectSort {
  code = "code",
  visualisation = "visualisation",
  all = "all",
}

export const projectData: ProjectCardProps[] = [
  {
    name: "1.name",
    description: "1.description",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    type: projectSort.code,
    codeLink: "",
    previewLink: "",
  },
  {
    name: "2.name",
    description: "2.description",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    type: projectSort.code,
    codeLink: "",
    previewLink: "",
  },
  {
    name: "3.name",
    description: "3.description",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    type: projectSort.visualisation,
    codeLink: "",
    previewLink: "",
  },
  {
    name: "4.name",
    description: "4.description",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    type: projectSort.code,
    codeLink: "",
    previewLink: "",
  },
];

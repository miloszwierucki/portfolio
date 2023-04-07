import { ProjectCardProps } from "../components/ProjectCard/ProjectCard.types";
import toDoList from "/toDoList.jpg";
import dashboard from "/dashboard.jpg";
import landingPage from "/landingPage.jpg";
import crypto from "/crypto.jpg";
import portfolio from "/portfolio.jpg";
import renderWoonerf from "/renderWoonerf.jpg";
import renderRoom from "/renderRoom.jpg";
import mouseBungee from "/mouseBungee.jpg";

export enum projectSort {
  code = "code",
  visualisation = "visualisation",
  all = "all",
}

export const projectData: ProjectCardProps[] = [
  {
    name: "0.name",
    description: "0.description",
    img: toDoList,
    type: projectSort.code,
    codeLink: "https://github.com/miloszwierucki/ToDoList-JS",
    previewLink: "https://miloszwierucki.github.io/ToDoList-JS/",
  },
  {
    name: "1.name",
    description: "1.description",
    img: dashboard,
    type: projectSort.code,
    codeLink: "https://github.com/miloszwierucki/dashboard-crypto-app",
    previewLink: "https://dashboard.wierucki.com",
  },
  {
    name: "2.name",
    description: "2.description",
    img: landingPage,
    type: projectSort.code,
    codeLink: "https://github.com/miloszwierucki/StartLandingPage",
    previewLink: "https://miloszwierucki.github.io/StartLandingPage/",
  },
  {
    name: "3.name",
    description: "3.description",
    img: crypto,
    type: projectSort.code,
    codeLink: "https://github.com/miloszwierucki/discord-bot",
    previewLink: "-",
  },
  {
    name: "4.name",
    description: "4.description",
    img: portfolio,
    type: projectSort.code,
    codeLink: "#",
    previewLink: "https://old.wierucki.com",
  },
  {
    name: "5.name",
    description: "5.description",
    img: renderWoonerf,
    type: projectSort.visualisation,
    codeLink: "#",
    previewLink: "/renderWoonerf.jpg",
  },
  {
    name: "6.name",
    description: "6.description",
    img: renderRoom,
    type: projectSort.visualisation,
    codeLink: "#",
    previewLink: "/renderRoom.jpg",
  },
  {
    name: "7.name",
    description: "7.description",
    img: mouseBungee,
    type: projectSort.visualisation,
    codeLink: "#",
    previewLink: "/mouseBungee.jpg",
  },
];

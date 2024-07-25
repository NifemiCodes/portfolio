import "../styles/output.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { list } from "../projectsList";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState<number>(0);

  const nextProject = () => {
    setProjectIndex((prev) => (prev < list.length - 1 ? prev + 1 : prev));
  };

  const previousProject = () => {
    setProjectIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div id="projects" className="dark:bg-bgDark relative px-5 py-10 flex flex-col items-center gap-7 scroll-mt-20 lg:px-16 lg:py-14 lg:gap-14">
      <h2 className="font-mont font-bold text-xl lg:text-3xl">My Projects</h2>

      {/* scroll container */}
      <div className="flex items-center justify-center lg:gap-10">
        <div
          className="absolute top-[50%] bottom-[50%] left-1 px-2 py-4 flex justify-center items-center bg-secBgL dark:bg-secBgD bg-opacity-0 dark:bg-opacity-0 border-2 border-solid border-black dark:border-white rounded-full hover:brightness-75 hover:cursor-pointer active:opacity-30 lg:relative lg:top-0 lg:bottom-0 lg:left-0 lg:p-4 lg:bg-opacity-100 lg:dark:bg-opacity-100 lg:border-0"
          onClick={previousProject}>
          <FaArrowLeft />
        </div>

        <div className="lg:w-[50%] flex flex-col gap-7 items-center">
          <div className="bg-secBgL dark:bg-secBgD rounded-xl p-5 flex flex-col items-center gap-4 lg:flex-row lg:items-start">
            <ProjectCard
              imageURL={list[projectIndex].url}
              titleText={list[projectIndex].title}
              descText={list[projectIndex].description}
              liveLink={list[projectIndex].live}
              repoLink={list[projectIndex].repo}
              stackList={list[projectIndex].stack}
            />
          </div>

          {/* project tab */}
          <div className="flex gap-2">
            {Array.from({ length: list.length }).map((_, index) => (
              <div className={"w-[20px] h-[20px] rounded-full " + (projectIndex === index ? "bg-links" : "bg-grey dark:bg-secBgD")}></div>
            ))}
          </div>
        </div>

        <div
          className="absolute top-[50%] bottom-[50%] right-1 px-2 py-4 flex justify-center items-center bg-secBgL dark:bg-secBgD bg-opacity-0 dark:bg-opacity-0 border-2 border-solid border-black dark:border-white rounded-full hover:brightness-75 hover:cursor-pointer active:opacity-30 lg:relative lg:top-0 lg:bottom-0 lg:right-0 lg:p-4 lg:bg-opacity-100 lg:dark:bg-opacity-100 lg:border-0"
          onClick={nextProject}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};
export default Projects;

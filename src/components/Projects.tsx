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
    <div id="projects" className="relative px-5 py-10 flex flex-col items-center gap-7 dark:bg-navy scroll-mt-20 md:px-16 md:py-14 md:gap-14">
      <h2 className="font-mont font-bold text-xl md:text-3xl dark:text-lightGrey">My Projects</h2>

      {/* scroll container */}
      <div className="flex items-center justify-center md:gap-10">
        <div
          className="absolute top-[50%] bottom-[50%] left-0 px-4 py-6 flex justify-center items-center bg-white rounded-full hover:bg-grey hover:cursor-pointer active:opacity-30 md:relative md:top-0 md:bottom-0 md:left-0 md:bg-hoverGrey"
          onClick={previousProject}>
          <FaArrowLeft />
        </div>

        <div className="md:w-[60%] flex flex-col gap-7 items-center">
          <ProjectCard
            imageURL={list[projectIndex].url}
            titleText={list[projectIndex].title}
            descText={list[projectIndex].description}
            liveLink={list[projectIndex].live}
            repoLink={list[projectIndex].repo}
            stackList={list[projectIndex].stack}
          />

          <div className="flex gap-2">
            {Array.from({ length: list.length }).map((_, index) => (
              <div className={"w-[20px] h-[20px] rounded-full " + (projectIndex === index ? "bg-grey" : "bg-lightGrey")}></div>
            ))}
          </div>
        </div>

        <div
          className="absolute top-[50%] bottom-[50%] right-0 px-4 py-6 flex justify-center items-center bg-white rounded-full hover:bg-grey hover:cursor-pointer active:opacity-30 md:relative md:top-0 md:bottom-0 md:right-0 md:bg-hoverGrey"
          onClick={nextProject}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};
export default Projects;

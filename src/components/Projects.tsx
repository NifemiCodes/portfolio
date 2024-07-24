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
    <div id="projects" className="px-16 py-14 flex flex-col items-center gap-14 dark:bg-navy scroll-mt-20">
      <h2 className="font-mont font-bold text-3xl dark:text-lightGrey">My Projects</h2>

      <div className="flex gap-10 items-center justify-center">
        <div className="p-4 bg-hoverGrey rounded-full hover:bg-grey hover:cursor-pointer active:opacity-30" onClick={previousProject}>
          <FaArrowLeft />
        </div>

        {/* scroll container */}
        <div className="w-[60%] flex flex-col gap-7 items-center">
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

        <div className="p-4 bg-hoverGrey rounded-full hover:bg-grey hover:cursor-pointer active:opacity-30" onClick={nextProject}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};
export default Projects;

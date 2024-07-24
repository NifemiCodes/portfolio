import { GoLinkExternal } from "react-icons/go";
import "../styles/output.css";

export interface ProjectCardProps {
  imageURL: string;
  titleText: string;
  descText: string;
  liveLink: string;
  repoLink: string;
  stackList?: string[];
}

const ProjectCard = ({ imageURL, titleText, descText, liveLink, repoLink, stackList }: ProjectCardProps) => {
  return (
    <div className="bg-hoverGrey rounded-xl p-5 flex flex-col items-center gap-5 md:p-10 md:flex-row md:items-start">
      {/* left image */}
      <div className="relative overflow-hidden rounded-lg md:w-[50%]">
        <div className="group absolute rounded-lg top-0 bottom-0 left-0 right-0 flex justify-center items-center hover:bg-blackT hover:backdrop-blur-[2px]">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mt-[100%] opacity-0 group-hover:mt-0 group-hover:opacity-100 transition-[margin-top, opacity] ease-linear duration-150 hover:underline">
            Visit Site
          </a>
        </div>
        <img src={imageURL} alt="screenshot image" className="w-full h-full" />
      </div>

      {/* right text */}
      <div className="flex flex-col gap-1 md:w-[50%]">
        <div>
          <h3 className="font-mont font-bold text-2xl">{titleText}</h3>
          <p>{descText}</p>
        </div>

        <div className="flex flex-col gap-1">
          <div>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-links  hover:underline">
              <p className="flex items-center">
                visit site
                <GoLinkExternal color="grey" />
              </p>
            </a>

            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-links hover:underline">
              <p className="flex items-center">
                visit github repo
                <GoLinkExternal color="grey" />
              </p>
            </a>
          </div>

          <div className="flex gap-3 items-center">
            {stackList?.map((item) => (
              <img src={`src/assets/images/${item}-logo.png`} alt="logo" className="w-[30px] h-[30px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

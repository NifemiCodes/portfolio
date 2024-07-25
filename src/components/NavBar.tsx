import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import "../styles/output.css";

interface NavProps {
  theme: string;
  themeBtnFunc: () => void;
}

const NavBar = ({ theme, themeBtnFunc }: NavProps) => {
  return (
    <nav className="fixed top-0 w-full z-[1] bg-whiteT py-4 px-5 lg:px-10 backdrop-blur-sm flex justify-between items-center border-black border-solid border-b-[1px] dark:bg-navyT">
      {/* logo */}
      <div className="border-2 border-solid dark:border-white border-black rounded-[50%] px-3 py-1 flex items-center justify-center hover:animate-spin">
        <p className="font-anton text-3xl">N</p>
      </div>

      <div className="flex gap-5 items-center">
        {/* links */}
        <div className="hidden lg:flex items-center gap-5 font-raj text-xl">
          <a
            href="#home"
            className="relative before:content-[''] before:absolute before:bg-links before:top-[90%] before:bottom-0 before:left-[50%] before:right-[50%] hover:before:left-0 hover:before:right-0 before:transition-all">
            Home
          </a>
          <a
            href="#about"
            className="relative before:content-[''] before:absolute before:bg-links before:top-[90%] before:bottom-0 before:left-[50%] before:right-[50%] hover:before:left-0 hover:before:right-0 before:transition-all">
            About
          </a>
          <a
            href="#projects"
            className="relative before:content-[''] before:absolute before:bg-links before:top-[90%] before:bottom-0 before:left-[50%] before:right-[50%] hover:before:left-0 hover:before:right-0 before:transition-all">
            Projects
          </a>
          <a href="#contact" className="bg-links dark:bg-linksD text-white p-2 rounded-lg hover:brightness-125 active:opacity-50">
            Contact
          </a>
        </div>

        <div className="bg-grey w-[2px] h-[50px]"></div>

        <div className="hover:cursor-pointer hover:text-links" onClick={themeBtnFunc}>
          {theme === "light" ? <MdOutlineDarkMode fontSize={"24px"} /> : <MdOutlineLightMode fontSize={"24px"} />}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

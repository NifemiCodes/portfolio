import "../styles/output.css";

const Home = () => {
  return (
    <div id="home" className="h-full w-full flex justify-center items-center md:pt-[150px] dark:bg-navy dark:text-lightGrey">
      <div className="flex flex-col-reverse items-center gap-2 px-5 md:flex-row md:gap-5 md:px-16">
        {/* left */}
        <div className="flex-1 flex flex-col gap-3 justify-center items-center md:flex-[2] md:gap-5 md:items-start md:ml-14">
          <h1 className="font-mont text-center text-xl md:text-left md:text-4xl">
            Hi, my name is Nifemi, and I'm a <span className=" font-bold text-2xl md:text-5xl dark:text-links">Software Developer</span>
          </h1>

          <div className="flex gap-4 items-center">
            <img src="./src/assets/images/react-logo.png" className="w-7 h-7 md:w-[35px] md:h-[35px]" />
            <img src="./src/assets/images/react-native-logo.png" className="w-9 h-8 md:w-[55px] md:h-[40px]" />
            <img src="./src/assets/images/typescript-logo.png" className="w-7 h-6 md:w-[40px] md:h-[30px]" />
            <img src="./src/assets/images/tailwind-logo.png" className="w-7 h-4 md:w-[50px] md:h-[35px]" />
          </div>

          <div className="flex gap-2 items-center">
            <a href="https://github.com/NifemiCodes" target="_blank" rel="noopener noreferrer">
              <img src="./src/assets/images/github-icon.png" alt="github" className="w-10 h-10 md:w-14 md:h-14" color="white" />
            </a>
            <a href="https://www.linkedin.com/in/olorunifemi-akingba" target="_blank" rel="noopener noreferrer">
              <img src="./src/assets/images/linkedin-icon.png" alt="linkedIn" className="w-7 h-7 md:w-10 md:h-10" color="white" />
            </a>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 h-20 w-20 rounded-full overflow-hidden md:rounded-none md:h-[350px] md:mr-14">
          <img src="./src/assets/images/myPhoto.jpg" className="h-full " />
        </div>
      </div>
    </div>
  );
};
export default Home;

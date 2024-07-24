import "../styles/output.css";

const Home = () => {
  return (
    <div id="home" className="h-full w-full pt-[150px] flex flex-col gap-32 dark:bg-navy dark:text-lightGrey">
      {/* hero */}
      <div className="flex items-center gap-5 px-16">
        {/* left */}
        <div className="flex-[2] flex flex-col gap-5 justify-center ml-14">
          <h1 className="font-mont text-4xl">
            Hi, my name is Nifemi, and I'm a <span className=" font-bold text-5xl dark:text-links">Software Developer</span>
          </h1>

          <div className="flex gap-4 items-center">
            <img src="src/assets/images/react-logo.png" className="w-[35px] h-[35px]" />
            <img src="src/assets/images/react-native-logo.png" className="w-[55px] h-[40px]" />
            <img src="src/assets/images/typescript-logo.png" className="w-[40px] h-[30px]" />
            <img src="src/assets/images/tailwind-logo.png" className="w-[50px] h-[35px]" />
          </div>

          <div className="flex gap-2 items-center">
            <a href="https://github.com/NifemiCodes" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/images/github-icon.png" alt="github" className="w-14 h-14" color="white" />
            </a>
            <a href="https://www.linkedin.com/in/olorunifemi-akingba" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/images/linkedin-icon.png" alt="linkedIn" className="w-10 h-10" color="white" />
            </a>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 flex items-center justify-center h-[350px] mr-14">
          <img src="src/assets/images/myPhoto.jpg" className="h-full " />
        </div>
      </div>
    </div>
  );
};
export default Home;

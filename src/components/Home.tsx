import "../styles/output.css";

const Home = () => {
  return (
    <div id="home" className="h-full w-full flex justify-center items-center lg:pt-[150px]">
      <div className="flex flex-col-reverse items-center gap-2 px-5 lg:flex-row lg:gap-5 lg:px-16">
        {/* left */}
        <div className="flex-1 flex flex-col gap-3 justify-center items-center lg:flex-[2] lg:gap-5 lg:items-start lg:ml-14 animate-fadein">
          <h1 className="font-mont text-center text-xl lg:text-left lg:text-4xl">
            Hi, my name is Nifemi, and I'm a <span className=" font-bold text-2xl lg:text-5xl text-links">Software Developer</span>
          </h1>

          <div className="flex gap-4 items-center">
            <img src="/assets/images/react-logo.png" alt="react" className="w-7 h-7 lg:w-[35px] lg:h-[35px]" />
            <img src="/assets/images/react-native-logo.png" alt="react native" className="w-9 h-8 lg:w-[55px] lg:h-[40px]" />
            <img src="/assets/images/typescript-logo.png" alt="typescript" className="w-7 h-6 lg:w-[40px] lg:h-[30px]" />
            <img src="/assets/images/tailwind-logo.png" alt="tailwindCSS" className="w-7 h-4 lg:w-[50px] lg:h-[35px]" />
          </div>

          <div className="flex gap-2 items-center">
            <a href="https://github.com/NifemiCodes" target="_blank" rel="noopener noreferrer">
              <img src="public/assets/images/github-icon.png" alt="github" className="w-10 h-10 lg:w-14 lg:h-14" />
            </a>
            <a href="https://www.linkedin.com/in/olorunifemi-akingba" target="_blank" rel="noopener noreferrer">
              <img src="public/assets/images/linkedin-icon.png" alt="linkedIn" className="w-7 h-7 lg:w-10 lg:h-10" />
            </a>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 h-20 w-20 rounded-full overflow-hidden lg:rounded-none lg:h-[350px] lg:mr-16">
          <img src="/assets/images/myPhoto.jpg" alt="photo" className="h-full animate-fade" />
        </div>
      </div>
    </div>
  );
};
export default Home;

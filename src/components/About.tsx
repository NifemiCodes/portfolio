import "../styles/output.css";

const About = () => {
  return (
    <div id="about" className="bg-hoverGrey text-gray-500 px-5 py-10 flex flex-col items-center gap-7 scroll-mt-20 md:px-16  md:py-14 md:gap-16">
      <h3 className="font-bold font-mont text-xl md:text-3xl">Welcome to my website!</h3>

      <div className="flex flex-col items-start gap-5 md:w-[60%] md:flex-row md:gap-10">
        {/* text */}
        <div className="flex-1 font-raj">
          <p>
            As a frontend web developer, I specialize in building responsive and well optimized websites utilizing developer best-practices, and using
            the latest industry tools to create seamless User Experiences and bring unique and innovative ideas to life on the web.
          </p>
          <p>
            Over the past two years, I've gained experience in different areas of software development, including mobile application development,
            using the React Native javaScript framework with expo, to develop functional, cross-platform applications thereby honing my software
            development skills and learning new ones.
          </p>
        </div>

        {/* image */}
        <div className="flex-1 flex justify-center items-center">
          <img src="src/assets/images/codeIllustration.jpg" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};
export default About;

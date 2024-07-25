type stackType = "html" | "css" | "js" | "typescript" | "tailwind" | "react" | "react-native";

interface projectData {
  url: string;
  title: string;
  description: string;
  live: string;
  repo: string;
  stack: stackType[];
}

export const list: projectData[] = [
  {
    url: "/assets/screenshots/fylo.png",
    title: "website project",
    description:
      "This is a challenge from frontendmentor.io. I made this as an assignment during my training at Zuri(an affordable online tech training organization). It's a simple single page project with email validation.",
    live: "https://nifemicodes.github.io/fylo-landing-page/",
    repo: "https://github.com/NifemiCodes/fylo-landing-page",
    stack: ["html", "css", "js"],
  },
  {
    url: "/assets/screenshots/maker.png",
    title: "Website Project",
    description:
      "This is a frontend challenge gotten from frontend Mentor. A single page website which put my layout skills to the test. I also included custom animations to the site. Check it out!",
    live: "https://nifemicodes.github.io/fronend-mentor-maker-landing-page/",
    repo: "https://github.com/NifemiCodes/fronend-mentor-maker-landing-page",
    stack: ["html", "css", "js"],
  },
  {
    url: "/assets/screenshots/news.png",
    title: "Static web page",
    description: "This is another frontend mentor challenge that put my layout skills to the test using CSS grid, you can view the live site below",
    live: "https://nifemicodes.github.io/frontend-mentor-newshomepage/",
    repo: "https://github.com/NifemiCodes/frontend-mentor-newshomepage",
    stack: ["html", "css", "js"],
  },
  {
    url: "/assets/screenshots/newsletter.png",
    title: "Static web page",
    description: "A newsletter signup form with input validation and error state handling. The site is live at the link below.",
    live: "https://nifemicodes.github.io/frontend-mentor-newsletter-signup/",
    repo: "https://github.com/NifemiCodes/frontend-mentor-newsletter-signup",
    stack: ["html", "css", "js"],
  },
];

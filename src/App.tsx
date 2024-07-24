import "./styles/output.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div data-theme={theme} className="h-[100dvh]">
      <NavBar theme={theme} themeBtnFunc={toggleTheme} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

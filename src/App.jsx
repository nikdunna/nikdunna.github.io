import Hero from "./components/Hero";
import "./index.css";
import { AnimatedBackground } from "animated-backgrounds";
import Portfolio from "./components/Portfolio";
import { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  const portfolioRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-screen text-white">
        <AnimatedBackground className="" animationName="fireflies" />
        <div className="flex flex-col h-screen justify-center">
          <Hero />
          <div className="flex flex-col items-center ">
            <p className="font-mono pb-4">check out more about me</p>
            <button
              onClick={() => window.scrollBy({top: 700, left: 0, behavior: "smooth"})
              }
            >
              <ExpandMoreIcon className="animate-pulse scale-[5.0]" />
            </button>
          </div>
        </div>
      </div>
      <Portfolio ref={portfolioRef} id="my-section" />
    </div>
  );
}

export default App;

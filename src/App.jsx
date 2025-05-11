import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import SplineObject from "./component/SplineObject";
import { Technologies } from "./component/Technologies";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className=" text-neutral-300  selection:bg-cyan-300 selection:text-cyan-900">
        
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-9 py-2 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <div className="container mx-auto px-8">
            <Hero />
            <About />
            <Technologies />
            <Experience />
            <Projects />
            <Contact />
          </div>
          <SplineObject />
        </div>
      </div>
    </Router>
  );
};

export default App;

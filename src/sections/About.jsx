import { useRef, useEffect, useState } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const [hasCSpace, setHasCSpace] = useState(typeof window !== "undefined" ? window.innerWidth > 380 : true);

  useEffect(() => {
    const handleResize = () => setHasCSpace(window.innerWidth > 380);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`${hasCSpace ? "c-space" : ""} section-spacing`}
      id="about"
    >
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 — About Me */}
       <div className="flex items-end grid-default-color grid-1">
  <img
    src="assets/coding-pov.png"
    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
    alt="coding pov"
  />
  <div className="z-10 relative" style={{ zIndex: 1 }}> {/* Add inline z-index */}
    <p className="headtext">Hey, I'm Thijs van den Broek</p>
    <p className="subtext">
      I'm a frontend developer blending design, code, and AI to bring ideas to life through interactive experiences.
    </p>
  </div>
</div>

        {/* Grid 2 — Interactive Cards */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">BUILD. LEARN. EVOLVE.</p>

            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Frontend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="AI Integration"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Creative Coding"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="UX Thinking"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="React"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/NodeJs.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/Gitlab.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/React.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 — Time Zone */}
        <div className="grid-black-color grid-3 relative">
          <div className="z-10 ml-4 w-full max-w-[180px] sm:max-w-[240px] md:w-[62%] md:max-w-none break-words">
            <p className="headtext">Based in the Netherlands</p>
            <p className="subtext">
              I live in Limburg (Herkenbosch), close to nature and always online.
              I work on Central European Time and enjoy remote collaboration with global teams.
            </p>
          </div>
          <figure className="absolute left-[50%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 — Contact / Collaboration (shorter version) */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Let's connect!
            </p>
            <p className="text-center subtext">
              I’m open to internships and collaborations in web or app development.
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 — Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 ml-4 w-full max-w-[240px] [@media_(max-width:512px)]:max-w-[65%] md:w-[50%] md:max-w-none break-words">
            <p className="headtext">My Tech Stack</p>
            <p className="subtext">
              I work with modern web tools like React, Node.js, and Vite, focusing on creating responsive, user-centered experiences.
              I enjoy experimenting with AI APIs and media tools to bring new ideas to life.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 pointer-events-none select-none">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
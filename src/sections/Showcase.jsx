import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.25,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <h2 className="text-heading">Projects</h2>
      <div className="w-full mt-12">
        <div className="showcaselayout">
          {/* --- MAIN PROJECT: Ryde --- */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper bg-[#BEE6FF] rounded-2xl shadow-[0_0_60px_rgba(51,194,204,0.25)]">
              <img src="/assets/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Awwwards Recreation, User-Friendly
              </h2>
              <p className="text-white-50 md:text-xl">
               A website built with pure HTML and CSS, delivering a fast, responsive, and user-friendly browsing experience designed for all devices.
              </p>
            </div>
          </div>

          {/* --- SECONDARY PROJECTS --- */}
          <div className="project-list-wrapper overflow-hidden">
            {/* Library Platform */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#EAD6B3] rounded-2xl shadow-[0_0_40px_rgba(214,153,92,0.35)]">
                <img
                  src="/assets/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Facial Recognition Risks</h2>
            </div>

            {/* YC Directory */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#E7C3E3] rounded-2xl shadow-[0_0_40px_rgba(202,47,140,0.35)]">
                <img src="/assets/project3.png" alt="YC Directory App" />
              </div>
              <h2>Hyvä-Powered B2B Site</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

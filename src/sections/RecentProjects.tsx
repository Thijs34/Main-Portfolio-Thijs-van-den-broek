import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

import { projects } from "../data";
import { PinContainer } from "../ui/pin";

const fadeInProps = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.6, delay },
});

const RecentProjects = () => {
  return (
    <section id="work" className="c-space">
      <motion.div
        className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between md:gap-4 mt-4 sm:mt-6"
        {...fadeInProps()}
      >
        <h2 className="text-heading text-center md:text-left px-2 sm:px-0">Recent Projects</h2>
        <a
          href="#"
          className="group mt-1 md:mt-0 text-sm md:text-base inline-flex items-center gap-2"
          aria-label="View all projects"
          onClick={(e) => e.preventDefault()}
        >
          {/* Label mask: slide old text up, new from bottom */}
          <span className="relative overflow-hidden h-[1em] leading-none">
            <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2 motion-reduce:transition-none">
              <span className="text-white">View all</span>
              <span className="text-white">View all</span>
            </span>
          </span>

          {/* Icon mask: first arrow slides out right past edge, new slides in */}
          <span className="relative overflow-hidden w-[1.1em] h-[1.1em] ms-1 align-middle">
            <FaLocationArrow className="absolute inset-0 w-full h-full text-white transition-transform duration-300 ease-out group-hover:translate-x-[140%] motion-reduce:transition-none [will-change:transform]" />
            <FaLocationArrow className="absolute inset-0 w-full h-full -translate-x-[140%] text-white transition-transform duration-300 ease-out group-hover:translate-x-0 motion-reduce:transition-none [will-change:transform]" />
          </span>
        </a>
      </motion.div>
      {/* Full-width two-column flex with consistent gutters */}
      <div className="mt-12 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              className="w-full"
              style={{ zIndex: 1 }}
              {...fadeInProps(index * 0.12)}
            >
              <div className="relative w-full" style={{ zIndex: 1 }}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a57db]/50 rounded-2xl"
                >
                  <PinContainer
                    title={item.pinLabel ?? item.title}
                    href={item.link}
                    containerClassName="pin-full w-full"
                  >
                  <div className="project-card-scaler">
                    {/* Responsive media section: only main project image, rounded corners, fully visible, uses more space */}
                    <div className="relative w-full mb-8">
                      <div className="relative w-full aspect-[16/9] flex items-center justify-center rounded-2xl overflow-hidden" style={{ background: "linear-gradient(to bottom right, #161a31, #06091f)" }}>
                        <img
                          src={item.img}
                          alt={item.title + ' cover'}
                          className="relative w-full h-full object-contain z-10"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <h1 className="font-bold text-xl sm:text-2xl w-full break-words">
                      {item.title}
                    </h1>

                    <p
                      className="text-sm sm:text-base font-light w-full break-words"
                      style={{ color: "#BEC1DD", margin: "1vh 0" }}
                    >
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3 w-full">
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-[#7a57db]/[.3] rounded-full w-10 h-10 flex justify-center items-center"
                            style={{ 
                              transform: `translateX(-${5 * index + 2}px)`,
                              background: "linear-gradient(to bottom, #161a31, #06091f)"
                            }}
                          >
                            <img src={icon} alt="tech icon" className="p-2" />
                          </div>
                        ))}
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm sm:text-base text-purple whitespace-nowrap"
                      >
                        <span>Check Live Site</span>
                        <FaLocationArrow className="ms-2 sm:ms-3" color="#CBACF9" />
                      </a>
                    </div>
                  </div>
                  </PinContainer>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "../data";
import { PinContainer } from "../ui/pin";

const RecentProjects = () => {
  return (
    <section id="work" className="c-space" style={{ padding: "45px", marginBottom: "40px" }}>
      <h2 className="text-heading">Recent Projects</h2>
      {/* Full-width two-column flex with consistent gutters */}
      <div className="mt-12 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item) => (
            <div key={item.id} className="w-full" style={{ zIndex: 1 }}>
              <div className="relative w-full" style={{ zIndex: 1 }}>
                <PinContainer
                  title="/ui.aceternity.com"
                  href="https://twitter.com/mannupaaji"
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

                    <h1 className="font-bold text-2xl line-clamp-1 w-full">
                      {item.title}
                    </h1>

                    <p
                      className="text-base font-light line-clamp-2 w-full"
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
                      <div className="flex justify-center items-center">
                        <p className="flex text-base text-purple">Check Live Site</p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

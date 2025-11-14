import { motion } from "framer-motion";

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay },
});

const Showcase = () => {
  return (
    <section id="work" className="app-showcase c-space mt-4 sm:mt-6">
      <motion.h2
        className="text-heading text-center md:text-left w-full px-2 sm:px-0"
        {...fadeInProps()}
      >
        Projects
      </motion.h2>
      <div className="w-full mt-12">
        <div className="showcaselayout">
          {/* --- MAIN PROJECT: Ryde --- */}
          <motion.div className="first-project-wrapper" {...fadeInProps(0.1)}>
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
          </motion.div>

          {/* --- SECONDARY PROJECTS --- */}
          <motion.div className="project-list-wrapper overflow-hidden" {...fadeInProps(0.2)}>
            {/* Library Platform */}
            <motion.div className="project" {...fadeInProps(0.3)}>
              <div className="image-wrapper bg-[#EAD6B3] rounded-2xl shadow-[0_0_40px_rgba(214,153,92,0.35)]">
                <img
                  src="/assets/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Facial Recognition Risks</h2>
            </motion.div>

            {/* YC Directory */}
            <motion.div className="project" {...fadeInProps(0.4)}>
              <div className="image-wrapper bg-[#E7C3E3] rounded-2xl shadow-[0_0_40px_rgba(202,47,140,0.35)]">
                <img src="/assets/project3.png" alt="YC Directory App" />
              </div>
              <h2>Hyvä-Powered B2B Site</h2>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

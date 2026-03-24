import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { useLanguage } from "../context/LanguageContext";

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 45 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
  viewport: { once: true, amount: 0.35 },
});

const About = ({ onReady }) => {
  const { t } = useLanguage();
  const grid2Container = useRef();
  const readyRef = useRef(false);
  const [hasCSpace, setHasCSpace] = useState(typeof window !== "undefined" ? window.innerWidth > 380 : true);

  useEffect(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    onReady?.();
  }, [onReady]);

  useEffect(() => {
    const handleResize = () => setHasCSpace(window.innerWidth > 380);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`${hasCSpace ? "c-space" : ""} min-h-screen`}
      id="about"
    >
      <motion.h2
        className="text-heading text-center md:text-left px-2 sm:px-0 mt-4 sm:mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {t("about.heading")}
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - About Me */}
       <motion.div className="flex items-end grid-default-color grid-1" {...fadeInProps()}>
  <img
    src="assets/coding-pov.png"
    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
    alt="coding pov"
  />
  <div className="z-10 relative" style={{ zIndex: 1 }}> {/* Add inline z-index */}
    <p className="headtext">{t("about.introTitle")}</p>
    <p className="subtext">{t("about.introBio")}</p>
  </div>
</motion.div>

        {/* Grid 2 - Interactive Cards */}
        <motion.div className="grid-default-color grid-2" {...fadeInProps(0.1)}>
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">{t("about.tagline")}</p>

            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text={t("about.cards.frontend")}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text={t("about.cards.aiIntegration")}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text={t("about.cards.creativeCoding")}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text={t("about.cards.uxThinking")}
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
        </motion.div>

        {/* Grid 3 - Time Zone */}
        <motion.div className="grid-black-color grid-3 relative" {...fadeInProps(0.2)}>
          <div className="z-10 ml-4 w-full max-w-[180px] sm:max-w-[240px] md:w-[62%] md:max-w-none break-words">
            <p className="headtext">{t("about.locationTitle")}</p>
            <p className="subtext">{t("about.locationText")}</p>
          </div>
          <figure className="absolute left-[50%] top-[10%]">
            <Globe />
          </figure>
        </motion.div>

        {/* Grid 4 - Contact / Collaboration (shorter version) */}
        <motion.div className="grid-special-color grid-4" {...fadeInProps(0.3)}>
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">{t("about.connectTitle")}</p>
            <p className="text-center subtext">{t("about.connectText")}</p>
            <CopyEmailButton />
          </div>
        </motion.div>

        {/* Grid 5 - Tech Stack */}
        <motion.div className="grid-default-color grid-5" {...fadeInProps(0.4)}>
          <div className="z-10 ml-4 w-full max-w-[240px] [@media_(max-width:512px)]:max-w-[65%] md:w-[50%] md:max-w-none break-words">
            <p className="headtext">{t("about.stackTitle")}</p>
            <p className="subtext">{t("about.stackText")}</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 select-none" style={{ pointerEvents: 'auto' }}>
            <Frameworks />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
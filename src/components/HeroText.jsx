import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const HeroText = () => {
  const { t } = useLanguage();
  const words = ["Web", "App"];
  const accent = "text-purple-400";
  const navbarHeight = 64; // px (match your Navbar's real height)

  const handleCardClick = () => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="w-full"
      style={{
        height: `calc(100dvh - ${navbarHeight}px)`,
        marginTop: `${navbarHeight}px`,
        scrollMarginTop: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {/* Headline */}
      <motion.h1
        className="text-[2.35rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3 md:mb-4 px-4"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        {t("hero.beforeFlip")}{" "}
        <span
          className={`${accent} inline-block align-baseline relative`}
          style={{
            minWidth: "3.6ch",
            maxWidth: "3.6ch",
            textAlign: "center",
            top: 0,
          }}
        >
          <FlipWords
            words={words}
            className="font-extrabold text-[2.35rem] sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </span>
        <br />
        {t("hero.afterFlip")}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-2 md:mt-3 text-lg sm:text-xl md:text-2xl lg:text-[1.85rem] text-neutral-300 font-light max-w-2xl px-4"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        {t("hero.subtitle")}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 w-full sm:w-auto max-w-sm sm:max-w-none"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
      >
        <a
          href="#work"
          className="pointer-events-auto px-6 sm:px-7 py-2.5 sm:py-2 rounded-xl bg-purple-500 text-white font-semibold shadow hover:bg-purple-600 transition text-center text-sm sm:text-base"
        >
          {t("hero.cta1")}
        </a>
        <a
          href="#contact"
          className="pointer-events-auto px-6 sm:px-7 py-2.5 sm:py-2 rounded-xl border border-purple-400 text-purple-300 font-semibold hover:bg-purple-900/30 transition text-center text-sm sm:text-base"
        >
          {t("hero.cta2")}
        </a>
      </motion.div>

      {/* Profile Card */}
      <motion.button
        type="button"
        onClick={handleCardClick}
        className="pointer-events-auto flex items-center gap-3 mt-8 md:mt-12 bg-[#18132a]/70 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg shadow-lg w-fit mx-4 cursor-pointer transition hover:bg-[#1f1740]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.2 }}
      >
        <img
          src="/assets/Profile.jpg"
          alt="Profile"
          className="w-10 h-10 sm:w-12 sm:h-12 object-cover border border-purple-500/80 shadow rounded-xl"
          loading="eager"
          decoding="async"
        />
        <div className="text-left">
          <div className="text-sm sm:text-base font-semibold text-white">Thijs van den Broek</div>
          <div className="text-purple-300 text-[11px] sm:text-xs font-mono tracking-wide">{t("hero.role")}</div>
        </div>
      </motion.button>

      {/* Scroll Arrow */}
      <motion.a
        href="#about"
        className="mt-8 md:mt-16 text-purple-400 hover:text-purple-300 transition pointer-events-auto cursor-pointer"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroText;

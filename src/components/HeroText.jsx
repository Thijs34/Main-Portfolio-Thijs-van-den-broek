import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroText = () => {
  const words = ["Web", "App"];
  const accent = "text-purple-400";
  const navbarHeight = 64; // px (match your Navbar's real height)

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="w-full"
      style={{
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        marginTop: `${navbarHeight}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {/* Headline */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        Building{" "}
        <span
          className={`${accent} inline-block align-baseline relative`}
          style={{
            minWidth: "3.6ch",
            maxWidth: "3.6ch",
            textAlign: "center",
            top: "-2px", // nudge up, adjust as needed (try -1px to -3px)
          }}
        >
          <FlipWords words={words} className="font-extrabold text-5xl md:text-6xl" />
        </span>
        <br />
        Experiences That Matter
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-3 text-lg md:text-2xl text-neutral-300 font-light max-w-2xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        I design and develop high-quality websites & applications that are fast, scalable, and user-focused.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="mt-10 flex gap-4"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
      >
        <a
          href="#work"
          className="pointer-events-auto px-7 py-2 rounded-xl bg-purple-500 text-white font-semibold shadow hover:bg-purple-600 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="pointer-events-auto px-7 py-2 rounded-xl border border-purple-400 text-purple-300 font-semibold hover:bg-purple-900/30 transition"
        >
          Let’s Connect
        </a>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        className="flex items-center gap-4 mt-12 bg-[#18132a]/70 px-6 py-4 rounded-xl shadow-lg w-fit"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.2 }}
      >
        <img
          src="/assets/Profile.jpg"
          alt="Profile"
          className="w-16 h-16 object-cover border-2 border-purple-500 shadow rounded-xl"
        />
        <div className="text-left">
          <div className="text-lg font-semibold text-white">Thijs van den Broek</div>
          <div className="text-purple-300 text-sm font-mono">Web & App Developer</div>
        </div>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.a
        href="#about"
        className="mt-16 text-purple-400 hover:text-purple-300 transition"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroText;
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { socialMedia } from "../data";
import MagicButton from "../components/MagicButton";

const groupVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type FooterProps = {
  onReady?: () => void;
};

const Footer = ({ onReady }: FooterProps) => {
  const readyRef = useRef(false);

  useEffect(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    onReady?.();
  }, [onReady]);

  return (
    <section
      className="relative w-full px-5 sm:px-10 lg:px-[45px]"
      id="contact"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <img
          src="/assets/grid.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={groupVariants}
      >
        {/* Heading */}
        <motion.h1
          className="mt-4 sm:mt-6 font-bold text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[62px] leading-snug md:leading-tight text-[var(--color-white)] max-w-[900px]"
          variants={itemVariants}
        >
          Ready to take <span className="text-[var(--color-purple-400)]">your</span>{" "}
          digital presence to the next level?
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-[var(--color-white)]/70 mt-4 sm:mt-6 text-sm sm:text-base max-w-[650px]"
          variants={itemVariants}
        >
          Reach out to me today and let’s discuss how I can help you achieve your goals.
        </motion.p>

        {/* BUTTON — LinkedIn */}
        <motion.div className="mt-8 sm:mt-10" variants={itemVariants}>
          <a
            href="https://www.linkedin.com/in/thijs-van-den-broek-aa1aa4245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Connect on LinkedIn"
              icon={
                <img
                  src="/assets/logos/link.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              }
              position="right"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* BOTTOM ROW */}
      <motion.div
        className="relative z-10 mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        {/* Copyright */}
        <p className="text-sm text-[var(--color-white)]/70">
          © 2025 Thijs van den Broek
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 sm:gap-4 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-lg border border-[var(--color-purple-400)]/40 bg-white/5 backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-[var(--color-purple-400)]/20 hover:border-[var(--color-purple-400)]/80 hover:scale-110 hover:-translate-y-1"
              >
                <img src={info.img} alt="icon" width={20} height={20} className="sm:w-[22px] sm:h-[22px] transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;

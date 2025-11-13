import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

function Navigation({ onClick, activeSection }) {
  return (
    <ul className="flex flex-col gap-6 sm:flex-row sm:gap-4 items-center">
      {navLinks.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={onClick}
              className={`pointer-events-auto relative px-3 py-1 rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500
                ${
                  isActive
                    ? "text-purple-400 after:w-full"
                    : "hover:text-purple-400 text-neutral-200 after:w-0"
                }
              `}
            >
              {link.name}
              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 ${
                  isActive
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Active section detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? "backdrop-blur-xl backdrop-saturate-150 bg-[#15122a]/70 border-b border-purple-800/20 shadow-md shadow-purple-900/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
          {/* Logo */}
          <a
            href="/"
            className={`pointer-events-auto text-xl font-bold text-purple-300 hover:text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center gap-2 ${
              scrolled ? "scale-95" : "scale-100"
            }`}
          >
            <img
              src="/assets/signature.svg"
              alt="Signature"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pointer-events-auto flex sm:hidden cursor-pointer text-purple-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-1"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-7 h-7"
              alt=""
            />
          </button>

          {/* Desktop navigation */}
          <nav
            className="pointer-events-auto hidden sm:flex"
            role="navigation"
            aria-label="Main"
          >
            <Navigation activeSection={activeSection} />
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className={`pointer-events-auto block overflow-hidden text-center sm:hidden backdrop-blur-xl backdrop-saturate-150 bg-[#15122a]/80 border-b border-purple-800/10`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <nav className="pb-4 pt-2" role="navigation" aria-label="Mobile main">
              <Navigation
                onClick={() => setIsOpen(false)}
                activeSection={activeSection}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

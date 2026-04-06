import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = memo(function LanguageToggle({ compact = false }) {
  const { lang, setLang } = useLanguage();
  const isNL = lang === "nl";

  return (
    <button
      type="button"
      onClick={() => setLang(isNL ? "en" : "nl")}
      aria-label={isNL ? "Switch to English" : "Schakel naar Nederlands"}
      className={`pointer-events-auto flex items-center gap-1 rounded-full border border-purple-500/40 bg-purple-900/20 px-3 py-1 text-xs font-semibold text-purple-300 hover:border-purple-400/70 hover:bg-purple-800/30 hover:text-white transition-all duration-200 select-none ${compact ? "text-[11px] px-2.5" : ""}`}
    >
      <span className={`transition-all duration-200 ${!isNL ? "text-white" : "text-purple-400/60"}`}>EN</span>
      <span className="text-purple-500/50 font-light">|</span>
      <span className={`transition-all duration-200 ${isNL ? "text-white" : "text-purple-400/60"}`}>NL</span>
    </button>
  );
});

const Navigation = memo(function Navigation({ onClick, activeSection, isDetailPage = false }) {
  const { t } = useLanguage();

  const navLinks = [
    { key: "home", href: "#home", detailHref: "/" },
    { key: "about", href: "#about", detailHref: "/#about" },
    { key: "work", href: "#work", detailHref: "/#projects" },
    { key: "contact", href: "#contact", detailHref: "/#contact" },
  ];

  return (
    <ul className="flex flex-col gap-6 sm:flex-row sm:gap-4 items-center">
      {navLinks.map((link) => {
        const isActive = !isDetailPage && activeSection === link.href.substring(1);
        return (
          <li key={link.key}>
            <a
              href={link.href}
              onClick={(e) => {
                if (isDetailPage) {
                  e.preventDefault();
                  const target = link.detailHref ?? (link.href === "#home" ? "/" : `/${link.href}`);
                  window.location.assign(target);
                  return;
                }
                if (link.href === "#home") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.history.pushState({}, '', '/');
                }
                onClick && onClick(e);
                e.currentTarget.blur();
              }}
              className={`pointer-events-auto relative px-3 py-1 rounded font-medium transition-all duration-200 focus:outline-none
                ${
                  isActive
                    ? "text-purple-400 after:w-full"
                    : "hover:text-purple-400 text-neutral-200 after:w-0"
                }
              `}
            >
              {t(`nav.${link.key}`)}
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
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDetailPage =
    typeof window !== "undefined" &&
    window.location.pathname !== "/" &&
    window.location.pathname !== "";
  const [activeSection, setActiveSection] = useState(isDetailPage ? "" : "home");
  const [scrolled, setScrolled] = useState(false);

  // Active section detection
  useEffect(() => {
    if (isDetailPage) return undefined;

    const isCompactScreen = () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(max-width: 768px)").matches;

    const getReferenceLine = () => {
      if (typeof window === "undefined") return 0;
      const viewportHeight = window.innerHeight || document.documentElement?.clientHeight || 1;
      return viewportHeight * (isCompactScreen() ? 0.3 : 0.35);
    };

    const distanceToReference = (entry, referenceLine) => {
      const { top, height } = entry.boundingClientRect;
      const entryCenter = top + height / 2;
      return Math.abs(entryCenter - referenceLine);
    };

    let hashUpdateTimeout = null;
    const trackedSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        const referenceLine = getReferenceLine();
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const distanceA = distanceToReference(a, referenceLine);
            const distanceB = distanceToReference(b, referenceLine);

            if (distanceA === distanceB) {
              if (b.intersectionRatio === a.intersectionRatio) {
                return a.target.offsetTop - b.target.offsetTop;
              }
              return b.intersectionRatio - a.intersectionRatio;
            }

            return distanceA - distanceB;
          })[0];

        if (visibleEntry) {
          const nextId = visibleEntry.target.id;
          setActiveSection((current) => (current === nextId ? current : nextId));

          // Debounce URL hash updates to prevent flickering
          if (hashUpdateTimeout) {
            clearTimeout(hashUpdateTimeout);
          }
          hashUpdateTimeout = setTimeout(() => {
            const newHash = nextId === 'home' ? '' : `#${nextId}`;
            const currentHash = window.location.hash;
            if (currentHash !== newHash) {
              window.history.replaceState({}, '', newHash || '/');
            }
          }, 150);
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
        rootMargin: isCompactScreen() ? "-10% 0px -40% 0px" : "-12% 0px -25% 0px",
      }
    );

    const registerSections = () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        if (trackedSections.has(section)) return;
        trackedSections.add(section);
        observer.observe(section);
      });
    };

    registerSections();

    const mutationObserver = new MutationObserver(() => {
      registerSections();
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const handleScrollBottom = () => {
      const { innerHeight, scrollY } = window;
      const { offsetHeight } = document.documentElement;
      const nearBottom = innerHeight + scrollY >= offsetHeight - 40;
      if (nearBottom) {
        setActiveSection((current) => {
          if (current !== "contact") {
            // Update URL hash when reaching bottom
            window.history.replaceState({}, '', '#contact');
            return "contact";
          }
          return current;
        });
      }
    };

    window.addEventListener("scroll", handleScrollBottom, { passive: true });

    return () => {
      if (hashUpdateTimeout) {
        clearTimeout(hashUpdateTimeout);
      }
      mutationObserver.disconnect();
      observer.disconnect();
      trackedSections.clear();
      window.removeEventListener("scroll", handleScrollBottom);
    };
  }, [isDetailPage]);

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
          ? "backdrop-blur-xl backdrop-saturate-150 bg-[#15122a]/70 border-b border-purple-800/20 shadow-md shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 sm:px-10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled ? "py-2" : "py-4"
      }`}>
        <div className="flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (isDetailPage) {
                window.location.assign("/");
                return;
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState({}, '', '/');
            }}
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

          {/* Right side: language toggle + hamburger (mobile) */}
          <div className="flex items-center gap-3 sm:hidden">
            <LanguageToggle compact />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="pointer-events-auto flex cursor-pointer text-purple-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-1"
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
          </div>

          {/* Desktop navigation + language toggle */}
          <div className="pointer-events-auto hidden sm:flex items-center gap-5">
            <nav role="navigation" aria-label="Main">
              <Navigation activeSection={activeSection} isDetailPage={isDetailPage} />
            </nav>
            <LanguageToggle />
          </div>
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
                isDetailPage={isDetailPage}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Navbar);

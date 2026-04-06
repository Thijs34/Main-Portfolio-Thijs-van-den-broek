import { useEffect, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import { projects } from "../data";
import { cn } from "../lib/utils";
import { PinContainer } from "../ui/pin";
import { navigateTo } from "../lib/pageTransition";

type SectionReadyProps = {
  onReady?: () => void;
};

const fadeInProps = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.6, delay },
});

// Only show the explicitly featured projects on the homepage
const featuredProjects = projects.filter((p) => p.featured);

const RecentProjects = ({ onReady }: SectionReadyProps) => {
  const { t, lang } = useLanguage();
  const readyRef = useRef(false);

  useEffect(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    onReady?.();
  }, [onReady]);

  const ctaGradient = "from-[#5c33cc]/70 via-[#7a57db]/90 to-[#9f7bff]/80";
  const resolveCtaLabel = (rawLabel: string | undefined, isVideoLink: boolean) => {
    if (!rawLabel) return isVideoLink ? t("projects.watchVideo") : t("projects.checkLive");
    const normalized = rawLabel.trim().toLowerCase();
    if (normalized === "watch video") return t("projects.watchVideo");
    if (normalized === "check live site" || normalized === "live site") return t("projects.checkLive");
    return rawLabel;
  };

  return (
    <section id="work" className="c-space">
      <motion.div
        className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between md:gap-4 mt-4 sm:mt-6"
        {...fadeInProps()}
      >
        <h2 className="text-heading text-center md:text-left px-2 sm:px-0">{t("projects.heading")}</h2>

        <button
          type="button"
          onClick={() => navigateTo("/projects")}
          className="group mt-1 md:mt-0 text-sm md:text-base inline-flex items-center gap-2 focus-visible:outline-none"
          aria-label="View all projects"
        >
          {/* Label mask */}
          <span className="relative overflow-hidden h-[1em] leading-none">
            <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2 motion-reduce:transition-none">
              <span className="text-white">{t("projects.viewAll")}</span>
              <span className="text-white">{t("projects.viewAll")}</span>
            </span>
          </span>

          {/* Icon mask */}
          <span className="relative overflow-hidden w-[1.1em] h-[1.1em] ms-1 align-middle">
            <FaLocationArrow className="absolute inset-0 w-full h-full text-white transition-transform duration-300 ease-out group-hover:translate-x-[140%] motion-reduce:transition-none [will-change:transform]" />
            <FaLocationArrow className="absolute inset-0 w-full h-full -translate-x-[140%] text-white transition-transform duration-300 ease-out group-hover:translate-x-0 motion-reduce:transition-none [will-change:transform]" />
          </span>
        </button>
      </motion.div>

      <div className="mt-12 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((item, index) => {
            const linkHref = item.link ?? "#";
            const isVideoLink = /youtube\.com|youtu\.be/.test(linkHref);
            const ctaLabel = resolveCtaLabel(item.ctaLabel, isVideoLink);
            const navigateToDetail = () => {
              if (!item.detailPath) return;
              sessionStorage.setItem("cameFrom", "recentProjects");
              navigateTo(item.detailPath);
            };

            return (
              <motion.div
                key={item.id}
                className="w-full"
                style={{ zIndex: 1 }}
                {...fadeInProps(index * 0.12)}
              >
                <div className="relative w-full" style={{ zIndex: 1 }}>
                  <div className="block w-full rounded-2xl">
                    <PinContainer
                      containerClassName="pin-full w-full"
                      onClick={item.detailPath ? navigateToDetail : undefined}
                      title={item.detailPath ? t("projects.moreInfo") : undefined}
                    >
                      <div className="project-card-scaler">
                        <div className="relative w-full mb-8">
                          <div
                            className="relative w-full aspect-[16/9] flex items-center justify-center rounded-2xl overflow-hidden"
                            style={{ background: "linear-gradient(to bottom right, #161a31, #06091f)" }}
                          >
                            <img
                              src={item.img}
                              alt={item.title + " cover"}
                              className="relative w-full h-full object-contain z-10"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <h1 className="project-card-title font-bold text-xl sm:text-2xl w-full break-words">{item.title}</h1>

                        <p
                          className="project-card-description mt-2 sm:mt-2.5 mb-0 text-sm sm:text-base font-light w-full break-words"
                          style={{ color: "#BEC1DD" }}
                        >
                          {lang === "nl" ? t(`projectDes.${item.id}`) : item.des}
                        </p>

                        <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center sm:justify-between mt-2 sm:mt-2.5 pt-0 sm:pt-1 mb-2 sm:mb-2 w-full">
                          <div className="flex items-center">
                            {item.iconLists.map((icon, i) => (
                              <div
                                key={i}
                                className="border border-[#7a57db]/[.3] rounded-full w-10 h-10 flex justify-center items-center"
                                style={{
                                  transform: `translateX(-${5 * i + 2}px)`,
                                  background: "linear-gradient(to bottom, #161a31, #06091f)",
                                }}
                              >
                                <img src={icon} alt="tech icon" className="p-2" loading="lazy" decoding="async" />
                              </div>
                            ))}
                          </div>
                          <a
                            href={linkHref}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`${ctaLabel} for ${item.title}`}
                            className="group/action relative inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#7a57db]/60 px-4 py-2 text-sm sm:text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7a57db]/60 focus-visible:ring-offset-[#050714] overflow-hidden"
                            style={{ background: "linear-gradient(120deg, rgba(124,94,219,0.08), rgba(193,164,255,0.03))" }}
                          >
                            <span
                              className={cn(
                                "absolute inset-0 opacity-0 transition-opacity duration-300 blur-[1px] group-hover/action:opacity-100",
                                `bg-gradient-to-r ${ctaGradient}`
                              )}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                              {ctaLabel}
                              <FaLocationArrow
                                className="transition-transform duration-300 group-hover/action:translate-x-1 ms-1"
                                color="#CBACF9"
                              />
                            </span>
                          </a>
                        </div>

                        {item.detailPath ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateToDetail();
                            }}
                            className="sm:hidden w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20 focus-visible:ring-offset-[#050714]"
                            aria-label={`Open detailed case study for ${item.title}`}
                          >
                            {t("projects.moreInfo")}
                          </button>
                        ) : null}
                      </div>
                    </PinContainer>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

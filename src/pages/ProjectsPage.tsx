import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa6";

import Navbar from "../sections/Navbar";
import { projects } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "../lib/utils";
import { navigateTo } from "../lib/pageTransition";

const EASE: Easing = [0.25, 0.46, 0.45, 0.94];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE },
});

const ProjectCard = ({ item, index }: { item: typeof projects[number]; index: number }) => {
  const { t, lang } = useLanguage();
  const linkHref = item.link ?? "#";
  const isVideoLink = /youtube\.com|youtu\.be/.test(linkHref);
  const resolveCtaLabel = (rawLabel: string | undefined) => {
    if (!rawLabel) return isVideoLink ? t("projects.watchVideo") : t("projects.liveSite");
    const normalized = rawLabel.trim().toLowerCase();
    if (normalized === "watch video") return t("projects.watchVideo");
    if (normalized === "check live site" || normalized === "live site") return t("projects.liveSite");
    return rawLabel;
  };
  const ctaLabel = resolveCtaLabel(item.ctaLabel);

  return (
    <motion.article
      {...fadeIn(index * 0.07)}
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-gradient-to-br from-[#1a1d35] to-[#0b0f24] overflow-hidden",
        "transition-all duration-300",
        item.comingSoon
          ? "border-white/[0.07]"
          : "border-white/10 hover:border-[#7a57db]/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(122,87,219,0.18)] cursor-pointer"
      )}
      onClick={
        !item.comingSoon && item.detailPath
          ? () => navigateTo(item.detailPath!)
          : undefined
      }
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0d1020] shrink-0">
        {item.comingSoon ? (
          <>
            {/* dot-grid */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #161a31 0%, #1f1e39 60%, #06091f 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 rounded-full bg-[#7a57db]/10 blur-2xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35 backdrop-blur-sm">
                {t("projectsPage.comingSoon")}
              </span>
            </div>
          </>
        ) : (
          <img
            src={item.img}
            alt={item.title + " cover"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        )}

        {/* Case-study badge */}
        {item.detailPath && !item.comingSoon && (
          <span className="absolute top-3 left-3 rounded-full border border-[#7a57db]/60 bg-black/70 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c4aaff] backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
            {t("projectsPage.caseStudy")}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3
          className={cn(
            "font-bold text-base leading-snug",
            item.comingSoon ? "text-white/40" : "text-white"
          )}
        >
          {item.title}
        </h3>

        <p
          className={cn(
            "text-sm leading-relaxed flex-1",
            item.comingSoon ? "text-white/25" : "text-white/60"
          )}
        >
          {lang === "nl" ? t(`projectDes.${item.id}`) : item.des}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-1 pt-3 border-t border-white/[0.07]">
          {/* Tech icons */}
          <div className="flex items-center">
            {item.iconLists.slice(0, 4).map((icon, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-full w-7 h-7 flex justify-center items-center border",
                  item.comingSoon ? "border-white/[0.08] opacity-30" : "border-[#7a57db]/25"
                )}
                style={{
                  transform: `translateX(-${4 * i}px)`,
                  background: "linear-gradient(to bottom, #161a31, #06091f)",
                }}
              >
                <img src={icon} alt="tech icon" className="p-1.5 w-full h-full" />
              </div>
            ))}
          </div>

          {/* CTA */}
          {item.comingSoon ? (
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/20">
              {t("projectsPage.inProgress")}
            </span>
          ) : (
            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {item.detailPath && (
                <button
                  type="button"
                  onClick={() => navigateTo(item.detailPath!)}
                  className="text-xs font-semibold text-[#c4aaff]/80 hover:text-[#c4aaff] transition-colors duration-200"
                >
                  {t("projects.moreInfo")}
                </button>
              )}
              {item.link && (
                <a
                  href={linkHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${ctaLabel} for ${item.title}`}
                  className="group/cta inline-flex items-center gap-1.5 rounded-full border border-[#7a57db]/40 bg-[#7a57db]/10 px-3 py-1 text-xs font-semibold text-white/80 hover:border-[#7a57db]/70 hover:bg-[#7a57db]/20 hover:text-white transition-all duration-200"
                >
                  {ctaLabel}
                  <FaLocationArrow className="w-2.5 h-2.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <Navbar />
      <main className="pt-28 pb-24">
        {/* Page header */}
        <div className="c-space">
          <motion.div {...fadeIn(0)} className="mb-2">
            <button
              type="button"
              onClick={() => navigateTo("/#projects")}
              className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 focus-visible:outline-none mb-8"
            >
              <FaArrowLeft className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {t("projectsPage.backToHome")}
            </button>
          </motion.div>

          <motion.div {...fadeIn(0.05)} className="space-y-3 mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#7a57db]">{t("projectsPage.portfolio")}</p>
            <h1 className="text-4xl font-bold md:text-5xl">{t("projectsPage.allProjects")}</h1>
            <p className="text-white/55 text-base max-w-xl leading-relaxed mt-2">
              {t("projectsPage.description")}
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((item, index) => (
              <ProjectCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;

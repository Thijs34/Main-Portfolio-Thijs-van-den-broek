import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaLocationArrow, FaPlay, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { SiCss3, SiFigma, SiJavascript, SiReact, SiSoundcloud, SiSpotify, SiTailwindcss, SiYoutube } from "react-icons/si";
import type { IconType } from "react-icons";

import Navbar from "../sections/Navbar";
import MagicButton from "../components/MagicButton";
import ImageLightbox from "../components/ImageLightbox";
import { musicSyncDetail, musicSyncDetailNL } from "../data";
import { navigateTo } from "../lib/pageTransition";
import { useLanguage } from "../context/LanguageContext";

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay },
});

type LightboxShot = { label: string; src: string };
type ToolBadge = { name: string; accent: string; Icon?: IconType };

const toolIcons: ToolBadge[] = [
  { name: "React",        Icon: SiReact,       accent: "#61dafb" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, accent: "#38bdf8" },
  { name: "CSS",          Icon: SiCss3,        accent: "#2862e9" },
  { name: "JavaScript",   Icon: SiJavascript,  accent: "#f0db4f" },
  { name: "Figma",        Icon: SiFigma,       accent: "#f24e1e" },
];

const platformIcons: Record<string, IconType> = {
  "Spotify":       SiSpotify,
  "YouTube Music": SiYoutube,
  "SoundCloud":    SiSoundcloud,
};

/* ── Desktop screenshot tile ── */
const MediaTile = ({
  label,
  src,
  onExpand,
}: {
  label: string;
  src: string;
  onExpand?: (shot: LightboxShot) => void;
}) => (
  <figure
    role={onExpand ? "button" : undefined}
    tabIndex={onExpand ? 0 : undefined}
    onClick={() => onExpand?.({ label, src })}
    onKeyDown={(e) => {
      if (!onExpand) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onExpand({ label, src }); }
    }}
    aria-label={onExpand ? `View larger: ${label}` : undefined}
    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#7a57db]/60 focus:ring-offset-2 focus:ring-offset-[#050714] aspect-video"
  >
    <img
      src={src}
      alt={label}
      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
      loading="lazy"
    />
    <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
      <FaMagnifyingGlassPlus className="h-3.5 w-3.5" />
      Zoom
    </span>
    <figcaption className="absolute left-4 bottom-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
      {label}
    </figcaption>
  </figure>
);

const SectionHeader = ({
  eyebrow, title, description, fullWidth = false,
}: {
  eyebrow: string; title: string; description?: string; fullWidth?: boolean;
}) => (
  <div className={`space-y-3 ${fullWidth ? "" : "max-w-3xl"}`}>
    <p className="text-xs uppercase tracking-[0.35em] text-[#7a57db]">{eyebrow}</p>
    <h2 className="text-heading text-left">{title}</h2>
    {description && <p className="text-base text-white/80 leading-relaxed max-w-3xl">{description}</p>}
  </div>
);

const embedUrl = (url: string) => {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=|shorts\/))([A-Za-z0-9_-]{11})/);
  return `https://www.youtube.com/embed/${m ? m[1] : ""}?rel=0&modestbranding=1&playsinline=1`;
};

/* ─────────────────────── */

const MusicSyncMoreInfo = () => {
  const { t, lang } = useLanguage();
  const d = lang === "nl" ? musicSyncDetailNL : musicSyncDetail;
  const demoRef = useRef<HTMLDivElement | null>(null);
  const [lightboxImage, setLightboxImage] = useState<LightboxShot | null>(null);

  const demoUrl = embedUrl(d.demoVideoLink);

  const handleScrollToDemo = () =>
    demoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  const handleReturn = () => navigateTo("/#projects");

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <Navbar />
      <main className="pt-28 pb-20 space-y-24">

        {/* ── Hero ── */}
        <section className="relative isolate overflow-hidden py-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent mix-blend-screen opacity-10" />
          </div>

          <div className="c-space relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <motion.div className="space-y-5" {...fadeInProps()}>
              <p className="text-xs uppercase tracking-[0.4em] text-[#7a57db]">{t("detailPage.personalProject")}</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {d.heroTitle}
              </h1>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                {d.heroDescription}
              </p>

              {/* Platform pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {d.platforms.map(({ name, color }) => {
                  const Icon = platformIcons[name];
                  return (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/80"
                    >
                      {Icon && <Icon className="h-4 w-4" style={{ color }} />}
                      {name}
                    </span>
                  );
                })}
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/40 italic">
                  {t("detailPage.morePlanned")}
                </span>
              </div>
            </motion.div>

            {/* Demo video */}
            <motion.div
              className="relative space-y-3 max-w-xl w-full lg:justify-self-end"
              {...fadeInProps(0.15)}
            >
              <div className="aspect-[15/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/80 p-2 shadow-[0_18px_48px_rgba(5,4,15,0.35)]">
                <iframe
                  src={demoUrl}
                  title={lang === "nl" ? "MusicSync demo" : "MusicSync demo"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-xl"
                />
              </div>
              <p className="text-sm text-white/75 leading-relaxed">
                {t("detailPage.musicSync.demoCaption")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Overview ── */}
        <section style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-8" {...fadeInProps()}>
              <SectionHeader eyebrow={t("detailPage.overview")} title={t("detailPage.musicSync.overviewTitle")} />
              <p className="text-base leading-relaxed text-white/80 max-w-3xl">
                {d.overviewText}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Screenshots ── */}
        <section style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-8" {...fadeInProps()}>
              <SectionHeader
                eyebrow={t("detailPage.screenshots")}
                title={t("detailPage.musicSync.screenshotsTitle")}
                fullWidth
                description={d.howItWorksDescription}
              />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {d.screenshots.map((shot, i) => (
                  <motion.div key={shot.label} {...fadeInProps(i * 0.08)}>
                    <MediaTile
                      label={shot.label}
                      src={shot.src}
                      onExpand={setLightboxImage}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Supported platforms ── */}
        <section style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-8" {...fadeInProps()}>
              <SectionHeader eyebrow={t("detailPage.platforms")} title={t("detailPage.musicSync.platformsTitle")} />
              <div className="flex flex-wrap gap-4">
                {d.platforms.map(({ name, color }) => {
                  const Icon = platformIcons[name];
                  return (
                    <div
                      key={name}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] px-5 py-4"
                    >
                      {Icon && (
                        <Icon className="h-7 w-7 shrink-0" style={{ color }} />
                      )}
                      <span className="font-semibold text-white/90">{name}</span>
                      <span className="ml-1 rounded-full bg-[#7a57db]/20 border border-[#7a57db]/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[#c4aaff]">
                        {t("detailPage.liveBadge")}
                      </span>
                    </div>
                  );
                })}
                {/* Planned */}
                {["Apple Music", "Tidal"].map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 opacity-50"
                  >
                    <div className="h-7 w-7 rounded-full border border-white/15 bg-white/5" />
                    <span className="font-semibold text-white/50">{name}</span>
                    <span className="ml-1 rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white/30">
                      {t("detailPage.plannedBadge")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Role / Tools ── */}
        <section style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="grid gap-10 lg:grid-cols-2" {...fadeInProps()}>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-6">
                <h3 className="text-2xl font-semibold">{t("detailPage.myRole")}</h3>
                <ul className="list-disc space-y-2 pl-5 text-white/80">
                  {d.roleItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <hr className="border-white/10 mt-4" />
                <div className="mt-4 space-y-3">
                  <h4 className="text-lg font-semibold text-white">{t("detailPage.skillsInFocus")}</h4>
                  <ul className="list-disc space-y-2 pl-5 text-white/80">
                    {d.skillsFocus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-6">
                <h3 className="text-2xl font-semibold">{t("detailPage.toolsUsed")}</h3>
                <p className="mt-2 text-white/70">{d.toolsDescription}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {toolIcons.map(({ name, Icon, accent }) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur"
                    >
                      {Icon && <Icon className="h-4 w-4" style={{ color: accent }} aria-hidden="true" />}
                      <span>{name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Status ── */}
        <section className="c-space">
          <motion.div
            ref={demoRef}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-8 relative overflow-hidden"
            {...fadeInProps()}
          >
            <div className="pointer-events-none absolute -top-8 -left-8 w-48 h-48 rounded-full bg-[#7a57db]/8 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <SectionHeader eyebrow={t("detailPage.status")} title={t("detailPage.musicSync.statusTitle")} />
              <p className="text-base leading-relaxed text-white/80 max-w-3xl">
                {d.statusNote}
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Buttons ── */}
        <section className="c-space">
          <motion.div
            className="mx-auto grid w-full max-w-xl gap-4 place-items-center md:grid-cols-2"
            {...fadeInProps()}
          >
            <MagicButton
              title={t("detailPage.watchDemo")}
              icon={<FaPlay />}
              position="left"
              handleClick={handleScrollToDemo}
              otherClasses="md:w-full md:mt-0"
            />
            <MagicButton
              title={t("detailPage.returnToProjects")}
              icon={<FaArrowLeft />}
              position="left"
              handleClick={handleReturn}
              otherClasses="md:w-full md:mt-0"
            />
          </motion.div>
        </section>

      </main>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
};

export default MusicSyncMoreInfo;

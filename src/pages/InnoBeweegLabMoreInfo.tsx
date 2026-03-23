import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaLocationArrow, FaPlay, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { SiCss3, SiFigma, SiFlutter, SiGitlab, SiTailwindcss } from "react-icons/si";
import type { IconType } from "react-icons";

import Navbar from "../sections/Navbar";
import MagicButton from "../components/MagicButton";
import ImageLightbox from "../components/ImageLightbox";
import { innoBeweegLabDetail } from "../data";
import { navigateTo } from "../lib/pageTransition";

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay },
});

type LightboxShot = { label: string; src: string };

type ToolBadge = { name: string; accent: string; Icon?: IconType };

const toolIcons: ToolBadge[] = [
  { name: "Flutter",      Icon: SiFlutter,     accent: "#54c5f8" },
  { name: "Figma",        Icon: SiFigma,       accent: "#f24e1e" },
  { name: "CSS",          Icon: SiCss3,        accent: "#2862e9" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, accent: "#38bdf8" },
  { name: "GitLab",       Icon: SiGitlab,      accent: "#fc6d26" },
];

/* ── Portrait phone tile ── */
const PhoneTile = ({
  label,
  src,
  delay = 0,
  onExpand,
}: {
  label: string;
  src: string;
  delay?: number;
  onExpand?: (shot: LightboxShot) => void;
}) => (
  <motion.figure
    {...fadeInProps(delay)}
    role={onExpand ? "button" : undefined}
    tabIndex={onExpand ? 0 : undefined}
    onClick={() => onExpand?.({ label, src })}
    onKeyDown={(e) => {
      if (!onExpand) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onExpand({ label, src }); }
    }}
    aria-label={onExpand ? `View larger: ${label}` : undefined}
    className="group relative shrink-0 cursor-zoom-in focus:outline-none"
  >
    <div className="relative w-[200px] h-[400px] transition-transform duration-300 group-hover:scale-[1.03]">
      <img src={src} alt={label} className="w-full h-full object-contain" loading="lazy" />
      {onExpand && (
        <span className="pointer-events-none absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
          <FaMagnifyingGlassPlus className="h-3 w-3" />
          Zoom
        </span>
      )}
    </div>
    <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-white/45">
      {label}
    </figcaption>
  </motion.figure>
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
  const id = m ? m[1] : "";
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
};

/* ─────────────────────── */

const InnoBeweegLabMoreInfo = () => {
  const walkthroughRef = useRef<HTMLDivElement | null>(null);
  const [lightboxImage, setLightboxImage] = useState<LightboxShot | null>(null);

  const promoUrl = embedUrl(innoBeweegLabDetail.promoVideoLink);
  const demoUrl  = embedUrl(innoBeweegLabDetail.demoVideoLink);

  const handleScrollToDemo = () =>
    walkthroughRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

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
            {/* left */}
            <motion.div className="space-y-6" {...fadeInProps()}>
              <p className="text-xs uppercase tracking-[0.4em] text-[#7a57db]">Project Spotlight</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {innoBeweegLabDetail.heroTitle}
              </h1>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                {innoBeweegLabDetail.heroDescription}
              </p>
              {/* quick stats */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                {[
                  { value: "Live", label: "in production" },
                  { value: "2",    label: "user types"    },
                  { value: "0",    label: "paper forms"   },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-bold text-[#c4aaff]">{value}</p>
                    <p className="text-xs text-white/50 mt-1 uppercase tracking-[0.15em]">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* right — promo trailer */}
            <motion.div
              className="relative space-y-3 max-w-xl w-full lg:justify-self-end"
              {...fadeInProps(0.15)}
            >
              <div className="aspect-[15/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/80 p-2 shadow-[0_18px_48px_rgba(5,4,15,0.35)]">
                <iframe
                  src={promoUrl}
                  title="InnoBeweegLab promo trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-xl"
                />
              </div>
              <p className="text-sm text-white/75 leading-relaxed">
                Promo clip showcasing the observation tool in action.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Overview ── */}
        <section style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-8" {...fadeInProps()}>
              <SectionHeader eyebrow="Overview" title="From paper forms to live data" />
              <p className="text-base leading-relaxed text-white/80 max-w-3xl">
                {innoBeweegLabDetail.overviewText}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Observer side — phone tiles ── */}
        <section style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-10" {...fadeInProps()}>
              <SectionHeader
                eyebrow="Observer experience"
                title="Built for the field"
                fullWidth
                description={innoBeweegLabDetail.observerDescription}
              />
              <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
                {innoBeweegLabDetail.observerShots.map((shot, i) => (
                  <PhoneTile
                    key={shot.label}
                    label={shot.label}
                    src={shot.src}
                    delay={i * 0.1}
                    onExpand={setLightboxImage}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Admin side — phone tiles ── */}
        <section style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-10" {...fadeInProps()}>
              <SectionHeader
                eyebrow="Admin system"
                title="Full control, live data"
                fullWidth
                description={innoBeweegLabDetail.adminDescription}
              />
              <div className="flex justify-center gap-6 sm:gap-10 flex-wrap">
                {innoBeweegLabDetail.adminShots.map((shot, i) => (
                  <PhoneTile
                    key={shot.label}
                    label={shot.label}
                    src={shot.src}
                    delay={i * 0.08}
                    onExpand={setLightboxImage}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Full walkthrough video ── */}
        <section className="c-space">
          <motion.div ref={walkthroughRef} className="space-y-8" {...fadeInProps()}>
            <SectionHeader
              eyebrow="Full walkthrough"
              title="Every screen, every feature"
              fullWidth
              description="A complete run-through of both the observer app and the admin panel, from setting up a project to recording observations and viewing the collected data."
            />
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-4">
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                <iframe
                  src={demoUrl}
                  title="InnoBeweegLab full walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Role / Tools ── */}
        <section style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="grid gap-10 lg:grid-cols-2" {...fadeInProps()}>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-6">
                <h3 className="text-2xl font-semibold">My Role</h3>
                <ul className="list-disc space-y-2 pl-5 text-white/80">
                  {innoBeweegLabDetail.roleItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <hr className="border-white/10 mt-4" />
                <div className="mt-4 space-y-3">
                  <h4 className="text-lg font-semibold text-white">Skills in focus</h4>
                  <ul className="list-disc space-y-2 pl-5 text-white/80">
                    {innoBeweegLabDetail.skillsFocus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-6">
                <h3 className="text-2xl font-semibold">Tools Used</h3>
                <p className="mt-2 text-white/70">{innoBeweegLabDetail.toolsDescription}</p>
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

        {/* ── Impact ── */}
        <section className="c-space">
          <motion.div
            className="rounded-3xl border border-[#7a57db]/30 bg-gradient-to-br from-[#1a1840] to-[#0b0f24] p-8 relative overflow-hidden"
            {...fadeInProps()}
          >
            <div className="pointer-events-none absolute -top-10 -right-10 w-60 h-60 rounded-full bg-[#7a57db]/10 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <SectionHeader eyebrow="Impact" title="Built it. Deployed it. They use it every day." />
              <p className="text-base leading-relaxed text-white/80 max-w-3xl">
                {innoBeweegLabDetail.impactDescription}
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Buttons ── */}
        <section className="c-space">
          <motion.div
            className="mx-auto grid w-full max-w-3xl gap-4 place-items-center md:grid-cols-3"
            {...fadeInProps()}
          >
            <MagicButton
              title="Watch Promo"
              icon={<FaPlay />}
              position="left"
              handleClick={() => window.open(innoBeweegLabDetail.promoVideoLink, "_blank", "noopener,noreferrer")}
              otherClasses="md:w-full md:mt-0"
            />
            <MagicButton
              title="Full Walkthrough"
              icon={<FaLocationArrow />}
              position="left"
              handleClick={handleScrollToDemo}
              otherClasses="md:w-full md:mt-0"
            />
            <MagicButton
              title="Return to Projects"
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

export default InnoBeweegLabMoreInfo;

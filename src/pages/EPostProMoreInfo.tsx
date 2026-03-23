import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaLocationArrow, FaPlay, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { SiCss3, SiFigma, SiHtml5, SiJavascript, SiNodedotjs, SiOpenai } from "react-icons/si";
import type { IconType } from "react-icons";

import Navbar from "../sections/Navbar";
import { navigateTo } from "../lib/pageTransition";
import MagicButton from "../components/MagicButton";
import ImageLightbox from "../components/ImageLightbox";
import { projects, ePostProDetail } from "../data";

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

type MediaShot = {
  label: string;
  src: string;
  aspect?: string;
};

type LightboxShot = Pick<MediaShot, "label" | "src">;

const experienceShots: MediaShot[] = [
  {
    label: "Prompt input panel",
    src: "/assets/epostpro/email-assistant.png",
    aspect: "16 / 9",
  },
  {
    label: "Landing hero",
    src: "/assets/epostpro/landing.png",
    aspect: "16 / 9",
  },
  {
    label: "Guided tutorial overlay",
    src: "/assets/epostpro/tuturial page.png",
    aspect: "16 / 9",
  },
];

type ToolBadge = {
  name: string;
  accent: string;
  Icon?: IconType;
  image?: string;
};

const toolIcons: ToolBadge[] = [
  { name: "HTML", Icon: SiHtml5, accent: "#e96228" },
  { name: "CSS", Icon: SiCss3, accent: "#2862e9" },
  { name: "JavaScript", Icon: SiJavascript, accent: "#f0db4f" },
  { name: "Node.js", Icon: SiNodedotjs, accent: "#6cb52d" },
  { name: "Figma", Icon: SiFigma, accent: "#f24e1e" },
  { name: "OpenAI API", Icon: SiOpenai, accent: "#00a67e" },
];

const MediaTile = ({ label, src, aspect = "4 / 3", onExpand }: MediaShot & { onExpand?: (shot: LightboxShot) => void }) => (
  <figure
    role={onExpand ? "button" : undefined}
    tabIndex={onExpand ? 0 : undefined}
    onClick={() => onExpand?.({ label, src })}
    onKeyDown={(event) => {
      if (!onExpand) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onExpand({ label, src });
      }
    }}
    aria-label={onExpand ? `View larger version of ${label}` : undefined}
    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#7a57db]/60 focus:ring-offset-2 focus:ring-offset-[#050714]"
    style={{ aspectRatio: aspect }}
  >
    <img
      src={src}
      alt={label}
      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
      loading="lazy"
    />
    {onExpand ? (
      <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
        <FaMagnifyingGlassPlus className="h-3.5 w-3.5" />
        Zoom
      </span>
    ) : null}
    <figcaption className="absolute left-4 bottom-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
      {label}
    </figcaption>
  </figure>
);

const SectionHeader = ({
  eyebrow,
  title,
  description,
  fullWidth = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  fullWidth?: boolean;
}) => (
  <div className={`space-y-3 ${fullWidth ? "" : "max-w-3xl"}`}>
    <p className="text-xs uppercase tracking-[0.35em] text-[#7a57db]">{eyebrow}</p>
    <h2 className="text-heading text-left">{title}</h2>
    {description ? (
      <p className="text-base text-white/80 leading-relaxed max-w-3xl">{description}</p>
    ) : null}
  </div>
);

const extractYouTubeEmbedUrl = (url: string, fallbackId = "7Bp4MxY0FbI") => {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=|shorts\/))([A-Za-z0-9_-]{11})/;
  const match = url.match(regex);
  const id = match ? match[1] : fallbackId;
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
};

const EPostProMoreInfo = () => {
  const demoRef = useRef<HTMLDivElement | null>(null);
  const [lightboxImage, setLightboxImage] = useState<LightboxShot | null>(null);
  const epostProject = useMemo(() => projects.find((project) => project.id === 2), []);
  const demoShareLink = ePostProDetail.demoVideoLink ?? "https://youtu.be/7Bp4MxY0FbI";
  const demoEmbedUrl = extractYouTubeEmbedUrl(demoShareLink, "7Bp4MxY0FbI");
  const liveUrl = ePostProDetail.liveUrl ?? epostProject?.link ?? "https://youtu.be/7Bp4MxY0FbI";

  const handleWatchDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleViewDemo = () => {
    window.open(demoShareLink, "_blank", "noopener,noreferrer");
  };

  const handleOpenLive = () => {
    window.open(liveUrl, "_blank", "noopener,noreferrer");
  };

  const handleReturn = () => {
    navigateTo("/#projects");
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <Navbar />
      <main className="pt-28 pb-20 space-y-24">
        {/* Hero Section */}
        <section id="home" className="relative isolate overflow-hidden py-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent mix-blend-screen opacity-10" />
          </div>
          <div className="c-space relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <motion.div className="space-y-5" {...fadeInProps()}>
              <p className="text-xs uppercase tracking-[0.4em] text-[#7a57db]">Project Spotlight</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {ePostProDetail.heroTitle}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">{ePostProDetail.heroDescription}</p>
            </motion.div>
            <motion.div className="relative space-y-3 max-w-xl w-full lg:justify-self-end" {...fadeInProps(0.15)}>
              <div className="aspect-[15/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-3 shadow-[0_18px_48px_rgba(5,4,15,0.35)]">
                <img
                  src={ePostProDetail.heroImage}
                  alt="E-PostPro hero screen"
                  className="h-full w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-white/75 leading-relaxed">Initial concept shot showing the streamlined AI email interface.</p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section id="about" style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-8" {...fadeInProps()}>
              <SectionHeader eyebrow="overview" title="Four-week sprint to calm the inbox" />
              <p className="text-base leading-relaxed text-white/80 max-w-3xl">{ePostProDetail.overviewText}</p>
            </motion.div>
          </div>
        </section>

        {/* Experience Flow */}
        <section id="work" style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-8" {...fadeInProps()}>
              <SectionHeader
                eyebrow="Experience flow"
                title="From messy prompt to polished email"
                fullWidth
                description={ePostProDetail.experienceDescription}
              />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {experienceShots.map((shot) => (
                  <MediaTile key={shot.label} {...shot} onExpand={setLightboxImage} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Product */}
        <section className="c-space">
          <motion.div ref={demoRef} className="space-y-8" {...fadeInProps()}>
            <SectionHeader
              eyebrow="Final product"
              title="Watch the full walkthrough"
              fullWidth
              description={ePostProDetail.finalProductDescription}
            />
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-4">
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                <iframe
                  src={demoEmbedUrl}
                  title="E-PostPro demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Role / Tools / Skills */}
        <section id="contact" style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="grid gap-10 lg:grid-cols-2" {...fadeInProps()}>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-6">
                <h3 className="text-2xl font-semibold">My Role</h3>
                <ul className="list-disc space-y-2 pl-5 text-white/80">
                  {ePostProDetail.roleItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <hr className="border-white/10 mt-4" />
                <div className="mt-4 space-y-3">
                  <h4 className="text-lg font-semibold text-white">Skills in focus</h4>
                  <ul className="list-disc space-y-2 pl-5 text-white/80">
                    {ePostProDetail.skillsFocus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-6">
                <h3 className="text-2xl font-semibold">Tools Used</h3>
                <p className="mt-2 text-white/70">{ePostProDetail.toolsDescription}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {toolIcons.map(({ name, Icon, accent, image }) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur"
                    >
                      {Icon ? (
                        <Icon className="h-4 w-4" style={{ color: accent }} aria-hidden="true" />
                      ) : image ? (
                        <img src={image} alt={name} className="h-4 w-4 object-contain" />
                      ) : null}
                      <span>{name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact */}
        <section className="c-space">
          <motion.div className="space-y-5 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-8" {...fadeInProps()}>
            <SectionHeader eyebrow="Takeaway" title="What I learned" />
            <p className="text-base leading-relaxed text-white/80 max-w-3xl">{ePostProDetail.impactDescription}</p>
          </motion.div>
        </section>

        {/* Buttons */}
        <section className="c-space">
          <motion.div className="mx-auto grid w-full max-w-3xl gap-4 place-items-center md:grid-cols-3" {...fadeInProps()}>
            <MagicButton
              title="Watch Demo"
              icon={<FaPlay />}
              position="left"
              handleClick={handleWatchDemo}
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

export default EPostProMoreInfo;

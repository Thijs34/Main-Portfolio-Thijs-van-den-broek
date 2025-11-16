import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa6";
import { SiCss3, SiFigma, SiHtml5 } from "react-icons/si";

import Navbar from "../sections/Navbar";
import MagicButton from "../components/MagicButton";
import { awwwardsDetail } from "../data";

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

const toolIcons = [
  { name: "HTML", Icon: SiHtml5, color: "#e96228" },
  { name: "CSS", Icon: SiCss3, color: "#2862e9" },
  { name: "Figma", Icon: SiFigma, color: "#f24e1e" },
];

const MediaTile = ({ label, src, aspect = "16 / 9" }: { label: string; src: string; aspect?: string }) => (
  <figure
    className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24]"
    style={{ aspectRatio: aspect }}
  >
    <img src={src} alt={label} className="h-full w-full object-cover" loading="lazy" />
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
    {description ? <p className="text-base text-white/80 leading-relaxed">{description}</p> : null}
  </div>
);

const AwwwardsMoreInfo = () => {
  const liveUrl = awwwardsDetail.liveUrl ?? "https://i523591.hera.fontysict.net/awwwards/";

  const handleVisitSite = () => {
    window.open(liveUrl, "_blank", "noopener,noreferrer");
  };

  const handleReturn = () => {
    window.location.href = "/#projects";
  };

  return (
    <div className="min-h-screen bg-[#030412] text-white">
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
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{awwwardsDetail.heroTitle}</h1>
              <p className="text-lg text-white/80 max-w-2xl">{awwwardsDetail.heroDescription}</p>
            </motion.div>
            <motion.div className="relative space-y-3 max-w-xl w-full lg:justify-self-end" {...fadeInProps(0.15)}>
              <div className="aspect-[15/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-3 shadow-[0_18px_48px_rgba(5,4,15,0.35)]">
                <img src={awwwardsDetail.heroImage} alt="Awwwards recreation hero" className="h-full w-full rounded-xl object-cover" loading="lazy" />
              </div>
              <p className="text-sm text-white/75 leading-relaxed">Hero snapshot recreated entirely with semantic HTML and CSS.</p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section id="about" style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-8" {...fadeInProps()}>
              <SectionHeader eyebrow="overview" title="Two-week fundamentals sprint" />
              <p className="text-base leading-relaxed text-white/80">{awwwardsDetail.overviewText}</p>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section id="work" style={{ padding: 0 }}>
          <div className="c-space">
            <motion.div className="space-y-8" {...fadeInProps()}>
              <SectionHeader
                eyebrow="Process"
                title="Recreate everything with pure CSS"
                fullWidth
                description={awwwardsDetail.experienceDescription}
              />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {awwwardsDetail.mediaShots.map((shot) => (
                  <MediaTile key={shot.label} {...shot} />
                ))}
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{awwwardsDetail.layoutHighlights}</p>
            </motion.div>
          </div>
        </section>

        {/* Role / Tools / Skills */}
        <section className="c-space">
          <motion.div className="grid gap-10 lg:grid-cols-2" {...fadeInProps()}>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-6">
              <h3 className="text-2xl font-semibold">My Role</h3>
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                {awwwardsDetail.roleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <h4 className="text-lg font-semibold text-white">Skills in focus</h4>
                <ul className="list-disc space-y-2 pl-5 text-white/80">
                  {awwwardsDetail.skillsFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-6">
              <h3 className="text-2xl font-semibold">Tools Used</h3>
              <p className="mt-2 text-white/70">{awwwardsDetail.toolsDescription}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {toolIcons.map(({ name, Icon, color }) => (
                  <span key={name} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur">
                    <Icon className="h-4 w-4" style={{ color }} aria-hidden="true" />
                    <span>{name}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Takeaway */}
        <section className="c-space">
          <motion.div className="space-y-5 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1e39] to-[#0b0f24] p-8" {...fadeInProps()}>
            <SectionHeader eyebrow="Takeaway" title="What I gained" />
            <p className="text-base leading-relaxed text-white/80">{awwwardsDetail.impactDescription}</p>
          </motion.div>
        </section>

        {/* Buttons */}
        <section className="c-space">
          <motion.div className="mx-auto grid w-full max-w-xl gap-4 place-items-center md:grid-cols-2" {...fadeInProps()}>
            <MagicButton
              title="Visit Live Site"
              icon={<FaLocationArrow />}
              position="left"
              handleClick={handleVisitSite}
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
    </div>
  );
};

export default AwwwardsMoreInfo;

import React, { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import { Boxes } from "./components/background-boxes";
import Showcase from "./sections/Showcase";

const About = lazy(() => import("./sections/About"));
const RecentProjects = lazy(() => import("./sections/RecentProjects"));
const Footer = lazy(() => import("./sections/Footer"));

const SectionSkeleton = ({ minHeight = "24rem", label }) => (
  <div
    aria-label={label}
    className="relative flex w-full items-center justify-center"
    style={{ minHeight }}
  >
    <div className="h-12 w-12 animate-spin rounded-full border-2 border-purple-700 border-t-transparent" />
  </div>
);

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0f1c] overflow-x-hidden">
      {/* Homepage with Boxes background */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Boxes className="absolute inset-0 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/50 via-transparent to-[#0a0f1c]/70 pointer-events-none" />
        </div>
        <div className="pointer-events-none container mx-auto max-w-8xl px-4 sm:px-6 relative z-10 h-full flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </div>
      {/* About section BELOW homepage, NO background boxes */}
      <div className="container mx-auto max-w-7xl">
        <Suspense fallback={<SectionSkeleton label="Loading about section" />}>
          <About />
        </Suspense>
      </div>
      <div className="container mx-auto max-w-7xl">
        <Suspense fallback={<SectionSkeleton label="Loading projects" />}>
          <RecentProjects />
        </Suspense>
      </div>
       <div className="container mx-auto max-w-7xl">
        <Suspense fallback={<SectionSkeleton label="Loading footer" minHeight="16rem" />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
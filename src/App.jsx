import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import { Boxes } from "./components/background-boxes";
import About from "./sections/About";
import Showcase from "./sections/Showcase";
import RecentProjects from "./sections/RecentProjects";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0f1c] overflow-x-hidden">
      {/* Homepage with Boxes background */}
      <div className="relative w-full h-screen overflow-hidden">
        <Boxes className="absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/70 via-transparent to-[#0a0f1c]/80 pointer-events-none" />
        <div className="pointer-events-none container mx-auto max-w-8xl relative z-10 h-full flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </div>
      {/* About section BELOW homepage, NO background boxes */}
      <div className="container mx-auto max-w-7xl">
        <About />
      </div>
      <div className="container mx-auto max-w-7xl">
        <RecentProjects />
      </div>
       <div className="container mx-auto max-w-7xl">
        <Footer />
      </div>
    </div>
  );
}
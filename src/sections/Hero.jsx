import { memo } from "react";
import HeroText from "../components/HeroText";

const Hero = () => {
  return <section className="flex items-start justify-center md:items-start md:justify-start overflow-hidden px-4 sm:px-6 md:px-10 lg:px-15" style={{ height: "100dvh" }}>
    <HeroText/>
  </section>
};

export default memo(Hero)

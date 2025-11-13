import { socialMedia } from "../data";
import MagicButton from "../components/MagicButton";

const Footer = () => {
  return (
    <section
      className="relative w-full pt-[45px] px-[45px] pb-[45px] mt-[60px]"
      id="contact"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <img
          src="/assets/grid.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Heading */}
        <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] leading-tight text-[var(--color-white)] max-w-[900px]">
          Ready to take <span className="text-[var(--color-purple-400)]">your</span>{" "}
          digital presence to the next level?
        </h1>

        {/* Subtext */}
        <p className="text-[var(--color-white)]/70 mt-6 text-base sm:text-lg max-w-[650px]">
          Reach out to me today and let’s discuss how I can help you achieve your goals.
        </p>

        {/* BUTTON — LinkedIn */}
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/thijs-van-den-broek-aa1aa4245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Connect on LinkedIn"
              icon={
                <img
                  src="/assets/logos/link.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              }
              position="right"
            />
          </a>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="relative z-10 mt-24 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
        {/* Copyright */}
        <p className="text-sm text-[var(--color-white)]/70">
          © 2025 Thijs van den Broek
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 flex justify-center items-center rounded-lg border border-[var(--color-purple-400)]/40 bg-white/5 backdrop-blur-md cursor-pointer"
              >
                <img src={info.img} alt="icon" width={22} height={22} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;

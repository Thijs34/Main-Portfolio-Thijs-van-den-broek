import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const PinContainer = ({
  children,
  title,
  className,
  containerClassName,
  onClick,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  const isInteractive = typeof onClick === "function";
  const hoverEnabled = !isMobileView;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isInteractive || !onClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      setIsMobileView(window.innerWidth < 768);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className={cn(
        "relative group/pin z-10 h-full",
        isInteractive ? "cursor-pointer" : "cursor-default",
        containerClassName
      )}
      style={{ perspective: "1200px" }}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onMouseEnter={() => hoverEnabled && setIsHovered(true)}
      onMouseLeave={() => hoverEnabled && setIsHovered(false)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div
        style={{
          transform: hoverEnabled && isHovered
            ? "rotateX(6deg) scale(0.98)"
            : "rotateX(0deg) scale(1)",
          transformOrigin: "top center",
          background: "linear-gradient(to bottom, #282b4b, #1f1e39)",
        }}
        className="relative p-4 flex flex-col rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.15] group-hover/pin:border-[#7a57db]/[0.5] transition duration-700 overflow-hidden w-full h-full"
      >
        <div className={cn("relative z-50 w-full h-full flex flex-col", className)}>{children}</div>
      </div>
      <PinPerspective title={title} enabled={hoverEnabled} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  enabled = true,
}: {
  title?: string;
  enabled?: boolean;
}) => {
  if (!enabled) return null;
  return (
    <motion.div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[10] transition duration-500">
      <div className="w-full h-full flex-none inset-0">
        {/* Link label positioned at the top of the pin line */}
        <div className="absolute bottom-1/2 inset-x-0 flex justify-center" style={{ transform: "translateY(-100px)" }}>
          <div
            className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1 ring-[#7a57db]/30"
            style={{ background: "linear-gradient(to right, #5c33cc, #7a57db)" }}
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title ?? "More info"}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#33c2cc]/0 via-[#33c2cc]/90 to-[#33c2cc]/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        <div
          style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              style={{ backgroundColor: "rgba(122, 87, 219, 0.25)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              style={{ backgroundColor: "rgba(122, 87, 219, 0.25)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              style={{ backgroundColor: "rgba(122, 87, 219, 0.25)" }}
            />
          </>
        </div>

        {/* Pin line */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-[#7a57db] translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-[#7a57db] translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-[#5c33cc] translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-[#CBACF9] translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};

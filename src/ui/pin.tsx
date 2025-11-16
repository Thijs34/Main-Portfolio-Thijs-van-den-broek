import React, { useEffect, useRef, useState } from "react";
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
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInteractive = typeof onClick === "function";
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isInteractive || !onClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  // Measure the absolute-centered card and set container height so rows size correctly
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      setCardHeight(rect.height);
    };
    update();
    // Observe size changes of inner content
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener("load", update);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative group/pin z-10",
        isInteractive ? "cursor-pointer" : "cursor-default",
        containerClassName
      )}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      style={{ height: cardHeight }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
          width: "100%",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <div
          style={{
            transform: transform,
            background: "linear-gradient(to bottom, #282b4b, #1f1e39)",
          }}
          ref={cardRef}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.15] group-hover/pin:border-[#7a57db]/[0.5] transition duration-700 overflow-hidden w-full"
        >
          <div className={cn("relative z-50 w-full", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} />
    </div>
  );
};

export const PinPerspective = ({
  title,
}: {
  title?: string;
}) => {
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
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
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

        {/* Pin line - original position maintained */}
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
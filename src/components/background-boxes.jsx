'use client';
import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const ROW_COUNT = 120;
const COL_COUNT = 90;
const ROWS = Array.from({ length: ROW_COUNT }, (_, index) => index);
const COLS = Array.from({ length: COL_COUNT }, (_, index) => index);
const HOVER_COLORS = [
  "rgb(168, 85, 247)",
  "rgb(139, 92, 246)",
  "rgb(99, 102, 241)",
  "rgb(59, 130, 246)",
  "rgb(232, 121, 249)",
  "rgb(236, 72, 153)",
  "rgb(190, 110, 255)",
  "rgb(216, 180, 254)",
  "rgb(196, 181, 253)",
  "rgb(124, 58, 237)",
];
const SVG_COLOR = "rgba(139,92,246,0.06)";
const BORDER_COLOR = "rgba(139, 92, 246, 0.12)";

export const Boxes = React.memo(({ className, ...rest }) => {
  const getRandomHoverColor = useCallback(() => {
    return HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
  }, []);

  const gridContent = useMemo(() => {
    return ROWS.map((rowIndex) => (
      <motion.div
        key={`row${rowIndex}`}
        className="w-16 h-8 border-l"
        style={{ borderColor: BORDER_COLOR, borderWidth: "1px" }}
      >
        {COLS.map((colIndex) => {
          const showSvg = colIndex % 2 === 0 && rowIndex % 2 === 0;
          return (
            <motion.div
              whileHover={{
                backgroundColor: getRandomHoverColor(),
                transition: { duration: 0, ease: "linear" },
              }}
              animate={{
                backgroundColor: "rgba(0,0,0,0)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              key={`col${colIndex}`}
              className="w-16 h-8 border-r border-t relative"
              style={{
                borderColor: BORDER_COLOR,
                borderWidth: "1px",
                backgroundColor: "rgba(0,0,0,0)",
                willChange: "auto",
              }}
            >
              {showSvg && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke={SVG_COLOR}
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    ));
  }, [getRandomHoverColor]);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {gridContent}
    </div>
  );
});
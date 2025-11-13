'use client';
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const Boxes = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  // Bright, lively, but still "around purple"
  const hoverColors = [
    "rgb(168, 85, 247)",   // strong purple
    "rgb(139, 92, 246)",   // purple
    "rgb(99, 102, 241)",   // indigo
    "rgb(59, 130, 246)",   // blue
    "rgb(232, 121, 249)",  // fuchsia
    "rgb(236, 72, 153)",   // pink
    "rgb(190, 110, 255)",  // lilac
    "rgb(216, 180, 254)",  // light purple
    "rgb(196, 181, 253)",  // violet
    "rgb(124, 58, 237)",   // violet dark
  ];
 const svgColor = "rgba(139,92,246,0.06)";
const borderColor = "rgba(139, 92, 246, 0.12)";

  const getRandomHoverColor = () => {
    return hoverColors[Math.floor(Math.random() * hoverColors.length)];
  };

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
      {rows.map((_, i) => (
        <motion.div
          key={`row${i}`}
          className="w-16 h-8 border-l"
          style={{ borderColor: borderColor, borderWidth: "1px" }}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomHoverColor(),
                transition: { duration: 0 },
              }}
              animate={{
                backgroundColor: "rgba(0,0,0,0)",
                transition: { duration: 0.8 }, // This is the "trail" effect
              }}
              key={`col${j}`}
              className="w-16 h-8 border-r border-t relative"
              style={{
                borderColor: borderColor,
                borderWidth: "1px",
                backgroundColor: "rgba(0,0,0,0)", // Default is transparent
              }}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke={svgColor}
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
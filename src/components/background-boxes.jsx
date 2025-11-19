'use client';
import React, { useMemo } from "react";
import { cn } from "../lib/utils";

const ROW_COUNT = 150;
const COL_COUNT = 100;
const ROWS = Array.from({ length: ROW_COUNT }, (_, index) => index);
const COLS = Array.from({ length: COL_COUNT }, (_, index) => index);
const SVG_COLOR = "rgba(139,92,246,0.06)";
const BORDER_COLOR = "rgba(139, 92, 246, 0.12)";

export const Boxes = React.memo(({ className, ...rest }) => {
  const gridContent = useMemo(() => {
    return ROWS.map((rowIndex) => (
      <div
        key={`row${rowIndex}`}
        className="w-16 h-8 border-l box-row"
        style={{ borderColor: BORDER_COLOR, borderWidth: "1px" }}
      >
        {COLS.map((colIndex) => {
          const showSvg = colIndex % 2 === 0 && rowIndex % 2 === 0;
          return (
            <div
              key={`col${colIndex}`}
              className="w-16 h-8 border-r border-t relative box-cell"
              style={{
                borderColor: BORDER_COLOR,
                borderWidth: "1px",
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
            </div>
          );
        })}
      </div>
    ));
  }, []);

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
      <style>{`
        .box-cell {
          background-color: rgba(0,0,0,0);
          transition: background-color 0.4s ease-out;
        }
        .box-cell:hover {
          transition: background-color 0s linear;
        }
        .box-cell:nth-child(10n+1):hover { background-color: rgb(168, 85, 247); }
        .box-cell:nth-child(10n+2):hover { background-color: rgb(139, 92, 246); }
        .box-cell:nth-child(10n+3):hover { background-color: rgb(99, 102, 241); }
        .box-cell:nth-child(10n+4):hover { background-color: rgb(59, 130, 246); }
        .box-cell:nth-child(10n+5):hover { background-color: rgb(232, 121, 249); }
        .box-cell:nth-child(10n+6):hover { background-color: rgb(236, 72, 153); }
        .box-cell:nth-child(10n+7):hover { background-color: rgb(190, 110, 255); }
        .box-cell:nth-child(10n+8):hover { background-color: rgb(216, 180, 254); }
        .box-cell:nth-child(10n+9):hover { background-color: rgb(196, 181, 253); }
        .box-cell:nth-child(10n+0):hover { background-color: rgb(124, 58, 237); }
      `}</style>
      {gridContent}
    </div>
  );
});
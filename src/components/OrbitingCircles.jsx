import { twMerge } from "tailwind-merge";
import React from "react";

// Presentational only: positions children on a circular path using provided rotation
export function OrbitingCircles({
  className,
  children,
  radius = 160,
  path = true,
  iconSize = 30,
  rotation = 0,
  ...props
}) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children) || 1;
        const angle = (360 / count) * index + (rotation % 360);
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <div
            style={{
              "--icon-size": `${iconSize}px`,
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
            className={twMerge(
              "absolute left-1/2 top-1/2 flex size-[var(--icon-size)] items-center justify-center rounded-full",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
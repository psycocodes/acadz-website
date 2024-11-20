"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const boxColor = "--orange-200"
  const gridColor = "neutral"
  const gridColorIntensity = "800"
  const showSymbols = false
  const symbolColor = gridColor
  const symbolColorIntensity = "900"
  const opacity = 0.4
  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(1) rotate(0deg) translateZ(0)`, //change the size of boxes here
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          style={{ opacity: opacity}}
          className={`w-16 h-8 border-l relative border-${gridColor}-${gridColorIntensity}`}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${boxColor})`,
                transition: { duration: 0},
              }}
              animate={{
                transition: { duration: 4},
              }}
              key={`col` + j}
              className={`w-16 h-8 border-r border-t relative border-${gridColor}-${gridColorIntensity}`}
            >
              {showSymbols && j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={symbolColor}
                  className={`absolute h-6 w-10 -top-[14px] -left-[22px] text-${symbolColor}-${symbolColorIntensity} stroke-[1px] pointer-events-none`}
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

export const Boxes = React.memo(BoxesCore);
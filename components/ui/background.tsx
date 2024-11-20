"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
 
export default function CustomBackground() {
  return (
    <div className="h-screen relative w-full overflow-hidden">
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-20"></div>
      <Boxes />
      </div>
  );
}
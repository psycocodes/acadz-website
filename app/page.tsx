import CustomBackground from "@/components/ui/background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import React from "react";
import { DownloadIcon } from "lucide-react";
import { ArrowBigRight } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";


export default function Root() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center z-10">
      <div className="absolute z-10 flex flex-col items-center justify-center ">
        <h1 className="text-[12rem] font-migra z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 -my-10">
          AcadZ
        </h1>
        <div className="flex items-center justify-center gap-5 ">
          <Link href="https://github.com/psycocodes/acadz-hacksynthesis/releases/download/v0.2.1a/acadz.apk">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-gradient-to-r from-amber-600 to-red-700 text-transparent bg-clip-text flex items-center space-x-2 h-[5rem] w-[20rem] items-center justify-center text-3xl font-black"
            >
              <DownloadIcon className="text-white w-7 h-7" />
              <span>Download</span>
            </HoverBorderGradient>
          </Link>
          <Link href="/docs/introduction">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-gradient-to-r from-blue-500 to-violet-700 text-transparent bg-clip-text flex items-center space-x-2 h-[5rem] w-[20rem] flex items-center justify-center text-3xl font-black"
              >
                <ArrowRightIcon className="text-white w-7 h-7"/>
                <span>Get Started</span>
              </HoverBorderGradient>
          </Link>
          
        </div>
      </div>
      <CustomBackground />
    </div>
  );
}

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import CustomBackground from "@/components/ui/background";

const teamMembers = [
  {
    name: "Agnij Dutta",
    image: "/images/agnij-pfp.jpg",
    github: "https://github.com/agnij-dutta",
    linkedin: "https://www.linkedin.com/in/agnij-dutta-718060309/",
    status: "active"
  },
  {
    name: "Mohikshit Ghorai",
    image: "/images/mohikshit-pfp.jpg",
    github: "https://github.com/psycocodes",
    linkedin: "https://www.linkedin.com/in/mohikshit-ghorai-9612b4322/"
  },
  {
    name: "Mainak Dasgupta",
    image: "/images/mainak-pfp.jpg",
    github: "https://github.com/googleboy-byte",
    linkedin: "https://www.linkedin.com/in/mainak-dasgupta-b989a6241/"
  },
  {
    name: "Suparno Saha",
    image: "/images/suparno-pfp.jpg",
    github: "https://github.com/letsbecool9792",
    linkedin: "https://www.linkedin.com/in/letsbecool9792/"
  },
  {
    name: "Pritam Das",
    image: "/images/pritam-pfp.jpg",
    github: "https://github.com/frank06n",
    linkedin: "https://www.linkedin.com/in/pritamdas2006/"
  }
];

const TeamPage = () => {
  return (
    <div>
      <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-4 z-80 absolute inset-0">
        <div className="px-8 flex items-center justify-center">
          <Image
            src="/images/whitespace-logo.png"
            width={65}
            height={65}
            alt="Logo"
          />
          <h1 className="bg-gradient-to-b from-gray-100 to-neutral-400 inline-block text-transparent bg-clip-text font-bold text-5xl ml-3">
            WhiteSpace
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 ">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="flex flex-col items-center p-3 text-center h-[350px] bg-black/10 border-gray-200/20 backdrop-blur-xl shadow-md hover:shadow-lg transition-shadow rounded-xl z-20"
            >
              <CardHeader className="pb-2 w-full">
                <div className="flex justify-center items-center gap-2">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  {member.status === 'active' && (
                    <div className="h-2 w-2 rounded-full bg-yellow-200" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center pb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="rounded-full aspect-square object-cover"
                />
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
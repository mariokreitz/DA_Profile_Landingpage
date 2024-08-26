import React from "react";
import { FlipWords } from "./ui/flip-words";
import { LinkPreview } from "./ui/link-preview";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";

export function Hero() {
  const words = ["bessere", "coole", "schöne", "moderne"];
  const people = [
    {
      id: 1,
      name: "Mario Kreitz",
      designation: "Lead - Frontend Developer",
      image: "/img/profile_mario.JPEG",
    },
    {
      id: 2,
      name: "Marcel Schmidt",
      designation: "Projekt Partner - Frontend Developer",
      image: "/img/profile_marcel.jpeg",
    },
  ];
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/mariokreitz",
    },
  ];

  return (
    <div className="flex h-[25rem] flex-col items-center justify-center px-4 md:h-[30rem]">
      <div className="mb-10 flex w-full flex-row items-center justify-center">
        <AnimatedTooltip items={people} />
      </div>
      <FloatingDock
        desktopClassName="fixed bottom-5 right-5"
        mobileClassName="fixed bottom-5 right-5"
        items={links}
      />
      <div className="mx-auto text-4xl font-normal">
        Erstelle
        <FlipWords words={words} /> <br />
        Webseiten mit der{" "}
        <LinkPreview
          url="https://developerakademie.com/"
          className="text-dev-aka"
        >
          Developer Akademie
        </LinkPreview>
      </div>
    </div>
  );
}

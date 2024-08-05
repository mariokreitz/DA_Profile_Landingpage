import React from "react";
import { FlipWords } from "./ui/flip-words";
import { LinkPreview } from "./ui/link-preview";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function Hero() {
  const words = ["bessere", "coole", "schöne", "moderne"];
  const people = [
    {
      id: 1,
      name: "Mario Kreitz",
      designation: "Frontend Developer",
      image: "/img/profile_mario.JPEG",
    },
  ];

  return (
    <div className="flex h-[25rem] flex-col items-center justify-center px-4 md:h-[30rem]">
      <div className="mb-10 flex w-full flex-row items-center justify-center">
        <AnimatedTooltip items={people} />
      </div>
      <div className="mx-auto text-4xl font-normal">
        Erstelle
        <FlipWords words={words} /> <br />
        Webseiten in der{" "}
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

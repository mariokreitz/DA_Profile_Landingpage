"use client";
import React from "react";
import { ExpandableCard } from "./ui/expandable-card";

export function Projects() {
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-10">
      <ExpandableCard cards={cards} />
    </div>
  );
}

const cards = [
  {
    description: "Modul 4",
    tech: "HTML, CSS",
    title: "Band Projekt",
    src: "/modul_4/rock_mountain.png",
    ctaText: "Öffnen",
    ctaLink: "/band",
    content: () => {
      return (
        <p>
          Das &quot;Band Projekt&quot; ist das Hauptprojekt in Modul 4 und
          konzentriert sich auf die Entwicklung einer Webseite für eine fiktive
          Band. Dieses Projekt zielt darauf ab, fortgeschrittene HTML- und
          CSS-Techniken zu nutzen, um eine ansprechende und dynamische
          Online-Präsenz für die Band zu erstellen. Dabei steht das Design im
          Vordergrund, um die Identität und Musik der Band effektiv zu
          präsentieren. <br />
          <br /> Ziele des Projekts: <br /> Entwicklung einer visuell
          beeindruckenden und interaktiven Webseite für die Band. Anwendung von
          CSS-Animationen und Effekten zur Verbesserung der Benutzererfahrung.
          Erstellung eines responsiven Designs, das auf verschiedenen Geräten
          optimal funktioniert. Nutzung von HTML zur strukturierten Darstellung
          von Inhalten..
        </p>
      );
    },
  },
  {
    description: "Modul 3 - Zusatzaufgabe 2",
    tech: "HTML, CSS",
    title: "Headphone Projekt",
    src: "/modul_3/headphone.png",
    ctaText: "Öffnen",
    ctaLink: "/headphone",
    content: () => {
      return (
        <p>
          Das &quot;Headphone Projekt&quot; ist Teil des Modul 3 und stellt eine
          Zusatzaufgabe dar. In diesem Projekt liegt der Fokus auf der
          Gestaltung und Umsetzung einer ansprechenden Webseite für ein fiktives
          Kopfhörerprodukt. Mithilfe von HTML und CSS wird die Struktur der
          Webseite erstellt und das visuelle Design implementiert. Ziel ist es,
          die erworbenen Kenntnisse in Webentwicklung zu vertiefen und praxisnah
          anzuwenden. <br />
          <br />
          Ziele des Projekts: <br />
          Anwendung von CSS-Styles zur Verbesserung der visuellen Attraktivität.
          Strukturierung von Inhalten mit HTML für eine klare und intuitive
          Navigation.
        </p>
      );
    },
  },
  {
    description: "Modul 3 - Zusatzaufgabe 1",
    tech: "HTML, CSS",
    title: "Grid Projekt",
    src: "/modul_3/grid_project.png",
    ctaText: "Öffnen",
    ctaLink: "/grid-project",
    content: () => {
      return (
        <p>
          Das &quot;Grid Projekt&quot; ist eine Zusatzaufgabe im Rahmen von
          Modul 3 und konzentriert sich auf die Gestaltung einer Webseite mit
          Hilfe des CSS Grid Layouts. Ziel dieses Projekts ist es, die
          grundlegenden Prinzipien des Grid Layouts zu verstehen und anzuwenden,
          um eine flexible und moderne Webseitenstruktur zu erstellen. <br />
          <br /> Ziele des Projekts: <br /> Erlernen und Anwenden des CSS Grid
          Layouts für die Webseitenstruktur. Nutzung von HTML zur semantischen
          Strukturierung der Inhalte.
        </p>
      );
    },
  },
  {
    description: "Modul 3",
    tech: "HTML, CSS",
    title: "Sakura Ramen",
    src: "/modul_3/sakura_ramen.png",
    ctaText: "Öffnen",
    ctaLink: "/sakura-ramen",
    content: () => {
      return (
        <p>
          Das &quot;Sakura Ramen&quot; Projekt ist das Hauptprojekt in Modul 3
          und widmet sich der Entwicklung einer ansprechenden Webseite für ein
          fiktives Ramen-Restaurant. Ziel des Projekts ist es, der erste Kontakt
          HTML und CSS zu , um eine visuell ansprechende und funktionale
          Webseite zu gestalten, die die Atmosphäre und das Angebot des
          Restaurants effektiv präsentiert. <br />
          <br /> Ziele des Projekts: <br /> Erstellung einer
          benutzerfreundlichen und optisch ansprechenden Webseite für das
          Ramen-Restaurant. Anwendung von CSS-Techniken zur Gestaltung eines
          einzigartigen und markanten visuellen Stils. Strukturierung der
          Inhalte mit HTML, um eine klare und intuitive Navigation zu
          ermöglichen.
        </p>
      );
    },
  },
];

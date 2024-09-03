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
    description: "Modul 7 Zusatzaufgabe 1",
    tech: "HTML, CSS, JavaScript",
    title: "Book Store Projekt",
    src: "/modul_7/bokkStore_preview.png",
    ctaText: "Öffnen",
    ctaLink: "/bookStore",
    content: () => {
      return (
        <p>
          Das &quot;BookStore&quot;-Projekt ist das zentrale Vorhaben im Modul 7
          und konzentriert sich auf die Entwicklung einer umfassenden
          Webanwendung, die Nutzern ermöglicht, Bücher effizient zu durchsuchen,
          zu kaufen und ihre Bestellungen zu verwalten. Dieses Projekt setzt auf
          den Einsatz von HTML, CSS und JavaScript, wobei ein besonderer
          Schwerpunkt auf die Verwendung von HTML-Templates und die Nutzung der
          Fetch-API gelegt wird, um dynamische Inhalte nahtlos zu integrieren
          und eine reibungslose Benutzererfahrung zu gewährleisten.
          <br />
          <br />
          **Ziele des Projekts:**
          <br />- Verwendung von HTML-Templates zur Modularisierung und
          Wiederverwendung von Interface-Komponenten. - Implementierung der
          Fetch-API für dynamische Datenabrufe und eine interaktive
          Benutzererfahrung. - Gestaltung einer benutzerfreundlichen und
          ansprechenden Oberfläche mit CSS. - Sicherstellung einer responsiven
          Darstellung der Anwendung auf verschiedenen Geräten und
          Bildschirmgrößen.
        </p>
      );
    },
  },
  {
    description: "Modul 7 Freiwilliges Projekt",
    tech: "HTML, SCSS, OOP, JavaScript",
    title: "Quizapp Projekt",
    src: "/modul_7/quizz_preview.png",
    ctaText: "Öffnen",
    ctaLink: "/quizapp",
    content: () => {
      return (
        <p>
          Das &quot;QuizApp&quot;-Projekt ist das zentrale Vorhaben im Modul 7
          und konzentriert sich auf die Entwicklung einer modernen Webanwendung,
          die Nutzern ermöglicht, interaktive Quizze effizient zu erstellen und
          zu verwalten. Im Gegensatz zu herkömmlichen Projekten wird hier SCSS
          anstelle von CSS verwendet, um eine erweiterte und strukturierte
          Gestaltung der Benutzeroberfläche zu ermöglichen. Die Anwendung ist im
          Stil der objektorientierten Programmierung mit JavaScript umgesetzt,
          was eine saubere und modulare Architektur sicherstellt.
          <br />
          <br />
          **Ziele des Projekts:**
          <br />- Nutzung von SCSS für eine verbesserte und organisierte
          Gestaltung der Benutzeroberfläche. - Implementierung einer
          objektorientierten JavaScript-Architektur für eine saubere und
          wartbare Codebasis. - Entwicklung einer intuitiven und interaktiven
          Benutzeroberfläche, die ein ansprechendes Quiz-Erlebnis bietet. -
          Sicherstellung der responsiven Darstellung der Anwendung auf
          verschiedenen Geräten und Bildschirmgrößen optimal dargestellt wird.
        </p>
      );
    },
  },
  {
    description: "Modul 7",
    tech: "HTML, CSS, JS",
    title: "Bestellapp Projekt",
    src: "/modul_7/bestellapp_preview.png",
    ctaText: "Öffnen",
    ctaLink: "/bestellapp",
    content: () => {
      return (
        <p>
          Das &quot;BestellApp&quot;-Projekt ist das zentrale Vorhaben im Modul
          7 und fokussiert sich auf die Entwicklung einer fortschrittlichen
          Webanwendung, die es Nutzern ermöglicht, ihre Bestellungen effizient
          zu verwalten und zu bearbeiten. Dieses Projekt hat das Ziel, eine
          benutzerfreundliche und responsive Plattform zu schaffen, die
          dynamisches Laden der Inhalte unterstützt und eine einfache
          Bearbeitung des Warenkorbs ermöglicht.
          <br />
          <br />
          **Ziele des Projekts:**
          <br />- Implementierung eines dynamischen Ladens der Inhalte für eine
          reibungslose Benutzererfahrung. - Entwicklung einer intuitiven
          Funktion zur Bearbeitung des Warenkorbs. - Sicherstellung einer
          responsiven Benutzeroberfläche, die auf verschiedenen Geräten und
          Bildschirmgrößen optimal dargestellt wird.
        </p>
      );
    },
  },
  {
    description: "Modul 6",
    tech: "HTML, CSS, JS",
    title: "Fotogram Projekt",
    src: "/modul_6/preview_fotogram.png",
    ctaText: "Öffnen",
    ctaLink: "/fotogram",
    content: () => {
      return (
        <p>
          Das &quot;Fotogram&quot;-Projekt ist das zentrale Vorhaben im Modul 6
          und fokussiert sich auf die Entwicklung einer innovativen
          Webanwendung, die es Nutzern ermöglicht, ihre Fotografien zu verwalten
          und zu präsentieren. Dieses Projekt hat das Ziel, eine
          benutzerfreundliche und visuell ansprechende Plattform zu schaffen,
          die es den Nutzern erlaubt, ihre Fotos auf organisierte und kreative
          Weise zu zeigen und mit anderen zu teilen.
          <br />
          <br />
          **Ziele des Projekts:**
          <br />- Entwicklung einer interaktiven und intuitiven Webanwendung für
          die Verwaltung und Präsentation von Fotografien. - Verbesserung der
          Benutzererfahrung durch ein ästhetisches Design und eine einfache
          Navigation.
        </p>
      );
    },
  },
  {
    description: "Modul 6 Gruppenprojekt",
    tech: "HTML, CSS, JS, JSON",
    title: "Kochwelt Projekt",
    src: "/modul_6/preview.png",
    ctaText: "Öffnen",
    ctaLink: "/kochwelt",
    content: () => {
      return (
        <p>
          Das &quot;Kochwelt&quot;-Projekt ist das Hauptprojekt im Modul 6 und
          konzentriert sich auf die Entwicklung einer Webanwendung, die Nutzern
          hilft, Rezepte zu entdecken und zu verwalten. Dieses Projekt zielt
          darauf ab, eine benutzerfreundliche und ansprechende Plattform zu
          schaffen, die es den Nutzern ermöglicht, ihre Kochideen zu
          organisieren und neue Rezepte zu finden. <br />
          <br /> Ziele des Projekts: <br /> Entwicklung einer interaktiven und
          intuitiven Webanwendung für Rezeptmanagement. Verbesserung der
          Benutzererfahrung durch ansprechendes Design und einfache Navigation.
          Erstellung einer dynamischen Plattform, die auf die Bedürfnisse der
          Nutzer eingeht und ihnen ermöglicht, ihre Kochleidenschaft zu
          entfalten.
        </p>
      );
    },
  },
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
    description: "Modul 3 + 5 Responsive",
    tech: "HTML, CSS, JS",
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

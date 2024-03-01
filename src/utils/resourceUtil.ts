import type { CollectionEntry } from "astro:content";

type MediaType = CollectionEntry<"resources">["data"]["media"]["type"];

export const labelsMap: Record<MediaType, string> = {
  video: "Videoanleitung",
  pdf: "PDF-Dokument",
  blog: "Blogbeitrag",
  table: "Vorlage",
  project: "Projekt",
  other: "Verschiedenes",
};

export const iconsMap: Record<MediaType, string> = {
  video: "resources/video",
  pdf: "ui/tray-arrow-down",
  blog: "ui/eye",
  table: "ui/tray-arrow-down",
  project: "ui/eye",
  other: "ui/eye",
};

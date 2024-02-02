export const prerender = true;

import type { APIRoute } from "astro";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { getCollection, getEntry } from "astro:content";
import { cn } from "@/utils/classNames";

export const GET: APIRoute = async () => {
  const { data } = await getEntry("resourcesOverview", "resourcesoverview");
  const entries = await getCollection("resources");
  return renderImageResponse(
    await renderBasicOgImage({
      title: data.title,
      description: data.description,
      image: entries[0].data.media.thumbnail,
      styleOverrides: {
        wrapper: "bg-[#edf8fe]",
        image: cn(
          "border-0",
          entries[0].data.media.type !== "video" ? "h-full" : "w-full",
        ),
        imageStyles: {},
      },
    }),
  );
};

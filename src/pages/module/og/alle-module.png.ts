export const prerender = true;

import type { APIRoute } from "astro";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { getCollection, getEntry } from "astro:content";
import { cn } from "@/utils/classNames";

export const GET: APIRoute = async () => {
  const { data } = await getEntry("moduleOverview", "moduleoverview");
  return renderImageResponse(
    renderBasicOgImage({
      title: data.title,
      description: data.description,
      imagePath: data.headerImage?.src.src,
      logoPath: "/images/odis-logo-negative.svg",
      styleOverrides: {
        wrapper: "bg-[#20378b]",
        title: "text-white",
        description: "text-white",
        prefix: "text-white",
        image: "border-0",
        imageStyles: {},
      },
    }),
  );
};

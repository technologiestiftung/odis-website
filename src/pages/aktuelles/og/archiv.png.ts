export const prerender = true;

import type { APIRoute } from "astro";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { getEntry } from "astro:content";

export const GET: APIRoute = async () => {
  const { data } = await getEntry("newsletterArchiv", "newsletterarchiv");
  return renderImageResponse(
    await renderBasicOgImage({
      title: data.title,
      description: data.description,
      image: data.headerImage?.src,
      styleOverrides: {
        image: "border-0",
        imageStyles: {},
      },
    }),
  );
};

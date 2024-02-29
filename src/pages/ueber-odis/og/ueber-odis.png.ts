export const prerender = true;

import type { APIRoute } from "astro";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { getEntry } from "astro:content";

export const GET: APIRoute = async () => {
  const contact = await getEntry("about", "about");
  return renderImageResponse(
    await renderBasicOgImage({
      title: contact.data.title,
      description: contact.data.description,
    }),
  );
};

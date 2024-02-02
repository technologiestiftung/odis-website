export const prerender = true;

import type { APIRoute } from "astro";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { getEntry } from "astro:content";

export const GET: APIRoute = async () => {
  const { data } = await getEntry("homepage", "homepage");
  return renderImageResponse(
    renderBasicOgImage({
      title: data.intro.title,
      description: data.intro.text,
      image: data.aboutOdis.image,
    }),
  );
};

export const prerender = true;

import type { APIRoute } from "astro";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { getCollection, getEntry } from "astro:content";
import { cn } from "@/utils/classNames";

export const GET: APIRoute = async () => {
  const { data } = await getEntry("projectsOverview", "projectsoverview");
  const entries = await getCollection("projekte");
  return renderImageResponse(
    await renderBasicOgImage({
      title: data.title,
      description: data.description,
    }),
  );
};
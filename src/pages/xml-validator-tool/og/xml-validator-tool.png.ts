export const prerender = true;

import type { APIRoute } from "astro";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";

export const GET: APIRoute = async () => {
  return renderImageResponse(
    renderBasicOgImage({
      title: "XML Validator Tool",
      description:
        "Schema-Validator für Berlins Geodaten: Ein Tool zur Schemavalidierung von Geodaten im GML-Format.",
    }),
  );
};

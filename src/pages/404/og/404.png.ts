export const prerender = true;

import type { APIRoute } from "astro";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { formatGermanDate } from "@/utils/dateUtil";

export const GET: APIRoute = async () => {
  return renderImageResponse(
    renderBasicOgImage({
      title: "404 Seite nicht gefunden",
      description:
        "Die von Ihnen aufgerufene Seite konnte nicht gefunden werden. Bitte überprüfen Sie die URL und versuchen Sie es erneut.",
    }),
  );
};

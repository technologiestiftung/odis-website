export const prerender = true;

import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { formatGermanDate } from "@/utils/dateUtil";

type Props = CollectionEntry<"veranstaltungen">;

export const GET: APIRoute<Props> = async ({ props }) =>
  renderImageResponse(
    renderBasicOgImage({
      title: props.data.title,
      description: props.data.description,
      imagePath: props.data.headerImage?.src.src,
      prefix: `Veranstaltung · ${formatGermanDate(props.data.date)}`,
    }),
  );

export async function getStaticPaths() {
  const posts = await getCollection("veranstaltungen");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

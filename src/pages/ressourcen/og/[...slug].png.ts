export const prerender = true;

import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";
import { labelsMap } from "@/utils/resourceUtil";

type Props = CollectionEntry<"resources">;

export const GET: APIRoute<Props> = async ({ props }) =>
  renderImageResponse(
    await renderBasicOgImage({
      title: props.data.title,
      description: props.data.description,
      prefix: `Ressource · ${labelsMap[props.data.media.type]}`,
    }),
  );

export async function getStaticPaths() {
  const posts = await getCollection("resources");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

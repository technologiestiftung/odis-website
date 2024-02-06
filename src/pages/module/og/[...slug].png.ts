export const prerender = true;

import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";

type Props = CollectionEntry<"module">;

export const GET: APIRoute<Props> = async ({ props }) =>
  renderImageResponse(
    await renderBasicOgImage({
      title: props.data.title,
      description: props.data.description,
      prefix: `Datareise · Modul ${props.data.number}`,
    }),
  );

export async function getStaticPaths() {
  const posts = await getCollection("module");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

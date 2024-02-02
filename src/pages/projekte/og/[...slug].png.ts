export const prerender = true;

import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";

type Props = CollectionEntry<"projekte">;

export const GET: APIRoute<Props> = async ({ props }) =>
  renderImageResponse(
    renderBasicOgImage({
      title: props.data.title,
      description: props.data.description,
      imagePath: props.data.heroImage.src,
      prefix: ["Projekt", props.data.status].filter(Boolean).join(` · `),
      logoPath: "/images/odis-logo-negative.svg",
      styleOverrides: {
        wrapper: "bg-[#20378b]",
        title: "text-white",
        description: "text-white",
        prefix: "text-white",
      },
    }),
  );

export async function getStaticPaths() {
  const posts = await getCollection("projekte");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

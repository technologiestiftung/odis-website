export const prerender = true;

import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renderBasicOgImage, renderImageResponse } from "@/utils/ogUtil";

type Props = CollectionEntry<"module">;

export const GET: APIRoute<Props> = async ({ props }) =>
  renderImageResponse(
    renderBasicOgImage({
      title: props.data.title,
      description: props.data.description,
      imagePath: props.data.icon?.src,
      prefix: `Datareise · Modul ${props.data.number}`,
      logoPath: "/images/odis-logo-negative.svg",
      styleOverrides: {
        wrapper: "bg-[#20378b]",
        title: "text-white",
        description: "text-white",
        image: "border-0",
        imageStyles: {},
        prefix: "text-white",
      },
    }),
  );

export async function getStaticPaths() {
  const posts = await getCollection("module");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

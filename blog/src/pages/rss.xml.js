import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

// TODO: Replace with new collection content
export async function GET(context) {
  const posts = await getCollection("blog");
  const aktuelles = await getCollection("aktuelles");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [...posts, ...aktuelles].map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}

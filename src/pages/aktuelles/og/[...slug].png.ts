export const prerender = true;

import type { APIRoute } from "astro";
import { ImageResponse } from "@vercel/og";
import { createElement as el } from "react";
import { readFile } from "fs/promises";
import { getCollection, type CollectionEntry } from "astro:content";
import { cn } from "@/utils/classNames";

type Props = CollectionEntry<"aktuelles">;

export const GET: APIRoute<Props> = async ({ props }) => {
  const [clanBold, clanNews] = await Promise.all([
    readFile("./public/fonts/clan-bold.woff"),
    readFile("./public/fonts/clan-news.woff"),
  ]);

  const dateNextDay = new Date(props.data.date.getTime() + 24 * 60 * 60 * 1000);
  const dateFormatted = dateNextDay.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return new ImageResponse(
    el(
      "div",
      {
        tw: cn("w-full h-full flex", "bg-white"),
        style: { fontFamily: "'Clan'" },
      },
      [
        el(
          "div",
          {
            tw: cn(
              "w-1/2 flex flex-col gap-0 justify-center px-16 pt-12 pb-16",
            ),
          },
          [
            el("img", {
              src: import.meta.env.SITE + "/images/odis-logo.svg",
              tw: cn("h-24 mb-4 -ml-3"),
            }),
            el(
              "p",
              {
                tw: cn("text-gray-700"),
              },
              `Aktuelles · ${dateFormatted}`,
            ),
            el(
              "h1",
              {
                tw: cn("text-4xl font-bold m-0"),
                style: { textWrap: "balance", color: "#20378b" },
              },
              props.data.title.length > 75
                ? props.data.title.slice(0, 75) + "..."
                : props.data.title,
            ),
            el(
              "p",
              {
                tw: cn("text-lg mt-4"),
              },
              props.data.description.length > 150
                ? props.data.description.slice(0, 150) + "..."
                : props.data.description,
            ),
          ],
        ),
        el(
          "div",
          {
            tw: cn("w-1/2 h-full flex items-center justify-center p-16 pl-0"),
          },
          props.data.headerImage &&
            el("img", {
              src: import.meta.env.SITE + props.data.headerImage?.src.src,
              tw: cn("border border-[#bee4f8]"),
              style: { boxShadow: "8px 8px 0 0 #bee4f8" },
            }),
        ),
      ],
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Clan",
          data: clanBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Clan",
          data: clanNews,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
};

export async function getStaticPaths() {
  const posts = await getCollection("aktuelles");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

import { boldify } from "./boldify";
import { ImageResponse } from "@vercel/og";
import {
  createElement as el,
  type JSXElementConstructor,
  type ReactElement,
} from "react";
import { readFile } from "fs/promises";
import { cn } from "@/utils/classNames";

export async function renderImageResponse(
  dom: ReactElement<any, string | JSXElementConstructor<any>>,
) {
  const [clanBold, clanNews] = await Promise.all([
    readFile("./public/fonts/clan-bold.woff"),
    readFile("./public/fonts/clan-news.woff"),
  ]);

  return new ImageResponse(dom, {
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
  });
}

export async function renderBasicOgImage({
  prefix,
  title,
  suffix,
  description,
}: {
  prefix?: string | undefined;
  suffix?: string | undefined;
  title: string;
  description: string;
}) {
  return el(
    "div",
    {
      tw: cn("w-full h-full flex", "bg-white"),
      style: { fontFamily: "'Clan'" },
      key: "wrapper",
    },
    [
      el(
        "div",
        {
          key: "image-container",
          tw: cn("flex flex-col justify-center px-16 pt-12 pb-16"),
        },
        [
          el("img", {
            src: `https://logos.citylab-berlin.org/logo-odis-berlin-coloured.svg`,
            tw: cn("mb-8"),
            width: 251 * 1.2,
            height: 63 * 1.2,
            key: "logo",
          }),
          prefix &&
            el(
              "p",
              {
                tw: cn("text-gray-700 text-3xl"),
                key: "prefix",
              },
              stripHtmlTagsAndEntities(prefix),
            ),
          el(
            "h1",
            {
              tw: cn("text-6xl text-[#20378b] font-bold m-0"),
              style: { textWrap: "balance" },
              key: "title",
            },
            limitString(stripHtmlTagsAndEntities(boldify(title)), 75),
          ),
          suffix &&
            el(
              "p",
              {
                tw: cn("text-gray-700"),
                key: "suffix",
              },
              stripHtmlTagsAndEntities(suffix),
            ),
          el(
            "p",
            {
              tw: cn("text-3xl mt-8 w-[75vw]"),
              key: "description",
              style: { textWrap: "balance" },
            },
            limitString(stripHtmlTagsAndEntities(description), 190),
          ),
        ],
      ),
    ],
  );
}

function stripHtmlTagsAndEntities(html?: string) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, "");
}

function limitString(str: string, limit: number) {
  return str.length > limit ? str.slice(0, limit) + "..." : str;
}

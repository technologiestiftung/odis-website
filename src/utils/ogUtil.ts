import { boldify } from "./boldify";
import { ImageResponse } from "@vercel/og";
import {
  createElement as el,
  type CSSProperties,
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

export function renderBasicOgImage({
  prefix,
  title,
  suffix,
  description,
  image,
  styleOverrides = {},
  logoPath = "/images/odis-logo.svg",
}: {
  prefix?: string | undefined;
  suffix?: string | undefined;
  title: string;
  description: string;
  image?: ImageMetadata | undefined;
  styleOverrides?: {
    wrapper?: string;
    title?: string;
    description?: string;
    image?: string;
    imageStyles?: CSSProperties;
    prefix?: string;
    suffix?: string;
    logo?: string;
  };
  logoPath?: string;
}) {
  return el(
    "div",
    {
      tw: cn("w-full h-full flex", "bg-white", styleOverrides.wrapper),
      style: { fontFamily: "'Clan'" },
    },
    [
      el(
        "div",
        {
          tw: cn("w-1/2 flex flex-col justify-center px-16 pt-12 pb-16"),
        },
        [
          el("img", {
            src: import.meta.env.SITE + logoPath,
            tw: cn("mb-4 -ml-3", styleOverrides.logo),
            width: 300,
            height: 72,
          }),
          prefix &&
            el(
              "p",
              {
                tw: cn("text-gray-700", styleOverrides.prefix),
              },
              stripHtmlTagsAndEntities(prefix),
            ),
          el(
            "h1",
            {
              tw: cn(
                "text-4xl text-[#20378b] font-bold m-0",
                styleOverrides.title,
              ),
              style: { textWrap: "balance" },
            },
            stripHtmlTagsAndEntities(limitString(boldify(title), 75)),
          ),
          suffix &&
            el(
              "p",
              {
                tw: cn("text-gray-700", styleOverrides.suffix),
              },
              stripHtmlTagsAndEntities(suffix),
            ),
          el(
            "p",
            {
              tw: cn("text-lg mt-4", styleOverrides.description),
            },
            stripHtmlTagsAndEntities(limitString(description, 190)),
          ),
        ],
      ),
      el(
        "div",
        {
          tw: cn("w-1/2 h-full flex items-center justify-center p-16 pl-0"),
        },
        image &&
          el("img", {
            src: import.meta.env.SITE + image.src,
            width: image.width,
            height: image.height,
            tw: cn("border border-[#bee4f8]", styleOverrides.image),
            style: styleOverrides.imageStyles || {
              boxShadow: "8px 8px 0 0 #bee4f8",
              width:
                image.orientation === 1
                  ? 400
                  : (image.width / image.height) * 400,
              height:
                image.orientation === 1
                  ? (image.height / image.width) * 400
                  : 400,
            },
          }),
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

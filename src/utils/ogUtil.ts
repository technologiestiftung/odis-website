import { join } from "node:path";
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

export async function renderBasicOgImage({
  prefix,
  title,
  suffix,
  description,
  image,
  styleOverrides = {},
  logoPath = "/images/odis-logo.png",
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
  // let imageData;
  // if (image?.src) {
  //   console.log("fetching image", import.meta.env.SITE + image.src);
  //   imageData = await fetch(new URL(import.meta.env.SITE + image.src)).then(
  //     (res) => res.arrayBuffer(),
  //   );
  //   console.log("fetched image", imageData);
  // }
  return el(
    "div",
    {
      tw: cn("w-full h-full flex", "bg-white", styleOverrides.wrapper),
      style: { fontFamily: "'Clan'" },
      key: "wrapper",
    },
    [
      el(
        "div",
        {
          key: "image-container",
          tw: cn("w-1/2 flex flex-col justify-center px-16 pt-12 pb-16"),
        },
        [
          el("img", {
            tw: cn("mb-4", styleOverrides.logo),
            src: `https://logos.citylab-berlin.org/logo-odis-berlin-black.svg`,
            width: 300,
            height: 72,
            key: "logo",
          }),
          prefix &&
            el(
              "p",
              {
                tw: cn("text-gray-700", styleOverrides.prefix),
                key: "prefix",
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
              key: "title",
            },
            stripHtmlTagsAndEntities(limitString(boldify(title), 75)),
          ),
          suffix &&
            el(
              "p",
              {
                tw: cn("text-gray-700", styleOverrides.suffix),
                key: "suffix",
              },
              stripHtmlTagsAndEntities(suffix),
            ),
          el(
            "p",
            {
              tw: cn("text-lg mt-4", styleOverrides.description),
              key: "description",
            },
            stripHtmlTagsAndEntities(limitString(description, 190)),
          ),
        ],
      ),
      el(
        "div",
        {
          tw: cn("w-1/2 h-full flex items-center justify-center p-16 pl-0"),
          key: "image-container",
        },
        // image &&
        //   imageData &&
        //   el("img", {
        //     key: "image",
        //     src: imageData,
        //     width:
        //       image.orientation === 1
        //         ? 400
        //         : (image.width / image.height) * 400,
        //     height:
        //       image.orientation === 1
        //         ? (image.height / image.width) * 400
        //         : 400,
        //     tw: cn("border border-[#bee4f8]", styleOverrides.image),
        //     style: styleOverrides.imageStyles || {
        //       boxShadow: "8px 8px 0 0 #bee4f8",
        //     },
        //   }),
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

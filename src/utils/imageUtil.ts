import type { ImageMetadata } from "astro"

export type AstroImageType = {
  default: ImageMetadata
}

type GetImagesFromFilesProps<Value extends string> = {
  images: AstroImageType[]
  identifiers: [identifier: string, value: Value][]
}

type GetImageFromFilesProps = {
  images: AstroImageType[]
  identifier: string
}

export const getImagesFromFiles = <Value extends string>({
  images: files,
  identifiers: rawIdentifiers,
}: GetImagesFromFilesProps<Value>) => {
  const identifiers = rawIdentifiers
    .filter(([identifier, value]) => identifier && value)
  const images = files.map((file) => file.default)
  const imageMap = images.reduce((acc, image) => {
      const result = identifiers.find(([identifier]) => image.src.includes(identifier || ""))
      if (!result) return acc;
      return { ...acc, [result[1]]: image };
    }, {} as Record<Value, AstroImageType["default"]>);
  return imageMap;
}

export const getImageFromFiles = ({ images: files, identifier }: GetImageFromFilesProps) => {
  const images = files.map((file) => file.default)
  const image = images.find((image) => image.src.toLocaleLowerCase().includes(identifier.toLocaleLowerCase()))
  return image
}
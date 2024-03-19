export function getFileWithExtFromPath(link?: unknown) {
  if (typeof link !== "string") return undefined;
  const fileWithExtRegex = /\/([^\/]+)\.([^\/]+)$/;
  const fileNameWithExt = fileWithExtRegex.exec(link)?.[0];
  return fileNameWithExt?.replaceAll("/", "");
}

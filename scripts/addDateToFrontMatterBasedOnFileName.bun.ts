import matter from "gray-matter";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { stringify } from "yaml";

async function getFiles(directoryPath: string) {
  try {
    const fileNames = await readdir(directoryPath);
    const filePaths = fileNames.map((fn) => join(directoryPath, fn));
    return filePaths;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

async function updateFrontMatter(
  filePath: string,
  newFrontMatter: matter.GrayMatterFile<Buffer>["data"] & {
    [key: string]: any;
  },
) {
  const { content, data: oldFrontMatter } = matter(await readFile(filePath));
  const finalFrontMatter = stringify({
    ...oldFrontMatter,
    ...newFrontMatter,
  });

  const newContent = `---\n${finalFrontMatter}---\n${content}`;

  await writeFile(filePath, newContent);

  console.log(`- ✅ ${filePath}`);
}

const folderFiles = await getFiles("./src/content/veranstaltungen");
for (const filePath of folderFiles || []) {
  const dateInFileName = filePath.match(/\d{4}-\d{2}-\d{2}/);
  if (!dateInFileName) {
    console.log(`- 🚫 ${filePath}`);
    continue;
  }
  const date = String(dateInFileName[0]);
  await updateFrontMatter(filePath, { date });
}

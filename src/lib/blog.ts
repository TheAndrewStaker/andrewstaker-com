import { readFile } from "fs/promises";
import { join } from "path";

const CONTENT_DIR = join(process.cwd(), "src", "content", "blog");

export async function getPostContent(slug: string): Promise<string> {
  const filePath = join(CONTENT_DIR, `${slug}.md`);
  return readFile(filePath, "utf-8");
}

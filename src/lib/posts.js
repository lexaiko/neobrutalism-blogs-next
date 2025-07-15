import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "src/content/blog");

export function getAllPosts() {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir);

  return files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "",
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      image: data.image || null,
    };
  });
}

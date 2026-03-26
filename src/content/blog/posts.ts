export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  excerpt: string;
}

export const posts: BlogPost[] = [
  {
    slug: "building-this-site",
    title: "Building This Site with Next.js and MUI",
    date: "2026-03-25",
    tags: ["nextjs", "mui", "typescript"],
    excerpt:
      "How I built a personal site with swappable MUI themes and what I picked up about MUI's theming system along the way.",
  },
];

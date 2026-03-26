import { notFound } from "next/navigation";
import { Container, Typography, Box, Chip, Stack, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { posts } from "@/content/blog/posts";
import { getPostContent } from "@/lib/blog";
import BlogContent from "@/components/BlogContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const content = await getPostContent(post.slug);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="md">
        <Button
          href="/blog"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 2, textTransform: "none" }}
        >
          Back to Blog
        </Button>

        <Typography variant="h1" sx={{ mb: 1 }}>
          {post.title}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          gap={1}
          sx={{ mb: 3 }}
        >
          <Typography variant="caption" color="text.secondary">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          {post.tags?.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <BlogContent content={content} />
      </Container>
    </Box>
  );
}

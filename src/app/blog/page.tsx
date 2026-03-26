"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Box,
  Stack,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { posts } from "@/content/blog/posts";

export default function BlogIndex() {
  const [activeTag, setActiveTag] = useState<string>();

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags ?? [])));

  const filtered = activeTag
    ? posts.filter((p) => p.tags?.includes(activeTag))
    : posts;

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

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
          href="/"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 2, textTransform: "none" }}
        >
          Home
        </Button>

        <Typography variant="h1" sx={{ mb: 1 }}>
          Blog
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
          {allTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant={activeTag === tag ? "filled" : "outlined"}
              color={activeTag === tag ? "primary" : "default"}
              onClick={() => setActiveTag(activeTag === tag ? undefined : tag)}
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Stack>

        <Stack spacing={3}>
          {sorted.map((post) => (
            <Card key={post.slug}>
              <CardActionArea href={`/blog/${post.slug}`}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ sm: "baseline" }}
                    gap={0.5}
                  >
                    <Typography variant="h2">{post.title}</Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ flexShrink: 0 }}
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mt: 2 }}
                  >
                    <Stack direction="row" flexWrap="wrap" gap={0.5}>
                      {post.tags?.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                      ))}
                    </Stack>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        flexShrink: 0,
                      }}
                    >
                      Read <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

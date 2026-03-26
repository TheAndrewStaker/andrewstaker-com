"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Typography, Link, Divider, Box } from "@mui/material";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <Typography variant="h1" sx={{ mt: 4, mb: 1.5 }}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h2" sx={{ mt: 3.5, mb: 1 }}>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      variant="h2"
      sx={{ mt: 3, mb: 1, fontSize: "0.95rem" }}
    >
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.75 }}>
      {children}
    </Typography>
  ),
  a: ({ href, children }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" underline="hover">
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <Box component="ul" sx={{ pl: 3, mb: 2, "& li": { mb: 0.5 } }}>
      {children}
    </Box>
  ),
  ol: ({ children }) => (
    <Box component="ol" sx={{ pl: 3, mb: 2, "& li": { mb: 0.5 } }}>
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Typography component="li" variant="body1">
      {children}
    </Typography>
  ),
  hr: () => <Divider sx={{ my: 3 }} />,
  blockquote: ({ children }) => (
    <Box
      sx={{
        borderLeft: 3,
        borderColor: "primary.main",
        pl: 2,
        py: 0.5,
        my: 2,
        color: "text.secondary",
      }}
    >
      {children}
    </Box>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.startsWith("language-");
    if (isBlock) {
      return (
        <Box
          component="pre"
          sx={{
            bgcolor: "action.hover",
            borderRadius: 1,
            p: 2,
            mb: 2,
            overflowX: "auto",
            "& code": {
              fontFamily: '"JetBrains Mono", "Fira Code", monospace',
              fontSize: "0.813rem",
            },
          }}
        >
          <code className={className}>{children}</code>
        </Box>
      );
    }
    return (
      <Box
        component="code"
        sx={{
          fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          fontSize: "0.85em",
          bgcolor: "action.hover",
          px: 0.75,
          py: 0.25,
          borderRadius: 0.5,
        }}
      >
        {children}
      </Box>
    );
  },
  strong: ({ children }) => (
    <Box component="strong" sx={{ fontWeight: 600 }}>
      {children}
    </Box>
  ),
};

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}

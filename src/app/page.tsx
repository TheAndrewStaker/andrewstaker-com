"use client";

import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Box,
  Link,
  Divider,
  Stack,
  Grid,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";

const accomplishments = [
  "12+ years in enterprise software engineering",
  "Led 30+ software engineers and 10+ testers",
  "Delivered hundreds of features",
];

const whoIAm = [
  "Dad",
  "Software Leader",
  "Music Maker",
  "Movie Collector",
  "Retro Hardware Enthusiast",
];

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/stephen-andrew-staker-4a602783" },
  { label: "GitHub", href: "https://github.com/TheAndrewStaker" },
  { label: "SoundCloud", href: "https://soundcloud.com/andrewstaker" },
];

export default function Home() {
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
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h1" noWrap>
              Stephen &ldquo;Andrew&rdquo; Staker
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 1,
                maxWidth: 600,
                fontSize: { xs: "0.813rem", sm: "inherit" },
              }}
            >
              APIs &bull; Integrations &bull; Reliability &bull; Front End Care &bull; Heavy Metal
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              flexWrap="wrap"
              gap={1}
              sx={{ mt: 2.5 }}
            >
              {accomplishments.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                />
              ))}
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={2}
              sx={{ mt: 3 }}
            >
              <Button
                variant="contained"
                href="/stephen-andrew-staker-resume.pdf"
                startIcon={<DownloadIcon />}
                size="large"
                fullWidth
                sx={{ maxWidth: { sm: "fit-content" } }}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                href="mailto:stephenstaker@gmail.com"
                startIcon={<EmailIcon />}
                size="large"
                fullWidth
                sx={{ maxWidth: { sm: "fit-content" } }}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                href="/blog"
                startIcon={<ArticleIcon />}
                size="large"
                fullWidth
                sx={{ maxWidth: { sm: "fit-content" } }}
              >
                Blog
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h2" gutterBottom>
                  Who I Am
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={1}>
                  {whoIAm.map((item) => (
                    <Typography key={item} variant="body1">
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h2" gutterBottom>
                  Links
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      variant="body1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 6, mb: 10 }}
        >
          Built with Next.js + MUI
        </Typography>
      </Container>
    </Box>
  );
}

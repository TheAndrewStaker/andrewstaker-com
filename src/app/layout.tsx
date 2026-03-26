import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import ThemeRegistry from "@/theme/ThemeRegistry";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
  title: 'Stephen "Andrew" Staker',
  description: "Engineering leader building reliable backend systems",
  appleWebApp: { capable: true, statusBarStyle: "default" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const themeKey = cookieStore.get("andrewstaker-theme")?.value;

  return (
    <html lang="en">
      <body>
        <ThemeRegistry initialTheme={themeKey}>
          {children}
          <ThemeSwitcher />
        </ThemeRegistry>
      </body>
    </html>
  );
}

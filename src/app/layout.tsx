import type { Metadata, Viewport } from "next";
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
          <ThemeSwitcher />
        </ThemeRegistry>
      </body>
    </html>
  );
}

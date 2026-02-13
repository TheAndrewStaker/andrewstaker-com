import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const vt323Font = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Stephen "Andrew" Staker',
  description: "Engineering leader building reliable backend systems",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${vt323Font.className} antialiased`}>{children}</body>
    </html>
  );
}

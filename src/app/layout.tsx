import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist_Mono, Oswald } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Demo Registry",
  description: "Starter to help build a Shadcn Registry using Tailwind v4 - enhanced from Figma",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const OswaldDisplay = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        GeistMono.variable,
        OswaldDisplay.variable,
        "bg-background text-foreground",
      )}
    >
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body className="flex grow">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

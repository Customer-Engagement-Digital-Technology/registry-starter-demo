import { Geist_Mono, Oswald } from "next/font/google";
import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "@/app/globals.css";

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const OswaldDisplay = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

export default function ShellLayout({
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
      <body>
        <BrandHeader />
        <main className="mt-16 flex w-full justify-center">
          <div className="container">{children}</div>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

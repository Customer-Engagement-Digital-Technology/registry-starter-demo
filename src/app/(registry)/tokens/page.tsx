"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";

import TypographyBlock from "@/app/(registry)/tokens/typography-block";
import { Button } from "@/components/ui/button";
import { ColorBlock } from "./color-block";

export default function TokensPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="font-bold text-3xl tracking-tight">Design Tokens</h1>
        <p className="mt-1 text-muted-foreground">
          A comprehensive overview of all color tokens used in the design system
        </p>
      </div>

      {/* Fonts section removed to avoid duplication; see Typography below */}

      {/* Primary Theme */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Primary Theme</h2>
        <p className="mb-6 text-muted-foreground">
          The core colors that define the primary theme and overall look of the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Background" className="bg-background" />
          <ColorBlock name="Foreground" className="bg-foreground" />
          <ColorBlock name="Primary" className="bg-primary" />
          <ColorBlock
            name="Primary Foreground"
            className="bg-primary-foreground"
          />
        </div>
      </section>

      {/* Secondary & Accent */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Secondary & Accent</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for secondary elements and accents throughout the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Secondary" className="bg-secondary" />
          <ColorBlock
            name="Secondary Foreground"
            className="bg-secondary-foreground"
          />
          <ColorBlock name="Accent" className="bg-accent" />
          <ColorBlock
            name="Accent Foreground"
            className="bg-accent-foreground"
          />
        </div>
      </section>

      {/* UI Component */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">UI Component</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for specific UI components like cards, popovers, and muted
          elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Card" className="bg-card" />
          <ColorBlock name="Card Foreground" className="bg-card-foreground" />
          <ColorBlock name="Popover" className="bg-popover" />
          <ColorBlock
            name="Popover Foreground"
            className="bg-popover-foreground"
          />
          <ColorBlock name="Muted" className="bg-muted" />
          <ColorBlock name="Muted Foreground" className="bg-muted-foreground" />
        </div>
      </section>

      {/* Utility & Form */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Utility & Form</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for borders, inputs, and other utility elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ColorBlock name="Border" className="bg-border" />
          <ColorBlock name="Input" className="bg-input" />
          <ColorBlock name="Ring" className="bg-ring" />
        </div>
      </section>

      {/* Status & Feedback */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Status & Feedback</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used to indicate different states and provide feedback to
          users.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Destructive" className="bg-destructive" />
          <ColorBlock
            name="Destructive Foreground"
            className="bg-destructive-foreground"
          />
        </div>
      </section>

      {/* Brand */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Brand</h2>
        <p className="mb-6 text-muted-foreground">
          Brand palette pulled from the Figma file.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ColorBlock name="DeWalt Yellow" hex="#FEBD17" code="BRAND/Primary/DeWalt Yellow" />
          <ColorBlock name="DeWalt Black" hex="#000000" code="BRAND/Primary/DeWalt Black" />
          <ColorBlock name="DeWalt White" hex="#FFFFFF" code="BRAND/Primary/DeWalt White" />
          <ColorBlock name="Yellow - Light" hex="#FFE455" code="BRAND/Secondary/DeWalt Yellow - Light" />
          <ColorBlock name="Yellow - Dark" hex="#C68D00" code="BRAND/Secondary/DeWalt Yellow - Dark" />
          <ColorBlock name="Gray - Light" hex="#F5F5F5" code="BRAND/Secondary/DeWalt Gray - Light" />
          <ColorBlock name="Gray - Dark" hex="#353535" code="BRAND/Secondary/DeWalt Gray - Dark" />
        </div>
      </section>

      {/* Grayscale */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Grayscale</h2>
        <p className="mb-6 text-muted-foreground">Neutral scale for backgrounds and text.</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <ColorBlock name="0" hex="#FFFFFF" code="GRAYSCALE/0" />
          <ColorBlock name="10" hex="#F5F5F5" code="GRAYSCALE/10" />
          <ColorBlock name="20" hex="#EEEEEE" code="GRAYSCALE/20" />
          <ColorBlock name="30" hex="#C4C4C4" code="GRAYSCALE/30" />
          <ColorBlock name="40" hex="#A6A6A6" code="GRAYSCALE/40" />
          <ColorBlock name="50" hex="#888888" code="GRAYSCALE/50" />
          <ColorBlock name="70" hex="#4D4D4D" code="GRAYSCALE/70" />
          <ColorBlock name="80" hex="#353535" code="GRAYSCALE/80" />
          <ColorBlock name="90" hex="#1A1A1A" code="GRAYSCALE/90" />
        </div>
      </section>

      {/* Interactive */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Interactive</h2>
        <p className="mb-6 text-muted-foreground">Actionable colors for links and focus.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ColorBlock name="Digital Blue" hex="#275CE2" code="INTERACTIVE/Digital Blue" />
          <ColorBlock name="Digital Blue - Light" hex="#C3D4FB" code="INTERACTIVE/Digital Blue - Light" />
          <ColorBlock name="Digital Blue - Dark" hex="#00184D" code="INTERACTIVE/Digital Blue - Dark" />
        </div>
      </section>

      {/* Utility */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Utility</h2>
        <p className="mb-6 text-muted-foreground">Status colors for feedback and states.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ColorBlock name="Success" hex="#79AD23" code="UTILITY/Success/Success" />
          <ColorBlock name="Success - Light" hex="#EEF8DC" code="UTILITY/Success/Success - Light" />
          <ColorBlock name="Success - Dark" hex="#477D00" code="UTILITY/Success/Success - Dark" />
          <ColorBlock name="Warning" hex="#E68A01" code="UTILITY/Warning/Warning" />
          <ColorBlock name="Warning - Light" hex="#FFF6E0" code="UTILITY/Warning/Warning - Light" />
          <ColorBlock name="Warning - Dark" hex="#AE5C00" code="UTILITY/Warning/Warning - Dark" />
          <ColorBlock name="Error" hex="#CD4040" code="UTILITY/Error/Error" />
          <ColorBlock name="Error - Light" hex="#FFE5E3" code="UTILITY/Error/Error - Light" />
          <ColorBlock name="Error - Dark" hex="#960019" code="UTILITY/Error/Error - Dark" />
        </div>
      </section>

      {/* Overlay */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Overlay</h2>
        <p className="mb-6 text-muted-foreground">Scrims and overlays.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="50% Black" hex="#000000" code="OVERLAY/50% Black" />
          <ColorBlock name="70% Black" hex="#000000" code="OVERLAY/70% Black" />
        </div>
      </section>

      {/* Typography (from Figma variables) */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Typography</h2>
        <p className="mb-6 text-muted-foreground">Preview of typography tokens.</p>
        <div className="grid grid-cols-1 gap-6">
          <TypographyBlock name="Header / Display" value={`Font(family: "Oswald", style: Bold, size: 80, weight: 700, lineHeight: 88)`} />
          <TypographyBlock name="Header / H1" value={`Font(family: "Oswald", style: Bold, size: 56, weight: 700, lineHeight: 64)`} />
          <TypographyBlock name="Header / H2" value={`Font(family: "Oswald", style: Bold, size: 40, weight: 700, lineHeight: 48)`} />
          <TypographyBlock name="Header / H3" value={`Font(family: "Oswald", style: Bold, size: 32, weight: 700, lineHeight: 40)`} />
          <TypographyBlock name="Header / H4" value={`Font(family: "Oswald", style: Bold, size: 24, weight: 700, lineHeight: 32)`} />
          <TypographyBlock name="Header / H5" value={`Font(family: "Oswald", style: Regular, size: 24, weight: 400, lineHeight: 32)`} />
          <TypographyBlock name="Header / H6" value={`Font(family: "Oswald", style: Bold, size: 18, weight: 700, lineHeight: 20)`} />
          <TypographyBlock name="Body / Regular" value={`Font(family: "Helvetica", style: Regular, size: 16, weight: 400, lineHeight: 24)`} />
          <TypographyBlock name="Body / Large" value={`Font(family: "Helvetica", style: Regular, size: 18, weight: 400, lineHeight: 26)`} />
          <TypographyBlock name="Body / Xtra Large" value={`Font(family: "Helvetica", style: Regular, size: 24, weight: 400, lineHeight: 28)`} />
          <TypographyBlock name="Body / Small" value={`Font(family: "Helvetica", style: Regular, size: 14, weight: 400, lineHeight: 22)`} />
          <TypographyBlock name="Body / Xtra Small" value={`Font(family: "Helvetica", style: Regular, size: 12, weight: 400, lineHeight: 16)`} />
          <TypographyBlock name="Label / Regular" value={`Font(family: "Helvetica", style: Bold, size: 16, weight: 700, lineHeight: 24)`} />
          <TypographyBlock name="Label / Small" value={`Font(family: "Helvetica", style: Bold, size: 14, weight: 700, lineHeight: 16)`} />
        </div>
      </section>

      {/* Chart & Visualization */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Chart & Visualization</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for data visualization and charts.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <ColorBlock name="Chart 1" className="bg-chart-1" />
          <ColorBlock name="Chart 2" className="bg-chart-2" />
          <ColorBlock name="Chart 3" className="bg-chart-3" />
          <ColorBlock name="Chart 4" className="bg-chart-4" />
          <ColorBlock name="Chart 5" className="bg-chart-5" />
        </div>
      </section>

      {/* Sidebar & Navigation */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Sidebar & Navigation</h2>
        <p className="mb-6 text-muted-foreground">
          Colors specific to the sidebar and navigation components.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Sidebar" className="bg-sidebar" />
          <ColorBlock
            name="Sidebar Foreground"
            className="bg-sidebar-foreground"
          />
          <ColorBlock name="Sidebar Primary" className="bg-sidebar-primary" />
          <ColorBlock
            name="Sidebar Primary Foreground"
            className="bg-sidebar-primary-foreground"
          />
          <ColorBlock name="Sidebar Accent" className="bg-sidebar-accent" />
          <ColorBlock
            name="Sidebar Accent Foreground"
            className="bg-sidebar-accent-foreground"
          />
          <ColorBlock name="Sidebar Border" className="bg-sidebar-border" />
          <ColorBlock name="Sidebar Ring" className="bg-sidebar-ring" />
        </div>
      </section>
    </div>
  );
}

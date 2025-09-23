import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const columns = [
  {
    title: "Products",
    links: [
      { label: "Power Tools", href: "#" },
      { label: "Hand Tools", href: "#" },
      { label: "Accessories", href: "#" },
      { label: "Outdoors", href: "#" },
      { label: "Workspace", href: "#" },
      { label: "Storage", href: "#" },
      { label: "Anchors", href: "#" },
    ],
  },
  {
    title: "Systems",
    links: [
      { label: "Cordless Platforms", href: "#" },
      { label: "Perform & Protect", href: "#" },
      { label: "Tool Connect", href: "#" },
      { label: "ToughSystem® Storage", href: "#" },
      { label: "MOBILELOCK™", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support Information", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Find a Retailer", href: "#" },
      { label: "Service Centers", href: "#" },
      { label: "Product Registration", href: "#" },
      { label: "Warranty Information", href: "#" },
      { label: "Support in Language", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Why DEWALT", href: "#" },
      { label: "Trade Stories", href: "#" },
      { label: "Events", href: "#" },
      { label: "Awards", href: "#" },
      { label: "Featured Articles", href: "#" },
      { label: "News & Press", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

function DewaltLogo() {
  return (
    <div className="inline-flex h-[46px] w-[192px] items-center justify-center bg-[#febd17]">
      <span className="text-[28px] font-black tracking-tight text-[#231e20]">DEWALT</span>
    </div>
  );
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("w-full border-t-0", className)}>
      {/* Menu links */}
      <div className="w-full bg-[#231e20]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-10">
          {columns.map((col) => (
            <nav key={col.title} aria-labelledby={`footer-${col.title}`} className="flex flex-col gap-4">
              <h3 id={`footer-${col.title}`} className="font-black uppercase tracking-[-0.01em] text-[#febd17]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-semibold text-white hover:text-[#febd17]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        {/* Copyright + social */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-6 px-5 pb-10 lg:flex-row lg:items-start lg:justify-between lg:px-10">
          <DewaltLogo />
          <div className="max-w-[800px] text-xs">
            <p className="font-medium uppercase text-[#f0eeee]">Copyright © DEWALT 2024</p>
            <p className="mt-1 text-[#b7b4b5]">
              The following are trademarks for one or more DEWALT power tools, accessories, anchors and
              concrete adhesives: The yellow and black color scheme; the “D”-shaped air intake grill; the array of
              pyramids on the handgrip; the kit box configuration; and the array of lozenge-shaped humps on the
              surface of the tool.
            </p>
          </div>
          <div className="ml-auto flex items-center gap-3 text-white">
            <a aria-label="Facebook" href="#" className="p-1 hover:text-[#febd17]">
              <svg viewBox="0 0 24 24" className="size-6 fill-current"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.68 9.18 8.5 9.93v-7.02H8.1v-2.91h2.4V9.41c0-2.38 1.42-3.69 3.6-3.69 1.04 0 2.12.19 2.12.19v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.82-.75 8.5-4.91 8.5-9.93z"/></svg>
            </a>
            <a aria-label="Instagram" href="#" className="p-1 hover:text-[#febd17]">
              <svg viewBox="0 0 24 24" className="size-6 fill-current"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
            </a>
            <a aria-label="YouTube" href="#" className="p-1 hover:text-[#febd17]">
              <svg viewBox="0 0 24 24" className="size-6 fill-current"><path d="M23.5 6.5s-.23-1.64-.95-2.36c-.91-.95-1.93-.96-2.4-1.02C17.64 3 12 3 12 3h-.01S6.36 3 3.85 3.12c-.47.06-1.49.07-2.4 1.02C.73 4.86.5 6.5.5 6.5S.27 8.37.27 10.24v1.53C.27 13.63.5 15.5.5 15.5s.23 1.64.95 2.36c.91.95 2.1.92 2.63 1.03 1.91.18 7.92.24 7.92.24s5.64-.01 8.15-.13c.47-.06 1.49-.07 2.4-1.02.72-.72.95-2.36.95-2.36s.23-1.87.23-3.74v-1.53c0-1.87-.23-3.74-.23-3.74zM9.75 13.5V8.5l5.25 2.5-5.25 2.5z"/></svg>
            </a>
            <a aria-label="LinkedIn" href="#" className="p-1 hover:text-[#febd17]">
              <svg viewBox="0 0 24 24" className="size-6 fill-current"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V22h-4V8.5zm7 0h3.83v1.84h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V22h-4v-5.87c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V22h-4V8.5z"/></svg>
            </a>
          </div>
        </div>
        {/* Link group bar */}
        <div className="w-full bg-[#312d2e] px-5 py-4 lg:px-10">
          <ul className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center gap-2 text-[12px] text-white">
            {[
              "Updated Privacy Policy",
              "Terms Of Use",
              "Safety Notices & Recalls",
              "Power Tools Institute",
              "Travel Safety with Cordless Tools",
              "DEWALT Patent Information",
              "Shop Safe",
              "Digital Product Passport",
            ].map((item, idx, arr) => (
              <React.Fragment key={item}>
                <li>
                  <a href="#" className="font-medium hover:text-[#febd17]">
                    {item}
                  </a>
                </li>
                {idx < arr.length - 1 && (
                  <li aria-hidden className="text-[#646062]">|</li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

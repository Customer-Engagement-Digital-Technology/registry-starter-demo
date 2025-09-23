"use client";

import Link from "next/link";
import { Globe, ChevronDown, Search, Accessibility } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Logo } from "./logo";

export function BrandHeader() {
  return (
    <header className="w-full border-b border-[var(--border)] bg-[var(--foreground)]">
      {/* Top bar */}
      <div className="flex h-[68px] items-center justify-between px-5">
        <div className="flex items-center gap-10">
          <Link href="/" aria-label="Home" className="flex items-center">
            <Logo />
          </Link>

          {/* Search */}
          <div className="hidden md:flex h-10 w-[600px] items-center justify-between rounded-lg px-3" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
            <div className="flex items-center gap-1.5">
              <Search className="size-5 text-[var(--accent-foreground)]/80" />
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="h-8 w-[520px] border-0 bg-transparent p-0 text-[16px] font-medium text-[#b7b4b5] placeholder:text-[#b7b4b5] focus-visible:ring-0"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Accessibility className="hidden md:block size-6 text-white" />
          <div className="hidden md:flex items-center gap-2 text-white">
            <Globe className="size-6" />
            <span className="text-[16px] font-semibold">US | EN</span>
          </div>

          <Button
            className="h-9 rounded-none bg-[var(--primary)] px-2 text-[var(--primary-foreground)]"
            variant="default"
            size="sm"
          >
            LOG IN
          </Button>
        </div>
      </div>

      {/* Main nav row */}
      <div className="flex h-12 items-center justify-between px-5 text-white">
        <nav className="flex items-center gap-6 text-sm">
          <NavItem>Products</NavItem>
          <NavItem>Jobsite Solutions</NavItem>
          <NavItem>Support & Training</NavItem>
        </nav>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavItem chevron={false}>Product Registration</NavItem>
          <NavItem>Find A Location</NavItem>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ children, chevron = true }: { children: React.ReactNode; chevron?: boolean }) {
  return (
    <div className="flex items-center gap-1 py-2">
      <span className="text-[14px] font-medium leading-[17px]">{children}</span>
      {chevron && <ChevronDown className="size-4" />}
    </div>
  );
}

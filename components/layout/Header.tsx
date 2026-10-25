"use client";

import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import content from "@/data/home-content.json";

function LoginButton() {
  const copy = content.header;
  return <Link href={copy.loginHref} className="text-sm font-semibold text-primary">{copy.login}</Link>;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content.header;
  return (
    <header className="site-header">
      <div className="container-width flex h-[76px] items-center justify-between gap-5">
        <Link href="/" className="brand-mark" aria-label={copy.homeAriaLabel}><span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span><span>{content.site.brandStart}<span>{content.site.brandEnd}</span></span></Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label={copy.primaryNavLabel}>{copy.navigation.map((item) => <Link key={item.label} href={item.href} className="nav-link">{item.label}</Link>)}</nav>
        <div className="hidden items-center gap-6 sm:flex"><LoginButton /><ButtonLink href="/workshops" className="min-h-10 px-4 py-2.5 text-xs">{copy.exploreWorkshops} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink></div>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border lg:hidden" aria-label={copy.mobileOpen}><Menu size={20} /></SheetTrigger>
          <SheetContent>
            <SheetTitle className="mt-2 text-xl font-bold tracking-tight">{content.site.name}</SheetTitle>
            <SheetDescription className="mt-2 text-xs text-muted">{copy.mobileDescription}</SheetDescription>
            <nav className="mt-8" aria-label={copy.mobileNavLabel}>{copy.navigation.map((item, index) => <Link key={item.label} href={item.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</Link>)}</nav>
            <ButtonLink href={copy.loginHref} variant="outline" className="mt-7 w-full" onClick={() => setMenuOpen(false)}>{copy.login}</ButtonLink>
            <ButtonLink href="/workshops" className="mt-3 w-full" onClick={() => setMenuOpen(false)}>{copy.exploreWorkshops} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

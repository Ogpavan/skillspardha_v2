"use client";

import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { buttonClassName } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import content from "@/data/home-content.json";

function LoginButton() {
  const copy = content.header;
  return <a href={copy.loginHref} className="text-sm font-semibold text-primary">{copy.login}</a>;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content.header;
  return (
    <header className="site-header">
      <div className="container-width flex h-[76px] items-center justify-between gap-5">
        <a href="/" className="brand-mark" aria-label={copy.homeAriaLabel}><span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span><span>{content.site.brandStart}<span>{content.site.brandEnd}</span></span></a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label={copy.primaryNavLabel}>{copy.navigation.map((item) => <a key={item.label} href={item.href} className="nav-link">{item.label}</a>)}</nav>
        <div className="hidden items-center gap-6 sm:flex"><LoginButton /><a href="/workshops" className={buttonClassName("primary", "min-h-10 px-4 py-2.5 text-xs")}>{copy.exploreWorkshops} <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border lg:hidden" aria-label={copy.mobileOpen}><Menu size={20} /></SheetTrigger>
          <SheetContent>
            <SheetTitle className="mt-2 text-xl font-bold tracking-tight">{content.site.name}</SheetTitle>
            <SheetDescription className="mt-2 text-xs text-muted">{copy.mobileDescription}</SheetDescription>
            <nav className="mt-8" aria-label={copy.mobileNavLabel}>{copy.navigation.map((item, index) => <a key={item.label} href={item.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}</nav>
            <a href={copy.loginHref} className={buttonClassName("outline", "mt-7 w-full")} onClick={() => setMenuOpen(false)}>{copy.login}</a>
            <a href="/workshops" className={buttonClassName("primary", "mt-3 w-full")} onClick={() => setMenuOpen(false)}>{copy.exploreWorkshops} <ArrowUpRight size={16} aria-hidden="true" /></a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

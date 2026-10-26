"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import content from "@/data/home-content.json";

const copy = content.hero;

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <Image src="/images/cyber-hackathon-award-presentation.webp" alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" />{copy.eyebrow} <i>/</i> {copy.eyebrowTail}</p>
          <h1 className="hero-title">{copy.sloganStart[0]}<br />{copy.sloganStart[1]}<br /><span className="hero-title-accent">{copy.sloganEndings[0]}<span className="hero-period">.</span></span></h1>
          <p className="hero-description">{copy.description}</p>
          <div className="hero-actions">
            <ButtonLink href="#workshops" className="hero-primary-cta">{copy.explore} <ArrowUpRight size={18} aria-hidden="true" /></ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

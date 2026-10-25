"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { useEffect, useState } from "react";
import content from "@/data/home-content.json";

const copy = content.hero;

export function HeroSection() {
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSloganIndex((index) => (index + 1) % copy.sloganEndings.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="container-width hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" />{copy.eyebrow} <i>—</i> {copy.eyebrowTail}</p>
          <h1 className="hero-title">{copy.sloganStart[0]}<br />{copy.sloganStart[1]}<br /><span key={sloganIndex} className="hero-title-accent hero-slogan-changing">{copy.sloganEndings[sloganIndex]}<span className="hero-period">.</span></span></h1>
          <p className="hero-description">{copy.description}</p>
          <div className="hero-actions">
            <ButtonLink href="#workshops" className="hero-primary-cta">{copy.explore} <ArrowUpRight size={18} aria-hidden="true" /></ButtonLink>
            <Link href="#calendar" className="hero-calendar-link">{copy.schedule} <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="hero-proof">{copy.proof.map((item) => <span key={item}><i /> {item}</span>)}</div>
        </div>
        <figure className="hero-visual-wrap">
          <div className="hero-image-frame">
            <Image src="/images/skillspardha-hero-workshop.webp" alt={copy.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" className="object-cover" />
            <div className="hero-caption"><span className="hero-caption-mark"><MoveUpRight size={20} aria-hidden="true" /></span><span><strong>{copy.captionTitle[0]}<br />{copy.captionTitle[1]}</strong><small>{copy.captionDescription}</small></span></div>
          </div>
        </figure>
      </div>
    </section>
  );
}

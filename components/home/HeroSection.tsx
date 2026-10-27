"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpenText, BriefcaseBusiness, Phone, UsersRound, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import content from "@/data/home-content.json";
import contact from "@/data/contact-page.json";

const copy = content.hero;
const highlights = [
  { key: "curriculum", label: <>Industry-aligned<br />curriculum</>, Icon: BookOpenText },
  { key: "workshops", label: <>Live workshops<br />&amp; projects</>, Icon: Zap },
  { key: "mentorship", label: <>Mentorship<br />&amp; guidance</>, Icon: UsersRound },
  { key: "career", label: <>Career<br />support</>, Icon: BriefcaseBusiness },
];

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" />{copy.eyebrow} <i>/</i> {copy.eyebrowTail}</p>
          <h1 className="hero-title">{copy.sloganStart[0]}<br /><span className="hero-title-final-line">{copy.sloganStart[1]} <span className="hero-title-accent">{copy.sloganEndings[0]}<span className="hero-period">.</span></span></span></h1>
          <p className="hero-description">{copy.description}</p>
          <div className="hero-actions">
            <ButtonLink href="#workshops" className="hero-primary-cta">{copy.explore} <ArrowUpRight size={18} aria-hidden="true" /></ButtonLink>
            <ButtonLink href={contact.details.items[0].href} variant="outline" className="hero-secondary-cta"><Phone size={17} aria-hidden="true" />{contact.details.items[0].label}: {contact.details.items[0].value}</ButtonLink>
          </div>
        </div>
        <div className="hero-collage" role="img" aria-label={copy.imageAlt}>
          <div className="hero-collage-backdrop" aria-hidden="true" />
          <div className="hero-photo hero-photo-top">
            <Image src="/images/skillspardha-hero-build-skills.webp" alt="" fill priority sizes="(max-width: 767px) 82vw, (max-width: 1100px) 44vw, 570px" className="object-cover" />
          </div>
          <div className="hero-photo hero-photo-middle">
            <Image src="/images/skillspardha-hero-learn-together.webp" alt="" fill sizes="(max-width: 767px) 78vw, (max-width: 1100px) 42vw, 540px" className="object-cover" />
          </div>
          <div className="hero-photo hero-photo-bottom">
            <Image src="/images/skillspardha-hero-grow-career.webp" alt="" fill sizes="(max-width: 767px) 76vw, (max-width: 1100px) 40vw, 510px" className="object-cover" />
          </div>
          <span className="hero-photo-label hero-photo-label-top">Build Skills</span>
          <span className="hero-photo-label hero-photo-label-middle">Learn Together</span>
          <span className="hero-photo-label hero-photo-label-bottom">Grow Your Career</span>
        </div>
      </div>
      <ul className="hero-highlights container-width" aria-label="How SkillSpardha helps you grow">
        {highlights.map(({ key, label, Icon }) => (
          <li key={key}>
            <span className="hero-highlight-icon"><Icon size={21} strokeWidth={2.2} aria-hidden="true" /></span>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

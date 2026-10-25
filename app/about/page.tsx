import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen, Code2, Layers, Trophy } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import about from "@/data/about-page.json";

export const metadata: Metadata = {
  title: "About SkillSpardha",
  description: "Learn how SkillSpardha connects practical technology learning with projects and real-world challenges.",
  alternates: { canonical: "https://skillspardha.com/about" },
};

const experienceIcons = [BookOpen, Code2, Trophy, Layers];

export default function AboutPage() {
  return (
    <InteriorLayout showBackLink={false}>
      <div className="about-page">
        <section className="about-page-hero">
          <div className="about-page-hero-heading">
            <p className="eyebrow">{about.hero.eyebrow}</p>
            <h1>{about.hero.title}</h1>
          </div>
          <div className="about-page-hero-copy">
            <div className="about-page-hero-text">
              {about.hero.paragraphs.map((paragraph, index) => <p className={index === 0 ? "about-page-hero-lead" : undefined} key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="about-page-hero-actions">
              <ButtonLink href="/workshops" className="!bg-accent !text-primary hover:!bg-[#e9f69a]">{about.hero.primaryCta} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
              <ButtonLink href="#approach" variant="outline" className="!border-primary !text-primary hover:!bg-[#f4f2ec]">{about.hero.secondaryCta} <ArrowRight size={16} aria-hidden="true" /></ButtonLink>
            </div>
          </div>
          <figure className="about-page-hero-image">
            <Image src="/images/skillspardha-hero-workshop.webp" alt={about.hero.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" className="object-cover" />
          </figure>
        </section>

        <section className="about-story-section" aria-labelledby="about-story-heading">
          <div className="about-story-heading">
            <p className="eyebrow">{about.story.eyebrow}</p>
            <h2 id="about-story-heading">{about.story.title}</h2>
          </div>
          <div className="about-story-copy">
            {about.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="about-story-callout">{about.story.callout}</p>
            <p>{about.story.closing}</p>
            <figure className="about-story-image">
              <Image src="/images/skillspardha-tech-accelerator.webp" alt={about.story.imageAlt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
            </figure>
          </div>
        </section>

        <section className="about-mission-section" aria-labelledby="about-mission-heading">
          <div className="about-section-heading">
            <p className="eyebrow">{about.missionVision.eyebrow}</p>
            <h2 id="about-mission-heading">{about.missionVision.title}</h2>
          </div>
          <div className="about-mission-grid">
            <article className="about-mission-card">
              <span className="about-card-index">01</span>
              <h3>{about.missionVision.missionTitle}</h3>
              <p>{about.missionVision.mission}</p>
            </article>
            <article className="about-mission-card about-mission-card-accent">
              <span className="about-card-index">02</span>
              <h3>{about.missionVision.visionTitle}</h3>
              <p>{about.missionVision.vision}</p>
            </article>
          </div>
        </section>

        <section id="approach" className="about-philosophy-section" aria-labelledby="about-philosophy-heading">
          <div className="about-section-heading about-section-heading-wide">
            <p className="eyebrow">{about.philosophy.eyebrow}</p>
            <h2 id="about-philosophy-heading">{about.philosophy.title}</h2>
            <p>{about.philosophy.intro}</p>
          </div>
          <ol className="about-philosophy-timeline">
            {about.philosophy.steps.map((step, index) => (
              <li key={step.title} className="about-philosophy-step">
                <span className="about-philosophy-number">0{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
          <p className="about-belief"><span>{about.philosophy.beliefLabel}</span>{about.philosophy.belief}</p>
        </section>

        <section className="about-experiences-section" aria-labelledby="about-experiences-heading">
          <div className="about-section-heading about-section-heading-wide">
            <p className="eyebrow">{about.experiences.eyebrow}</p>
            <h2 id="about-experiences-heading">{about.experiences.title}</h2>
            <p>{about.experiences.intro}</p>
          </div>
          <div className="about-experience-grid">
            {about.experiences.items.map((item, index) => {
              const Icon = experienceIcons[index];
              return <article className="about-experience-item" key={item.title}>
                <div className="about-experience-icon"><Icon size={21} aria-hidden="true" /></div>
                <span className="about-card-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>;
            })}
          </div>
        </section>

        <section className="about-audience-section" aria-labelledby="about-audience-heading">
          <div className="about-section-heading about-section-heading-wide">
            <p className="eyebrow">{about.audiences.eyebrow}</p>
            <h2 id="about-audience-heading">{about.audiences.title}</h2>
            <p>{about.audiences.intro}</p>
          </div>
          <div className="about-audience-grid">
            {about.audiences.items.map((item, index) => <article key={item.title} className="about-audience-item"><span className="about-card-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </section>

        <section className="about-difference-section" aria-labelledby="about-difference-heading">
          <div className="about-difference-title">
            <p className="eyebrow">{about.difference.eyebrow}</p>
            <h2 id="about-difference-heading">{about.difference.title}</h2>
            <p>{about.difference.intro}</p>
          </div>
          <div className="about-difference-list">
            {about.difference.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
          </div>
        </section>

        <section className="about-community-section" aria-labelledby="about-community-heading">
          <figure className="about-community-image">
            <Image src="/images/skillspardha-collaboration.webp" alt={about.community.imageAlt} fill sizes="(max-width: 900px) 100vw, 48vw" className="object-cover" />
          </figure>
          <div className="about-community-copy">
            <p className="eyebrow">{about.community.eyebrow}</p>
            <h2 id="about-community-heading">{about.community.title}</h2>
            {about.community.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ButtonLink href="/mentors" variant="text" className="mt-5 px-0">{about.community.cta} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
          </div>
        </section>

        <section className="about-closing-section" aria-labelledby="about-closing-heading">
          <p className="eyebrow eyebrow-on-dark">{about.closing.eyebrow}</p>
          <h2 id="about-closing-heading">{about.closing.title}</h2>
          <p>{about.closing.text}</p>
          <p className="about-closing-tagline">{about.closing.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/workshops" className="!bg-accent !text-primary hover:!bg-[#e9f69a]">{about.closing.primaryCta} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
            <ButtonLink href="/workshops/7-day-technology-accelerator" variant="outline" className="!border-white/40 !text-white hover:!bg-white/10">{about.closing.secondaryCta} <ArrowRight size={16} aria-hidden="true" /></ButtonLink>
          </div>
        </section>
      </div>
    </InteriorLayout>
  );
}

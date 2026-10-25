import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { ButtonLink } from "@/components/ui/button";
import { CoursesCatalog } from "@/components/shared/CoursesCatalog";
import courses from "@/data/courses-page.json";

export const metadata: Metadata = {
  title: courses.meta.title,
  description: courses.meta.description,
  alternates: { canonical: "https://skillspardha.com/courses" },
  robots: { index: false },
};

export default function CoursesPage() {
  return (
    <InteriorLayout showBackLink={false}>
      <div className="courses-page">
        <section className="courses-hero" aria-labelledby="courses-page-heading">
          <div className="courses-hero-copy">
            <p className="eyebrow">{courses.hero.eyebrow}</p>
            <h1 id="courses-page-heading">{courses.hero.title}</h1>
            <p>{courses.hero.description}</p>
            <div className="courses-hero-actions">
              <ButtonLink href="#course-catalog" className="!bg-primary text-white hover:!bg-[#423853]">{courses.hero.primaryCta} <ArrowRight size={17} aria-hidden="true" /></ButtonLink>
              <ButtonLink href="/contact" variant="outline" className="!border-primary !text-primary hover:!bg-white">{courses.hero.secondaryCta} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
            </div>
          </div>
          <figure className="courses-hero-image">
            <Image src={courses.hero.image} alt={courses.hero.imageAlt} fill priority sizes="(max-width: 850px) 100vw, 46vw" className="object-cover" />
          </figure>
        </section>

        <CoursesCatalog courses={courses.courses} copy={courses.catalog} />

        <section className="courses-guidance" aria-labelledby="courses-guidance-heading">
          <div>
            <p className="eyebrow eyebrow-on-dark">{courses.guidance.eyebrow}</p>
            <h2 id="courses-guidance-heading">{courses.guidance.title}</h2>
            <p>{courses.guidance.description}</p>
          </div>
          <ButtonLink href="/contact" className="!bg-accent !text-primary hover:!bg-[#e9f69a]">{courses.guidance.cta} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
        </section>
      </div>
    </InteriorLayout>
  );
}

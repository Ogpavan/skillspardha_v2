import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { ButtonLink } from "@/components/ui/button";
import program from "@/data/technology-accelerator.json";
import pageCopy from "@/data/workshops-page.json";

export const metadata: Metadata = {
  title: `${program.title} | SkillSpardha Workshops`,
  description: program.listingIntro,
  alternates: { canonical: "https://skillspardha.com/workshops" },
  robots: { index: false },
};

export default function WorkshopsPage() {
  return (
    <InteriorLayout showBackLink={false}>
      <div className="workshops-upcoming-page">
        <article className="workshops-upcoming-card">
          <div className="workshops-upcoming-copy">
            <p className="eyebrow">{program.upcomingLabel}</p>
            <h1>{program.title}</h1>
            <p className="workshops-upcoming-description">{program.listingIntro}</p>
            <div className="workshops-upcoming-date">
              <CalendarDays size={20} aria-hidden="true" />
              <span>
                <small>{program.dateLabel}</small>
                <strong>{program.dateRange}</strong>
              </span>
            </div>
            <ButtonLink href={`/workshops/${program.slug}`} className="workshops-upcoming-cta">
              {program.upcomingCta}<ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
          <figure className="workshops-upcoming-image">
            <Image src={program.image} alt={program.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 48vw" className="object-cover" />
          </figure>
        </article>

        <section className="workshop-sample-section" aria-labelledby="workshop-sample-heading">
          <header className="workshop-sample-heading">
            <p className="eyebrow">{pageCopy.sampleSection.eyebrow}</p>
            <h2 id="workshop-sample-heading">{pageCopy.sampleSection.title}</h2>
            <p>{pageCopy.sampleSection.description}</p>
          </header>
          <div className="workshop-sample-grid">
            {pageCopy.sampleSection.items.map((item, index) => (
              <article className="workshop-sample-card" key={item.title}>
                <div className="workshop-sample-image">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 639px) 100vw, (max-width: 900px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="workshop-sample-card-body">
                  <div className="workshop-sample-card-top">
                    <span>{pageCopy.sampleSection.sampleLabel}</span>
                    <strong>0{index + 1}</strong>
                  </div>
                  <p className="workshop-sample-category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p className="workshop-sample-description">{item.description}</p>
                  <p className="workshop-sample-details">{pageCopy.sampleSection.detailsLabel}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </InteriorLayout>
  );
}

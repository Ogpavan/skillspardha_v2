import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";
import program from "@/data/technology-accelerator.json";

export function UpcomingWorkshops() {
  const copy = content.upcoming;
  return (
    <section id="workshops" className="section-pad bg-[#f0eee7]">
      <div className="container-width">
        <Reveal className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="section-title">{copy.title}</h2>
          <ButtonLink href="/workshops" className="shrink-0">{copy.viewAll} <ArrowUpRight className="size-4" aria-hidden="true" /></ButtonLink>
        </Reveal>
        <Reveal className="mb-8" delay={0.08}>
          <article className="accelerator-preview">
            <div className="accelerator-preview-copy">
              <p className="eyebrow">{program.eyebrow}</p>
              <h3>{program.title}</h3>
              <p>{program.listingIntro}</p>
              <div className="accelerator-preview-facts">
                <span><strong>{program.registrationFee}</strong><small>{program.feeLabel}</small></span>
                <span><strong>{program.duration}</strong><small>{program.durationLabel}</small></span>
                <span><strong>{program.dailyTime}</strong><small>{program.dailyTimeLabel}</small></span>
              </div>
              <p className="accelerator-preview-dates">{program.dateLabel}: <strong>{program.shortDateRange}</strong></p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={`/workshops/${program.slug}`} variant="outline">{program.upcomingCta} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
                <ButtonLink href={`/workshops/${program.slug}#registration`}>{program.homeCta} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
              </div>
            </div>
            <div className="accelerator-preview-art">
              <Image src={program.image} alt={program.imageAlt} fill className="object-cover" sizes="(max-width: 900px) 100vw, 42vw" />
              <span>{program.trackCount}<small>{program.trackLabel}</small></span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

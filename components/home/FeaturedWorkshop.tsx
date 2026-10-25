import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock3, MonitorPlay, UserRound } from "lucide-react";
import { featuredWorkshop } from "@/data/workshops";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function FeaturedWorkshop() {
  const copy = content.featured;
  return (
    <section className="section-pad bg-[#f6f4ee]">
      <div className="container-width">
        <Reveal className="feature-workshop overflow-hidden bg-[#eae7de]"><div className="grid lg:grid-cols-[1.1fr_0.9fr]"><div className="relative min-h-[320px] lg:min-h-[500px]"><Image src={featuredWorkshop.image} alt={copy.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" /></div><div className="flex flex-col justify-center bg-[#eae7de] p-8 sm:p-12 lg:p-16"><p className="eyebrow">{copy.eyebrow}</p><h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#201c31] sm:text-5xl">{copy.title}</h2><p className="mt-5 max-w-md text-[16px] leading-7 text-[#655f58]">{copy.description}</p><div className="mt-8 grid gap-4 border-y border-[#cfcac0] py-5 text-sm text-[#655f58] sm:grid-cols-2"><span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-[#2d265b]" aria-hidden="true" />{copy.date}</span><span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-[#2d265b]" aria-hidden="true" />{copy.time}</span><span className="inline-flex items-center gap-2"><UserRound className="size-4 text-[#2d265b]" aria-hidden="true" />{copy.mentor}</span><span className="inline-flex items-center gap-2"><MonitorPlay className="size-4 text-[#2d265b]" aria-hidden="true" />{copy.format}</span></div><div className="mt-8 flex flex-wrap gap-3"><ButtonLink href={`/workshops/${featuredWorkshop.slug}`}>{copy.reserve} <ArrowUpRight className="size-4" aria-hidden="true" /></ButtonLink><ButtonLink href={`/workshops/${featuredWorkshop.slug}`} variant="text" className="px-0">{copy.details}</ButtonLink></div></div></div></Reveal>
      </div>
    </section>
  );
}

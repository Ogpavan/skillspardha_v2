import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mentors } from "@/data/mentors";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MentorCard } from "@/components/shared/MentorCard";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function MentorsSection() {
  const copy = content.mentors;
  return (
    <section id="mentors" className="section-pad bg-surface-lavender">
      <div className="container-width"><Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><Link href="#about" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#2d265b] hover:text-[#51466f]">{copy.link} <ArrowUpRight className="size-4" aria-hidden="true" /></Link></Reveal><p className="sample-note mt-5">{copy.note}</p><div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">{mentors.map((mentor, index) => <Reveal key={mentor.slug} delay={index * 0.05}><MentorCard mentor={mentor} /></Reveal>)}</div></div>
    </section>
  );
}

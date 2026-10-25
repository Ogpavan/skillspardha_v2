import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workshops } from "@/data/workshops";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WorkshopScheduleRow } from "@/components/shared/WorkshopScheduleRow";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function WorkshopCalendar() {
  const copy = content.calendar;
  return (
    <section id="calendar" className="section-pad bg-surface-apricot">
      <div className="container-width grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20"><Reveal><SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><Link href="#workshops" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2d265b] hover:text-[#51466f]">{copy.viewAll} <ArrowUpRight className="size-4" aria-hidden="true" /></Link></Reveal><Reveal delay={0.08}><div>{workshops.slice(0, 3).map((workshop) => <WorkshopScheduleRow key={workshop.id} workshop={workshop} />)}<div className="border-t border-[#d8d4cc]" /></div></Reveal></div>
    </section>
  );
}

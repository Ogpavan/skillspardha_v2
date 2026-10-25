import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Workshop } from "@/data/workshops";
import content from "@/data/home-content.json";

export function WorkshopScheduleRow({ workshop }: { workshop: Workshop }) {
  const copy = content.calendar;
  return (
    <article className="group grid gap-4 border-t border-[#d8d4cc] py-5 md:grid-cols-[94px_1fr_auto] md:items-center md:gap-8">
      <div className="flex items-baseline gap-2 md:block">
        <p className="text-2xl font-semibold tracking-[-0.035em] text-[#2d265b]">{workshop.dateShort.split(" ")[0]}</p>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#827b72]">{workshop.dateShort.split(" ")[1]}</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-center sm:gap-6">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#201c31]"><Link href={`/workshops/${workshop.slug}`} className="transition-colors group-hover:text-[#51466f]">{workshop.title}</Link></h3>
          <p className="mt-1 text-sm text-[#77716a]">{workshop.category} <span className="mx-2 text-[#b1aaa1]">/</span> {workshop.mode}</p>
        </div>
        <div className="text-sm text-[#77716a] sm:text-right"><p className="font-semibold text-[#201c31]">{workshop.time}</p><p>{workshop.duration}</p></div>
      </div>
      <Link href={`/workshops/${workshop.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d265b] transition-colors hover:text-[#51466f]">{copy.viewWorkshop} <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
    </article>
  );
}

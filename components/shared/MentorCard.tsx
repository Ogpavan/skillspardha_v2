import Link from "next/link";
import type { Mentor } from "@/data/mentors";
import { ArrowUpRight } from "lucide-react";

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <article className="h-full">
      <Link href={`/mentors/${mentor.slug}`} aria-label={`View ${mentor.name}'s mentor profile`} className="group flex h-full min-h-[240px] flex-col border border-[#d8d4cc] border-t-[3px] border-t-primary bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgb(32_28_49_/_8%)]">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Mentor profile</span>
          <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </div>
        <div className="mt-auto pt-9">
          <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#201c31]">{mentor.name}</h3>
          <p className="mt-1 text-sm text-[#77716a]">{mentor.role}</p>
          <p className="mt-4 border-t border-[#e5e2dc] pt-3 text-xs leading-5 text-muted">{mentor.specialization}</p>
        </div>
      </Link>
    </article>
  );
}

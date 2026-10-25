import Image from "next/image";
import Link from "next/link";
import type { Mentor } from "@/data/mentors";
import { ArrowUpRight } from "lucide-react";
import content from "@/data/home-content.json";

export function MentorCard({ mentor }: { mentor: Mentor }) {
  const copy = content.mentors;
  return (
    <article className="group">
      <Link href={`/mentors/${mentor.slug}`} className="mentor-photo relative block aspect-[0.86] overflow-hidden bg-[#dedbd2]" aria-label={copy.meet.replace("{name}", mentor.name)}>
        <Image src={mentor.image} alt={copy.imageAlt.replace("{name}", mentor.name)} fill className="object-cover transition duration-500 group-hover:scale-[1.02]" sizes="(max-width: 768px) 45vw, 25vw" />
        <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-[#d9eb72] text-[#2d265b] opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight className="size-4" aria-hidden="true" /></span>
      </Link>
      <div className="mt-4 border-t border-[#d8d4cc] pt-4">
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#201c31]">{mentor.name}</h3>
          <p className="mt-1 text-sm text-[#77716a]">{mentor.role}</p>
        </div>
        <p className="mt-3 text-xs leading-5 text-muted">{mentor.specialization}</p>
      </div>
    </article>
  );
}

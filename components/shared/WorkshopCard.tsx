import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Workshop } from "@/data/workshops";
import { ButtonLink } from "@/components/ui/button";
import content from "@/data/home-content.json";

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const copy = content.workshopCard;
  return (
    <article className="workshop-card">
      <Link href={`/workshops/${workshop.slug}`} className="workshop-card-image" aria-label={copy.view.replace("{title}", workshop.title)}>
        <Image src={workshop.image} alt={copy.imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1100px) 48vw, 280px" />
        <span className="workshop-date"><strong>{workshop.dateShort.split(" ")[0]}</strong>{workshop.dateShort.split(" ")[1]}</span>
      </Link>
      <div className="workshop-card-body">
        <p className="workshop-category">{workshop.category}</p>
        <h3><Link href={`/workshops/${workshop.slug}`}>{workshop.title}</Link></h3>
        <p className="workshop-format">{workshop.mode} <span>·</span> {workshop.duration}</p>
        <div className="workshop-details">
          <p><span>{copy.startsAt}</span><strong>{workshop.time} {copy.timeZone}</strong></p>
          <p><span>{copy.yourMentor}</span><strong>{workshop.mentor}</strong></p>
        </div>
        <div className="workshop-card-actions">
          <ButtonLink href={`/workshops/${workshop.slug}`}>{copy.preview} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
          <span className="workshop-price">{workshop.price}<small>{copy.sampleFee}</small></span>
        </div>
        <Link href={`/workshops/${workshop.slug}`} className="workshop-detail-link">{copy.details} <ArrowUpRight size={14} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

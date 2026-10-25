import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import content from "@/data/home-content.json";

const copy = content.ticker;

export function AnnouncementTicker() {
  const announcements = copy.announcements;
  return (
    <section className="ticker-section" aria-label={copy.ariaLabel}>
      <div className="ticker-track">
        {[...announcements, ...announcements].map(({ title, meta, href }, index) => <Link href={href} key={`${title}-${index}`} className="ticker-item" aria-hidden={index >= announcements.length ? true : undefined} tabIndex={index >= announcements.length ? -1 : undefined}><span className="ticker-dot" />{title}<span className="ticker-meta">{meta}</span><ArrowUpRight className="size-4" aria-hidden="true" /></Link>)}
      </div>
    </section>
  );
}

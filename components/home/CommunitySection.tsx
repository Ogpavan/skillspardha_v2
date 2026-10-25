import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function CommunitySection() {
  const copy = content.community;
  return (
    <section className="section-pad bg-surface-sage">
      <div className="container-width grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20"><Reveal><p className="eyebrow">{copy.eyebrow}</p><h2 className="section-title mt-4 max-w-xl">{copy.title}</h2><p className="section-description mt-5 max-w-xl">{copy.description}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{copy.benefits.map((benefit) => <p key={benefit} className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d265b]"><Check className="size-4 text-[#74842a]" aria-hidden="true" />{benefit}</p>)}</div><ButtonLink href="#newsletter" variant="text" className="mt-8 px-0">{copy.link} <ArrowUpRight className="size-4" aria-hidden="true" /></ButtonLink></Reveal><Reveal delay={0.08}><div className="community-image relative aspect-[1.1] overflow-hidden"><Image src="/images/skillspardha-hero.webp" alt={copy.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute bottom-4 left-4 bg-[#d9eb72] px-4 py-3 text-sm font-semibold text-[#2d265b]">{copy.caption}</div></div></Reveal></div>
    </section>
  );
}

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function AboutSection() {
  const copy = content.about;
  return (
    <section id="about" className="section-pad bg-surface-apricot">
      <div className="container-width grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal className="relative"><div className="about-image-wrap"><Image src="/images/hackathon-workshop-collaboration.webp" alt={copy.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" /></div><div className="about-image-caption"><span className="caption-line" />{copy.imageCaption}</div></Reveal>
        <Reveal delay={0.08}><p className="eyebrow">{copy.eyebrow}</p><h2 className="section-title mt-4 max-w-xl">{copy.title}</h2><p className="section-description mt-5 max-w-xl">{copy.description}</p><div className="mt-8 border-t border-[#d8d4cc]">{copy.principles.map((principle) => <div key={principle} className="flex items-center gap-3 border-b border-[#d8d4cc] py-4 text-[15px] font-semibold text-[#2d265b]"><Check className="size-4 text-[#74842a]" aria-hidden="true" />{principle}</div>)}</div><ButtonLink href="#categories" variant="text" className="mt-7 px-0">{copy.link} <ArrowUpRight className="size-4" aria-hidden="true" /></ButtonLink></Reveal>
      </div>
    </section>
  );
}

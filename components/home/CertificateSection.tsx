import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function CertificateSection() {
  const copy = content.certificates;
  return (
    <section id="certificates" className="section-pad bg-[#2d265b] text-white">
      <div className="container-width grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20"><Reveal><p className="eyebrow eyebrow-on-dark">{copy.eyebrow}</p><h2 className="section-title mt-4 max-w-lg text-white">{copy.title}</h2><p className="mt-5 max-w-md text-[16px] leading-7 text-[#c8c3d3]">{copy.description}</p><ButtonLink href="#workshops" variant="light" className="mt-8">{copy.explore} <ArrowUpRight className="size-4" aria-hidden="true" /></ButtonLink></Reveal><Reveal delay={0.08}><div className="certificate-paper"><div className="flex items-center justify-between"><div className="certificate-brand"><span className="brand-symbol brand-symbol-small"><span /><span /><span /></span><span>{content.site.name}</span></div><BadgeCheck className="size-7 text-primary" aria-hidden="true" /></div><div className="mt-10 text-center"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8f89a6]">{copy.sample}</p><p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#2d265b]">{copy.name}</p><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#77716a]">{copy.completion}</p><p className="mt-3 text-lg font-semibold text-[#2d265b]">{copy.workshop}</p></div><div className="mt-10 flex items-end justify-between border-t border-[#d9d5e1] pt-4 text-[10px] uppercase tracking-[0.13em] text-[#8f89a6]"><span>{copy.issuer}</span><span>{copy.date}</span></div></div></Reveal></div>
    </section>
  );
}

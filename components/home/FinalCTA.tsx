import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import content from "@/data/home-content.json";

export function FinalCTA() {
  const copy = content.finalCta;
  return (
    <section className="bg-background py-12 sm:py-20">
      <div className="container-width rounded-xl bg-accent p-7 sm:p-12 lg:p-16">
        <p className="eyebrow">{copy.eyebrow}</p>
        <div className="mt-5 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <h2 className="max-w-xl text-[38px] font-semibold leading-[1.08] tracking-[-0.045em] text-primary sm:text-5xl lg:text-[58px]">{copy.title}</h2>
          <div><p className="max-w-md text-base leading-7 text-[#444b2c]">{copy.description}</p><div className="mt-7 flex flex-wrap gap-4"><ButtonLink href="#workshops">{copy.explore} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink><ButtonLink href="#calendar" variant="text" className="px-0">{copy.calendar}</ButtonLink></div></div>
        </div>
      </div>
    </section>
  );
}

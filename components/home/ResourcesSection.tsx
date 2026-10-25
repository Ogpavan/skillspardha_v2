import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resources } from "@/data/resources";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function ResourcesSection() {
  const copy = content.resources;
  return (
    <section id="resources" className="section-pad bg-[#fbfaf7]">
      <div className="container-width"><Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><Link href="/blog" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#2d265b] hover:text-[#51466f]">{copy.viewAll} <ArrowUpRight className="size-4" aria-hidden="true" /></Link></Reveal><p className="mt-6 text-xs text-[#8a847d]">{copy.note}</p><div className="mt-8 grid gap-6 md:grid-cols-3">{resources.map((resource, index) => <Reveal key={resource.slug} delay={index * 0.06}><article className="group"><Link href={`/blog/${resource.slug}`} className="relative block aspect-[1.38] overflow-hidden bg-[#eae7de]"><Image src={resource.image} alt={resource.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" /></Link><div className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a847d]">{resource.category}</div><h3 className="mt-3 text-[21px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#201c31]"><Link href={`/blog/${resource.slug}`} className="transition-colors group-hover:text-[#51466f]">{resource.title}</Link></h3><p className="mt-3 max-w-sm text-sm leading-6 text-[#77716a]">{resource.excerpt}</p></article></Reveal>)}</div></div>
    </section>
  );
}

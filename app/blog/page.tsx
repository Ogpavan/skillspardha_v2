import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { resources } from "@/data/resources";

export const metadata: Metadata = { title: "Learning Resources | SkillSpardha", description: "Practical reading on workshops, skills and learning through practice.", alternates: { canonical: "https://skillspardha.com/blog" } };
export default function BlogPage() {
  return <InteriorLayout><p className="eyebrow">Ideas for your next step</p><h1 className="section-title mt-4">Learning resources</h1><p className="section-description mt-5">Notes and practical guides for making more of the time you spend learning.</p><div className="mt-10 grid gap-8 md:grid-cols-3">{resources.map(resource => <article key={resource.slug}><Link href={`/blog/${resource.slug}`} className="relative block aspect-[1.4] overflow-hidden rounded-lg"><Image src={resource.image} alt="Illustrative SkillSpardha workshop" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></Link><p className="mt-4 text-xs text-muted">{resource.category} · {resource.date}</p><h2 className="mt-2 text-xl font-semibold tracking-tight"><Link href={`/blog/${resource.slug}`}>{resource.title}</Link></h2><p className="mt-2 text-sm leading-6 text-muted">{resource.excerpt}</p></article>)}</div></InteriorLayout>;
}

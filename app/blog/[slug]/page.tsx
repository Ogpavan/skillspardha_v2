import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { resources } from "@/data/resources";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { ButtonLink } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find(item => item.slug === slug);
  const title = resource ? `${resource.title} | SkillSpardha` : "Resource not found";
  const description = resource?.excerpt ?? "Learning resources from SkillSpardha.";
  const images = resource ? [`https://skillspardha.com${resource.image}`] : [];
  return { title, description, alternates: { canonical: `https://skillspardha.com/blog/${slug}` }, openGraph: { title, description, images }, twitter: { title, description, images } };
}
export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = resources.find(item => item.slug === slug);
  if (!resource) notFound();
  return <InteriorLayout><article className="mx-auto max-w-3xl"><p className="eyebrow">{resource.category}</p><h1 className="section-title mt-4">{resource.title}</h1><p className="section-description mt-6">{resource.excerpt}</p><p className="mt-5 text-xs text-muted">SkillSpardha editorial preview · {resource.date}</p><Image src={resource.image} alt="Illustrative practical learning workshop" width={1200} height={800} sizes="(max-width: 768px) 100vw, 768px" className="mt-8 aspect-video w-full rounded-xl object-cover" />{resource.sections.map(section => <section key={section.title} className="mt-10"><h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2><p className="mt-4 text-base leading-8 text-muted">{section.text}</p></section>)}<ButtonLink href="/workshops" className="mt-10">Explore practical workshops</ButtonLink></article></InteriorLayout>;
}

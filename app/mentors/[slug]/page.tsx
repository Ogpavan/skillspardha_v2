import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { mentors } from "@/data/mentors";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { ButtonLink } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mentor = mentors.find(item => item.slug === slug);
  const title = mentor ? `${mentor.name} — Sample Mentor | SkillSpardha` : "Mentor not found";
  const description = "Illustrative mentor profile for the SkillSpardha preview.";
  const images = mentor ? [`https://skillspardha.com${mentor.image}`] : [];
  return { title, description, robots: { index: false }, alternates: { canonical: `https://skillspardha.com/mentors/${slug}` }, openGraph: { title, description, images }, twitter: { title, description, images } };
}
export default async function MentorPage({ params }: Props) {
  const { slug } = await params;
  const mentor = mentors.find(item => item.slug === slug);
  if (!mentor) notFound();
  return <InteriorLayout><div className="grid items-center gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16"><Image src={mentor.image} alt="Generated sample mentor portrait" width={600} height={600} sizes="(max-width: 768px) 100vw, 40vw" className="w-full rounded-xl" /><div><p className="eyebrow">Illustrative mentor profile</p><h1 className="section-title mt-4">{mentor.name}</h1><p className="mt-4 text-xl">{mentor.role}</p><p className="mt-2 text-muted">{mentor.specialization}</p><p className="mt-7 max-w-lg leading-8 text-muted">This profile and portrait are placeholders for the SkillSpardha preview. Verified mentor biographies and teaching experience will be added before registration opens.</p><ButtonLink href="/workshops" className="mt-7">Explore workshop topics</ButtonLink></div></div></InteriorLayout>;
}

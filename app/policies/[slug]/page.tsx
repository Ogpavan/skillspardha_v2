import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorLayout } from "@/components/layout/InteriorLayout";

const policies: Record<string, string> = { privacy: "Privacy policy", terms: "Terms & conditions", refunds: "Refund policy" };
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: policies[slug] ? `${policies[slug]} | SkillSpardha` : "Policy not found", robots: { index: false } };
}
export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  const title = policies[slug];
  if (!title) notFound();
  return <InteriorLayout><p className="eyebrow">Platform information</p><h1 className="section-title mt-4">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">This policy is being prepared for the SkillSpardha launch. No workshop registrations, payments or newsletter subscriptions are currently being processed. The final policy will be published here before those services open.</p></InteriorLayout>;
}

import type { Metadata } from "next";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { MentorCard } from "@/components/shared/MentorCard";
import { mentors } from "@/data/mentors";

export const metadata: Metadata = { title: "Meet the Mentors | SkillSpardha", description: "Meet the sample mentor profiles in the SkillSpardha preview.", robots: { index: false } };
export default function MentorsPage() {
  return <InteriorLayout><p className="eyebrow">People who do the work</p><h1 className="section-title mt-4">Meet the mentors</h1><p className="section-description mt-5">Practitioners make a workshop concrete, generous and connected to the real world.</p><p className="sample-note mt-5">Sample mentor profiles. Verified teaching team details will be added before registration opens.</p><div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-4 md:gap-7">{mentors.map(mentor => <MentorCard key={mentor.slug} mentor={mentor} />)}</div></InteriorLayout>;
}

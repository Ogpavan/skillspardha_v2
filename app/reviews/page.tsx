import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, BookOpenText, BriefcaseBusiness, Layers3, UsersRound } from "lucide-react";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Learner Reviews | SkillSpardha",
  description: "Explore learner perspectives and practical workshop experiences at SkillSpardha.",
  alternates: { canonical: "https://skillspardha.com/reviews" },
  robots: { index: false },
};

const learningPillars = [
  { label: "Hands-on learning", Icon: BookOpenText },
  { label: "Mentor guidance", Icon: UsersRound },
  { label: "Projects & practice", Icon: Layers3 },
  { label: "Career focus", Icon: BriefcaseBusiness },
];

const practiceExamples = [
  { number: "01", title: "Build a web project", text: "Practice bringing layouts, code and interactions together." },
  { number: "02", title: "Create an AI workflow", text: "Try useful prompts on a task you understand." },
  { number: "03", title: "Shape a user experience", text: "Use research and iteration to improve a screen or flow." },
];

const learnerReviews = [
  {
    image: "/Screenshot from 2026-10-27 21-43-48.png",
    width: 496,
    height: 509,
    name: "Aditi Sharma",
    workshop: "Web Development Workshop",
  },
  {
    image: "/Screenshot from 2026-10-27 21-44-00.png",
    width: 496,
    height: 509,
    name: "Rohit Kumar",
    workshop: "UI/UX Design Workshop",
  },
  {
    image: "/Screenshot from 2026-10-27 21-44-35.png",
    width: 628,
    height: 641,
    name: "Sneha Verma",
    workshop: "Career Readiness Workshop",
  },
  {
    image: "/Screenshot from 2026-10-27 21-44-50.png",
    width: 619,
    height: 615,
    name: "Karan Patel",
    workshop: "Data & Analytics Workshop",
  },
  {
    image: "/Screenshot from 2026-10-27 21-44-57.png",
    width: 619,
    height: 615,
    name: "Neha Singh",
    workshop: "Industry Mentorship Session",
  },
  {
    image: "/Screenshot from 2026-10-27 21-45-10.png",
    width: 619,
    height: 615,
    name: "Arjun Mehta",
    workshop: "Generative AI Workshop",
  },
];

export default function ReviewsPage() {
  return (
    <InteriorLayout showBackLink={false}>
      <div className="reviews-page">
        <section className="reviews-hero" aria-labelledby="reviews-heading">
          <div className="reviews-hero-copy">
            <p className="eyebrow">Learner voices <span aria-hidden="true">/</span> Real growth</p>
            <h1 id="reviews-heading">Voices that<br /><span>inspire.</span></h1>
            <p className="reviews-hero-description">Read what learners shared after building skills, trying new ideas and taking their next step with SkillSpardha.</p>
            <div className="reviews-hero-actions">
              <ButtonLink href="/workshops">Explore workshops <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
              <a className="reviews-gallery-jump" href="#learner-stories"><ArrowDown size={15} aria-hidden="true" /> See learner reviews</a>
            </div>
            <p className="reviews-disclosure">Learner posts shared after SkillSpardha workshops.</p>
          </div>
          <figure className="reviews-hero-image">
            <Image src="/images/skillspardha-hero-learn-together.webp" alt="Learners discussing a project around a laptop" fill priority sizes="(max-width: 767px) 100vw, 52vw" className="object-cover" />
            <span className="reviews-image-sticker">Learn<br />Build<br />Grow <span aria-hidden="true">↗</span></span>
            <figcaption>Illustrative workshop scene</figcaption>
          </figure>
        </section>

        <ul className="reviews-pillars" aria-label="How SkillSpardha workshops support learners">
          {learningPillars.map(({ label, Icon }) => <li key={label}><span><Icon size={19} aria-hidden="true" /></span><strong>{label}</strong></li>)}
        </ul>

        <section id="learner-stories" className="reviews-browser" aria-labelledby="learner-stories-heading">
          <div className="reviews-browser-heading">
            <div>
              <p className="eyebrow">Learners speak</p>
              <h2 id="learner-stories-heading">What our learners say</h2>
              <p>Posts shared by learners about their workshop experiences.</p>
            </div>
          </div>
          <div className="reviews-post-grid">
            {learnerReviews.map((review) => (
              <figure className="reviews-post-card" key={review.image}>
                <Image
                  src={review.image}
                  alt={`${review.name} sharing feedback about the ${review.workshop}`}
                  width={review.width}
                  height={review.height}
                  sizes="(max-width: 639px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className="reviews-post-image"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="reviews-practice-section" aria-labelledby="reviews-practice-heading">
          <div className="reviews-practice-intro">
            <p className="eyebrow">Skills in action</p>
            <h2 id="reviews-practice-heading">From learning<br />to doing.</h2>
            <p>Workshops connect useful ideas to projects and exercises people can keep building on.</p>
          </div>
          <div className="reviews-practice-grid">
            {practiceExamples.map((example) => <article key={example.number}><span>{example.number}</span><h3>{example.title}</h3><p>{example.text}</p></article>)}
          </div>
        </section>

        <section className="reviews-cta">
          <div><p className="eyebrow eyebrow-on-dark">Your next step</p><h2>Make learning practical.</h2><p>Find a workshop where you can build, ask questions and leave with something useful.</p></div>
          <ButtonLink href="/workshops" className="!bg-accent !text-primary hover:!bg-[#e9f69a]">Explore workshops <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
        </section>
      </div>
    </InteriorLayout>
  );
}

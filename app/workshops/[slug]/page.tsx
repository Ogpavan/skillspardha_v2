import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Award, BarChart3, Blocks, Bot, BrainCircuit, CalendarDays, Cloud, Code2, Layers, ShieldCheck, Trophy, Video } from "lucide-react";
import { workshops } from "@/data/workshops";
import { categories } from "@/data/categories";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { WorkshopCard } from "@/components/shared/WorkshopCard";
import { ButtonLink } from "@/components/ui/button";
import program from "@/data/technology-accelerator.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === program.slug) {
    return {
      title: `${program.title} | SkillSpardha`,
      description: program.detailIntro,
      alternates: { canonical: `https://skillspardha.com/workshops/${program.slug}` },
      robots: { index: false },
    };
  }
  const workshop = workshops.find(item => item.slug === slug);
  const category = categories.find(item => item.slug === slug);
  const title = workshop?.title ?? category?.name ?? "Workshop not found";
  const description = workshop ? `Preview the ${workshop.title} workshop on SkillSpardha. Registration details will be confirmed before launch.` : `Explore ${title} workshops at SkillSpardha.`;
  const images = workshop ? [{ url: `https://skillspardha.com${workshop.image}`, alt: title }] : [];
  return { title: `${title} | SkillSpardha`, description, alternates: { canonical: `https://skillspardha.com/workshops/${slug}` }, openGraph: { title, description, images }, twitter: { title, description, images: images.map(image => image.url) }, robots: { index: false } };
}

export default async function WorkshopPage({ params }: Props) {
  const { slug } = await params;
  if (slug === program.slug) {
    const snapshot = [
      { value: program.duration, label: program.durationLabel },
      { value: program.trackCount, label: program.trackLabel },
      { value: program.certificateCount, label: program.certificateLabel },
      { value: program.prizePool, label: program.prizeLabel },
      { value: program.dailyTime, label: program.dailyTimeLabel },
    ];
    const journeyIcons = [Code2, BrainCircuit, Blocks, Layers, BarChart3];
    const technologyIcons = [Code2, Layers, Bot, BrainCircuit, ShieldCheck, Cloud, BarChart3];
    const offeringIcons = [Video, Code2, Layers, Trophy, Award];

    return (
      <InteriorLayout showBackLink={false}>
        <article>
          <section className="accelerator-hero">
            <div className="accelerator-hero-copy">
              <p className="eyebrow eyebrow-on-dark">{program.heroEyebrow}</p>
              <h1><span>{program.heroTitleLines[0]}</span><span>{program.heroTitleLines[1]}</span></h1>
              <p className="accelerator-hero-summary">{program.summary}</p>
              <div className="accelerator-hero-tags">
                {[{ value: program.duration, label: program.durationLabel }, { value: program.trackCount, label: program.trackLabel }, { value: program.dailyTime, label: program.dailyTimeLabel }].map((item) => <span key={item.label}><strong>{item.value}</strong><small>{item.label}</small></span>)}
              </div>
              <div className="accelerator-hero-actions mt-5 flex flex-wrap gap-3">
                <ButtonLink href="#registration" variant="light" className="!bg-accent !text-primary hover:!bg-[#e9f69a]"><span className="accelerator-enroll-desktop">{program.enrollCta}</span><span className="accelerator-enroll-mobile">{program.enrollCta} · {program.registrationFee}</span> <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
                <ButtonLink href="#accelerator-curriculum" variant="outline" className="!border-white/40 !text-white hover:!bg-white/10">{program.curriculumCta} <ArrowRight size={16} aria-hidden="true" /></ButtonLink>
              </div>
              <p className="accelerator-hero-price"><strong>{program.registrationFee}</strong><span>{program.feeLabel}</span></p>
            </div>
            <figure className="accelerator-hero-art">
              <Image src={program.image} alt={program.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
              <div className="accelerator-hero-stamp"><strong>{program.trackCount}</strong><span>{program.trackLabel}</span></div>
              <figcaption className="accelerator-hero-date"><span>{program.dateLabel}</span><strong>{program.shortDateRange}</strong></figcaption>
            </figure>
          </section>

          <section className="mt-12 rounded-xl bg-primary p-6 text-white sm:mt-14 sm:p-8" aria-labelledby="accelerator-snapshot">
            <h2 id="accelerator-snapshot" className="eyebrow eyebrow-on-dark">{program.factsHeading}</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
              {snapshot.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-bold tracking-tight text-accent">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#d2cede]">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-[#514a70] pt-5 text-sm text-[#d2cede]">{program.dateLabel}: <strong className="font-semibold text-white">{program.dateRange}</strong></p>
          </section>

          <section className="mt-14 sm:mt-16" aria-labelledby="accelerator-journey">
            <h2 id="accelerator-journey" className="eyebrow">{program.journeyHeading}</h2>
            <ol className="program-journey-grid mt-6 grid gap-3 sm:grid-cols-5">
              {program.journey.map((stage, index) => (
                <li key={stage} className="program-journey-step relative rounded-lg border border-border bg-white p-5">
                  {(() => { const Icon = journeyIcons[index]; return <Icon className="size-5 text-primary" aria-hidden="true" />; })()}
                  <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.12em] text-muted">0{index + 1}</span>
                  <p className="mt-1 text-lg font-semibold text-primary">{stage}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="accelerator-curriculum" className="mt-14 scroll-mt-24 sm:mt-16" aria-labelledby="curriculum-heading">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><p className="eyebrow">{program.duration}</p><h2 id="curriculum-heading" className="section-title mt-3">{program.curriculumHeading}</h2></div>
              <p className="max-w-sm text-sm leading-6 text-muted">{program.scopeDescription}</p>
            </div>
            <ol className="accelerator-timeline mt-8">
              {program.days.map((item, index) => {
                const Icon = technologyIcons[index];
                return <li key={item.day} className="accelerator-timeline-item">
                  <article className="accelerator-roadmap-card">
                    <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{item.day}</p><h3 className="mt-2 text-xl font-semibold tracking-tight text-primary">{item.technology}</h3></div><span className="grid size-12 shrink-0 place-items-center rounded-xl bg-surface-lavender text-primary"><Icon className="size-5" aria-hidden="true" /></span></div>
                    <div className="mt-5 border-t border-border pt-4"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">{program.outputColumn}</p><p className="mt-1 text-sm font-semibold text-foreground">{item.output}</p></div>
                  </article>
                  <span className="accelerator-timeline-node" aria-hidden="true">0{index + 1}</span>
                </li>;
              })}
            </ol>
          </section>

          <section className="mt-14 grid overflow-hidden rounded-xl bg-surface-lavender md:grid-cols-2 sm:mt-16">
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="eyebrow">{program.projectBadge}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-primary">{program.projectTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{program.projectDescription}</p>
              <div className="mt-6 flex flex-wrap gap-2">{program.projectTechnologies.map((technology) => <span key={technology} className="rounded-full border border-[#c8c1d8] px-3 py-1 text-xs font-semibold text-primary">{technology}</span>)}</div>
            </div>
            <div className="relative min-h-[300px] bg-primary p-7 text-white sm:p-10">
              <div className="absolute inset-0 opacity-35"><Image src={program.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
              <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between rounded-lg border border-white/30 bg-[#201c31]/65 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{program.projectBadge}</span><Bot className="size-6 text-accent" aria-hidden="true" /></div>
                <div><div className="mb-4 flex flex-wrap gap-2">{program.projectTechnologies.map((technology) => <span key={technology} className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white">{technology}</span>)}</div><p className="text-lg font-semibold leading-snug">{program.projectTitle}</p></div>
              </div>
            </div>
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center sm:mt-16" aria-labelledby="accelerator-schedule">
            <div className="rounded-xl bg-accent p-7 sm:p-9">
              <CalendarDays className="size-6 text-primary" aria-hidden="true" />
              <h2 id="accelerator-schedule" className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-primary">{program.scheduleHeading}</h2>
              <p className="mt-4 text-4xl font-bold tracking-tight text-primary">{program.scheduleBadge}</p>
              <p className="mt-1 text-xs font-semibold text-primary/70">{program.scheduleBadgeLabel}</p>
            </div>
            <div>
              <div className="grid gap-4 sm:grid-cols-2">{program.sessionBlocks.map((item) => <div key={item.label} className="rounded-xl border border-border bg-white p-6"><p className="text-3xl font-bold tracking-tight text-primary">{item.duration}</p><p className="mt-2 text-sm font-semibold text-foreground">{item.label}</p></div>)}</div>
              <p className="mt-4 rounded-lg border-l-4 border-[#d9a343] bg-[#fff8e8] p-4 text-sm leading-6 text-[#65542f]">{program.scheduleDescription} {program.sessionNote}</p>
            </div>
          </section>

          <section className="mt-14 sm:mt-16" aria-labelledby="accelerator-offerings">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 id="accelerator-offerings" className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-primary sm:text-3xl">{program.offeringsHeading}</h2>
              <p className="max-w-md text-sm leading-6 text-muted">{program.offeringsIntro}</p>
            </div>
            <div className="program-offerings-grid mt-7">
              {program.offerings.map((offering, index) => {
                const Icon = offeringIcons[index];
                return <article key={offering.title} className={`program-offering-card program-offering-card-${index + 1}`}>
                  <span className="program-offering-icon"><Icon className="size-5" aria-hidden="true" /></span>
                  <span className="program-offering-number">0{index + 1}</span>
                  <h3>{offering.title}</h3>
                  <p>{offering.text}</p>
                </article>;
              })}
            </div>
          </section>

          <aside id="registration" className="program-enrollment-panel mt-14 scroll-mt-24 sm:mt-16">
            <div className="program-enrollment-copy">
              <span className="program-enrollment-status"><i />{program.registrationStatusLabel}</span>
              <h2>{program.registrationHeading}</h2>
              <p>{program.registrationStatus}</p>
            </div>
            <div className="program-enrollment-price">
              <span>{program.feeLabel}</span>
              <strong>{program.registrationFee}</strong>
              <p>{program.dateLabel}: {program.shortDateRange}</p>
              <ButtonLink href="/#newsletter" variant="light" className="mt-5 w-full">{program.updatesCta} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
            </div>
          </aside>
        </article>
      </InteriorLayout>
    );
  }
  const workshop = workshops.find(item => item.slug === slug);
  if (!workshop) {
    const category = categories.find(item => item.slug === slug);
    if (!category) notFound();
    const matches = workshops.filter(item => item.categorySlug === slug);
    return <InteriorLayout><p className="eyebrow">Explore by category</p><h1 className="section-title mt-4">{category.name} workshops</h1><p className="section-description mt-5">{category.detail}. Explore the sample sessions below.</p><p className="sample-note mt-5">Preview content · Session details will be confirmed before registration opens.</p>{matches.length ? <div className="workshop-grid">{matches.map(item => <WorkshopCard key={item.id} workshop={item} />)}</div> : <div className="my-10 border-y border-border py-10"><p>Workshops in this category are being planned.</p><ButtonLink href="/workshops" className="mt-6">Explore available preview workshops</ButtonLink></div>}</InteriorLayout>;
  }
  return (
    <InteriorLayout>
      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div><Link href={`/workshops/${workshop.categorySlug}`} className="eyebrow">{workshop.category}</Link><h1 className="section-title mt-4">{workshop.title}</h1><p className="section-description mt-5">A practical introduction with guided exercises, questions and time to apply what you learn.</p><div className="relative mt-8 aspect-[1.55] overflow-hidden rounded-xl"><Image src={workshop.image} alt="Illustrative collaborative workshop setting" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div><h2 className="mt-10 text-2xl font-semibold tracking-tight">Bring a laptop and your curiosity.</h2><p className="mt-4 max-w-xl leading-8 text-muted">The planned format combines a mentor demonstration, a guided exercise and a discussion of your work. The final agenda, prerequisites and resource list will be published when this workshop opens.</p></div>
        <aside className="rounded-xl border border-border bg-white p-7 sm:p-9">
          <p className="eyebrow">Workshop preview</p><dl className="mt-5 divide-y divide-border text-sm">{[["Date", workshop.date], ["Time", workshop.time + " IST"], ["Duration", workshop.duration], ["Format", workshop.mode], ["Sample mentor", workshop.mentor], ["Sample fee", workshop.price]].map(([label, value]) => <div key={label} className="flex justify-between gap-5 py-4"><dt className="text-muted">{label}</dt><dd className="text-right font-semibold">{value}</dd></div>)}</dl>
          <div id="registration" className="mt-6 border-t border-border pt-6"><h2 className="text-lg font-semibold">Registration opens at launch.</h2><p className="mt-3 text-sm leading-7 text-muted">This is a sample workshop. Dates, mentor assignments and prices are illustrative. No booking or payment is being accepted.</p><ButtonLink href="/#newsletter" className="mt-6 w-full">View workshop updates</ButtonLink></div>
        </aside>
      </div>
    </InteriorLayout>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import content from "@/data/home-content.json";

export function LearningOutcomes() {
  const copy = content.learningOutcomes;
  return (
    <section className="section-pad bg-[#eae7de]">
      <div className="container-width grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title mt-4">{copy.title}</h2>
          <p className="section-description mt-5">{copy.description}</p>
          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[#c9c4bb] pt-6">
            {copy.outcomes.map((outcome) => <li key={outcome} className="text-sm font-medium">{outcome}</li>)}
          </ul>
          <ButtonLink href="#workshops" variant="text" className="mt-7 px-0">{copy.link} <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
        </div>
        <figure className="project-showcase">
          <div className="project-browser">
            <div className="project-browser-bar" aria-hidden="true"><i /><i /><i /><span>{copy.projectPath}</span></div>
            <div className="project-preview"><span>{copy.projectCategory}</span><strong>{copy.projectHeadline[0]}<br />{copy.projectHeadline[1]}</strong><p>{copy.projectDescription[0]}<br />{copy.projectDescription[1]}</p><Image src="/images/skillspardha-collaboration.webp" alt={copy.projectAlt} width={400} height={250} sizes="(max-width: 640px) 55vw, 340px" /></div>
          </div>
          <div className="project-notebook"><span>{copy.notebookLabel}</span><strong>{copy.notebookHeadline[0]}<br />{copy.notebookHeadline[1]}</strong>{copy.notebookSteps.map((step) => <p key={step}>{step}</p>)}</div>
          <figcaption className="project-caption"><span>{copy.caption[0]}</span><span>{copy.caption[1]}</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

import content from "@/data/home-content.json";

export function BenefitsSection() {
  const copy = content.benefits;
  return (
    <section className="section-pad bg-primary text-white">
      <div className="container-width grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow eyebrow-on-dark">{copy.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-md">{copy.title}</h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-[#c8c3d3]">{copy.description}</p>
          <p className="mt-10 border-l-2 border-accent pl-5 text-xl font-medium leading-relaxed tracking-[-0.025em]">{copy.formatLead}<br /><span className="text-accent">{copy.formatTail}</span></p>
        </div>
        <div className="benefit-grid">
          {copy.items.map((benefit) => <div key={benefit.number}><span className="text-xs text-accent">{benefit.number}</span><h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{benefit.title}</h3><p className="mt-3 text-sm leading-7 text-[#c8c3d3]">{benefit.text}</p></div>)}
        </div>
      </div>
    </section>
  );
}

import content from "@/data/home-content.json";

export function HowItWorks() {
  const copy = content.howItWorks;
  return (
    <section className="section-pad bg-surface-sage">
      <div className="container-width">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="section-title mt-4 max-w-xl">{copy.title}</h2>
        <div className="steps-grid">
          {copy.steps.map((step) => <article key={step.number} className="step-item"><span className="step-number">{step.number}</span><div><h3 className="mt-0 text-xl font-semibold tracking-[-0.03em] sm:mt-7">{step.title}</h3><p className="mt-3 max-w-xs text-[15px] leading-7 text-muted">{step.text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

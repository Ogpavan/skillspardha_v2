import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import content from "@/data/home-content.json";

export function Testimonials() {
  const copy = content.testimonials;
  return (
    <section className="section-pad bg-white">
      <div className="container-width">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        <p className="sample-note mt-4">{copy.note}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col border-t border-border pt-6">
              <span className="text-5xl leading-none text-primary" aria-hidden="true">“</span>
              <blockquote className="mt-3 flex-1 text-[17px] font-medium leading-8 tracking-[-0.015em]">{testimonial.quote}</blockquote>
              <figcaption className="mt-7 border-t border-border pt-5"><span className="block text-sm font-semibold">{testimonial.name}</span><span className="mt-1 block text-xs text-muted">{testimonial.workshop}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

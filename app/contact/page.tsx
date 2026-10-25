import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarDays, CircleHelp, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { ContactForm } from "@/components/contact/ContactForm";
import contact from "@/data/contact-page.json";

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
  robots: { index: false },
};

const resourceIcons = [BookOpen, CalendarDays, CircleHelp];
const detailIcons: Record<string, LucideIcon> = { phone: Phone, email: Mail, address: MapPin };

export default function ContactPage() {
  return (
    <InteriorLayout showBackLink={false}>
      <div className="contact-page">
        <section className="contact-details-section" aria-labelledby="contact-details-heading">
          <div className="contact-section-heading">
            <p className="eyebrow">{contact.details.eyebrow}</p>
            <h2 id="contact-details-heading">{contact.details.title}</h2>
            <p>{contact.details.description}</p>
          </div>
          <div className="contact-detail-grid">
            {contact.details.items.map((item) => {
              const Icon = detailIcons[item.kind];
              return (
                <article className="contact-detail-item" key={item.kind}>
                  <div className="contact-detail-top">
                    <span className="contact-detail-icon"><Icon size={19} aria-hidden="true" /></span>
                    <span className="contact-detail-label">{item.label}</span>
                  </div>
                  <div className="contact-detail-copy">
                    <strong>{item.value}</strong>
                    <a href={item.href} target={item.kind === "address" ? "_blank" : undefined} rel={item.kind === "address" ? "noreferrer" : undefined}>
                      {item.action} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact-message-section" id="contact-form" aria-labelledby="contact-form-heading">
          <div className="contact-message-panel">
            <div className="contact-section-heading">
              <h2 id="contact-form-heading">{contact.form.title}</h2>
              <p>{contact.form.description}</p>
            </div>
            <ContactForm copy={contact.form} recipient={contact.details.items[1].value} />
          </div>
          <aside className="contact-map-panel" aria-label={contact.details.mapTitle}>
            <div className="contact-map-frame">
              <iframe src={contact.details.mapEmbedUrl} title={contact.details.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <div className="contact-map-caption">
              <span><MapPin size={16} aria-hidden="true" />{contact.details.items[2].value}</span>
              <a href={contact.details.items[2].href} target="_blank" rel="noreferrer">{contact.details.items[2].action} <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </aside>
        </section>

        <section className="contact-resources-section" aria-labelledby="contact-resources-heading">
          <div className="contact-section-heading">
            <p className="eyebrow">{contact.resources.eyebrow}</p>
            <h2 id="contact-resources-heading">{contact.resources.title}</h2>
            <p>{contact.resources.description}</p>
          </div>
          <div className="contact-resource-grid">
            {contact.resources.items.map((item, index) => {
              const Icon = resourceIcons[index];
              return (
                <article className="contact-resource-card" key={item.title}>
                  <div className="contact-resource-card-top">
                    <span className="contact-resource-icon"><Icon size={20} aria-hidden="true" /></span>
                    <span className="contact-resource-number">0{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ButtonLink href={item.href} variant="text" className="contact-resource-link">{item.cta} <ArrowRight size={16} aria-hidden="true" /></ButtonLink>
                </article>
              );
            })}
          </div>
        </section>

      </div>
    </InteriorLayout>
  );
}

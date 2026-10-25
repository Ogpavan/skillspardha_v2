"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContactFormCopy = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  topicLabel: string;
  topicPlaceholder: string;
  topics: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  submitHelp: string;
  openedMessage: string;
  subjectPrefix: string;
  mailNameLabel: string;
  mailEmailLabel: string;
  mailTopicLabel: string;
  mailMessageLabel: string;
};

export function ContactForm({ copy, recipient }: { copy: ContactFormCopy; recipient: string }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const topic = String(form.get("topic") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = `${copy.subjectPrefix}: ${topic}`;
    const body = `${copy.mailNameLabel}: ${name}\n${copy.mailEmailLabel}: ${email}\n${copy.mailTopicLabel}: ${topic}\n\n${copy.mailMessageLabel}:\n${message}`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(copy.openedMessage);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-fields">
        <div className="contact-form-field">
          <label htmlFor="contact-name">{copy.nameLabel}</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder={copy.namePlaceholder} required />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-email">{copy.emailLabel}</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder={copy.emailPlaceholder} required />
        </div>
        <div className="contact-form-field contact-form-field-wide">
          <label htmlFor="contact-topic">{copy.topicLabel}</label>
          <select id="contact-topic" name="topic" defaultValue="" required>
            <option value="" disabled>{copy.topicPlaceholder}</option>
            {copy.topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
          </select>
        </div>
        <div className="contact-form-field contact-form-field-wide">
          <label htmlFor="contact-message">{copy.messageLabel}</label>
          <textarea id="contact-message" name="message" rows={5} placeholder={copy.messagePlaceholder} required />
        </div>
      </div>
      <div className="contact-form-submit-row">
        <Button type="submit" className="!bg-primary text-white hover:!bg-[#423853]">{copy.submitLabel} <ArrowUpRight size={17} aria-hidden="true" /></Button>
        <p>{copy.submitHelp}</p>
      </div>
      <p className="contact-form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}

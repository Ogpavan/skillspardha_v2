"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/data/home-content.json";

export function Newsletter() {
  const copy = content.newsletter;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(copy.validationError);
      setMessage("");
      return;
    }
    setError("");
    setMessage(copy.successMessage);
  }

  return (
    <section id="newsletter" className="bg-surface-sage py-16 sm:py-20">
      <div className="container-width grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div><p className="eyebrow">{copy.eyebrow}</p><h2 className="section-title mt-4">{copy.title}</h2><p className="section-description mt-4">{copy.description}</p></div>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="newsletter-email" className="mb-2 block text-sm font-semibold">{copy.emailLabel}</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input id="newsletter-email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => { setEmail(event.target.value); setError(""); setMessage(""); }} placeholder={copy.placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? "newsletter-error" : "newsletter-note"} className="min-h-12 min-w-0 flex-1 rounded-lg border border-[#c9c4bb] bg-white px-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            <Button type="submit" className="min-h-12 shrink-0">{copy.subscribe} <ArrowUpRight size={16} aria-hidden="true" /></Button>
          </div>
          {error ? <p id="newsletter-error" className="mt-2 text-sm text-[#a1463d]" role="alert">{error}</p> : null}
          <p id="newsletter-note" className="mt-3 text-xs text-muted">{copy.note}</p>
          <p role="status" className="mt-3 text-sm text-primary">{message}</p>
        </form>
      </div>
    </section>
  );
}

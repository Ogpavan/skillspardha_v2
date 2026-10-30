"use client";

import { useEffect, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";

const topics = [
  "Workshops",
  "Technology Accelerator",
  "Courses and learning paths",
  "Mentoring or partnerships",
  "Something else",
];

const sessionKey = "skillspardha-lead-popup-seen-v2";

export function LeadCapture() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(sessionKey) === "true") return;
    } catch {
      // Keep the automatic prompt available when browser storage is disabled.
    }

    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(sessionKey, "true");
      } catch {
        // The dialog can still open when browser storage is disabled.
      }
      setOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      try {
        window.sessionStorage.setItem(sessionKey, "true");
      } catch {
        // Opening the form should not depend on browser storage.
      }
    }
    setOpen(nextOpen);
    if (nextOpen) setStatus("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const values = new FormData(formElement);
    const payload = {
      name: String(values.get("name") ?? "").trim(),
      phone: String(values.get("phone") ?? "").trim(),
      email: String(values.get("email") ?? "").trim(),
      interest: String(values.get("interest") ?? "").trim(),
      city: String(values.get("city") ?? "").trim(),
      message: String(values.get("message") ?? "").trim(),
      consent: values.get("consent") === "on",
      website: String(values.get("website") ?? ""),
    };

    setIsSubmitting(true);
    setStatus("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "We couldn’t send your enquiry just now. Please try again shortly.");
      setStatus("Thanks — your enquiry has been sent to our team.");
      formElement.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "We couldn’t send your enquiry just now. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="lead-dialog-overlay" />
          <Dialog.Content className="lead-dialog-content">
            <Dialog.Close className="lead-dialog-close" aria-label="Close enquiry form"><X size={19} aria-hidden="true" /></Dialog.Close>
            <p className="eyebrow">LET’S TALK</p>
            <Dialog.Title className="lead-dialog-title">What are you hoping to learn?</Dialog.Title>
            <Dialog.Description className="lead-dialog-description">
              Tell us a little about yourself and our team will help you find the right next step.
            </Dialog.Description>

            <form className="lead-form" onSubmit={handleSubmit}>
              <div className="lead-honeypot" aria-hidden="true">
                <label htmlFor="lead-website">Leave this field empty</label>
                <input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="lead-form-grid">
                <div className="lead-form-field">
                  <label htmlFor="lead-name">Your name <span aria-hidden="true">*</span></label>
                  <input id="lead-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                </div>
                <div className="lead-form-field">
                  <label htmlFor="lead-phone">Phone number <span aria-hidden="true">*</span></label>
                  <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your number with country code" required />
                </div>
                <div className="lead-form-field">
                  <label htmlFor="lead-email">Email address <span aria-hidden="true">*</span></label>
                  <input id="lead-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </div>
                <div className="lead-form-field">
                  <label htmlFor="lead-city">City</label>
                  <input id="lead-city" name="city" type="text" autoComplete="address-level2" placeholder="Where are you based?" />
                </div>
                <div className="lead-form-field lead-form-field-wide">
                  <label htmlFor="lead-interest">I’m interested in <span aria-hidden="true">*</span></label>
                  <select id="lead-interest" name="interest" defaultValue="" required>
                    <option value="" disabled>Choose what you’re looking for</option>
                    {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
                  </select>
                </div>
                <div className="lead-form-field lead-form-field-wide">
                  <label htmlFor="lead-message">What would you like help with?</label>
                  <textarea id="lead-message" name="message" rows={3} placeholder="Share your goals or any questions (optional)" />
                </div>
              </div>

              <label className="lead-consent">
                <input name="consent" type="checkbox" required />
                <span>I agree that SkillSpardha may contact me about this enquiry.</span>
              </label>

              <button className="lead-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Request a callback"} <ArrowUpRight size={17} aria-hidden="true" /></button>
              <p className="lead-form-note">Your details will be sent securely to the SkillSpardha team.</p>
              <p className="lead-form-status" role="status" aria-live="polite">{status}</p>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <button className="lead-fab" type="button" onClick={() => handleOpenChange(true)} aria-label="Open enquiry form">
        <MessageCircle size={21} aria-hidden="true" />
        <span>Talk to us</span>
      </button>
    </>
  );
}

"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ContactFormProps = {
  variant?: "default" | "hero";
  submitLabel?: string;
  note?: string;
};

export function ContactForm({ variant = "default", submitLabel = "Send site details", note = "This sends the details directly to vinh@builtbyvinh.com." }: ContactFormProps) {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const nameId = `${formId}-name`;
  const businessId = `${formId}-business`;
  const emailId = `${formId}-email`;
  const websiteId = `${formId}-website`;
  const messageId = `${formId}-message`;

  return (
    <form
      className={`contactForm ${variant === "hero" ? "heroContactForm" : ""}`}
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("sending");
        setError("");

        const form = event.currentTarget;
        const data = new FormData(form);

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.get("name"),
              business: data.get("business"),
              email: data.get("email"),
              website: data.get("website"),
              message: data.get("message"),
              company: data.get("company"),
            }),
          });

          if (!response.ok) {
            const result = (await response.json().catch(() => null)) as { error?: string } | null;
            setError(result?.error ?? "Something went wrong. Email me directly at vinh@builtbyvinh.com.");
            setStatus("error");
            return;
          }

          form.reset();
          setStatus("sent");
        } catch {
          setError("Connection issue. Please try again or email me directly at vinh@builtbyvinh.com.");
          setStatus("error");
        }
      }}
    >
      <input className="hpField" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="fieldGrid">
        <div className="field">
          <Label htmlFor={nameId}>Name</Label>
          <Input id={nameId} name="name" placeholder="Your name" required />
        </div>
        <div className="field">
          <Label htmlFor={businessId}>Business</Label>
          <Input id={businessId} name="business" placeholder="Business name" required />
        </div>
      </div>
      <div className="field">
        <Label htmlFor={emailId}>Email</Label>
        <Input id={emailId} name="email" type="email" placeholder="you@business.com" required />
      </div>
      <div className="field">
        <Label htmlFor={websiteId}>Website</Label>
        <Input id={websiteId} name="website" placeholder="yourbusiness.com" />
      </div>
      <div className="field">
        <Label htmlFor={messageId}>What should I look at?</Label>
        <Textarea id={messageId} name="message" placeholder="Tell me what feels outdated, confusing, or hard to act on." />
      </div>
      <Button type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
        {status === "sending" ? "Sending..." : submitLabel}
      </Button>
      <div aria-live="polite" aria-atomic="true">
        {status === "sent" ? <p className="formNote successNote">Sent — I’ll reply with the site scan.</p> : null}
        {status === "error" ? <p className="formNote errorNote" role="alert">{error}</p> : null}
        {status === "idle" || status === "sending" ? <p className="formNote">{note}</p> : null}
      </div>
    </form>
  );
}

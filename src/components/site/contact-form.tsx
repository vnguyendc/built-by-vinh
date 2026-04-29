"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contactForm"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const subject = encodeURIComponent("Free site scan request");
        const body = encodeURIComponent(
          [`Name: ${data.get("name")}`, `Business: ${data.get("business")}`, `Website: ${data.get("website")}`, "", `${data.get("message")}`].join("\n")
        );
        setSent(true);
        window.location.href = `mailto:vinh@builtbyvinh.com?subject=${subject}&body=${body}`;
      }}
    >
      <div className="fieldGrid">
        <div className="field">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="field">
          <Label htmlFor="business">Business</Label>
          <Input id="business" name="business" placeholder="Business name" required />
        </div>
      </div>
      <div className="field">
        <Label htmlFor="website">Website</Label>
        <Input id="website" name="website" placeholder="yourbusiness.com" />
      </div>
      <div className="field">
        <Label htmlFor="message">What should I look at?</Label>
        <Textarea id="message" name="message" placeholder="Tell me what feels outdated, confusing, or hard to act on." />
      </div>
      <Button type="submit">Email Vinh the site details</Button>
      {sent ? <p className="formNote">Opening your email app with the details filled in.</p> : <p className="formNote">This opens an email to vinh@builtbyvinh.com with your details filled in.</p>}
    </form>
  );
}

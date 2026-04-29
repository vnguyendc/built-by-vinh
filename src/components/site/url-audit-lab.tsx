"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Radar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const findings = [
  "CTA buried",
  "Reviews too low",
  "Mobile flow unclear",
  "Quote path weak",
];

function getHost(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "your site";
  try {
    return new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`).hostname.replace(/^www\./, "");
  } catch {
    return trimmed.replace(/^https?:\/\//, "").replace(/^www\./, "") || "your site";
  }
}

export function UrlAuditLab() {
  const [url, setUrl] = useState("");
  const [ran, setRan] = useState(false);
  const host = useMemo(() => getHost(url), [url]);

  return (
    <div className="auditLab" aria-label="Website audit concept widget">
      <div className="auditTop">
        <div>
          <p className="micro">Lead leak scan</p>
          <h2>Free manual site scan.</h2>
          <p className="auditExplainer">Send your website and I’ll reply with 3 practical ways to get more calls or quote requests within 24–48 hours.</p>
        </div>
        <Radar aria-hidden="true" />
      </div>

      <form
        className="auditForm"
        onSubmit={(event) => {
          event.preventDefault();
          setRan(true);
        }}
      >
        <Label htmlFor="audit-url">Business URL</Label>
        <div className="auditInputRow">
          <Input id="audit-url" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="yourbusiness.com" />
          <Button type="submit">Request scan</Button>
        </div>
      </form>

      <div className="scanLine" data-active={ran} />

      <div className="auditResults">
        <div className="auditSite">
          <span>{host}</span>
          <strong>{ran ? "Audit request ready" : "Manual review"}</strong>
        </div>
        <div className="findingGrid">
          {findings.map((finding, index) => (
            <div className="finding" key={finding} data-active={ran || index < 2}>
              {ran ? <CheckCircle2 size={16} /> : <Zap size={16} />}
              <span>{finding}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="auditNote">This is a manual review, not fake instant software. Email me the site and I’ll send back specific notes.</p>
    </div>
  );
}

export function BeforeAfterSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="comparisonShell">
      <div className="comparisonHeader">
        <p className="micro">Before / after</p>
        <span>Drag to compare</span>
      </div>
      <div className="comparisonStage" style={{ "--split": `${value}%` } as React.CSSProperties}>
        <div className="mockSite beforeSite">
          <span>Before</span>
          <h3>Good business. Weak site.</h3>
          <p>Buried phone. Vague services. Proof too late.</p>
          <div className="fakeBlock short" />
          <div className="fakeBlock" />
          <div className="fakeBlock tiny" />
        </div>
        <div className="mockSite afterSite">
          <span>After</span>
          <h3>Clearer. Faster. Easier to contact.</h3>
          <p>Strong CTA. Reviews early. Mobile quote path.</p>
          <button>Request a quote <ArrowRight size={15} /></button>
          <div className="proofDots"><i /><i /><i /></div>
        </div>
        <div className="comparisonDivider" aria-hidden="true" />
      </div>
      <input
        className="comparisonRange"
        aria-label="Before after slider"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}

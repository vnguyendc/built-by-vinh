import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BeforeAfterSlider, UrlAuditLab } from "@/components/site/url-audit-lab";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  ["Website refreshes", "Cleaner pages, sharper CTAs, better mobile flow."],
  ["Conversion pages", "Pages for high-intent services and local searches."],
  ["AI workflows", "Simple automations for intake, follow-ups, reviews, and admin."],
];

const problems = ["Unclear offer", "Hidden phone", "Late reviews", "Weak quote path"];

const steps = [
  ["01", "Preview", "Quick direction from public info."],
  ["02", "Review", "You mark what feels right or wrong."],
  ["03", "Build", "I build the polished version."],
  ["04", "Launch", "We track and improve."],
];

const examples = ["HVAC emergency page", "Plumbing quote flow", "Electrical homepage", "Pest control local page", "Roofing estimate page"];

const proofPoints = ["DMV-based software engineer", "Manual audits in 24–48 hours", "Built for phone calls and quote requests"];

const feedback = [
  [
    "Samantha Stern",
    "President @ Annandale Fertility",
    "Vinh helped us optimize our website and user experience, and we saw a huge spike in patient sign-ups.",
  ],
  [
    "Justin Johnson",
    "Photographer @ Poetry by Jay Photography",
    "Vinh helped me create a website that increased my online visibility and showcased my work.",
  ],
  [
    "Leroy Saunders",
    "Head Coach @ Fight By Design",
    "The website is on point and turned my vision into reality. Love that they take the time to refine numbers like bounce rate.",
  ],
];

function Nav() {
  return (
    <nav className="nav wrap" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Built by Vinh home">
        <Image src="/built-by-vinh-icon.svg" alt="" aria-hidden="true" width={28} height={28} />
        <span><strong>Built</strong> by Vinh</span>
      </a>
      <div className="navLinks">
        <a href="#lab">Lab</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a className="navCta" href="#lab">Free site scan</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Nav />
      <div className="heroGrid wrap">
        <div className="heroCopy">
          <p className="eyebrow"><span className="desktopOnly">DMV-based software engineer · local business websites</span><span className="mobileOnly">DMV-based · local business websites</span></p>
          <h1>Websites that help local businesses get more calls.</h1>
          <p className="lede">Clearer trust. Sharper CTAs. Less web clutter.</p>
          <div className="heroActions">
            <Button asChild>
              <a href="#lab">Get a free site scan</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#contact">Email me your site</a>
            </Button>
          </div>
          <div className="proofStrip" aria-label="Credibility highlights">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <p className="cred">Prefer email? Send your site to <a href="mailto:vinh@builtbyvinh.com">vinh@builtbyvinh.com</a>.</p>
        </div>
        <UrlAuditLab />
      </div>
    </section>
  );
}


function Offer() {
  return (
    <section className="section offerSection">
      <div className="wrap offerGrid">
        <div>
          <p className="kicker">The offer</p>
          <h2>Make the business easier to trust and contact.</h2>
        </div>
        <div className="offerCopy">
          <p>
            Most local sites do not need a bloated redesign. They need a cleaner first screen, sharper proof, and a faster path to call or request a quote.
          </p>
          <div className="offerPoints">
            <div>
              <span>01</span>
              <strong>Clarify the first impression</strong>
              <p>What you do, where you work, and why someone should trust you — visible fast.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Move proof higher</strong>
              <p>Reviews, experience, service areas, and credibility should show up before hesitation does.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Tighten the quote path</strong>
              <p>Make the next step obvious on mobile: call, request service, or ask for a quote.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LabSection() {
  return (
    <section className="section labSection" id="lab">
      <div className="wrap labGrid">
        <div>
          <p className="kicker">The wow factor</p>
          <h2>See the gap. Then see the sharper version.</h2>
          <p className="sectionCopy">A quick before/after system for spotting where local sites lose trust, calls, and quote requests.</p>
        </div>
        <BeforeAfterSlider />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="sectionHeader">
          <p className="kicker">What I build</p>
          <h2>Websites with a job to do.</h2>
        </div>
        <div className="serviceGrid">
          {services.map(([title, copy]) => (
            <Card className="service" key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="section darkBand">
      <div className="wrap problemGrid">
        <div>
          <p className="kicker">Where leads leak</p>
          <h2>Small problems cost calls.</h2>
        </div>
        <div className="problemList">
          {problems.map((problem) => (
            <div className="problem" key={problem}>
              <span />
              <p>{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about">
      <div className="wrap aboutGrid">
        <div className="portraitWrap">
          <Image src="/vinh-headshot.jpg" alt="Vinh Nguyen" fill sizes="(max-width: 800px) 90vw, 420px" priority />
        </div>
        <div className="aboutCopy">
          <p className="kicker">Who you are talking to</p>
          <h2>Built by Vinh is run by Vinh Nguyen, a DMV-based software engineer with Amazon and large-company experience.</h2>
          <p>I build practical websites and workflows for real businesses.</p>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="sectionHeader compact">
          <p className="kicker">Process</p>
          <h2>Preview first. Build what works.</h2>
        </div>
        <div className="processGrid">
          {steps.map(([num, title, copy]) => (
            <article className="step" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="section caseStudy" id="example">
      <div className="wrap caseGrid">
        <div className="caseCopy">
          <p className="kicker">Example preview</p>
          <h2>Adam Garage Door concept.</h2>
          <p>One quick sample direction for a local garage door company: a bold black-and-gold hero, emergency-first positioning, stronger service cards, trust signals before the form, and call/quote CTAs repeated in the right places.</p>
          <div className="caseBullets">
            <span>Emergency-first hero</span>
            <span>Phone + quote CTAs</span>
            <span>Trust and services upfront</span>
          </div>
        </div>
        <div className="casePreview">
          <Image src="/adam-garage-door-preview.png" alt="Adam Garage Door website preview concept" fill sizes="(max-width: 900px) 92vw, 560px" />
        </div>
      </div>
      <p className="wrap caseDisclaimer">Example preview only; not affiliated with Adam Garage Door.</p>
    </section>
  );
}

function Examples() {
  return (
    <section className="section examples">
      <div className="wrap examplesGrid">
        <div>
          <p className="kicker">Example directions</p>
          <h2>Built for phone-driven businesses.</h2>
        </div>
        <div className="exampleList">
          {examples.map((example) => (
            <div className="example" key={example}>
              {example}
              <ArrowRight size={18} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feedback() {
  return (
    <section className="section feedback">
      <div className="wrap">
        <div className="sectionHeader compact">
          <p className="kicker">What people value</p>
          <h2>Clear thinking. Clean execution.</h2>
        </div>
        <div className="feedbackGrid">
          {feedback.map(([name, role, quote]) => (
            <figure key={name}>
              <blockquote>“{quote}”</blockquote>
              <figcaption>
                <strong>{name}</strong>
                {role ? <span>{role}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="reviewNote">Real client feedback from recent website and optimization work.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="finalCta" id="contact">
      <div className="wrap contactGrid">
        <div>
          <p className="kicker">Want a free site scan?</p>
          <h2>Send the website. I’ll reply with what I’d sharpen.</h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Built by Vinh",
  url: "https://www.builtbyvinh.com",
  description:
    "Websites, conversion pages, and practical AI workflows for local service businesses that depend on calls and quote requests.",
  founder: {
    "@type": "Person",
    name: "Vinh Nguyen",
    jobTitle: "Software Engineer and Web Developer",
  },
  areaServed: ["DMV", "Northern Virginia", "Washington DC", "Maryland", "Virginia"],
  serviceType: [
    "Website refreshes",
    "Local service business websites",
    "Conversion landing pages",
    "AI workflow automation",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Offer />
      <CaseStudy />
      <LabSection />
      <Services />
      <Problems />
      <About />
      <Process />
      <Examples />
      <Feedback />
      <Contact />
    </main>
  );
}

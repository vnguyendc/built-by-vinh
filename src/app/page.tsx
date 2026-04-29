import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/site/url-audit-lab";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";

const services = [
  [
    "01",
    "First screen rebuild",
    "Make the page instantly answer what you do, where you work, why people trust you, and how to call or request a quote.",
    "Hero · trust · mobile CTA",
  ],
  [
    "02",
    "Quote path cleanup",
    "Remove the friction between a ready customer and the next action: call, send photos, book service, or ask for pricing.",
    "Forms · phone flow · service pages",
  ],
  [
    "03",
    "Local proof system",
    "Move reviews, service areas, real photos, and guarantees into the places where hesitation usually happens.",
    "Reviews · areas · guarantees",
  ],
];

const problems = ["Unclear offer", "Hidden phone", "Late reviews", "Weak quote path"];

const steps = [
  [
    "01",
    "Free preview",
    "I look at the public site and send back the highest-leverage changes: first screen, trust, service clarity, and quote path.",
    "24–48 hr turnaround",
  ],
  [
    "02",
    "Fixed-scope refresh",
    "If it is useful, we choose a focused build: homepage, landing page, or service page. Clear price before anything starts.",
    "$500–$1,500 starter range",
  ],
  [
    "03",
    "Launch + tighten",
    "I ship the page, check mobile, connect the form, and make the first round of copy/layout fixes after you see it live.",
    "Designed around calls + quotes",
  ],
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
              <a href="#hero-scan">Get a free site scan</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#example">See an example</a>
            </Button>
          </div>
          <div className="proofStrip" aria-label="Credibility highlights">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <p className="cred">Prefer email? Send your site to <a href="mailto:vinh@builtbyvinh.com">vinh@builtbyvinh.com</a>.</p>
        </div>
        <div className="heroFormPanel" id="hero-scan">
          <div className="heroFormHeader">
            <p className="micro">Free manual site scan</p>
            <h2>Send your site. I’ll find the leaks.</h2>
            <p>Get 3 practical fixes for clearer trust, stronger CTAs, and more calls or quote requests. Manual review in 24–48 hours.</p>
          </div>
          <ContactForm variant="hero" submitLabel="Get my free site scan" note="No spam. I’ll email the scan to you directly." />
        </div>
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
    <section className="section servicesSection" id="work">
      <div className="wrap servicesLayout">
        <div className="servicesIntro">
          <p className="kicker">What I fix</p>
          <h2>Better sites for call-driven businesses.</h2>
          <p>Not a bloated agency redesign. A focused pass on the parts that make someone trust you, call you, or request a quote.</p>
        </div>
        <div className="serviceStack">
          {services.map(([num, title, copy, meta]) => (
            <article className="serviceRow" key={title}>
              <span>{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <strong>{meta}</strong>
            </article>
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
    <section className="section processSection" id="process">
      <div className="wrap processLayout">
        <div className="processIntro">
          <p className="kicker">Process</p>
          <h2>Start with signal, not a sales call.</h2>
          <p>I send a useful preview first. If it feels right, we turn it into a small fixed-scope build.</p>
        </div>
        <div className="processPanel">
          {steps.map(([num, title, copy, meta]) => (
            <article className="processItem" key={num}>
              <div className="processNum">{num}</div>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <strong>{meta}</strong>
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
          <p>One quick sample direction for a local garage door company: a cleaner full-bleed hero, immediate quote and call CTAs, service proof near the top, and a warmer local-business feel.</p>
          <div className="caseBullets">
            <span>Full-bleed local hero</span>
            <span>Phone + quote CTAs</span>
            <span>Trust proof above the fold</span>
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
          <h2>What clients say.</h2>
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
      <Feedback />
      <CaseStudy />
      <Offer />
      <Services />
      <Problems />
      <About />
      <Process />
      <LabSection />
      <Examples />
      <Contact />
    </main>
  );
}

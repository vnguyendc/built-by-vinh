import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/site/url-audit-lab";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";

const services = [
  [
    "01",
    "Contractor homepage refresh",
    "Make the first screen instantly answer what you do, where you work, why people trust you, and how to call or request a quote.",
    "Hero · service area · trust",
  ],
  [
    "02",
    "Call + quote path cleanup",
    "Remove the friction between a ready customer and the next action: tap to call, send photos, request service, or ask for pricing.",
    "Click-to-call · forms · mobile flow",
  ],
  [
    "03",
    "Local SEO foundations",
    "Clarify services, locations, reviews, real photos, and basic page titles so the site lines up with how local customers search.",
    "Services · areas · page titles",
  ],
];

const problems = ["Unclear services", "Hidden phone", "Buried reviews", "Weak quote path", "Missing service areas"];

const steps = [
  [
    "01",
    "Free manual site scan",
    "I review the public site and send back the highest-leverage fixes: first screen, service clarity, trust proof, mobile CTA, and quote path.",
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
    "I ship the page, check mobile, connect the form, clean up basic metadata, and make the first round of copy/layout fixes after you see it live.",
    "Built around calls + quotes",
  ],
];

const examples = ["HVAC website refresh", "Plumbing quote flow", "Electrical homepage", "Pest control service page", "Roofing estimate page", "Garage door landing page"];

const proofPoints = ["DMV-based software engineer", "Free manual audits in 24–48 hours", "Built for calls, quotes, and local service searches"];

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
          <p className="eyebrow"><span className="desktopOnly">DMV-based software engineer · contractor and home-service websites</span><span className="mobileOnly">DMV-based · contractor websites</span></p>
          <h1>Website refreshes for local service businesses that need more calls and quote requests.</h1>
          <p className="lede">I help contractors and home-service businesses clean up the first screen, trust proof, mobile call path, and local SEO basics.</p>
          <div className="heroActions">
            <Button asChild>
              <a href="#hero-scan">Get a free site scan</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#example">See an example</a>
            </Button>
          </div>
          <p className="mobileScanNote">No cost. Manual review. 3 fixes by email in 24–48 hours.</p>
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
            <p>Get 3 practical fixes for the pages that matter most: what customers see first, how fast they can call or request a quote, and whether the site clearly shows services, service areas, reviews, and credibility.</p>
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
          <h2>Turn a weak contractor website into a clearer call-and-quote path.</h2>
        </div>
        <div className="offerCopy">
          <p>
            Most plumbing, HVAC, electrical, roofing, pest control, and garage door sites do not need a bloated redesign. They need a cleaner first screen, sharper proof, better service-area clarity, and a faster path to call or request a quote.
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
              <strong>Tighten the quote path and local SEO basics</strong>
              <p>Make the next step obvious on mobile while cleaning up services, locations, page titles, and quote/contact language.</p>
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
          <p className="sectionCopy">A quick before/after system for spotting where contractor and home-service sites lose trust, calls, quote requests, and local search clarity.</p>
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
          <h2>Website refreshes for contractors, trades, and home-service businesses.</h2>
          <p>Not a bloated agency redesign. A focused pass on the parts that make someone trust you, understand your service area, call you, or request a quote.</p>
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
          <h2>Small website problems cost real service calls.</h2>
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
          <p>I build practical websites for local businesses that care more about booked jobs than fancy agency theater.</p>
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
          <h2>Start with a useful site scan, not a bloated agency pitch.</h2>
          <p>I send practical notes first. If they are useful, we turn the best fixes into a small fixed-scope build.</p>
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
          <p>One sample direction for a local garage door company: a cleaner full-bleed hero, immediate quote and call CTAs, service proof near the top, clearer local positioning, and a warmer owner-operated feel.</p>
          <div className="caseBullets">
            <span>Full-bleed local hero</span>
            <span>Phone + quote CTAs</span>
            <span>Trust proof above the fold</span>
          </div>
        </div>
        <div className="casePreview">
          <Image src="/adam-garage-door-scroll.gif" alt="Scrolling Adam Garage Door website preview concept" fill sizes="(max-width: 900px) 92vw, 560px" unoptimized />
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
          <h2>Built for search-driven, phone-driven local services.</h2>
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
          <h2>Send your site. I’ll show you where calls and quote requests are leaking.</h2>
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
    "Website refreshes, contractor landing pages, and local SEO foundations for DMV service businesses that depend on calls and quote requests.",
  founder: {
    "@type": "Person",
    name: "Vinh Nguyen",
    jobTitle: "Software Engineer and Web Developer",
  },
  areaServed: ["DMV", "Northern Virginia", "Washington DC", "Maryland", "Virginia"],
  serviceType: [
    "Contractor website refreshes",
    "Local service business websites",
    "Home service landing pages",
    "Local SEO foundations",
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

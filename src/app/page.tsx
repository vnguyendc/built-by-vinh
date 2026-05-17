import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/site/url-audit-lab";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";

const services = [
  [
    "01",
    "First-screen rebuild",
    "Make the homepage answer the buyer’s first three questions fast: do you handle my problem, do you work near me, and can I trust you?",
    "Hero · service area · proof",
  ],
  [
    "02",
    "Call and quote path",
    "Put the phone number, quote form, photo-upload path, and next step where ready customers can actually find them on mobile.",
    "Click-to-call · forms · mobile flow",
  ],
  [
    "03",
    "Local search cleanup",
    "Tighten services, locations, headings, page titles, reviews, and real photos so the page matches how homeowners search.",
    "Services · areas · page titles",
  ],
];

const problems = [
  ["01", "Unclear services", "Visitors should not have to hunt to learn what you actually do."],
  ["02", "Hidden phone", "On mobile, the call path needs to be obvious before they scroll twice."],
  ["03", "Buried reviews", "Proof works best before hesitation, not after the visitor is already unsure."],
  ["04", "Weak quote path", "Ready buyers need one clear next step, not five vague contact options."],
  ["05", "Missing service areas", "Local pages should make location fit impossible to miss."],
];

const steps = [
  [
    "01",
    "Free manual site scan",
    "I review the public site and send back the highest-leverage fixes: first impression, service clarity, trust proof, mobile CTA, and quote path.",
    "24–48 hr turnaround",
  ],
  [
    "02",
    "Fixed-scope refresh",
    "If the scan is useful, we choose one focused build: homepage, landing page, or service page. Clear price before anything starts.",
    "$500–$1,500 starter range",
  ],
  [
    "03",
    "Launch + tighten",
    "I ship the page, check mobile, connect the form, clean up basic metadata, and make the first polish pass after you see it live.",
    "Built around calls + quotes",
  ],
];

const examples = ["HVAC website refresh", "Plumbing quote flow", "Electrical homepage", "Pest control service page", "Roofing estimate page", "Garage door landing page"];

const proofPoints = ["DMV-based builder", "Manual scan in 24–48 hours", "Built for calls, quotes, and local searches"];

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
        <a className="navCta" href="#hero-scan">Free site scan</a>
      </div>
      <a className="mobileNavCta" href="#hero-scan" aria-label="Jump to the free site scan form">
        Free scan
      </a>
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
          <h1>Make your contractor site easier to trust and faster to contact.</h1>
          <p className="lede">I help DMV home-service businesses clean up the first screen, trust proof, mobile call path, and local SEO basics.</p>
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
            <p>Get 3 practical fixes for what customers see first, how fast they can call or request a quote, and whether your site clearly shows services, areas, reviews, and credibility.</p>
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
          <p className="kicker">If you want the fix</p>
          <h2>A focused refresh for the page that should be producing calls.</h2>
        </div>
        <div className="offerCopy">
          <p>
            If the scan is useful, the next step is not a giant agency rebuild. It is a fixed-scope homepage, landing page, or service-page refresh that cleans up the buyer’s path: clearer promise, stronger local proof, and one obvious way to call or request a quote.
          </p>
          <div className="offerBlueprint" aria-label="What the refresh improves">
            <div>
              <span>01</span>
              <strong>First impression</strong>
              <p>Show what you do, where you work, and why you’re credible before the visitor starts comparing tabs.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Trust proof</strong>
              <p>Move reviews, photos, years in business, guarantees, and service areas into the decision zone.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Quote path</strong>
              <p>Make the next action obvious on mobile while tightening services, locations, titles, and contact language.</p>
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
          <p className="kicker">The preview</p>
          <h2>See the leak. Then see the cleaner path.</h2>
          <p className="sectionCopy">The scan turns vague “the site feels old” feedback into specific fixes a business owner can judge quickly.</p>
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
          <p className="kicker">What the scan checks</p>
          <h2>The moments that decide whether someone calls.</h2>
          <p>The free scan looks for the practical leaks first: first impression, local trust, mobile action, and quote intent.</p>
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
          <h2>The problems are usually small. The lost jobs are not.</h2>
        </div>
        <div className="problemList">
          {problems.map(([num, title, copy]) => (
            <div className="problem" key={title}>
              <span>{num}</span>
              <div>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
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
          <h2>A software engineer, not another vague marketing shop.</h2>
          <p>I’m Vinh Nguyen — DMV-based, Amazon-trained, and focused on practical websites for local businesses that care about booked jobs.</p>
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
          <h2>Start with proof of value, not a discovery-call maze.</h2>
          <p>You get useful notes first. If they make sense, we turn the best fixes into a small fixed-scope build.</p>
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
          <h2>What a sharper local page can feel like.</h2>
          <p>A sample direction for a garage door company: full-bleed local imagery, immediate quote and call CTAs, proof near the top, and a warmer owner-operated feel.</p>
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
          <h2>Use the same system across high-intent service pages.</h2>
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
          <p className="kicker">Proof</p>
          <h2>Recent work. Real outcomes.</h2>
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
          <p className="kicker">Free site scan</p>
          <h2>Send the site. I’ll send back the first 3 fixes I’d make.</h2>
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
    <main id="main-content">
      <a className="skipLink" href="#hero-scan">Skip to free site scan</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problems />
      <Services />
      <LabSection />
      <CaseStudy />
      <Offer />
      <Process />
      <Feedback />
      <About />
      <Examples />
      <Contact />
    </main>
  );
}

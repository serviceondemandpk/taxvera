import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { processSteps, supportHighlights, whyUs } from "../data/content";
import ServiceCard from "../components/ui/ServiceCard";
import CtaBand from "../components/ui/CtaBand";
import Icon from "../components/ui/Icon";
import MediaPanel from "../components/ui/MediaPanel";
import HeroPhoto from "../components/ui/HeroPhoto";

const HERO_POINTS = ["Tax resolution for IRS and state issues", "Tax preparation, planning and bookkeeping", "Support for individuals and businesses"];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="hero__badge"><Icon name="shield" /> Tax resolution &amp; accounting services</span>
            <h1>Clear guidance for a more confident financial future</h1>
            <p>Practical tax resolution and accounting support for individuals and businesses, all in one place.</p>
            <ul className="hero-checks">
              {HERO_POINTS.map((point) => <li key={point}><Icon name="check" />{point}</li>)}
            </ul>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">Request a consultation</Link>
              <a href={siteConfig.phoneHref} className="btn btn--outline">Call {siteConfig.phone}</a>
            </div>
          </div>
          <HeroPhoto src={siteConfig.images.hero} />
        </div>
      </section>

      <div className="trustbar">
        <div className="container trustbar__inner">
          {siteConfig.stats.map((s) => (
            <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section__intro section__intro--center">
            <p className="section__kicker">Tax resolution</p>
            <h2>Relief from IRS and state tax problems</h2>
            <p className="muted">From levies and liens to audits and payment plans, we deal with the IRS so you do not have to.</p>
          </div>
          <div className="grid">
            {services.filter((s) => s.category === "resolution").slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <p style={{ marginTop: "var(--space-4)", textAlign: "center" }}><Link to="/services" className="btn btn--primary">View all services</Link></p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <MediaPanel src={siteConfig.images.team} alt="Our tax team" fallbackValue="Tax support" fallbackText="Guidance for individuals and businesses" />
          <div>
            <p className="section__kicker">Why choose us</p>
            <h2>A full tax team on your side</h2>
            <div className="features">
              {whyUs.map((item) => (
                <div className="feature" key={item.title}>
                  <div className="icon-badge"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3><p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__intro section__intro--center">
            <p className="section__kicker">Tax and accounting</p>
            <h2>Planning and accounting, tailored to you</h2>
            <p className="muted">Ongoing support that keeps your books clean and your tax bill as low as the law allows.</p>
          </div>
          <div className="grid">
            {services.filter((s) => s.category === "accounting").map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split image-story">
          <MediaPanel src={siteConfig.images.records} alt="Business owners reviewing financial records together" fallbackValue="Clear books" fallbackText="Accounting support for your business" />
          <div>
            <p className="section__kicker">For small businesses</p>
            <h2>Make better decisions with books you can trust</h2>
            <p className="muted">Stay on top of bookkeeping, tax deadlines, and day-to-day financial records with practical support for your business.</p>
            <Link to="/services/small-business-accounting" className="btn btn--primary">Explore business accounting</Link>
          </div>
        </div>
      </section>

      <section className="section section--process">
        <div className="container">
          <div className="section__intro section__intro--center"><h2>A clear process from first call to resolution</h2></div>
          <ol className="steps">
            {processSteps.map((step) => (
              <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__intro section__intro--center">
            <h2>Industry knowledge that matters</h2>
            <p className="muted">Regulated industries have unique tax rules. We know them.</p>
          </div>
          <div className="chips" style={{ justifyContent: "center" }}>
            {industries.map((name) => <span className="chip" key={name}>{name}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__intro section__intro--center"><h2>Support for your next steps</h2></div>
          <div className="grid">
            {supportHighlights.map((item) => (
              <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

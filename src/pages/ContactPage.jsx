import PageHero from "../components/ui/PageHero";
import LeadForm from "../components/forms/LeadForm";
import { siteConfig } from "../config/siteConfig";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Request a consultation" subtitle="Tell us what tax or accounting support you need." />
      <section className="section">
        <div className="container split">
          <LeadForm source="contact" />
          <div>
            <h2>Prefer to talk?</h2>
            <p><a href={siteConfig.phoneHref}><strong>{siteConfig.phone}</strong></a></p>
            <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            <p className="muted">Serving clients across the {siteConfig.serviceArea}.</p>
          </div>
        </div>
      </section>
    </>
  );
}

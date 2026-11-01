import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";

export default function CtaBand() {
  return (
    <section className="section section--ink cta-band">
      <div className="container">
        <h2>Talk to a tax professional today</h2>
        <p>Tell us what you need help with and we will discuss the next steps for your tax or accounting needs.</p>
        <div className="hero__actions" style={{ justifyContent: "center" }}>
          <Link to="/contact" className="btn btn--primary">Request a consultation</Link>
          <a href={siteConfig.phoneHref} className="btn btn--outline">{siteConfig.phone}</a>
        </div>
      </div>
    </section>
  );
}

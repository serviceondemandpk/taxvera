import { Link } from "react-router-dom";
import { siteConfig, navLinks } from "../../config/siteConfig";
import { services } from "../../data/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h3>{siteConfig.name}</h3>
          <p>{siteConfig.tagline} for individuals and businesses across the United States.</p>
          <p>Serving clients across the {siteConfig.serviceArea}<br />
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a><br />
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <ul>{navLinks.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Popular services</h3>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__legal">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

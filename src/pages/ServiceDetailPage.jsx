import { Link, useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Icon from "../components/ui/Icon";
import LeadForm from "../components/forms/LeadForm";
import { getServiceBySlug } from "../data/services";
import NotFoundPage from "./NotFoundPage";

const EXPECTATIONS = [
  "A free, confidential review of your situation",
  "Your IRS or state records pulled and analyzed",
  "Every option explained, with a clear fee quote",
  "A dedicated team handling all communication",
];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  if (!service) return <NotFoundPage />;

  return (
    <>
      <PageHero title={service.title} subtitle={service.summary} />
      <section className="section">
        <div className="container split">
          <div>
            <h2>How we help</h2>
            <p>{service.help}</p>
            <h3>What to expect</h3>
            <ul className="checklist">
              {EXPECTATIONS.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
            </ul>
            <p><Link to="/services" className="card__link">Back to all services</Link></p>
          </div>
          <LeadForm key={service.slug} source={`service:${service.slug}`} defaultService={service.title} />
        </div>
      </section>
    </>
  );
}

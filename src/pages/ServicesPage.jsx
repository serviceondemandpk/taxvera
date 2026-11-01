import PageHero from "../components/ui/PageHero";
import ServiceCard from "../components/ui/ServiceCard";
import CtaBand from "../components/ui/CtaBand";
import { services, SERVICE_CATEGORIES } from "../data/services";

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our services" subtitle="Tax resolution, accounting and planning under one roof." />
      {Object.entries(SERVICE_CATEGORIES).map(([key, label], index) => (
        <section key={key} className={`section ${index % 2 ? "section--white" : ""}`}>
          <div className="container">
            <h2>{label}</h2>
            <div className="grid">
              {services.filter((s) => s.category === key).map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}

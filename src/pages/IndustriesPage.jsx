import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";
import { industries } from "../data/industries";

export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries we serve" subtitle="Specialized tax and accounting knowledge for regulated and complex businesses." />
      <section className="section">
        <div className="container grid">
          {industries.map((name) => (
            <div className="card" key={name}>
              <h3>{name}</h3>
              <p>Tax planning, compliance and IRS representation built around the rules of the {name.toLowerCase()} sector.</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

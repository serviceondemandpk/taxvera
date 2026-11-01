import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";
import { faqs } from "../data/content";

export default function FaqPage() {
  return (
    <>
      <PageHero title="Frequently asked questions" />
      <section className="section">
        <div className="container faq">
          {faqs.map((item) => (
            <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

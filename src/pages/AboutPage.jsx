import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";

const values = [
  { title: "Honest advice", text: "If a simpler or cheaper route fits you better, we will tell you." },
  { title: "Clear communication", text: "You always know where your case stands and what happens next." },
  { title: "Tax-focused support", text: "Get help with tax resolution, filing, planning, and accounting." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About us" subtitle="Tax and accounting support for individuals and businesses." />
      <section className="section">
        <div className="container">
          <h2>A team dedicated to tax</h2>
          <p>We help individuals and small businesses address tax issues, stay organized, and make informed decisions about what comes next.</p>
          <div className="grid" style={{ marginTop: "var(--space-3)" }}>
            {values.map((v) => <div className="card" key={v.title}><h3>{v.title}</h3><p>{v.text}</p></div>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

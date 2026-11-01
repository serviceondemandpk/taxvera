import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";

export default function NotFoundPage() {
  return (
    <>
      <PageHero title="Page not found" subtitle="The page you are looking for does not exist." />
      <section className="section"><div className="container"><Link to="/" className="btn btn--primary">Back to home</Link></div></section>
    </>
  );
}

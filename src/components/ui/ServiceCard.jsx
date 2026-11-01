import { Link } from "react-router-dom";
import Icon from "./Icon";
import { serviceIcons } from "../../data/serviceIcons";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="card">
      <div className="icon-badge"><Icon name={serviceIcons[service.slug] ?? "shield"} /></div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <span className="card__link">Learn more</span>
    </Link>
  );
}

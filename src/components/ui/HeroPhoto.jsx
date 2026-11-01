import Icon from "./Icon";

export default function HeroPhoto({ src }) {
  return (
    <div className="hero-visual">
      <img className="hero-visual__image" src={src} alt="A tax advisor discussing documents with a client" fetchPriority="high" />
      <div className="hero-visual__note">
        <span className="icon-badge"><Icon name="shield" /></span>
        <div><strong>Support built around you</strong><span>Clear guidance, one step at a time</span></div>
      </div>
    </div>
  );
}

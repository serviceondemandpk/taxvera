import Icon from "./Icon";

/** Shows a real photo when `src` is provided (see siteConfig.images), otherwise a branded panel. */
export default function MediaPanel({ src, alt, fallbackValue, fallbackText }) {
  return (
    <div className="media-panel">
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="media-panel__fallback">
          <Icon name="award" />
          <strong>{fallbackValue}</strong>
          <p>{fallbackText}</p>
        </div>
      )}
    </div>
  );
}

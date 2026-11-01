import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig, navLinks } from "../../config/siteConfig";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Serving clients across the {siteConfig.serviceArea}</span>
          <a href={siteConfig.phoneHref}>Call now: {siteConfig.phone}</a>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <Link to="/" className="brand" onClick={closeMenu}>{siteConfig.name}</Link>
          <button className="nav-toggle" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((v) => !v)}>
            Menu
          </button>
          <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`} aria-label="Main">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn--primary" onClick={closeMenu}>Request a consultation</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

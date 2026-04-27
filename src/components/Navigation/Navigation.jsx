import { useEffect, useState } from "react";
import BlindSquirrelLogo from "../../assets/blind-squirrel-logo.png";
import "./navigation.scss";
import WaveBackground from "../../assets/header-wave.svg";
import HamburgerIcon from "../../assets/hamburger-icon.png";

const NavLinks = ({ items, className, onClick, showContact = false }) => (
  <ul className={className}>
    {items?.map((item) => (
      <li key={item.href}>
        <a href={item.href} onClick={onClick}>
          {item.label}
        </a>
      </li>
    ))}
    {showContact && (
      <li>
        <a href="#contactUs" onClick={onClick}>
          Contact Us
        </a>
      </li>
    )}
  </ul>
);

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Careers", href: "#careers" },
  { label: "News", href: "#news" },
];

const Navigation = ({ isReady }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e) => {
      if (e.matches) setMobileMenuOpen(false);
    };

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`navigation ${isReady ? "navigation--loaded" : ""}`}>
      <div className="nav-bg-svg">
        <img src={WaveBackground} alt="Orange Wave Background" />
      </div>
      <div className="navigation__mobile-header">
        <img src={BlindSquirrelLogo} alt="Blind Squirrel Games Logo" />
        <button
          className="navigation__hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          type="button"
        >
          <img src={HamburgerIcon} alt="Hamburger Menu Icon" />
        </button>
      </div>
      <nav
        className={`navigation__mobile-menu ${mobileMenuOpen ? "navigation__mobile-menu--open" : ""}`}
      >
        <div className="navigation__mobile-menu-header">
          <img src={BlindSquirrelLogo} alt="Blind Squirrel Games Logo" />
          <button
            className="navigation__hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            <img src={HamburgerIcon} alt="Hamburger Menu Icon" />
          </button>
        </div>
        <NavLinks
          items={navigationItems}
          className="navigation__mobile-menu-links"
          showContact
          onClick={() => setMobileMenuOpen(false)}
        />
      </nav>

      <nav className="navigation__desktop-menu">
        <img src={BlindSquirrelLogo} alt="Blind Squirrel Games Logo" />

        <div className="navigation__desktop-menu-link-container">
          <NavLinks
            className="navigation__desktop-menu-links"
            items={navigationItems}
          />
          <button className="navigation__desktop-menu-cta" type="button">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

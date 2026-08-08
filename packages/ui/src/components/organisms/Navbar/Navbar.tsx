import React from "react";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../atoms/Button";
import "./Navbar.css";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo?: {
    brand?: string;
  };
  links: NavItem[];
  cta?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  sticky?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo = {
    brand: "YourBrand",
  },
  links = [],
  cta,
  sticky = false,
}) => {
  return (
    <header className={`navbar ${sticky ? "navbar--sticky" : ""}`.trim()}>
      <div className="navbar__container">
        <div className="navbar__brand">
          <Logo brand={logo.brand} size="sm" />
        </div>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={`${link.label}-${link.href}`} className="navbar__item">
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {cta && (
          <div className="navbar__cta">
            <Button
              variant="primary"
              size="sm"
              onClick={cta.onClick}
              type="button"
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

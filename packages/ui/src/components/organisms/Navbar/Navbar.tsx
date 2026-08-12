import React from "react";
import "./Navbar.css";

export interface NavbarLogo {
  src?: string;
  alt?: string;
  brand?: string;
}

export interface NavbarProps {
  className?: string;
  logo?: NavbarLogo;
}

export const Navbar: React.FC<NavbarProps> = ({
  className = "",
  logo = {},
}) => {
  const brandName = logo.brand ?? "Cup&Commit";
  const logoSrc = logo.src ?? "/Logo.png";
  const logoAlt = logo.alt ?? brandName;

  return (
    <header className={`navbar ${className}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__brand">
          <img src={logoSrc} alt={logoAlt} className="navbar__logo" />
          <span>{brandName}</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

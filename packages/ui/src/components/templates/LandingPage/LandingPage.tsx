import React from "react";

import { Navbar } from "../../organisms/Navbar";
import type { NavbarProps } from "../../organisms/Navbar";

import { Hero } from "../../organisms/Hero";
import type { HeroProps } from "../../organisms/Hero";

import { Footer } from "../../organisms/Footer";
import type { FooterProps } from "../../organisms/Footer";

import "./LandingPage.css";

export interface LandingPageProps {
  navbar: NavbarProps;
  hero: HeroProps;
  footer: FooterProps;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  navbar,
  hero,
  footer,
}) => {
  // Ensure the hero image always points to your local Sajid.png
  const modifiedHero = {
    ...hero,
    image: {
      ...hero.image,
      src: "/Sajid.png",
      alt: "Muhammad Sajid",
    },
  };

  return (
    <div className="landing-page">
      <Navbar {...navbar} />

      <main className="landing-page__main">
        <Hero {...modifiedHero} />
      </main>

      <Footer {...footer} />
    </div>
  );
};

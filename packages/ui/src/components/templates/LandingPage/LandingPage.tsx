import React from "react";

import { Navbar } from "../../organisms/Navbar/Navbar";
import { Hero } from "../../organisms/Hero/Hero";
import { Footer } from "../../organisms/Footer/Footer";

import "./LandingPage.css";

export interface LandingPageProps {
  className?: string;
  navbar?: React.ComponentProps<typeof Navbar>;
  hero?: React.ComponentProps<typeof Hero>;
  footer?: React.ComponentProps<typeof Footer>;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  className = "",
  navbar,
  hero,
  footer,
}) => {
  return (
    <div className={`landing-page ${className}`}>
      <div className="landing-page__hero-section">
        <Navbar {...navbar} />

        <main className="landing-page__main">
          <Hero {...hero} />
        </main>
      </div>

      <Footer {...footer} />
    </div>
  );
};

export default LandingPage;
//updated

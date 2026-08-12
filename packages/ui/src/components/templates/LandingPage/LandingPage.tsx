import React from "react";

import { Navbar } from "../../organisms/Navbar/Navbar";
import { Hero } from "../../organisms/Hero/Hero";
import { Footer } from "../../organisms/Footer/Footer";

import "./LandingPage.css";

export interface LandingPageProps {
  className?: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({ className = "" }) => {
  return (
    <div className={`landing-page ${className}`}>
      {/* =====================================================
          HEADER + HERO VISUAL SECTION
          ===================================================== */}
      <div className="landing-page__hero-section">
        <Navbar />

        <main className="landing-page__main">
          <Hero />
        </main>
      </div>

      {/* =====================================================
          FOOTER
          ===================================================== */}
      <Footer />
    </div>
  );
};

export default LandingPage;

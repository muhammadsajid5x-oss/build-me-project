import React from "react";

import { HeroContent } from "../HeroContent/HeroContent";
import { HeroImage } from "../HeroImage/HeroImage";
import { ImpactCard } from "../ImpactCard/ImpactCard";

import "./Hero.css";

export interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <main className={`hero ${className}`}>
      <div className="hero__inner">
        <HeroContent />

        <div className="hero__visual">
          <HeroImage />
          <ImpactCard />
        </div>
      </div>
    </main>
  );
};

export default Hero;

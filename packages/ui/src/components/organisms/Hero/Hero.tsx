import React from "react";

import { HeroContent } from "../HeroContent/HeroContent";
import { HeroImage } from "../HeroImage/HeroImage";
import { ImpactCard } from "../ImpactCard/ImpactCard";

import "./Hero.css";

export interface HeroProps {
  className?: string;
  content?: React.ComponentProps<typeof HeroContent>;
}

export const Hero: React.FC<HeroProps> = ({ className = "", content }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="hero__inner">
        <HeroContent {...content} />

        <div className="hero__visual">
          <HeroImage />
          <ImpactCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;

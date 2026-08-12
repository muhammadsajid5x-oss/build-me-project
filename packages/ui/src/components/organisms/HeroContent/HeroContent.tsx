import React from "react";
import "./HeroContent.css";

export interface HeroContentProps {
  className?: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({ className = "" }) => {
  return (
    <div className={`hero-content ${className}`}>
      <div className="hero-content__badge">TECHNOLOGY OWNERSHIP</div>

      <h1 className="hero-content__title" style={{ whiteSpace: "nowrap" }}>
        <span>Build Better</span>
        <span className="hero-content__blue"> Digital Experiences </span>
      </h1>

      <h2 className="hero-content__subtitle">
        Simple, fast, and beautiful platforms that win and get real results
      </h2>

      <p className="hero-content__description">
        Websites and apps that are easy to use, look great, and work fast. Get
        more customers with ease.
        <br />
        No stress, no confusion — just simple, reliable solutions that help you
        grow.
      </p>
    </div>
  );
};

export default HeroContent;

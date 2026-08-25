import React from "react";
import "./HeroContent.css";

export interface HeroContentProps {
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  badge = "TECHNOLOGY OWNERSHIP",
  titlePrefix = "Build Better",
  titleHighlight = "Digital Experiences",
  subtitle = "Simple, fast, and beautiful platforms that win and get real results",
  description = (
    <>
      Websites and apps that are easy to use, look great, and work fast. Get
      more customers with ease.
      <br />
      No stress, no confusion — just simple, reliable solutions that help you
      grow.
    </>
  ),
  className = "",
}) => {
  return (
    <div className={`hero-content ${className}`}>
      <div className="hero-content__badge">{badge}</div>

      <h1 className="hero-content__title" style={{ whiteSpace: "nowrap" }}>
        <span>{titlePrefix}</span>
        <span className="hero-content__blue"> {titleHighlight} </span>
      </h1>

      <h2 className="hero-content__subtitle">{subtitle}</h2>

      <p className="hero-content__description">{description}</p>
    </div>
  );
};

export default HeroContent;
//updated

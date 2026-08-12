import React from "react";
import "./HeroImage.css";

export interface HeroImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  src = "/Sajid.png",
  alt = "Engineering professional working with technology",
  className = "",
}) => {
  return (
    <div className={`hero-image ${className}`}>
      {/* CSS CURVE ONLY */}
      <div className="hero-image__curve" />

      {/* NORMAL RECTANGULAR DIGITAL IMAGE */}
      <img
        className="hero-image__digital-background"
        src="/Digital.png"
        alt=""
        aria-hidden="true"
      />

      {/* PERSON */}
      <div className="hero-image__photo">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default HeroImage;

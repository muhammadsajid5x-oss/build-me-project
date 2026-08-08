import React from "react";
import { Avatar } from "../../atoms/Avatar";
import "./HeroImage.css";

export interface HeroImageProps {
  avatar: {
    src: string;
    alt: string;
  };
  showDecoration?: boolean;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  avatar,
  showDecoration = true,
}) => {
  return (
    <div className="hero-image-container">
      {showDecoration && (
        <div className="hero-image__decorations">
          <div className="hero-image__circle hero-image__circle--outer" />
          <div className="hero-image__circle hero-image__circle--inner" />
          <div className="hero-image__glow" />
        </div>
      )}

      <div className="hero-image__avatar-wrapper">
        <Avatar
          src={avatar.src}
          alt={avatar.alt}
          size="xl"
          className="hero-image__avatar"
        />
      </div>
    </div>
  );
};

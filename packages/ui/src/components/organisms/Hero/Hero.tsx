import React from "react";

import { HeroContent } from "../HeroContent";
import type { HeroContentData } from "../HeroContent";

import { HeroImage } from "../HeroImage";
import type { HeroImageProps } from "../HeroImage";

import { ImpactCard } from "../ImpactCard";
import type { Metric } from "../ImpactCard";

import "./Hero.css";

export interface HeroProps {
  content: HeroContentData;
  image: HeroImageProps & { src?: string; alt?: string };
  metrics: Metric[];
}

export const Hero: React.FC<HeroProps> = ({ content, image, metrics }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Column 1: Content */}
        <div className="hero__content-wrapper">
          <HeroContent data={content} />
        </div>

        {/* Column 2: Image & Background Bloom */}
        <div className="hero__image-wrapper">
          <div className="hero__visual-background" />
          <HeroImage
            {...(image as any)}
            src={image?.src || "/Sajid.png"}
            alt={image?.alt || "Muhammad Sajid"}
          />
        </div>

        {/* Column 3: Metrics & Impact Header */}
        <div className="hero__metrics-wrapper">
          <div className="hero-impact-header">
            <span className="hero-impact-title">My Impact in Action</span>
            <svg
              className="hero-impact-arrow"
              viewBox="0 0 100 60"
              fill="none"
              width="60"
              height="35"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M10 15 Q 55 -15, 88 42" strokeLinecap="round" />
              <path
                d="M75 35 L90 44 L82 54"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ImpactCard metrics={metrics} />
        </div>
      </div>
    </section>
  );
};

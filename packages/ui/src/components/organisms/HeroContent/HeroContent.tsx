import React from "react";
import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";
import "./HeroContent.css";

export interface HeroAction {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface HeroContentData {
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
}

export interface HeroContentProps {
  data: HeroContentData;
}

export const HeroContent: React.FC<HeroContentProps> = ({ data }) => {
  const {
    badge,
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
  } = data;

  return (
    <div className="hero-content">
      {badge && <Badge text={badge} />}

      <div className="hero-content__headings">
        <h1 className="hero-content__title">
          {title}

          {subtitle && (
            <span className="hero-content__subtitle">{subtitle}</span>
          )}
        </h1>
      </div>

      <p className="hero-content__description">{description}</p>

      {(primaryAction || secondaryAction) && (
        <div className="hero-content__actions">
          {primaryAction && (
            <Button
              size="lg"
              rightIcon="arrow-right"
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          )}

          {secondaryAction && (
            <Button
              variant="outline"
              size="lg"
              leftIcon="play"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

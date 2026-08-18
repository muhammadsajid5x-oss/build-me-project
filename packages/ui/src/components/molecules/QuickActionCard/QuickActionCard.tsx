import React from "react";
import { Icon } from "../../atoms/Icon";
import type { IconName } from "../../atoms/Icon";
import "./QuickActionCard.css";

export interface QuickActionCardProps {
  icon: IconName;
  title: string;
  description: string;
  href?: string;
  variant?: "default" | "outlined";
  clickable?: boolean;
  onClick?: () => void;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon,
  title,
  description,
  href,
  variant = "default",
  clickable = true,
  onClick,
}) => {
  const Component = href ? "a" : "div";

  const props = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Component
      {...props}
      onClick={onClick}
      className={`quick-action-card quick-action-card--${variant} ${
        clickable ? "quick-action-card--clickable" : ""
      }`}
    >
      <div className="quick-action-card__icon-wrapper">
        <Icon name={icon} size={22} className="quick-action-card__icon" />
      </div>

      <div className="quick-action-card__content">
        <h4 className="quick-action-card__title">{title}</h4>

        <p className="quick-action-card__description">{description}</p>
      </div>

      {clickable && (
        <div className="quick-action-card__arrow-wrapper">
          <Icon
            name="arrow-right"
            size={18}
            className="quick-action-card__arrow"
          />
        </div>
      )}
    </Component>
  );
};
export default QuickActionCard;

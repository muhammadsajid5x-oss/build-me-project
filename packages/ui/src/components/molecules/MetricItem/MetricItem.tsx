import React from "react";
import { Icon } from "../../atoms/Icon";
import type { IconName } from "../../atoms/Icon";
import "./MetricItem.css";

export interface MetricItemProps {
  icon: IconName;
  title: string;
  description: string;
  variant?: "default" | "highlight";
}

export const MetricItem: React.FC<MetricItemProps> = ({
  icon,
  title,
  description,
  variant = "default",
}) => {
  return (
    <div className={`metric-item metric-item--${variant}`}>
      <div className="metric-item__icon-wrapper">
        <Icon name={icon} size={24} className="metric-item__icon" />
      </div>
      <div className="metric-item__content">
        <h4 className="metric-item__title">{title}</h4>
        <p className="metric-item__description">{description}</p>
      </div>
    </div>
  );
};

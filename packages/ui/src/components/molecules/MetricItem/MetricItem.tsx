import React from "react";
import { Icon } from "../../atoms/Icon";
import type { IconName } from "../../atoms/Icon";
import "./MetricItem.css";

export interface MetricItemProps {
  icon: IconName;
  title: string;
  description: string;
  variant?: "default" | "highlight";
  className?: string;
}

export const MetricItem: React.FC<MetricItemProps> = ({
  icon,
  title,
  description,
  variant = "default",
  className = "",
}) => {
  return (
    <div
      className={["metric-item", `metric-item--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="metric-item__icon">
        <Icon name={icon} size={22} />
      </div>

      <div className="metric-item__content">
        <div className="metric-item__title">{title}</div>
        <div className="metric-item__description">{description}</div>
      </div>
    </div>
  );
};

export default MetricItem;

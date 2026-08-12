import React from "react";
import { Icon } from "../../atoms/Icon";
import "./ImpactCard.css";

export interface ImpactMetric {
  value: string;
  label: string;
  icon: "shield" | "rocket" | "dollar" | "star";
}

export interface ImpactCardProps {
  className?: string;
  metrics?: ImpactMetric[];
}

const defaultMetrics: ImpactMetric[] = [
  {
    value: "99.9%",
    label: "System Reliability",
    icon: "shield",
  },
  {
    value: "Faster",
    label: "Time to Market",
    icon: "rocket",
  },
  {
    value: "Lower",
    label: "Operational Costs",
    icon: "dollar",
  },
  {
    value: "Stronger",
    label: "Security & Trust",
    icon: "shield",
  },
];

export const ImpactCard: React.FC<ImpactCardProps> = ({
  className = "",
  metrics = defaultMetrics,
}) => {
  return (
    <aside className={`impact-card ${className}`}>
      <div className="impact-card__annotation">
        <span>My Impact in Action</span>
        <span className="impact-card__arrow">↘</span>
      </div>

      <div className="impact-card__body">
        {metrics.map((metric, index) => (
          <div
            key={`${metric.value}-${metric.label}`}
            className={[
              "impact-card__metric",
              index === metrics.length - 1 ? "impact-card__metric--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="impact-card__icon">
              <Icon name={metric.icon} size={24} color="#1759d4" />
            </div>

            <div className="impact-card__text">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ImpactCard;

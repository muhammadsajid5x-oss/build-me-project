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
        <span className="impact-card__annotation-text">
          My Impact in Action
        </span>

        <svg
          className="impact-card__arrow"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7 8 C30 8, 52 15, 60 34 C65 46, 64 58, 56 69"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <path
            d="M47 62 L56 70 L63 59"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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

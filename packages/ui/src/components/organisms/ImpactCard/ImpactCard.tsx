import React from "react";
import { Divider } from "../../atoms/Divider";
import { MetricItem } from "../../molecules/MetricItem";
import type { IconName } from "../../atoms/Icon";
import "./ImpactCard.css";

export interface Metric {
  icon: IconName;
  title: string;
  description: string;
  variant?: "default" | "highlight";
}

export interface ImpactCardProps {
  metrics: Metric[];
}

export const ImpactCard: React.FC<ImpactCardProps> = ({ metrics = [] }) => {
  return (
    <div className="impact-card">
      {metrics.length === 0 ? (
        <div className="impact-card__empty">No metrics available</div>
      ) : (
        metrics.map((metric, index) => (
          <React.Fragment key={`${metric.title}-${index}`}>
            <MetricItem
              icon={metric.icon}
              title={metric.title}
              description={metric.description}
              variant={metric.variant ?? "default"}
            />

            {index !== metrics.length - 1 && (
              <Divider className="impact-card__divider" />
            )}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

import React from "react";
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
    icon: "star",
  },
];

/* =========================================================
   IMPACT ICONS
   ========================================================= */

const ImpactIcon: React.FC<{
  type: ImpactMetric["icon"];
}> = ({ type }) => {
  /* -------------------------------------------------------
     SHIELD + CHECK
     ------------------------------------------------------- */

  if (type === "shield") {
    return (
      <svg
        className="impact-card__svg"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 3.5L26 7.3V14.8C26 21.1 21.9 26.7 16 28.5C10.1 26.7 6 21.1 6 14.8V7.3L16 3.5Z"
          fill="#1759D4"
        />

        <path
          d="M11.2 15.8L14.3 18.7L21 11.9"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* -------------------------------------------------------
     ROCKET
     ------------------------------------------------------- */

  if (type === "rocket") {
    return (
      <svg
        className="impact-card__svg"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20.9 5.2C23.5 3.1 26.1 2.5 28.4 3.1C29 5.4 28.4 8 26.3 10.6L18.5 18.4L13.1 13L20.9 5.2Z"
          fill="#1759D4"
        />

        <path d="M13.1 13L9.2 13.8L7 16L13.7 18.3" fill="#1759D4" />

        <path d="M18.5 18.4L17.7 22.3L15.5 24.5L13.2 17.8" fill="#1759D4" />

        <circle cx="22.8" cy="8.7" r="2.2" fill="#ffffff" />

        <path
          d="M9.8 21.2C8.7 22.1 7.7 23.5 7.4 25.2C9.1 24.9 10.5 23.9 11.4 22.8"
          stroke="#1759D4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* -------------------------------------------------------
     LOWER / PERSON + COIN
     ------------------------------------------------------- */

  if (type === "dollar") {
    return (
      <svg
        className="impact-card__svg"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Person */}
        <circle cx="12" cy="8.5" r="3.2" fill="#1759D4" />

        <path
          d="M6.5 20.5C6.5 15.9 8.5 13.2 12 13.2C15.5 13.2 17.5 15.9 17.5 20.5V22H6.5V20.5Z"
          fill="#1759D4"
        />

        {/* Coin */}
        <circle cx="22.3" cy="21.5" r="6.3" fill="#1759D4" />

        <path
          d="M22.3 17.7V25.3"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M24.3 19.2C23.9 18.7 23.3 18.4 22.4 18.4C21.3 18.4 20.5 19 20.5 19.8C20.5 20.7 21.3 21 22.4 21.3C23.5 21.6 24.3 21.9 24.3 22.8C24.3 23.7 23.5 24.3 22.3 24.3C21.4 24.3 20.7 24 20.2 23.4"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Small connection */}
        <path
          d="M15.8 17.5L18 19"
          stroke="#1759D4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* -------------------------------------------------------
     SHIELD + STAR
     ------------------------------------------------------- */

  return (
    <svg
      className="impact-card__svg"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 3.5L26 7.3V14.8C26 21.1 21.9 26.7 16 28.5C10.1 26.7 6 21.1 6 14.8V7.3L16 3.5Z"
        fill="#1759D4"
      />

      <path
        d="M16 9L17.9 12.8L22.1 13.4L19 16.3L19.8 20.5L16 18.5L12.2 20.5L13 16.3L9.9 13.4L14.1 12.8L16 9Z"
        fill="#ffffff"
      />
    </svg>
  );
};

/* =========================================================
   COMPONENT
   ========================================================= */

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
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 5
       C18 5 34 8 43 17
       C51 25 52 37 48 49"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          <path
            d="M42 44
       L48 50
       L53 43"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="impact-card__body">
        {metrics.map((metric, index) => (
          <div
            key={`${metric.value}-${metric.label}`}
            className={`impact-card__metric ${
              index === metrics.length - 1 ? "impact-card__metric--last" : ""
            }`}
          >
            <div className="impact-card__icon">
              <ImpactIcon type={metric.icon} />
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

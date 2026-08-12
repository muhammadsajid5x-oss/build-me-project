import React from "react";

import "./Badge.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  variant?: "primary" | "secondary";
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`} {...props}>
      {text}
    </span>
  );
};

export default Badge;

import React from "react";

import "./Divider.css";

export interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export const Divider: React.FC<DividerProps> = ({
  className = "",
  orientation = "horizontal",
}) => {
  if (orientation === "vertical") {
    return (
      <span
        className={`divider divider--vertical ${className}`}
        aria-hidden="true"
      />
    );
  }

  return <hr className={`divider divider--horizontal ${className}`} />;
};

export default Divider;

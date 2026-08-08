import React from "react";
import "./Divider.css";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  color?: string;
  spacing?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  color,
  spacing,
  className = "",
  ...props
}) => {
  const colorClass = color === "light" ? "bg-slate-700" : "";
  const spacingClass = spacing === "lg" ? "my-6" : "";

  return (
    <hr
      aria-orientation={orientation}
      className={[
        "divider",
        `divider-${orientation}`,
        orientation === "horizontal" ? "w-full" : "",
        colorClass,
        spacingClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
};

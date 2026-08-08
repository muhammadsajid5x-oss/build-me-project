import React from "react";
import "./Icon.css";

import { iconMap, IconName } from "./icons";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color,
  className = "",
  ...props
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <span
      className={`bm-icon ${className}`}
      style={{
        width: size,
        height: size,
        color,
      }}
    >
      <IconComponent
        width={size}
        height={size}
        stroke={color}
        size={size}
        strokeWidth={2}
        aria-hidden="true"
        {...props}
      />
    </span>
  );
};

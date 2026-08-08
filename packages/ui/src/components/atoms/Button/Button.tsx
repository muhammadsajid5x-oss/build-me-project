import React from "react";
import { Icon, IconName } from "../Icon";
import "./Button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  type = "button",
  ...props
}) => {
  let iconSize: number;
  if (size === "sm") {
    iconSize = 12;
  } else if (size === "lg") {
    iconSize = 16;
  } else {
    iconSize = 14;
  }

  let variantClass = "";
  if (variant === "secondary") {
    variantClass = "bg-slate-800";
  } else if (variant === "outline") {
    variantClass = "border";
  }

  let sizeClass = "";
  if (size === "sm") {
    sizeClass = "h-9";
  } else if (size === "lg") {
    sizeClass = "h-12";
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={[
        "button",
        `button--${variant}`,
        `button--${size}`,
        variantClass,
        sizeClass,
        fullWidth ? "button--full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {loading && (
        <Icon
          name="rocket"
          size={iconSize}
          className="button__icon button__icon--loading"
        />
      )}

      {!loading && leftIcon && (
        <Icon name={leftIcon} size={iconSize} className="button__icon" />
      )}

      <span>{children}</span>

      {!loading && rightIcon && (
        <Icon name={rightIcon} size={iconSize} className="button__icon" />
      )}
    </button>
  );
};

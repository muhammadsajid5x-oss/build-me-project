import React from "react";
import "./Logo.css";
export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  brand?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}
export const Logo: React.FC<LogoProps> = ({
  brand = "YourBrand",
  showText = true,
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <div className={`logo logo--${size} ${className}`.trim()} {...props}>
      <div className="logo__icon" aria-hidden="true">
        <svg
          className="logo__svg"
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      {showText && <span className="logo__text">{brand}</span>}
    </div>
  );
};

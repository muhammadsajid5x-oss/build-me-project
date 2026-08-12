import React from "react";

import "./Avatar.css";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "lg",
  className = "",
  ...props
}) => {
  return (
    <div className={`avatar avatar-${size}`}>
      <img
        src={src}
        alt={alt}
        className={`avatar-image ${className}`}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default Avatar;

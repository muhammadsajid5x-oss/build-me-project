import React from "react";
import { Icon } from "../../atoms/Icon";
import type { IconName } from "../../atoms/Icon";
import "./SocialIcon.css";
export interface SocialIconProps {
  platform: "linkedin" | "x" | "facebook" | "instagram" | "youtube";
  href?: string;
  size?: "sm" | "md" | "lg";
  target?: "_self" | "_blank";
}
const platformIconMap: Record<string, IconName> = {
  linkedin: "linkedin" as IconName,
  x: "x" as IconName,
  facebook: "facebook" as IconName,
  instagram: "instagram" as IconName,
  youtube: "youtube" as IconName,
};
export const SocialIcon: React.FC<SocialIconProps> = ({
  platform,
  href,
  size = "md",
  target = "_blank",
}) => {
  const iconName = platformIconMap[platform] || "globe";
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`social-icon social-icon--${size}`}
      aria-label={`Visit ${platform}`}
    >
      <Icon name={iconName} className="social-icon__svg" />
    </a>
  );
};

export default SocialIcon;

import React from "react";
import { Icon } from "../../atoms/Icon";
import "./Footer.css";

export interface SocialLink {
  platform:
    | "linkedin"
    | "x"
    | "facebook"
    | "instagram"
    | "youtube"
    | (string & {});
  href: string;
}

export interface QuickAction {
  icon: "share" | "gift" | "info";
  title: string;
  description: string;
  href?: string;
}

export interface FooterProps {
  className?: string;
  socialLinks?: SocialLink[];
  quickActions?: QuickAction[];
  copyright?: string;
  subCopyright?: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    href: "#",
  },
  {
    platform: "x",
    href: "#",
  },
  {
    platform: "facebook",
    href: "#",
  },
  {
    platform: "instagram",
    href: "#",
  },
  {
    platform: "youtube",
    href: "#",
  },
];

const defaultQuickActions: QuickAction[] = [
  {
    icon: "share",
    title: "Share This Page",
    description: "Spread value. Inspire others.",
    href: "#",
  },
  {
    icon: "gift",
    title: "Give Referrals",
    description: "Help others grow with us.",
    href: "#",
  },
  {
    icon: "info",
    title: "About Us",
    description: "Who we are and what we do.",
    href: "#",
  },
];

const getSocialIconName = (
  platform: string,
): "linkedin" | "x" | "facebook" | "instagram" | "youtube" | "info" => {
  switch (platform) {
    case "linkedin":
      return "linkedin";

    case "x":
      return "x";

    case "facebook":
      return "facebook";

    case "instagram":
      return "instagram";

    case "youtube":
      return "youtube";

    default:
      return "info";
  }
};

export const Footer: React.FC<FooterProps> = ({
  className = "",
  socialLinks = defaultSocialLinks,
  quickActions = defaultQuickActions,
  copyright = "© 2025 Cup&Commit. All rights reserved.",
  subCopyright = "Innovate. Collaborate. Grow Together.",
}) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer__inner">
        {/* Social */}
        <section className="footer__social">
          <h3>Follow Us</h3>

          <div className="footer__social-list">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                className={`footer__social-link footer__social-link--${social.platform}`}
                aria-label={`Visit ${social.platform}`}
              >
                <Icon
                  name={getSocialIconName(social.platform)}
                  size={17}
                  color="#ffffff"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <div className="footer__actions">
          {quickActions.map((action) => {
            const isReferral = action.title === "Give Referrals";

            const content = (
              <>
                <div
                  className={`footer__action-icon ${
                    isReferral ? "footer__action-icon--green" : ""
                  }`}
                >
                  <Icon
                    name={action.icon}
                    size={30}
                    color={isReferral ? "#22a447" : "#2463e8"}
                  />
                </div>

                <div className="footer__action-text">
                  <strong
                    className={isReferral ? "footer__action-title--green" : ""}
                  >
                    {action.title}
                  </strong>

                  <span>{action.description}</span>
                </div>
              </>
            );

            return action.href ? (
              <a
                key={action.title}
                href={action.href}
                className={`footer__action footer__action--${action.icon}`}
              >
                {content}
              </a>
            ) : (
              <div
                key={action.title}
                className={`footer__action footer__action--${action.icon}`}
              >
                {content}
              </div>
            );
          })}

          {/* Copyright */}
          <div className="footer__copyright-section">
            <div className="footer__copyright">
              <strong>{copyright}</strong>

              <span>{subCopyright}</span>
            </div>

            <div className="footer__handshake" aria-hidden="true">
              <svg
                width="43"
                height="43"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2463e8"
                strokeWidth="1.55"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                <path d="M8.5 11.5L11 14l5-5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

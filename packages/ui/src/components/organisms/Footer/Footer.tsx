import React from "react";
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

/* =========================================================
   SOCIAL ICONS
   ========================================================= */

const SocialIcon: React.FC<{
  platform: string;
}> = ({ platform }) => {
  switch (platform) {
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="footer__svg footer__svg--social"
        >
          <path
            fill="currentColor"
            d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 1 0 5.25 7.02 2.01 2.01 0 0 0 5.25 3ZM20.44 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.7v-6.59Z"
          />
        </svg>
      );

    case "x":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="footer__svg footer__svg--social footer__svg--x"
        >
          <path
            fill="currentColor"
            d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.27L2.8 2h6.4l4.42 5.85L18.9 2Zm-1.1 17.65h1.73L8.3 4.24H6.44L17.8 19.65Z"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="footer__svg footer__svg--social"
        >
          <path
            fill="currentColor"
            d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.92c0-.9.25-1.52 1.56-1.52h1.67V3.63c-.29-.04-1.28-.13-2.44-.13-2.42 0-4.08 1.48-4.08 4.2v2.2H8v3.1h2.2v8h3.3Z"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="footer__svg footer__svg--social"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="3.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17.3" cy="6.8" r="1.15" fill="currentColor" />
        </svg>
      );

    case "youtube":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="footer__svg footer__svg--social"
        >
          <path
            fill="currentColor"
            d="M21.58 7.19a2.84 2.84 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.58.49a2.84 2.84 0 0 0-2 2A29.3 29.3 0 0 0 1.93 12a29.3 29.3 0 0 0 .49 4.81 2.84 2.84 0 0 0 2 2c1.78.49 7.58.49 7.58.49s5.8 0 7.58-.49a2.84 2.84 0 0 0 2-2 29.3 29.3 0 0 0 .49-4.81 29.3 29.3 0 0 0-.49-4.81ZM10 15.5v-7l6 3.5-6 3.5Z"
          />
        </svg>
      );

    default:
      return null;
  }
};

/* =========================================================
   QUICK ACTION ICONS
   ========================================================= */

const QuickActionIcon: React.FC<{
  type: QuickAction["icon"];
}> = ({ type }) => {
  if (type === "share") {
    return (
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="footer__quick-svg footer__quick-svg--share"
      >
        <path
          d="M27 5 5 15.2l8.3 2.9L17 27 27 5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m13.3 18.1 8.9-8.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "gift") {
    return (
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="footer__quick-svg footer__quick-svg--gift"
      >
        <rect
          x="4.5"
          y="13"
          width="23"
          height="15"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <rect
          x="3"
          y="9"
          width="26"
          height="6"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path d="M16 9v19" fill="none" stroke="currentColor" strokeWidth="2" />

        <path
          d="M16 9H9.5C7.8 9 6.5 7.8 6.5 6.2 6.5 4.9 7.5 4 8.8 4c3.2 0 7.2 5 7.2 5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M16 9h6.5c1.7 0 3-1.2 3-2.8 0-1.3-1-2.2-2.3-2.2-3.2 0-7.2 5-7.2 5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <span className="footer__quick-info" aria-hidden="true">
      i
    </span>
  );
};

/* =========================================================
   FOOTER
   ========================================================= */

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
        {/* =================================================
            SOCIAL
        ================================================= */}

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
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </section>

        {/* =================================================
            QUICK ACTIONS
        ================================================= */}

        <div className="footer__actions">
          {quickActions.map((action) => {
            const isReferral = action.icon === "gift";
            const isInfo = action.icon === "info";

            const content = (
              <>
                <div
                  className={[
                    "footer__action-icon",
                    isReferral ? "footer__action-icon--green" : "",
                    isInfo ? "footer__action-icon--info" : "",
                  ].join(" ")}
                >
                  <QuickActionIcon type={action.icon} />
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

          {/* =================================================
              COPYRIGHT
          ================================================= */}

          <div className="footer__copyright-section">
            <div className="footer__copyright">
              <strong>{copyright}</strong>
              <span>{subCopyright}</span>
            </div>

            <div className="footer__handshake" aria-hidden="true">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 42.5 7.8 26.7C1.4 20.4 2.5 10.1 10 6.3c4.8-2.4 10.3-.8 14 3.3 3.7-4.1 9.2-5.7 14-3.3 7.5 3.8 8.6 14.1 2.2 20.4L24 42.5Z"
                  stroke="#2463E8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="m17.5 24.2 4.2 4.1 9.1-9"
                  stroke="#2463E8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

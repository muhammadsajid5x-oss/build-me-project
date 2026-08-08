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
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface FooterProps {
  className?: string;
  socialLinks?: SocialLink[];
  quickActions?: QuickAction[];
  copyright?: string;
}

export const Footer: React.FC<FooterProps> = ({
  className = "",
  socialLinks = [],
  quickActions = [],
  copyright = "© 2025 YourBrand. All rights reserved.",
}) => {
  return (
    <footer className={`footer-container ${className}`}>
      <div className="footer-inner">
        {/* Follow Us Section */}
        <div className="footer-col social-col">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-social-icons">
            {socialLinks.map((social) => {
              const platformName =
                social.platform.charAt(0).toUpperCase() +
                social.platform.slice(1);
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  className={`social-icon-btn ${social.platform}`}
                  aria-label={`Visit ${platformName}`}
                >
                  {/* Fallback or dynamic icons based on platform */}
                  {social.platform === "linkedin" && (
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.32a1.46 1.46 0 0 0-1.46 1.46c0 .8.66 1.46 1.46 1.46s1.46-.66 1.46-1.46c0-.81-.66-1.46-1.46-1.46Z" />
                    </svg>
                  )}
                  {social.platform === "x" && (
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.platform === "facebook" && (
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M12 2.04c-5.5 0-10 4.5-10 10 0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.98c4.78-.75 8.44-4.88 8.44-9.88 0-5.5-4.5-10-10-10Z" />
                    </svg>
                  )}
                  {social.platform === "instagram" && (
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.platform === "youtube" && (
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-divider" />

        {/* Quick Actions Sections */}
        {quickActions.map((action) => (
          <React.Fragment key={action.title}>
            <div className="footer-col action-col">
              <div
                className={`footer-icon-wrapper ${
                  action.title === "Give Referrals" ? "green-icon" : "blue-icon"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  width="28"
                  height="28"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="footer-text-content">
                <span
                  className={`col-title ${
                    action.title === "Give Referrals"
                      ? "green-title"
                      : "blue-title"
                  }`}
                >
                  {action.title}
                </span>
                <span className="col-desc">{action.description}</span>
              </div>
            </div>
            <div className="footer-divider" />
          </React.Fragment>
        ))}

        {/* Copyright & Tagline */}
        <div className="footer-col info-col">
          <div className="footer-text-content">
            <span className="col-title dark-title">{copyright}</span>
            <span className="col-desc">
              Innovate. Collaborate. Grow Together.
            </span>
          </div>
          <div className="footer-handshake-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="34" height="34">
              <path d="M19 7h-3V5.5C16 4.12 14.88 3 13.5 3h-3C9.12 3 8 4.12 8 5.5V7H5C3.34 7 2 8.34 2 10v2c0 1.66 1.34 3 3 3h1v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4h1c1.66 0 3-1.34 3-3v-2c0-1.66-1.34-3-3-3zM10 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V7h-4V5.5zm9 6.5c0 .55-.45 1-1 1h-2v-2h2c.55 0 1 .45 1 1zm-13-1c0-.55.45-1 1-1h2v2H6c-.55 0-1-.45-1-1zm11 9H8v-4h10v4z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

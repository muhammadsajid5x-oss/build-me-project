import React from "react";
import { LandingPage } from "@build-me/ui";
import { siteConfig } from "../../configs";

export default function Home() {
  const mergedProps = {
    ...siteConfig,
    navbar: {
      ...siteConfig.navbar,
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
  };

  return <LandingPage {...mergedProps} />;
}

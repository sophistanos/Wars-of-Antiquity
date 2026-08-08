"use client";

import { useState } from "react";
import { siteConfig } from "../config/site";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Nations", href: "#nations" },
  { label: "Events", href: "#events" },
  { label: "Staff", href: "#staff" },
  { label: "Theatre", href: "#theatre" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="navbar-shell">
        <a className="brand" href="#home" aria-label="Wars of Antiquity home">
          <span className="brand-mark">WoA</span>
          <span className="brand-text">Wars of Antiquity</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="discord-button"
            href={siteConfig.discordURL || "#"}
            aria-label="Community Discord"
          >
            {siteConfig.discordURL ? "Community" : "Community"}
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav-panel">
          {navLinks.map((link) => (
            <a key={link.label} className="mobile-nav-link" href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="mobile-discord" href={siteConfig.discordURL || "#"} onClick={() => setMobileOpen(false)}>
            Community
          </a>
        </div>
      )}
    </header>
  );
}

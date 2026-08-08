import { siteConfig } from "../config/site";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-background-image" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-kicker">The Republic of the Arena</div>
          <h1>Wars of Antiquity</h1>
          <p className="hero-subtitle">
            An ancient-world Roblox community built around rivalry, strategy,
            and the fate of rival nations.
          </p>
          <div className="hero-actions">
            <a
              className="primary-button"
              href={siteConfig.robloxURL || "#"}
              target={siteConfig.robloxURL ? "_blank" : undefined}
              rel={siteConfig.robloxURL ? "noopener noreferrer" : undefined}
            >
              Enter Wars of Antiquity
            </a>
            <a className="secondary-button" href="#nations">
              Explore the Nations
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="hero-panel">
            <div className="panel-label">The Hegemony</div>
            <div className="panel-title">Campaign</div>
            <div className="panel-rule" />
            <div className="panel-meta">
              <span>Rome</span>
              <span>Persia</span>
              <span>Sparta</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

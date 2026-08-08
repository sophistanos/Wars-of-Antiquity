export default function About() {
  const nations = [
    "Rome",
    "Macedonia",
    "Athens",
    "Sparta",
    "Persia",
    "Gaul",
    "Epirus",
    "Taras",
    "Thespiae",
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-copy">
          <div className="section-eyebrow">ABOUT WARS OF ANTIQUITY</div>
          <h2 className="about-title">An Ancient World. Your Story.</h2>
          <p className="about-text">
            Wars of Antiquity (WoA) is an ancient-world Roblox community.
            The community features an ancient-world setting and multiple
            nations/factions, including: Rome, Macedonia, Athens, Sparta,
            Persia, Gaul, Epirus, Taras, and Thespiae.
          </p>

          <div className="about-nations">
            {nations.map((nation) => (
              <span className="nation-pill" key={nation}>
                {nation}
              </span>
            ))}
          </div>

          <a className="about-link" href="#nations">
            Explore the Nations
          </a>
        </div>

        <aside className="about-image-panel" aria-label="Ancient world visual placeholder">
          <div className="about-image-frame">
            <div className="about-image-placeholder">
              <div className="place-label">The Ancient World</div>
              <div className="place-rule" />
              <div className="place-caption">Map / Field Archive</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

import Image from "next/image";
import { nations } from "../data/nations";

export default function Nations() {
  return (
    <section className="nations-section" id="nations">
      <div className="nations-content">
        <div className="nations-header">
          <div className="section-eyebrow">THE NATIONS</div>
          <h2 className="nations-title">Choose Your Allegiance</h2>
          <p className="nations-intro">
            Wars of Antiquity contains multiple ancient nations and factions,
            each with its own place in the wider ancient-world community.
          </p>
        </div>

        <div className="nation-grid">
          {nations.map((nation) => (
            <article className="nation-card" key={nation.id}>
              <div className="nation-image-wrap">
                {nation.image ? (
                  <Image className="nation-image" src={nation.image} alt="" width={600} height={300} />
                ) : (
                  <div className="nation-image-placeholder">
                    <span>{nation.name}</span>
                  </div>
                )}
              </div>

              <div className="nation-card-body">
                <div className="nation-emblem">
                  {nation.emblem || "✧"}
                </div>
                <h3 className="nation-name">{nation.name}</h3>
                <p className="nation-description">{nation.shortDescription}</p>
                <a className="nation-link" href="#">
                  View Nation
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { events } from "../data/events";

export default function Events() {
  return (
    <section className="events-section" id="events">
      <div className="events-content">
        <div className="events-header">
          <div className="section-eyebrow">EVENTS</div>
          <h2 className="events-title">Enter the Arena</h2>
          <p className="events-intro">
            Wars of Antiquity hosts events and competitions that bring its
            communities, nations, and factions together around shared
            ancient-world moments.
          </p>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-image-wrap">
                {event.image ? (
                  <Image className="event-image" src={event.image} alt="" width={600} height={300} />
                ) : (
                  <div className="event-image-placeholder">
                    <span>{event.name}</span>
                  </div>
                )}
              </div>

              <div className="event-card-body">
                <div className="event-card-top">
                  <div>
                    <h3 className="event-name">{event.name}</h3>
                    <div className="event-status">{event.status || "Status Pending"}</div>
                  </div>
                  <span className="event-date">{event.date || "Date TBD"}</span>
                </div>

                <div className="event-meta">
                  <span className="event-time">{event.time}</span>
                  <span className="event-prize">{event.prize}</span>
                  <span className="event-requirements">{event.requirements}</span>
                </div>

                <p className="event-description">{event.description || "Event details to be announced."}</p>

                {event.link ? (
                  <a className="event-action" href={event.link} target="_blank" rel="noopener noreferrer">
                    Event Details
                  </a>
                ) : (
                  <span className="event-action event-action-disabled">
                    Event Details
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

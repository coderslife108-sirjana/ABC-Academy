import { useEffect, useState } from "react";
import api from "../api";

export default function Notices() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.get("/notices"), api.get("/events")])
      .then(([n, e]) => {
        setNotices(n.data);
        setEvents(e.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (iso) => {
    const d = new Date(iso);
    return {
      day: d.getDate(),
      month: d.toLocaleString("en-US", { month: "short" }),
    };
  };

  return (
    <div className="notices-page">
      <div className="notice-board-col">
        <h2>Notice Board</h2>
        <div className="board">
          {loading && <p>Loading notices…</p>}
          {!loading && notices.length === 0 && <p>No notices posted yet.</p>}
          {notices.map((n) => {
            const { day, month } = formatDate(n.date);
            return (
              <div className="notice-item" key={n._id}>
                <div className="notice-date">
                  <span className="day">{day}</span>
                  <span className="month">{month}</span>
                </div>
                <p>{n.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="events-col">
        <h2>Events &amp; Achievements</h2>
        {events.map((e) => (
          <div
            key={e._id}
            className="event-card"
            style={{ backgroundImage: `url(${e.imageUrl})` }}
          >
            <span>{e.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

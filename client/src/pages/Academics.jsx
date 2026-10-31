import { useEffect, useState } from "react";
import api from "../api";

const curriculum = ["Primary Section", "Secondary Section", "Higher Secondary Section"];
const facilities = [
  "Library with 5,000+ books",
  "Modern Science & Computer Labs",
  "Interactive Smart Classrooms",
  "Sports Ground & Indoor Games",
  "Music, Art & Cultural Activities",
];
const quickLinks = ["Admission Form", "Syllabus & Routine", "Online Results", "Teachers Directory"];

export default function Academics() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    api.get("/gallery").then((res) => setGallery(res.data.slice(0, 3)));
  }, []);

  return (
    <div className="academics-page">
      <h2>Academics &amp; Facilities</h2>

      <div className="academics-grid">
        <div>
          <h3>Our Curriculum</h3>
          <ul>
            {curriculum.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Our Facilities</h3>
          <ul>
            {facilities.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Quick Links</h2>
      <div className="quick-links">
        {quickLinks.map((q) => (
          <div className="quick-link" key={q}>
            {q}
          </div>
        ))}
      </div>

      <h2>Our Gallery</h2>
      <p className="gallery-sub">A Glimpse into Life at ABC Academy</p>
      <div className="gallery-preview">
        {gallery.map((g) => (
          <img key={g._id} src={g.imageUrl} alt={g.caption || "Gallery"} />
        ))}
      </div>
    </div>
  );
}

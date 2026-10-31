import { useEffect, useState } from "react";
import api from "../api";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    api.get("/gallery").then((res) => setImages(res.data));
  }, []);

  return (
    <div className="gallery-page">
      <h2>Our Gallery</h2>
      <p className="gallery-sub">A Glimpse into Life at ABC Academy</p>
      <div className="gallery-grid">
        {images.map((g) => (
          <img key={g._id} src={g.imageUrl} alt={g.caption || "Gallery"} />
        ))}
        {images.length === 0 && <p>No images uploaded yet.</p>}
      </div>
    </div>
  );
}

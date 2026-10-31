import { useEffect, useState } from "react";
import api from "../api";

export default function Contact() {
  const [testimonials, setTestimonials] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    api.get("/testimonials").then((res) => setTestimonials(res.data));
  }, []);

  return (
    <div className="contact-page">
      <h2>What People Say</h2>
      {testimonials.length > 0 && (
        <div className="testimonial-card">
          <p className="quote-mark">&ldquo;</p>
          <p>{testimonials[active]?.quote}</p>
          <p className="testimonial-author">— {testimonials[active]?.author}</p>
          <div className="dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={i === active ? "dot active" : "dot"}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      )}

      <h2>Get in Touch</h2>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! (wire this up to an email/notification endpoint)");
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>ABC Academy</h3>
          <p>A welcoming place to learn, grow, and belong.</p>
          <p>Address: ABC Street, Murshidabad, 742304</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Email: info@abcacademy.com</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p><Link to="/about">About our school</Link></p>
          <p><Link to="/academics">Academics</Link></p>
          <p><Link to="/notices">Notices &amp; events</Link></p>
          <p><Link to="/gallery">School gallery</Link></p>
        </div>
        <div>
          <h3>Here to help</h3>
          <p>Questions about ABC Academy?</p>
          <p><Link to="/contact">Get in touch with our team</Link></p>
        </div>
      </div>
      <div className="footer-credit">
        Learning together. Growing together.
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} ABC Academy. All Rights Reserved.</p>
    </footer>
  );
}

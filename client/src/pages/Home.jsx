import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Welcome to ABC Academy</p>
          <h1>A place to learn, grow, and belong.</h1>
          <p className="hero-copy">
            We help every student discover their strengths, build confidence, and prepare for a
            bright future.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="hero-button">Discover our school</Link>
            <Link to="/academics" className="hero-button secondary">Explore academics</Link>
          </div>
        </div>
      </section>

      <section className="home-highlights" aria-label="What makes ABC Academy special">
        <div className="info-card">
          <span className="info-number">01</span>
          <h2>Room to thrive</h2>
          <p>A welcoming campus where students feel safe, supported, and ready to learn.</p>
        </div>
        <div className="info-card">
          <span className="info-number">02</span>
          <h2>Learning with purpose</h2>
          <p>Curiosity-led teaching that builds strong foundations and a love of discovery.</p>
        </div>
        <div className="info-card">
          <span className="info-number">03</span>
          <h2>More than lessons</h2>
          <p>Opportunities to explore creativity, teamwork, sports, and the arts.</p>
        </div>
      </section>

      <section className="school-story">
        <div className="story-stat">
          <strong>1990</strong>
          <span>Building brighter futures for generations</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Learning for life</p>
          <h2>Strong roots. Open minds. Bright futures.</h2>
          <p>
            Since 1990, ABC Academy has brought learning and opportunity to our community. We
            combine a supportive environment with a broad education that helps every student find
            their path.
          </p>
          <Link to="/about" className="text-link">Get to know our school <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="quote-card">
        <span className="quote-symbol" aria-hidden="true">“</span>
        <blockquote>
          At ABC Academy, we believe every child has the potential to achieve greatness. Our
          mission is to nurture knowledge, character, and the confidence to take on what comes next.
          <cite>— Headmaster Jack</cite>
        </blockquote>
      </section>
    </div>
  );
}

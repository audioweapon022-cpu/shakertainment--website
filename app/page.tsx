const sections = [
  ["01", "Home", "The vision starts here."],
  ["02", "Music", "Original sound, releases and collaborations."],
  ["03", "Videos & Cinematography", "Visual stories, music videos and moving images."],
  ["04", "Photography Portfolio", "Portraits, moments and visual storytelling."],
  ["05", "Community — YFM", "A culture of support, opportunity and upliftment."],
  ["06", "Photography Services", "Portraits, model shoots and professional photoshoots."],
  ["07", "Fashion Designs", "Personal style, original concepts and design."],
  ["08", "Shop", "Explore products and creative releases."],
  ["09", "Booking & Contact", "Collaborate, book a shoot or make an enquiry."],
  ["10", "About", "The mind and movement behind SHAKERTAINMENT."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">SHAKER<span>TAINMENT</span></a>
        <a className="nav-cta" href="#booking">WORK WITH US <b>↗</b></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-mark">S<span>/</span>T</div>
        <p className="eyebrow"><i /> INDEPENDENT CREATIVE HOUSE</p>
        <h1>ONE MIND.<br /><em>MULTIPLE</em><br />DIMENSIONS.</h1>
        <p className="intro">Music. Art. Fashion. Photography. Film.<br />
          One vision, expressed in many forms.</p>
        <div className="hero-actions">
          <a className="button button-red" href="#work">EXPLORE THE WORLD <span>↘</span></a>
          <a className="text-link" href="#about">DISCOVER SHAKERTAINMENT</a>
        </div>
        <div className="hero-bottom">
          <span>CREATIVE DIRECTION / CULTURE / EXPRESSION</span>
          <span>EST. BY SHAKER</span>
        </div>
      </section>

      <section className="statement">
        <p className="eyebrow">THE CREATIVE PHILOSOPHY</p>
        <h2>Not one lane.<br /><span>Every dimension.</span></h2>
        <p>SHAKERTAINMENT is a multidisciplinary creative platform built around sound, visuals, style and community. We create, document and move culture forward.</p>
      </section>

      <section className="work" id="work">
        <div className="section-head">
          <div><p className="eyebrow">ENTER THE UNIVERSE</p><h2>THE <span>10 DIMENSIONS</span></h2></div>
          <p>Choose a direction.<br />Explore the work.</p>
        </div>
        <div className="section-grid">
          {sections.map(([number, title, desc]) => (
            <a className="section-card" href={number === "09" ? "#booking" : number === "10" ? "#about" : "#contact"} key={number}>
              <span className="number">{number}</span>
              <div><h3>{title}</h3><p>{desc}</p></div>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="community">
        <p className="eyebrow">MORE THAN ENTERTAINMENT</p>
        <h2>YFM<span>.</span></h2>
        <p className="community-line">YOUNG FATHERS & MOTHERS</p>
        <p className="community-copy">A community-minded movement with a focus on encouragement, creative opportunity and support for people facing difficult circumstances.</p>
        <a className="button button-green" href="#contact">BE PART OF THE MOVEMENT <span>↗</span></a>
      </section>

      <section className="booking" id="booking">
        <div>
          <p className="eyebrow">LET'S CREATE SOMETHING</p>
          <h2>YOUR VISION.<br /><em>OUR NEXT</em><br />DIMENSION.</h2>
        </div>
        <div className="booking-side">
          <p>For bookings, collaborations, photography services, music and creative projects, get in touch.</p>
          <a className="button button-red" href="mailto:hello@shakertainment.co.za">MAKE AN ENQUIRY <span>↗</span></a>
          <p className="small-note">Replace this placeholder email with your official contact address before launch.</p>
        </div>
      </section>

      <footer id="about">
        <a className="brand" href="#top">SHAKER<span>TAINMENT</span></a>
        <p>MULTIDISCIPLINARY CREATIVE DIRECTOR.</p>
        <div className="footer-bottom" id="contact">
          <span>© {new Date().getFullYear()} SHAKERTAINMENT</span>
          <span>ONE MIND. MULTIPLE DIMENSIONS.</span>
          <span>RED / GREEN / CULTURE</span>
        </div>
      </footer>
    </main>
  );
}

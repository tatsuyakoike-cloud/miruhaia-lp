import { siteContent } from "../content/siteContent";
import "./Hero.css";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <img
        className="hero__bg-wave"
        src="/assets/miruhaia/decorations/miruhaia_decoration_violet-wave.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="hero__bg-orbit"
        src="/assets/miruhaia/decorations/miruhaia_decoration_brand-orbit.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="hero__bg-rings"
        src="/assets/miruhaia/decorations/miruhaia_decoration_iris-rings.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <img
              src="/assets/miruhaia/logo/miruhaia_logo_symbol_outlined.svg"
              alt=""
              width={28}
              height={28}
            />
            ミルハイア by CONNECTED MATERIAL
          </p>
          <h1 id="hero-heading" className="hero__title">
            見える会社は、
            <br />
            <em className="hero__title-accent">選ばれる。</em>
          </h1>
          <p className="hero__subtitle">{hero.subheadline}</p>
          <p className="hero__body">{hero.body}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              {hero.primaryCta}
            </a>
            <a href="#videos" className="btn btn--secondary">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero__stage" aria-hidden="true">
          <img
            className="hero__photo-bg"
            src="/assets/miruhaia/photos/hero-office-conversation-4x5.jpg"
            alt=""
            width={480}
            height={600}
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero__phones">
            {[
              {
                src: "/assets/miruhaia/photos/employee-interview-portrait-4x5.jpg",
                className: "hero__phone hero__phone--1",
              },
              {
                src: "/assets/miruhaia/photos/employee-smartphone-portrait-4x5.jpg",
                className: "hero__phone hero__phone--2",
              },
              {
                src: "/assets/miruhaia/photos/team-collaboration-4x5.jpg",
                className: "hero__phone hero__phone--3",
              },
            ].map((phone) => (
              <div key={phone.src} className={phone.className}>
                <img
                  className="hero__phone-frame"
                  src="/assets/miruhaia/decorations/miruhaia_decoration_focus-frame.svg"
                  alt=""
                />
                <img className="hero__phone-photo" src={phone.src} alt="" />
                <span className="hero__play">
                  <span className="hero__play-dot" />
                </span>
              </div>
            ))}
          </div>
          <img
            className="hero__beam"
            src="/assets/miruhaia/decorations/miruhaia_decoration_spotlight-beam.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

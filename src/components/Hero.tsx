import { siteContent } from "../content/siteContent";
import "./Hero.css";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__brand">ミルハイア by CONNECTED MATERIAL</p>
          <h1 id="hero-heading" className="hero__title">
            {hero.headline}
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

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__cards">
            <div className="hero__card hero__card--1">
              <img
                src="/assets/miruhaia/photos/employee-interview-portrait-4x5.jpg"
                alt=""
                width={240}
                height={300}
                loading="eager"
                fetchPriority="high"
              />
              <span className="hero__play" />
            </div>
            <div className="hero__card hero__card--2">
              <img
                src="/assets/miruhaia/photos/employee-smartphone-portrait-4x5.jpg"
                alt=""
                width={200}
                height={250}
                loading="eager"
              />
              <span className="hero__play" />
            </div>
            <div className="hero__card hero__card--3">
              <img
                src="/assets/miruhaia/photos/team-collaboration-4x5.jpg"
                alt=""
                width={180}
                height={225}
                loading="lazy"
              />
              <span className="hero__play" />
            </div>
          </div>
          <img
            className="hero__deco hero__deco--rings"
            src="/assets/miruhaia/decorations/miruhaia_decoration_iris-rings.svg"
            alt=""
          />
          <img
            className="hero__deco hero__deco--beam"
            src="/assets/miruhaia/decorations/miruhaia_decoration_spotlight-beam.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

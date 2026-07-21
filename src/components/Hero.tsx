import { siteContent } from "../content/siteContent";
import { decorationAsset, photos } from "../lib/assets";
import "./Hero.css";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <img className="hero__bg-wave" src={decorationAsset("violet-wave")} alt="" aria-hidden="true" />
      <img className="hero__bg-orbit" src={decorationAsset("brand-orbit")} alt="" aria-hidden="true" />
      <img className="hero__bg-rings" src={decorationAsset("iris-rings")} alt="" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__stage">
          <img
            className="hero__photo-bg"
            src={photos.hero}
            alt="オフィスで会話する社員"
            width={480}
            height={600}
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero__phones" aria-hidden="true">
            {[
              { src: photos.interview, className: "hero__phone hero__phone--1" },
              { src: photos.smartphone, className: "hero__phone hero__phone--2" },
              { src: photos.team, className: "hero__phone hero__phone--3" },
            ].map((phone) => (
              <div key={phone.className} className={phone.className}>
                <img className="hero__phone-frame" src={decorationAsset("focus-frame")} alt="" />
                <img className="hero__phone-photo" src={phone.src} alt="" />
                <span className="hero__play" aria-hidden="true">
                  <span className="hero__play-dot" />
                </span>
              </div>
            ))}
          </div>
          <img className="hero__beam" src={decorationAsset("spotlight-beam")} alt="" aria-hidden="true" />
        </div>

        <div className="hero__copy">
          <h1 id="hero-heading" className="hero__title">
            {hero.headline}
          </h1>
          <p className="hero__subtitle">
            ショート動画で、会社のリアルを。
            <br />
            採用力に変える。
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              {hero.primaryCta}
            </a>
            <a href="#videos" className="btn btn--secondary">
              {hero.secondaryCta}
            </a>
          </div>
          <a
            href="#pricing"
            className="hero__campaign-link"
            onClick={(event) => {
              event.preventDefault();
              window.history.pushState(null, "", "#pricing");
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <span>初期費用0円</span>
            キャンペーンについてはこちら
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

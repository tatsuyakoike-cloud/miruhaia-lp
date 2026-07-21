import { useCallback, useRef, useState } from "react";
import { siteContent } from "../content/siteContent";
import { videoSamples, type VideoSample } from "../content/videoSamples";
import { asset, decorationAsset, illustrationAsset } from "../lib/assets";
import { SectionShell } from "./SectionShell";
import "./VideoGallery.css";

function VideoCard({ sample }: { sample: VideoSample }) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCanPlay = useCallback(() => setReady(true), []);
  const handleError = useCallback(() => setReady(false), []);

  const poster = asset(sample.poster);
  const videoSrc = asset(sample.src);

  return (
    <article className="video-card">
      <div className="video-card__shell">
        <img
          className="video-card__frame-deco"
          src={decorationAsset("video-frame")}
          alt=""
          aria-hidden="true"
        />
        <div className="video-card__media">
          {ready ? (
            <video
              ref={videoRef}
              className="video-card__video"
              controls
              playsInline
              preload="metadata"
              poster={poster}
              width={360}
              height={640}
              onCanPlay={handleCanPlay}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <button
              type="button"
              className="video-card__pending"
              onClick={() => {
                const v = videoRef.current;
                if (v) {
                  v.src = videoSrc;
                  v.load();
                  v.play().catch(() => undefined);
                }
              }}
              aria-label={`${sample.title}の動画を読み込む`}
            >
              <img src={poster} alt="" width={360} height={640} />
              <span className="video-card__pending-overlay">
                <span className="video-card__pending-play" aria-hidden="true" />
                <span className="video-card__pending-title">{sample.title}</span>
                <span className="video-card__pending-note">動画準備中（配置後に再生）</span>
              </span>
            </button>
          )}
          {!ready && (
            <video
              ref={videoRef}
              className="video-card__probe"
              preload="metadata"
              poster={poster}
              onCanPlay={handleCanPlay}
              onLoadedData={handleCanPlay}
              onError={handleError}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div className="video-card__meta">
        <span className="video-card__tag">{sample.title}</span>
        <p className="video-card__category">{sample.category}</p>
      </div>
    </article>
  );
}

export function VideoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { videos } = siteContent;

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".video-card");
    el.scrollBy({ left: direction === "next" ? (card?.offsetWidth ?? 300) + 20 : -((card?.offsetWidth ?? 300) + 20), behavior: "smooth" });
  };

  return (
    <SectionShell id="videos" tone="violet" decos={["beam"]} labelledBy="videos-heading">
      <div className="video-section__head">
        <div>
          <p className="section-label">動画事例</p>
          <h2 id="videos-heading" className="section-heading">
            {videos.title}
          </h2>
          <p className="section-lead">人・仕事・文化を、ショート動画で伝えます。</p>
        </div>
        <img
          className="video-section__illust"
          src={illustrationAsset("growth-spotlight")}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="video-gallery__controls">
        <button type="button" className="video-gallery__btn" onClick={() => scroll("prev")} aria-label="前の動画">
          ←
        </button>
        <button type="button" className="video-gallery__btn" onClick={() => scroll("next")} aria-label="次の動画">
          →
        </button>
      </div>

      <div ref={scrollRef} className="video-gallery">
        {videoSamples.map((sample) => (
          <VideoCard key={sample.id} sample={sample} />
        ))}
      </div>
    </SectionShell>
  );
}

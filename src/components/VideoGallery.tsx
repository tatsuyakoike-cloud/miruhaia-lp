import { useCallback, useRef, useState } from "react";
import { siteContent } from "../content/siteContent";
import { videoSamples, type VideoSample } from "../content/videoSamples";
import "./VideoGallery.css";

function VideoCard({ sample }: { sample: VideoSample }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCanPlay = useCallback(() => {
    setReady(true);
    setLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setReady(false);
    setLoading(false);
  }, []);

  return (
    <article className="video-card">
      <div className="video-card__frame">
        <video
          ref={videoRef}
          className={`video-card__video ${ready ? "video-card__video--ready" : "video-card__video--hidden"}`}
          controls={ready}
          playsInline
          preload="metadata"
          poster={sample.poster}
          width={360}
          height={640}
          onCanPlay={handleCanPlay}
          onLoadedData={handleCanPlay}
          onError={handleError}
        >
          <source src={sample.src} type="video/mp4" />
          お使いのブラウザは動画再生に対応していません。
        </video>
        {!ready && !loading && (
          <div className="video-card__placeholder" aria-hidden="true">
            <img src={sample.poster} alt="" width={360} height={640} />
            <div className="video-card__pending">
              <span className="video-card__pending-icon" aria-hidden="true" />
              <p>動画準備中</p>
              <p className="video-card__pending-note">
                {sample.src.replace(/^\//, "public/")} を配置すると再生されます
              </p>
            </div>
          </div>
        )}
        {loading && !ready && (
          <div className="video-card__loading" aria-live="polite">
            読み込み中…
          </div>
        )}
      </div>
      <div className="video-card__meta">
        <h3 className="video-card__title">{sample.title}</h3>
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
    const amount = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="videos" className="section section--pale" aria-labelledby="videos-heading">
      <div className="container">
        <h2 id="videos-heading" className="section-heading">
          {videos.title}
        </h2>
        <p className="section-lead">{videos.pendingNote}</p>

        <div className="video-gallery__controls">
          <button type="button" className="video-gallery__btn" onClick={() => scroll("prev")} aria-label="前の動画">
            ←
          </button>
          <button type="button" className="video-gallery__btn" onClick={() => scroll("next")} aria-label="次の動画">
            →
          </button>
        </div>

        <div ref={scrollRef} className="video-gallery" role="list">
          {videoSamples.map((sample) => (
            <div key={sample.id} className="video-gallery__item" role="listitem">
              <VideoCard sample={sample} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

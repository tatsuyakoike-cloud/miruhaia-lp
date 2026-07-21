import { useCallback, useRef, useState } from "react";
import { siteContent } from "../content/siteContent";
import { videoSamples, type VideoSample } from "../content/videoSamples";
import { SectionShell } from "./SectionShell";
import "./VideoGallery.css";

function VideoCard({ sample }: { sample: VideoSample }) {
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
      <div className="video-card__shell">
        <img
          className="video-card__frame-deco"
          src="/assets/miruhaia/decorations/miruhaia_decoration_video-frame.svg"
          alt=""
          aria-hidden="true"
        />
        <div className="video-card__media">
          <video
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
          </video>
          {!ready && !loading && (
            <div className="video-card__pending">
              <img src={sample.poster} alt="" />
              <div className="video-card__pending-overlay">
                <span className="video-card__pending-play" aria-hidden="true" />
                <p>動画準備中</p>
                <p className="video-card__pending-note">MP4を配置すると再生できます</p>
              </div>
            </div>
          )}
          {loading && !ready && <div className="video-card__loading">読み込み中…</div>}
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
    const amount = card ? card.offsetWidth + 20 : 300;
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <SectionShell id="videos" tone="violet" decos={["beam", "grid"]} labelledBy="videos-heading">
      <div className="video-section__head">
        <div>
          <p className="section-label">Sample</p>
          <h2 id="videos-heading" className="section-heading">
            どんな動画をつくるのか、
            <br />
            <span className="spot">実際にご覧ください。</span>
          </h2>
          <p className="section-lead">{videos.pendingNote}</p>
        </div>
        <img
          className="video-section__illust"
          src="/assets/miruhaia/illustrations/miruhaia_illustration_growth-spotlight.svg"
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

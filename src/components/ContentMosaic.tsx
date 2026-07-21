import { photos } from "../lib/assets";
import { FlowTimeline } from "./FlowTimeline";
import "./ContentMosaic.css";

const SLICES = [
  { label: "仕事", photo: photos.laptop, desc: "1日の流れ・やりがい・スキル" },
  { label: "文化", photo: photos.team, desc: "チームの空気・働き方" },
  { label: "成長", photo: photos.interview, desc: "研修・キャリア・挑戦" },
  { label: "採用", photo: photos.smartphone, desc: "募集職種・求める人物像" },
] as const;

const FUNNEL = [
  { label: "視聴", icon: "short-video-phone" },
  { label: "興味", icon: "interest-heart" },
  { label: "理解", icon: "search-discovery" },
  { label: "プロフィール", icon: "profile-document" },
  { label: "応募", icon: "recruitment-person" },
] as const;

type ContentMosaicProps = {
  title: string;
  note: string;
};

export function ContentMosaic({ title, note }: ContentMosaicProps) {
  return (
    <div className="content-mosaic">
      <h2 className="section-heading content-mosaic__title">{title}</h2>
      <p className="section-lead">4つの切り口で、会社のリアルを短尺動画に。</p>

      <div className="content-mosaic__grid">
        {SLICES.map((slice, index) => (
          <figure
            key={slice.label}
            className={`content-mosaic__slice content-mosaic__slice--${index}`}
          >
            <img src={slice.photo} alt="" loading="lazy" width={600} height={750} />
            <figcaption>
              <span className="content-mosaic__label">{slice.label}</span>
              <span className="content-mosaic__desc">{slice.desc}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="content-mosaic__funnel">
        <p className="content-mosaic__funnel-title">応募までの流れ</p>
        <FlowTimeline steps={FUNNEL} variant="horizontal" numbered={false} />
      </div>

      <p className="conclusion">{note}</p>
    </div>
  );
}

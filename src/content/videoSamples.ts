export type VideoSample = {
  id: string;
  title: string;
  category: string;
  src: string;
  poster: string;
  permissionStatus: "pending" | "confirmed";
};

export const videoSamples: VideoSample[] = [
  {
    id: "interview",
    title: "派遣社員の1日Vlog",
    category: "1日の流れ・仕事・職場の雰囲気",
    src: "videos/video-01.m4v",
    poster: "videos/posters/video-01.m4v.png",
    permissionStatus: "confirmed",
  },
  {
    id: "work",
    title: "AIショート動画",
    category: "AIを活用した動画表現",
    src: "videos/video-02.m4v",
    poster: "videos/posters/video-02.m4v.png",
    permissionStatus: "confirmed",
  },
  {
    id: "culture",
    title: "社員ストーリー",
    category: "人柄・仕事・会社の魅力",
    src: "videos/video-03.m4v",
    poster: "videos/posters/video-03.m4v.png",
    permissionStatus: "confirmed",
  },
];

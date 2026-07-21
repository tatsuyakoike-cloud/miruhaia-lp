# レスポンシブ・実装仕様

## 基本

- 既存環境があれば維持。空ならVite + React + TypeScript
- コンテンツ・動画・連絡先・キャンペーンをコンポーネントへ直書きしない
- 同一URL・同一の主要コンテンツを、CSSでPC/SPへ最適化
- 320pxから作り、1440pxまで拡張

## 確認幅

1440、1024、768、390、375、320px。横スクロール禁止。PCの3列はSPで1列またはScroll Snapへ変更します。

## 動画

- `controls`、`playsinline`、`preload="metadata"`、`poster`
- 音声付き自動再生は禁止
- 9:16、固定`aspect-ratio`、幅・高さを予約
- MP4 H.264を基本。WebMは用意できる場合のみ
- 初期表示で3本すべてを読み込まない
- PC3列、SPは1本ずつ。左右ボタンとキーボード操作を用意

## アクセシビリティ

- WCAG 2.2 AAを目標
- タップ領域44px以上
- 見出し階層、H1は1つ
- 意味のあるalt、装飾は空alt
- メニュー、FAQ、動画をキーボード操作可能にする
- `prefers-reduced-motion`で非必須アニメーションを止める
- フォーカス表示を消さない

## SEO・表示速度

- 日本語title、description、canonical、OGP
- 確定情報だけでService／VideoObject構造化データ
- ヒーロー画像のみ優先読込、それ以外はlazy
- 画像・動画の寸法を明示してCLSを防止
- 目標：LCP 2.5秒以内、INP 200ms以内、CLS 0.1以内（75パーセンタイル）

## GitHub Pages

- Viteのプロジェクトサイトは`base: '/リポジトリ名/'`
- ユーザーサイト・カスタムドメインは`base: '/'`
- GitHub ActionsでビルドしてPagesへ公開
- remote・既存workflow・権限を確認してから変更・公開

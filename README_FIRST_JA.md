# ミルハイア LP制作キット

このフォルダ一式を、LPを作るGitリポジトリのルートへ展開してください。CursorとClaude Codeの両方で使える指示・ルール・素材・参考資料が入っています。

## 最短の使い方

1. このフォルダの中身を、制作するリポジトリのルートへ置く。
2. Cursor Agentを開き、`START_PROMPT.md`のプロンプトを貼り付ける。
3. Agentが`CLAUDE.md`、`AGENTS.md`、`.cursor/rules/`、`.cursor/skills/`を読み、既存環境を確認してからLPを構築する。
4. 実動画3本は`videos/`へ置く。許諾確認前は公開しない。
5. 完成後、Agentにビルド・PC/SP表示・CTA・動画・GitHub Pagesを確認させる。

## 最初に見るファイル

- `START_PROMPT.md`：Cursorへそのまま渡す開始指示
- `CLAUDE.md`：LP制作の統合仕様
- `docs/LP_CONTENT_SPEC.md`：LPの構成と文章
- `docs/ASSET_MAP.md`：どの素材をどこで使うか
- `docs/LATEST_LP_PATTERNS_2026.md`：最新基準を反映した設計方針
- `docs/OPEN_ITEMS.md`：公開前に確定が必要な項目

## 素材の場所

- `public/assets/miruhaia/`：Web実装でそのまま使う軽量素材
- `assets/source/miruhaia-production-assets-v2/`：制作担当向けの全素材。AI互換・EPS・PDF・SVG・透過PNG・写真元データを含む
- `reference/`：提案資料、構成案、ブランドガイド
- `videos/`：実動画3本の受け入れ場所

## 重要

- 正式表記は「ミルハイア by CONNECTED MATERIAL」です。
- スライドのスクリーンショットをLPへ貼らず、文章とUIはHTMLで実装します。
- 砂建や広告露出が大きい動画は使いません。
- 連絡先、税区分、契約条件、動画本数、掲載許諾は推測しません。
- 3本の正式動画が未収録のため、現時点では「実装キット完成・公開素材未確定」です。

## 収録状態

- ロゴ・アイコン・イラスト・装飾：収録済み
- AI互換・EPS・PDF・SVG・透過PNG：収録済み
- 写真素材：収録済み
- LP構成・3プラン・レスポンシブ仕様：収録済み
- Cursorルール・Agent Skill・Claude Code指示：収録済み
- 実動画3本：未収録。`videos/README_VIDEO_REQUIREMENTS.md`を参照

---
name: miruhaia-lp-builder
description: Build, revise, and verify the responsive Japanese landing page for the Miruhaia recruitment short-video service from the supplied brand assets and proposal content. Use when an agent needs to create the Miruhaia LP, translate the slide deck into web sections, implement the three pricing plans and three-video gallery, preserve the Miruhaia visual system, prepare GitHub Pages deployment, or audit the LP for mobile usability, accessibility, SEO, performance, and factual placeholders.
---

# Miruhaia LP Builder

Build a trustworthy, image-led landing page for Japanese small-business owners and hiring managers with low SNS/Web literacy.

## Load the right references

- Read `references/brand-content.md` before writing copy or choosing assets.
- Read `references/implementation.md` before changing components, responsive behavior, video, or deployment.
- Read `references/quality-gates.md` before claiming completion.
- When a project bundle contains `docs/`, prefer the newer project-local specifications over these bundled references.

## Work sequence

1. Inspect the repository, current UI, available brand assets, proposal PDF, videos, and Git status.
2. Preserve existing user work and the current framework when one exists.
3. Resolve web assets by filename. Use the primary outlined SVG logo; do not redraw the logo.
4. Keep business facts in configuration or content data. Never invent contact details, tax treatment, video quantities, contract terms, campaign terms, case-study permission, or statistics.
5. Build the story in this order: hero, pain, cause, solution, sample videos, support scope, process/value, plans, FAQ, final CTA.
6. Implement mobile-first and keep the same primary content on desktop and mobile.
7. Test 1440, 1024, 768, 390, 375, and 320 px. Prevent horizontal overflow.
8. Run lint, type checking, tests, production build, link/asset validation, and a visual pass.
9. Add GitHub Pages deployment only when it fits the repository and use the repository-aware Vite base path.
10. Report completed work, checks, used videos, public URL if available, and only the unresolved business inputs.

## Non-negotiable rules

- Use the official name `ミルハイア by CONNECTED MATERIAL` and copy `見える会社は、選ばれる。`.
- Do not leave `トレプロ`, `TREPRO`, `TREND PRODUCE`, or old logos in public content.
- Do not reproduce slide screenshots as LP sections. Keep headings, copy, prices, and CTAs as HTML text.
- Use white and ivory as the dominant surface, violet as the main color, yellow as the accent, and red only as a tiny brand detail.
- Keep one message per section, short copy, generous whitespace, and obvious next actions.
- Do not use a black neon aesthetic, decorative autoplay video, fake dashboards, unsupported superiority claims, or fake case studies.
- Use only publication-approved real videos. Exclude 砂建 and highly exposed advertising examples.
- If three approved videos are unavailable, implement honest placeholders and mark the page not ready for public launch.
- Do not publish unresolved placeholders or fabricate form delivery.

## Deliverable standard

Finish with a responsive production build, editable content/configuration, accessible controls, working CTA paths, three functional video slots, optimized assets, metadata, structured data based only on confirmed facts, and a GitHub Pages workflow when requested.

Run `node scripts/verify-miruhaia-lp.mjs <project-root>` when the script is available. Treat its output as a supplement to browser and build checks, not a substitute.

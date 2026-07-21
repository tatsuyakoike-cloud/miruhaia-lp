# Implementation specification

## Architecture

- Preserve an existing framework. For an empty project, use Vite + React + TypeScript unless the user specifies otherwise.
- Keep dependencies small. Prefer native semantic HTML, CSS grid/flex, and CSS scroll snap over a heavy UI or carousel library.
- Separate content, site configuration, and video manifests from components.
- Keep static assets in `public/assets/miruhaia/` and videos in `public/videos/`.
- Use one URL and the same primary DOM content for mobile and desktop; change layout through responsive CSS.

## Responsive behavior

- Start at 320–390 px and progressively enhance.
- Test 1440, 1024, 768, 390, 375, and 320 px.
- Use fluid type and space with `clamp()`.
- Convert desktop grids into one column or horizontal scroll snap on mobile.
- Preserve content parity on mobile; accordions may reduce visual density without removing content.
- Keep tap targets at least 44 by 44 CSS pixels.
- Honor `prefers-reduced-motion`.

## Video gallery

- Show three 9:16 samples: employee interview, job/site, team/culture.
- Desktop: three columns. Tablet: two columns when useful. Mobile: one full card with scroll snap and accessible previous/next controls.
- Use `controls`, `playsinline`, `preload="metadata"`, a poster, fixed dimensions/aspect ratio, and no autoplay audio.
- Prefer H.264 MP4; add WebM only when available and verified.
- Do not preload all three files. Keep source URLs stable.
- Record title, category, file, poster, duration, size, permission status, and permission note in a manifest.

## Performance and SEO

- Target field thresholds: LCP at most 2.5 s, INP at most 200 ms, CLS at most 0.1 at the 75th percentile.
- Set explicit image and video dimensions to prevent layout shifts.
- Prioritize only the hero/LCP image. Lazy-load non-critical images and do not require user interaction to expose primary text content.
- Prefer AVIF/WebP with JPEG/PNG fallbacks where the build supports it.
- Add Japanese title, description, canonical, OGP, meaningful alt text, and one H1.
- Add `Service` and `VideoObject` structured data only from confirmed facts and real videos.
- Keep real headings, plan prices, and CTA text in HTML rather than images.

## Accessibility

- Aim for WCAG 2.2 AA.
- Use semantic landmarks and native buttons/links.
- Keep clear visible focus, logical keyboard order, correctly labelled menu/FAQ/video controls, and non-color-only meaning.
- Use empty alt for decoration and descriptive alt for meaningful images.
- Avoid automatically moving content and provide pause/control when movement is essential.

## GitHub Pages

- For Vite, set `base` to `/REPOSITORY_NAME/` for project sites and `/` for user/custom-domain sites.
- Deploy the production build with GitHub Actions.
- Do not push, change remotes, publish, or overwrite an existing workflow without user authorization and repository inspection.

## Suggested data files

- `src/content/siteContent.ts`: headings, body, plans, FAQ
- `src/content/videoSamples.ts`: the three sample entries
- `src/config/siteConfig.ts`: URLs, company facts, tax labels, campaign switches, analytics IDs
- `src/styles/tokens.css`: brand colors, spacing, radii, type, shadows

## Completion sequence

1. Inspect and map assets.
2. Implement tokens and global layout.
3. Build hero, sample videos, plans, and CTA first.
4. Review at 1440 and 390 px.
5. Complete remaining sections.
6. Run lint, type check, tests, production build, and asset/link validation.
7. Review real browser screenshots and interactions.
8. Add/verify deployment.

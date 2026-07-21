#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || path.join(import.meta.dirname, ".."));
const required = [
  "README_FIRST_JA.md",
  "START_PROMPT.md",
  "CLAUDE.md",
  "AGENTS.md",
  ".cursor/rules/00-project-guardrails.mdc",
  ".cursor/rules/10-brand-and-content.mdc",
  ".cursor/rules/20-responsive-quality.mdc",
  ".cursor/skills/miruhaia-lp-builder/SKILL.md",
  "docs/LP_CONTENT_SPEC.md",
  "docs/DESIGN_SYSTEM.md",
  "docs/ASSET_MAP.md",
  "docs/RESPONSIVE_TECH_SPEC.md",
  "docs/LATEST_LP_PATTERNS_2026.md",
  "docs/SOURCE_LINKS.md",
  "docs/OPEN_ITEMS.md",
  "config/site-config.example.json",
  "config/site-content.json",
  "config/video-manifest.example.json",
  "public/assets/miruhaia/logo/miruhaia_logo_primary_outlined.svg",
  "public/assets/miruhaia/logo/miruhaia_logo_primary_transparent.png",
  "public/assets/miruhaia/photos/hero-office-conversation.jpg",
  "assets/source/miruhaia-production-assets-v2/01_LOGO/01_PRIMARY_USE_THIS/miruhaia_logo_primary.ai",
  "assets/source/miruhaia-production-assets-v2/01_LOGO/01_PRIMARY_USE_THIS/miruhaia_logo_primary_outlined.svg",
  "reference/miruhaia-proposal-28p.pdf",
  "reference/current-lp-wireframe.png",
  "videos/README_VIDEO_REQUIREMENTS.md"
];

const failures = [];
for (const rel of required) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) failures.push(`missing: ${rel}`);
  else if (fs.statSync(file).size === 0) failures.push(`empty: ${rel}`);
}

for (const rel of ["config/site-config.example.json", "config/site-content.json", "config/video-manifest.example.json"]) {
  try { JSON.parse(fs.readFileSync(path.join(root, rel), "utf8")); }
  catch (error) { failures.push(`invalid JSON: ${rel} (${error.message})`); }
}

const walk = (dir, output = []) => {
  if (!fs.existsSync(dir)) return output;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, output);
    else output.push(full);
  }
  return output;
};

const sourceAssets = walk(path.join(root, "assets/source/miruhaia-production-assets-v2"));
const webAssets = walk(path.join(root, "public/assets/miruhaia"));
if (sourceAssets.length < 190) failures.push(`source asset count too low: ${sourceAssets.length}`);
if (webAssets.length < 40) failures.push(`web asset count too low: ${webAssets.length}`);

console.log(`Kit root: ${root}`);
console.log(`Source assets: ${sourceAssets.length}`);
console.log(`Web-ready assets: ${webAssets.length}`);

if (failures.length) {
  for (const failure of failures) console.error(`ERROR: ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Kit structure and JSON checks passed.");
  console.log("Expected launch blocker: three approved videos are not included.");
}

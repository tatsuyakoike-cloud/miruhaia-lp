#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || process.cwd());
const textExtensions = new Set([".html", ".css", ".js", ".jsx", ".ts", ".tsx", ".json", ".md", ".mdc"]);
const forbidden = [/\bTREPRO\b/i, /TREND\s*PRODUCE/i, /\bTLPC\b/i];
const placeholders = [/example\.com/i, /TODO(?!\s*\()/i, /YOUR[_-]?(?:URL|EMAIL|FORM|DOMAIN)/i, /href=["']#["']/i];

function walk(dir, output = []) {
  if (!fs.existsSync(dir)) return output;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".git", "dist", "build", ".next"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, output);
    else output.push(full);
  }
  return output;
}

function relative(file) {
  return path.relative(root, file) || ".";
}

const files = walk(root);
const implementationRoots = ["src", "app", "pages", "components", "public", "index.html", "vite.config.ts", "vite.config.js"];
const isImplementationFile = (file) => {
  const rel = relative(file).split(path.sep).join("/");
  return implementationRoots.some((candidate) => rel === candidate || rel.startsWith(`${candidate}/`));
};
const textFiles = files.filter((file) => isImplementationFile(file) && textExtensions.has(path.extname(file).toLowerCase()));
const mediaFiles = files.filter((file) => /\.(mp4|webm|mov|m4v)$/i.test(file));
const errors = [];
const warnings = [];

if (!files.some((file) => /miruhaia_logo_primary_outlined\.svg$/i.test(file))) {
  errors.push("Primary outlined SVG logo is missing.");
}

for (const file of textFiles) {
  let body;
  try { body = fs.readFileSync(file, "utf8"); } catch { continue; }
  for (const pattern of forbidden) {
    if (pattern.test(body)) errors.push(`${relative(file)} contains forbidden old-brand text: ${pattern}`);
  }
  for (const pattern of placeholders) {
    if (pattern.test(body)) warnings.push(`${relative(file)} may contain an unresolved placeholder: ${pattern}`);
  }
}

if (mediaFiles.length < 3) {
  warnings.push(`Only ${mediaFiles.length} video file(s) found; three approved samples are required before launch.`);
}

const htmlLike = textFiles.filter((file) => /\.(html|jsx|tsx)$/i.test(file)).map((file) => fs.readFileSync(file, "utf8")).join("\n");
if (htmlLike) {
  if (!/<h1\b/i.test(htmlLike)) warnings.push("No H1 was detected.");
  if (!/prefers-reduced-motion/i.test(textFiles.filter((file) => /\.css$/i.test(file)).map((file) => fs.readFileSync(file, "utf8")).join("\n"))) {
    warnings.push("No prefers-reduced-motion rule was detected in CSS.");
  }
}

console.log(`MIRUHAIA LP check: ${relative(root)}`);
console.log(`Files: ${files.length}; videos: ${mediaFiles.length}`);
for (const message of errors) console.error(`ERROR: ${message}`);
for (const message of warnings) console.warn(`WARN: ${message}`);

if (errors.length) process.exitCode = 1;
else console.log("No blocking brand/asset errors detected.");

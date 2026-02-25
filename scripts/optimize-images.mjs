#!/usr/bin/env node
/**
 * optimize-images.mjs
 *
 * Converts all JPG / JPEG / PNG images inside /public to WebP.
 * - Quality : 70%
 * - Max width: 1200px  (height is scaled proportionally)
 * - Output  : replaces the original file in-place with a .webp extension
 *             (originals are kept with a .orig backup unless --no-backup is passed)
 *
 * Usage:
 *   node scripts/optimize-images.mjs            # with backups (safe)
 *   node scripts/optimize-images.mjs --no-backup # skip backups
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");
const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png"]);
const NO_BACKUP = process.argv.includes("--no-backup");

const QUALITY = 70;
const MAX_WIDTH = 1200;

// ─── helpers ────────────────────────────────────────────────────────────────

function walkDir(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (SUPPORTED_EXTS.has(path.extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
  const images = walkDir(PUBLIC_DIR);

  if (images.length === 0) {
    console.log("No images found in /public.");
    return;
  }

  console.log(`Found ${images.length} image(s). Starting optimisation…\n`);

  let totalSavedBytes = 0;
  let successCount = 0;
  let errorCount = 0;

  for (const srcPath of images) {
    const ext = path.extname(srcPath).toLowerCase();
    const destPath = srcPath.slice(0, -ext.length) + ".webp";
    const relSrc = path.relative(PUBLIC_DIR, srcPath);
    const relDest = path.relative(PUBLIC_DIR, destPath);

    try {
      const originalSize = fs.statSync(srcPath).size;

      // Backup original if requested
      if (!NO_BACKUP) {
        fs.copyFileSync(srcPath, srcPath + ".orig");
      }

      await sharp(srcPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(destPath);

      const newSize = fs.statSync(destPath).size;
      const saved = originalSize - newSize;
      const pct = ((saved / originalSize) * 100).toFixed(1);

      totalSavedBytes += saved;
      successCount++;

      console.log(
        `✓  ${relSrc}\n   → ${relDest}  |  ${formatBytes(originalSize)} → ${formatBytes(newSize)}  (${pct}% smaller)\n`
      );

      // Remove original source file only after confirming output exists
      if (fs.existsSync(destPath)) {
        fs.unlinkSync(srcPath);
      }
    } catch (err) {
      errorCount++;
      console.error(`✗  ${relSrc}\n   Error: ${err.message}\n`);
    }
  }

  console.log("─".repeat(60));
  console.log(`Done!  ${successCount} converted, ${errorCount} failed.`);
  console.log(`Total space saved: ${formatBytes(totalSavedBytes)}`);
  if (!NO_BACKUP) {
    console.log(`Originals backed up as <filename>.<ext>.orig`);
    console.log(
      `To delete backups run:  find public -name "*.orig" -delete`
    );
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

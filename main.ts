// News-image entry: copy the built image to the grader output folder.
// Node 22, standard library only. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = new URL("./entry.png", import.meta.url);
const targetPath = join(outputDir, "entry.png");

if (!existsSync(sourcePath)) {
  throw new Error("entry.png is missing from the repository root");
}
mkdirSync(outputDir, { recursive: true });
const imageBytes = readFileSync(sourcePath);
writeFileSync(targetPath, imageBytes);
console.log(`Wrote ${imageBytes.length} bytes to ${targetPath}`);

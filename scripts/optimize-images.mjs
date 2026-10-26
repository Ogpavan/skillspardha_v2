import sharp from "sharp";
import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

for (const name of ["hero", "hero-workshop", "workshop-generative-ai", "feature", "collaboration"]) {
  const source = root + "public/images/skillspardha-" + name + ".png";
  if (await exists(source)) {
    await sharp(source).resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 82 }).toFile(source.replace(".png", ".webp"));
  }
}
const sheetPng = root + "public/images/skillspardha-mentors.png";
const sheetWebp = root + "public/images/skillspardha-mentors.webp";
const sheet = await exists(sheetPng) ? sheetPng : sheetWebp;
if (await exists(sheet)) {
  const { width, height } = await sharp(sheet).metadata();
  const halfWidth = Math.floor(width / 2);
  const halfHeight = Math.floor(height / 2);
  for (const [index, position] of [[0, [0, 0]], [1, [halfWidth, 0]], [2, [0, halfHeight]], [3, [halfWidth, halfHeight]]]) {
    await sharp(sheet).extract({ left: position[0], top: position[1], width: halfWidth, height: halfHeight }).resize(600, 600).webp({ quality: 85 }).toFile(root + "public/images/mentor-sample-" + (index + 1) + ".webp");
  }
}

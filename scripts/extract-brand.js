const sharp = require("sharp");
const path = require("path");

(async () => {
  const src = path.join("public", "brand", "brand-sheet.png");
  const outDir = path.join("public", "brand");
  const meta = await sharp(src).metadata();
  const w = meta.width;
  const h = meta.height;

  // Tuned to include only the rounded icon tile (no caption under it)
  const size = Math.round(w * 0.145);
  const top = Math.round(h * 0.402);
  const darkLeft = Math.round(w * 0.125);
  const lightLeft = Math.round(w * 0.33);

  async function makeIcon(left, name) {
    const buf = await sharp(src)
      .extract({ left, top, width: size, height: size })
      .png()
      .toBuffer();
    await sharp(buf).resize(512, 512).png().toFile(path.join(outDir, name));
    return buf;
  }

  const dark = await makeIcon(darkLeft, "logo-icon-dark.png");
  await makeIcon(lightLeft, "logo-icon-light.png");
  await sharp(dark).resize(640, 640).png().toFile(path.join(outDir, "logo-hero.png"));

  await sharp(dark).resize(32, 32).png().toFile(path.join("public", "favicon-32.png"));
  await sharp(dark).resize(16, 16).png().toFile(path.join("public", "favicon-16.png"));
  await sharp(dark).resize(180, 180).png().toFile(path.join("public", "apple-touch-icon.png"));
  await sharp(dark).resize(192, 192).png().toFile(path.join("public", "icon-192.png"));
  await sharp(dark).resize(512, 512).png().toFile(path.join("public", "icon-512.png"));
  await sharp(dark).resize(32, 32).png().toFile(path.join("src", "app", "icon.png"));
  await sharp(dark).resize(180, 180).png().toFile(path.join("src", "app", "apple-icon.png"));
  await sharp(dark).resize(32, 32).png().toFile(path.join("src", "app", "favicon.ico"));

  console.log("done", { size, top, darkLeft, lightLeft, sheet: `${w}x${h}` });
})();

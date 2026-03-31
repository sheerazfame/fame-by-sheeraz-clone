import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

const GALLERY_DIR = join(process.cwd(), "public", "images", "gallery");

const images = [
  {
    url: "https://static.wixstatic.com/media/ec1f5b_f511ad38c7714ccc9de16d09ec8949d3~mv2.png/v1/fill/w_600,h_600,al_c,q_90/ec1f5b_f511ad38c7714ccc9de16d09ec8949d3~mv2.png",
    filename: "gallery-1.png",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_9cee3974b72f41788b806665b3fa6838~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80/ec1f5b_9cee3974b72f41788b806665b3fa6838~mv2.jpg",
    filename: "gallery-2.jpg",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_7183429577464615a277b65134c38fc7~mv2.png/v1/fill/w_600,h_400,al_c,q_90/ec1f5b_7183429577464615a277b65134c38fc7~mv2.png",
    filename: "gallery-3.png",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_7bba7a92def8420bbbe5cedbb5dbc864~mv2.png/v1/fill/w_600,h_400,al_c,q_90/ec1f5b_7bba7a92def8420bbbe5cedbb5dbc864~mv2.png",
    filename: "gallery-4.png",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_43e681c473d445aaa697bfa9cd2bfa8a~mv2.png/v1/fill/w_600,h_400,al_c,q_90/ec1f5b_43e681c473d445aaa697bfa9cd2bfa8a~mv2.png",
    filename: "gallery-5.png",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_6cb0f2902a7c4492830f9b4463c323a5~mv2.png/v1/fill/w_600,h_400,al_c,q_90/ec1f5b_6cb0f2902a7c4492830f9b4463c323a5~mv2.png",
    filename: "gallery-6.png",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_160611c5ed83464da0212750aa65d85e~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80/ec1f5b_160611c5ed83464da0212750aa65d85e~mv2.jpg",
    filename: "gallery-7.jpg",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_94dbc86524d34f348a50edd8ea35ed71~mv2.png/v1/fill/w_600,h_400,al_c,q_90/ec1f5b_94dbc86524d34f348a50edd8ea35ed71~mv2.png",
    filename: "gallery-8.png",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_3a6b196cb134404eb2872fe9501618b2~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80/ec1f5b_3a6b196cb134404eb2872fe9501618b2~mv2.jpg",
    filename: "gallery-9.jpg",
  },
  {
    url: "https://static.wixstatic.com/media/ec1f5b_a4b01eae2e2f47699a59ae4058998878~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80/ec1f5b_a4b01eae2e2f47699a59ae4058998878~mv2.jpg",
    filename: "gallery-10.jpg",
  },
];

async function downloadImage(url, filename) {
  const filepath = join(GALLERY_DIR, filename);
  if (existsSync(filepath)) {
    console.log(`Already exists: ${filename}`);
    return;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(filepath, buffer);
    console.log(`Downloaded: ${filename} (${buffer.length} bytes)`);
  } catch (err) {
    console.error(`Failed to download ${filename}: ${err.message}`);
  }
}

async function main() {
  if (!existsSync(GALLERY_DIR)) {
    await mkdir(GALLERY_DIR, { recursive: true });
  }
  console.log(`Downloading ${images.length} gallery images...`);
  await Promise.all(images.map((img) => downloadImage(img.url, img.filename)));
  console.log("Done.");
}

main();

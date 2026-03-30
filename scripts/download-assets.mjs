import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const assets = {
  // Logo - FAME text logo (top-left nav)
  "logo.png": "https://static.wixstatic.com/media/c79f9d_44e5b559c3994cd6a2341ad8a6f16360~mv2.png",
  // FAME 3D logo (footer + ecosystem)
  "logo-3d.png": "https://static.wixstatic.com/media/ec1f5b_f69a8acc575145638ad70d6b3bd3d519~mv2.png/v1/fill/w_300,h_300,al_c,q_90,enc_avif,quality_auto/Fame%20logo%203D.png",
  // Hero section
  "hero-bg.png": "https://static.wixstatic.com/media/c79f9d_234c8cfd2c9447ebb98da2721311e5c7~mv2.png/v1/crop/x_0,y_295,w_1410,h_606/fill/w_1920,h_824,fp_0.50_0.50,q_90,enc_avif,quality_auto/Fame%20by%20Sheeraz%20Hollywood%20Hills.png",
  "hero-celebs.webp": "https://static.wixstatic.com/media/ec1f5b_59e7bf7d1ae24a78a42ce7138def87b7~mv2.webp/v1/fill/w_1200,h_1022,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sheeraz%20Celebs.webp",
  // Quote section
  "quote-sheeraz.png": "https://static.wixstatic.com/media/ec1f5b_9bde98bfb5fe4e2aa7eec8c6e555fbeb~mv2.png/v1/fill/w_640,h_960,al_c,q_90,enc_avif,quality_auto/quote-sheeraz.png",
  "quote-flowers.png": "https://static.wixstatic.com/media/ec1f5b_f7d350aed96043d89c20b1106ceab9e0~mv2.png/v1/fill/w_1200,h_321,al_c,q_95,enc_avif,quality_auto/Pink%20Poppy%20Flowers.png",
  // Service cards - Row 1
  "service-ai-media.png": "https://static.wixstatic.com/media/ec1f5b_713938a8c0bb46289430c57afacf8941~mv2.png/v1/fill/w_800,h_553,fp_0.48_0.21,q_85,enc_avif,quality_auto/activations.png",
  "service-online-ai.png": "https://static.wixstatic.com/media/ec1f5b_a2c1870811a148c8becbee88c644c1b5~mv2.png/v1/fill/w_800,h_553,fp_0.38_0.34,q_85,enc_avif,quality_auto/Google.png",
  "service-networking.png": "https://static.wixstatic.com/media/ec1f5b_fd9069e25f1d4bd18f250027d6cc2ba1~mv2.png/v1/fill/w_800,h_553,al_c,q_85,enc_avif,quality_auto/fundraising%20networking.png",
  // Service cards - Row 2
  "service-celebrities.png": "https://static.wixstatic.com/media/ec1f5b_792290287fb64c6db3105eb50f4267ba~mv2.png/v1/fill/w_800,h_553,fp_0.44_0.35,q_85,enc_avif,quality_auto/celebrities.png",
  "service-press.png": "https://static.wixstatic.com/media/ec1f5b_1f062d874223490fb48138400ada3487~mv2.png/v1/fill/w_800,h_553,fp_0.75_0.45,q_85,enc_avif,quality_auto/press%20and%20media.png",
  "service-crypto.png": "https://static.wixstatic.com/media/ec1f5b_00bbf405e57b4b3e848942552b464ff6~mv2.png/v1/fill/w_800,h_553,al_c,q_85,enc_avif,quality_auto/crypto.png",
  // Media logos - Row 1
  "logo-abc.png": "https://static.wixstatic.com/media/c79f9d_e1f376e6988b40a88eb4a5a92e3ce7a3~mv2.png/v1/fill/w_240,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ABC-2020.png",
  "logo-netflix.png": "https://static.wixstatic.com/media/ec1f5b_92e7c5f296bd4be1a26125d453701731~mv2.png/v1/fill/w_240,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Netflix.png",
  "logo-hulu.png": "https://static.wixstatic.com/media/c79f9d_264e7a6f7b904dc9ace19de48849bfcc~mv2.png/v1/fill/w_240,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hulu.png",
  "logo-bbc.png": "https://static.wixstatic.com/media/c79f9d_8e976553b7ed4ced89a00ea4c9f649a7~mv2.png/v1/fill/w_240,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BBC.png",
  "logo-hbomax.png": "https://static.wixstatic.com/media/c79f9d_a99d1435b4034b59889a1e8b9aa885ae~mv2.png/v1/fill/w_240,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HBO-Max.png",
  "logo-starzplay.png": "https://static.wixstatic.com/media/ec1f5b_1a59a2e9b8d746bc8d5dcdf847992523~mv2.png/v1/fill/w_240,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/STARZPLAY.png",
  "logo-tmz.png": "https://static.wixstatic.com/media/ec1f5b_32fb3cedd77b45ec8afbe4c8b3a220c0~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TMZ.png",
  "logo-zeenews.png": "https://static.wixstatic.com/media/ec1f5b_aaa72a71b67942fea9cf49b316a9c679~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Zee%20News.png",
  "logo-youtube-originals.png": "https://static.wixstatic.com/media/ec1f5b_557e31e916a547389bfb52f2e3f6d614~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/YouTube%20Originals.png",
  // Media logos - Row 2
  "logo-reuters.png": "https://static.wixstatic.com/media/ec1f5b_b45300fd7a3f4430949a162ebae071db~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/reuters.png",
  "logo-itv.png": "https://static.wixstatic.com/media/ec1f5b_764a81b94b824cd4bf038bbff0ef8776~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/iTV.png",
  "logo-foxnews.png": "https://static.wixstatic.com/media/ec1f5b_b7acf210389146aa8c110fde5257c464~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fox%20News.png",
  "logo-e.png": "https://static.wixstatic.com/media/ec1f5b_5e5b23a4b19a41748613d4e8a1f9e2f9~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/E.png",
  "logo-ap.png": "https://static.wixstatic.com/media/ec1f5b_970f4af1c9f54be9847f6536c226d019~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/associated%20press.png",
  "logo-dailymail.png": "https://static.wixstatic.com/media/ec1f5b_b41890e66a6e4a01b778ca9c1adeb91a~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Daily%20Mail.png",
  "logo-channel7.png": "https://static.wixstatic.com/media/ec1f5b_16570f5cc2cb4ae6a9462d3c61dcbcd0~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/channel%207.png",
  "logo-binance.png": "https://static.wixstatic.com/media/ec1f5b_3b109b0f13704221b89d947e10fcf93a~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Binance%20Liv.png",
  "logo-cnn.png": "https://static.wixstatic.com/media/ec1f5b_3f3d92d7938a4c0aa6a45ba127a09f97~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CNN.png",
  "logo-channel4.png": "https://static.wixstatic.com/media/ec1f5b_a5aa63c04aa340fe942d3082c2852a03~mv2.png/v1/fill/w_240,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Channel%204.png",
  // Celebrity portraits (B&W grid)
  "portrait-kim-k.jpg": "https://static.wixstatic.com/media/ec1f5b_09d09985eda648ae8c0b316555d86bd4~mv2.jpg/v1/fill/w_900,h_1200,fp_0.51_0.3,q_90,enc_avif,quality_auto/portrait-kim-k.jpg",
  "portrait-zendaya.jpg": "https://static.wixstatic.com/media/ec1f5b_a393675d21764fe18c8c204f7bb9e107~mv2.jpg/v1/fill/w_900,h_1200,fp_0.53_0.38,q_90,enc_avif,quality_auto/portrait-zendaya.jpg",
  "portrait-logan-paul.jpg": "https://static.wixstatic.com/media/ec1f5b_b7a7dcf9ab684c97b954f9af8450a87b~mv2.jpg/v1/fill/w_900,h_1200,fp_0.46_0.35,q_90,enc_avif,quality_auto/portrait-logan-paul.jpg",
  "portrait-paris-hilton.jpg": "https://static.wixstatic.com/media/ec1f5b_370f99b3f3c0460cbb6aefa47073be37~mv2.jpg/v1/fill/w_900,h_1200,fp_0.66_0.41,q_90,enc_avif,quality_auto/portrait-paris-hilton.jpg",
  "portrait-priyanka-chopra.jpg": "https://static.wixstatic.com/media/ec1f5b_b991b5eef4a14ced88cfa2f00b9dc432~mv2.jpg/v1/fit/w_900,h_1200,q_90,enc_avif,quality_auto/portrait-priyanka-chopra.jpg",
  "portrait-miley-cyrus.jpg": "https://static.wixstatic.com/media/ec1f5b_01f77fe443b6472a974d7a43dcb0189b~mv2.jpg/v1/fill/w_900,h_1200,fp_0.54_0.33,q_90,enc_avif,quality_auto/portrait-miley-cyrus.jpg",
  // About section
  "about-sheeraz.jpg": "https://static.wixstatic.com/media/ec1f5b_1523089f1cad43e28ec45cc6be1c7042~mv2.jpg/v1/fill/w_760,h_1013,fp_0.51_0.3,q_90,enc_avif,quality_auto/about-sheeraz.jpg",
  // Case study video thumbnails (used as bg for video cards in Watch the Case Studies section)
  "cs-kim-k.jpg": "https://static.wixstatic.com/media/ec1f5b_09d09985eda648ae8c0b316555d86bd4~mv2.jpg/v1/fill/w_600,h_800,fp_0.51_0.3,q_90,enc_avif,quality_auto/cs-kim-k.jpg",
  "cs-logan-paul.jpg": "https://static.wixstatic.com/media/ec1f5b_b7a7dcf9ab684c97b954f9af8450a87b~mv2.jpg/v1/fill/w_600,h_800,fp_0.46_0.35,q_90,enc_avif,quality_auto/cs-logan-paul.jpg",
  "cs-zendaya.jpg": "https://static.wixstatic.com/media/ec1f5b_a393675d21764fe18c8c204f7bb9e107~mv2.jpg/v1/fill/w_600,h_800,fp_0.53_0.38,q_90,enc_avif,quality_auto/cs-zendaya.jpg",
  "cs-paris-hilton.jpg": "https://static.wixstatic.com/media/ec1f5b_370f99b3f3c0460cbb6aefa47073be37~mv2.jpg/v1/fill/w_600,h_800,fp_0.66_0.41,q_90,enc_avif,quality_auto/cs-paris-hilton.jpg",
  "cs-priyanka.jpg": "https://static.wixstatic.com/media/ec1f5b_b991b5eef4a14ced88cfa2f00b9dc432~mv2.jpg/v1/fit/w_600,h_800,q_90,enc_avif,quality_auto/cs-priyanka.jpg",
  "cs-miley.jpg": "https://static.wixstatic.com/media/ec1f5b_01f77fe443b6472a974d7a43dcb0189b~mv2.jpg/v1/fill/w_600,h_800,fp_0.54_0.33,q_90,enc_avif,quality_auto/cs-miley.jpg",
  "cs-selena.jpg": "https://static.wixstatic.com/media/ec1f5b_3eadeac640fc49189a87c1a0c6b17617~mv2.jpg/v1/fill/w_600,h_800,fp_0.47_0.29,q_90,enc_avif,quality_auto/cs-selena.jpg",
  "cs-jennifer-lopez.jpg": "https://static.wixstatic.com/media/ec1f5b_429a61a891644f919264a7d957374146~mv2.jpeg/v1/fill/w_600,h_800,fp_0.5_0.27,q_90,enc_avif,quality_auto/cs-jennifer-lopez.jpg",
  "cs-ricky-martin.jpg": "https://static.wixstatic.com/media/ec1f5b_4568a2a7b6fe42eabd94c5a71cf48325~mv2.jpg/v1/fill/w_600,h_800,fp_0.49_0.32,q_90,enc_avif,quality_auto/cs-ricky-martin.jpg",
  "cs-nelk-boys.jpg": "https://static.wixstatic.com/media/ec1f5b_6f5575dbb19f46c6851841ace8169b9c~mv2.jpg/v1/fill/w_600,h_800,fp_0.47_0.31,q_90,enc_avif,quality_auto/cs-nelk-boys.jpg",
  "cs-adam-waheed.jpg": "https://static.wixstatic.com/media/ec1f5b_825bd9757c3a48b0a6ff2446ec17d326~mv2.jpg/v1/fill/w_600,h_800,fp_0.5_0.25,q_90,enc_avif,quality_auto/cs-adam-waheed.jpg",
  "cs-misc1.jpg": "https://static.wixstatic.com/media/ec1f5b_9882e63fe541427b84baf1be4c372232~mv2.jpg/v1/fill/w_600,h_800,fp_0.59_0.31,q_90,enc_avif,quality_auto/cs-misc1.jpg",
  "cs-misc2.jpg": "https://static.wixstatic.com/media/ec1f5b_afd73ca1707f4f2c9b9202d7aded40ee~mv2.jpg/v1/fill/w_600,h_800,fp_0.46_0.36,q_90,enc_avif,quality_auto/cs-misc2.jpg",
  "cs-angelababy.png": "https://static.wixstatic.com/media/ec1f5b_8b72c3336a89457591de6e22d4e2b581~mv2.png/v1/fill/w_600,h_800,fp_0.49_0.25,q_90,enc_avif,quality_auto/cs-angelababy.png",
  "cs-niki-gabi.png": "https://static.wixstatic.com/media/ec1f5b_a857e2bcbb3f416cb06fc312b11b3189~mv2.png/v1/fill/w_600,h_800,fp_0.45_0.25,q_90,enc_avif,quality_auto/cs-niki-gabi.png",
  "cs-pamela.jpg": "https://static.wixstatic.com/media/ec1f5b_6ddc5b6e317f4e88b4f5226f61ca0c3d~mv2.jpg/v1/fill/w_600,h_800,fp_0.5_0.21,q_90,enc_avif,quality_auto/cs-pamela.jpg",
  // Kardashian carousel thumbnails
  "kardashians-part1.png": "https://static.wixstatic.com/media/ec1f5b_9bde98bfb5fe4e2aa7eec8c6e555fbeb~mv2.png/v1/fill/w_800,h_450,al_c,q_90,enc_avif,quality_auto/kardashians-part1.png",
  // Ecosystem logos
  "logo-fame-masterclass.png": "https://static.wixstatic.com/media/ec1f5b_3f6badb2e30c4892bd5d6e4e76bb85fc~mv2.png/v1/fill/w_400,h_300,al_c,q_85,enc_avif,quality_auto/fame-masterclass.png",
  "logo-dubai-news.png": "https://static.wixstatic.com/media/ec1f5b_9c3c5a3e2c5f497f9c6e7d8e9f0a1b2c~mv2.png/v1/fill/w_300,h_300,al_c,q_85,enc_avif,quality_auto/dubai-news.png",
  "logo-hollywoodai.png": "https://static.wixstatic.com/media/ec1f5b_9775f49f093649ac881e990735c100e3~mv2.png/v1/fill/w_300,h_123,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hollywood_ai%20negative%20-%20Copy.png",
  "logo-bollywoodai.png": "https://static.wixstatic.com/media/ec1f5b_bb5e5c2f9f604f9885e49099d97296e8~mv2.png/v1/fill/w_300,h_123,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bollywood_ai%20negative.png",
};

const imagesDir = path.join(rootDir, 'public', 'images');
fs.mkdirSync(imagesDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
      file.on('error', reject);
    });
    request.on('error', reject);
    request.setTimeout(20000, () => { request.destroy(); reject(new Error('timeout')); });
  });
}

async function downloadAll() {
  const entries = Object.entries(assets);
  const batchSize = 4;
  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    await Promise.allSettled(batch.map(async ([name, url]) => {
      const dest = path.join(imagesDir, name);
      try {
        await download(url, dest);
        downloaded++;
        console.log('✓ ' + name);
      } catch (err) {
        failed++;
        console.log('✗ ' + name + ' - ' + err.message);
      }
    }));
  }

  console.log('\nDone: ' + downloaded + ' downloaded, ' + failed + ' failed');
}

downloadAll();

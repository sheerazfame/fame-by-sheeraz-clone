import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const assets = {
  "hero-bg.jpg": "https://static.wixstatic.com/media/ec1f5b_5b9507fe4cd94fcdb92235d90cceee75~mv2.jpg/v1/fit/w_1440,h_811,q_90/ec1f5b_5b9507fe4cd94fcdb92235d90cceee75~mv2.jpg",
  "logo.png": "https://static.wixstatic.com/media/ec1f5b_93032e37fa7a40559afa0bd09f3cae18~mv2.png",
  "logo-negative.png": "https://static.wixstatic.com/media/ec1f5b_93032e37fa7a40559afa0bd09f3cae18~mv2.png/v1/fill/w_300,h_207,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fame%20by%20Sheeraz%20negative.png",
  "zendaya.png": "https://static.wixstatic.com/media/c79f9d_721aaeb7139745a7add41db5b0848684~mv2.png/v1/fill/w_220,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Zendaya.png",
  "logan-paul.png": "https://static.wixstatic.com/media/c79f9d_7a34af86256b4b83821750f6bef84496~mv2.png/v1/fill/w_220,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logan%20Paul.png",
  "priyanka-chopra.webp": "https://static.wixstatic.com/media/ec1f5b_b7e67400dc534ff4964e8471236b0137~mv2.webp/v1/fill/w_220,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PRIYANKA%20CHOPRA.webp",
  "miley-cyrus.jpg": "https://static.wixstatic.com/media/c79f9d_facc848e10844aee87ca2739c0f9d47f~mv2.jpg/v1/fill/w_220,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Miley%20cyrus.jpg",
  "kim-kardashian.jpg": "https://static.wixstatic.com/media/c79f9d_15f33df08f354144a284a784473281da~mv2.jpg/v1/fill/w_400,h_234,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1366x795-kim-kardashian-5k-monochrome_1536947216.jpg",
  "sheeraz-celebs.webp": "https://static.wixstatic.com/media/ec1f5b_59e7bf7d1ae24a78a42ce7138def87b7~mv2.webp/v1/fill/w_400,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sheeraz%20Celebs.webp",
  "case-study-1.jpg": "https://static.wixstatic.com/media/ec1f5b_01f77fe443b6472a974d7a43dcb0189b~mv2.jpg/v1/fill/w_480,h_640,fp_0.54_0.33,q_90,enc_avif,quality_auto/ec1f5b_01f77fe443b6472a974d7a43dcb0189b~mv2.jpg",
  "case-study-2.jpg": "https://static.wixstatic.com/media/ec1f5b_09d09985eda648ae8c0b316555d86bd4~mv2.jpg/v1/fill/w_480,h_640,fp_0.51_0.3,q_90,enc_avif,quality_auto/ec1f5b_09d09985eda648ae8c0b316555d86bd4~mv2.jpg",
  "case-study-3.jpg": "https://static.wixstatic.com/media/ec1f5b_1523089f1cad43e28ec45cc6be1c7042~mv2.jpg/v1/fill/w_480,h_640,fp_0.51_0.3,q_90,enc_avif,quality_auto/ec1f5b_1523089f1cad43e28ec45cc6be1c7042~mv2.jpg",
  "case-study-4.jpg": "https://static.wixstatic.com/media/ec1f5b_1917b710a9b941e0b5c530e0132dd2fe~mv2.jpg/v1/fill/w_480,h_640,fp_0.34_0.31,q_90,enc_avif,quality_auto/ec1f5b_1917b710a9b941e0b5c530e0132dd2fe~mv2.jpg",
  "case-study-5.jpg": "https://static.wixstatic.com/media/ec1f5b_370f99b3f3c0460cbb6aefa47073be37~mv2.jpg/v1/fill/w_480,h_640,fp_0.66_0.41,q_90,enc_avif,quality_auto/ec1f5b_370f99b3f3c0460cbb6aefa47073be37~mv2.jpg",
  "case-study-6.jpg": "https://static.wixstatic.com/media/ec1f5b_3eadeac640fc49189a87c1a0c6b17617~mv2.jpg/v1/fill/w_480,h_640,fp_0.47_0.29,q_90,enc_avif,quality_auto/ec1f5b_3eadeac640fc49189a87c1a0c6b17617~mv2.jpg",
  "case-study-7.jpg": "https://static.wixstatic.com/media/ec1f5b_429a61a891644f919264a7d957374146~mv2.jpeg/v1/fill/w_480,h_640,fp_0.5_0.27,q_90,enc_avif,quality_auto/ec1f5b_429a61a891644f919264a7d957374146~mv2.jpeg",
  "case-study-8.jpg": "https://static.wixstatic.com/media/ec1f5b_4568a2a7b6fe42eabd94c5a71cf48325~mv2.jpg/v1/fill/w_480,h_640,fp_0.49_0.32,q_90,enc_avif,quality_auto/ec1f5b_4568a2a7b6fe42eabd94c5a71cf48325~mv2.jpg",
  "case-study-9.jpg": "https://static.wixstatic.com/media/ec1f5b_6f5575dbb19f46c6851841ace8169b9c~mv2.jpg/v1/fill/w_480,h_640,fp_0.47_0.31,q_90,enc_avif,quality_auto/ec1f5b_6f5575dbb19f46c6851841ace8169b9c~mv2.jpg",
  "case-study-10.jpg": "https://static.wixstatic.com/media/ec1f5b_825bd9757c3a48b0a6ff2446ec17d326~mv2.jpg/v1/fill/w_480,h_640,fp_0.5_0.25,q_90,enc_avif,quality_auto/ec1f5b_825bd9757c3a48b0a6ff2446ec17d326~mv2.jpg",
  "case-study-11.jpg": "https://static.wixstatic.com/media/ec1f5b_9882e63fe541427b84baf1be4c372232~mv2.jpg/v1/fill/w_480,h_640,fp_0.59_0.31,q_90,enc_avif,quality_auto/ec1f5b_9882e63fe541427b84baf1be4c372232~mv2.jpg",
  "case-study-12.jpg": "https://static.wixstatic.com/media/ec1f5b_a393675d21764fe18c8c204f7bb9e107~mv2.jpg/v1/fill/w_480,h_640,fp_0.53_0.38,q_90,enc_avif,quality_auto/ec1f5b_a393675d21764fe18c8c204f7bb9e107~mv2.jpg",
  "case-study-13.jpg": "https://static.wixstatic.com/media/ec1f5b_afd73ca1707f4f2c9b9202d7aded40ee~mv2.jpg/v1/fill/w_480,h_640,fp_0.46_0.36,q_90,enc_avif,quality_auto/ec1f5b_afd73ca1707f4f2c9b9202d7aded40ee~mv2.jpg",
  "case-study-14.jpg": "https://static.wixstatic.com/media/ec1f5b_b7a7dcf9ab684c97b954f9af8450a87b~mv2.jpg/v1/fill/w_480,h_640,fp_0.46_0.35,q_90,enc_avif,quality_auto/ec1f5b_b7a7dcf9ab684c97b954f9af8450a87b~mv2.jpg",
  "case-study-15.png": "https://static.wixstatic.com/media/ec1f5b_8b72c3336a89457591de6e22d4e2b581~mv2.png/v1/fill/w_480,h_640,fp_0.49_0.25,q_90,enc_avif,quality_auto/ec1f5b_8b72c3336a89457591de6e22d4e2b581~mv2.png",
  "case-study-16.png": "https://static.wixstatic.com/media/ec1f5b_a857e2bcbb3f416cb06fc312b11b3189~mv2.png/v1/fill/w_480,h_640,fp_0.45_0.25,q_90,enc_avif,quality_auto/ec1f5b_a857e2bcbb3f416cb06fc312b11b3189~mv2.png",
  "case-study-sheeraz.jpg": "https://static.wixstatic.com/media/ec1f5b_6ddc5b6e317f4e88b4f5226f61ca0c3d~mv2.jpg/v1/fill/w_480,h_640,fp_0.5_0.21,q_90,enc_avif,quality_auto/ec1f5b_6ddc5b6e317f4e88b4f5226f61ca0c3d~mv2.jpg",
  "case-study-b991.jpg": "https://static.wixstatic.com/media/ec1f5b_b991b5eef4a14ced88cfa2f00b9dc432~mv2.jpg/v1/fit/w_480,h_640,q_90,enc_avif,quality_auto/ec1f5b_b991b5eef4a14ced88cfa2f00b9dc432~mv2.jpg",
  "about-sheeraz.jpg": "https://static.wixstatic.com/media/ec1f5b_910369e4c9ae44c19fed62f0a6675cd9~mv2.jpg/v1/fit/w_1276,h_719,q_90,enc_avif,quality_auto/ec1f5b_910369e4c9ae44c19fed62f0a6675cd9~mv2.jpg",
  "icon-celebrities.png": "https://static.wixstatic.com/media/ec1f5b_792290287fb64c6db3105eb50f4267ba~mv2.png/v1/fill/w_108,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/celebrities.png",
  "icon-press-media.png": "https://static.wixstatic.com/media/ec1f5b_1f062d874223490fb48138400ada3487~mv2.png/v1/fill/w_108,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/press%20and%20media.png",
  "icon-crypto.png": "https://static.wixstatic.com/media/ec1f5b_00bbf405e57b4b3e848942552b464ff6~mv2.png/v1/fill/w_108,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/crypto.png",
  "icon-google.png": "https://static.wixstatic.com/media/ec1f5b_a2c1870811a148c8becbee88c644c1b5~mv2.png/v1/fill/w_108,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Google.png",
  "icon-activations.png": "https://static.wixstatic.com/media/ec1f5b_713938a8c0bb46289430c57afacf8941~mv2.png/v1/fill/w_108,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/activations.png",
  "pink-poppy.png": "https://static.wixstatic.com/media/ec1f5b_a3da7360df9942738c64fac6fe6d3f8b~mv2.png/v1/fill/w_126,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pink%20Poppy%20Flowers.png",
  "logo-bbc.png": "https://static.wixstatic.com/media/c79f9d_8e976553b7ed4ced89a00ea4c9f649a7~mv2.png/v1/fill/w_120,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BBC.png",
  "logo-hbo-max.png": "https://static.wixstatic.com/media/c79f9d_a99d1435b4034b59889a1e8b9aa885ae~mv2.png/v1/fill/w_120,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HBO-Max.png",
  "logo-abc.png": "https://static.wixstatic.com/media/c79f9d_e1f376e6988b40a88eb4a5a92e3ce7a3~mv2.png/v1/fill/w_120,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ABC-2020.png",
  "logo-netflix.png": "https://static.wixstatic.com/media/ec1f5b_92e7c5f296bd4be1a26125d453701731~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Netflix.png",
  "logo-fox-news.png": "https://static.wixstatic.com/media/ec1f5b_b7acf210389146aa8c110fde5257c464~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fox%20News.png",
  "logo-daily-mail.png": "https://static.wixstatic.com/media/ec1f5b_b41890e66a6e4a01b778ca9c1adeb91a~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Daily%20Mail.png",
  "logo-tmz.png": "https://static.wixstatic.com/media/ec1f5b_32fb3cedd77b45ec8afbe4c8b3a220c0~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TMZ.png",
  "logo-reuters.png": "https://static.wixstatic.com/media/ec1f5b_b45300fd7a3f4430949a162ebae071db~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/reuters.png",
  "logo-associated-press.png": "https://static.wixstatic.com/media/ec1f5b_970f4af1c9f54be9847f6536c226d019~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/associated%20press.png",
  "logo-youtube-originals.png": "https://static.wixstatic.com/media/ec1f5b_557e31e916a547389bfb52f2e3f6d614~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/YouTube%20Originals.png",
  "logo-channel4.png": "https://static.wixstatic.com/media/ec1f5b_a5aa63c04aa340fe942d3082c2852a03~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Channel%204.png",
  "logo-channel7.png": "https://static.wixstatic.com/media/ec1f5b_16570f5cc2cb4ae6a9462d3c61dcbcd0~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/channel%207.png",
  "logo-itv.png": "https://static.wixstatic.com/media/ec1f5b_764a81b94b824cd4bf038bbff0ef8776~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/iTV.png",
  "logo-zee-news.png": "https://static.wixstatic.com/media/ec1f5b_aaa72a71b67942fea9cf49b316a9c679~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Zee%20News.png",
  "logo-binance.png": "https://static.wixstatic.com/media/ec1f5b_3b109b0f13704221b89d947e10fcf93a~mv2.png/v1/fill/w_120,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Binance%20Liv.png",
  "logo-starzplay.png": "https://static.wixstatic.com/media/ec1f5b_1a59a2e9b8d746bc8d5dcdf847992523~mv2.png/v1/fill/w_120,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/STARZPLAY.png",
  "logo-hollywoodai.png": "https://static.wixstatic.com/media/ec1f5b_9775f49f093649ac881e990735c100e3~mv2.png/v1/fill/w_200,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hollywood_ai%20negative%20-%20Copy.png",
  "logo-bollywoodai.png": "https://static.wixstatic.com/media/ec1f5b_bb5e5c2f9f604f9885e49099d97296e8~mv2.png/v1/fill/w_200,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bollywood_ai%20negative.png",
  "logo-fame-hills.png": "https://static.wixstatic.com/media/c79f9d_234c8cfd2c9447ebb98da2721311e5c7~mv2.png/v1/crop/x_0,y_295,w_1410,h_606/fill/w_200,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fame%20by%20Sheeraz%20Hollywood%20Hills.png",
  "favicon.png": "https://static.wixstatic.com/media/c79f9d_44e5b559c3994cd6a2341ad8a6f16360~mv2.png",
};

const imagesDir = path.join(rootDir, 'public', 'images');
fs.mkdirSync(imagesDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
    request.on('error', reject);
    request.setTimeout(15000, () => { request.destroy(); reject(new Error('timeout')); });
  });
}

async function downloadAll() {
  const entries = Object.entries(assets);
  const batchSize = 6;
  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    await Promise.allSettled(batch.map(async ([name, url]) => {
      const dest = path.join(imagesDir, name);
      try {
        await download(url, dest);
        downloaded++;
        console.log('OK: ' + name);
      } catch (err) {
        failed++;
        console.log('FAIL: ' + name + ' - ' + err.message);
      }
    }));
  }

  console.log('\nDone: ' + downloaded + ' downloaded, ' + failed + ' failed');
}

downloadAll();

const https = require("https");

const SITE_URL = "https://www.simcolgroup.com";

function check(path) {
  return new Promise((resolve) => {
    https
      .get(`${SITE_URL}${path}`, (res) => {
        console.log(`✅ ${path} status: ${res.statusCode}`);
        resolve(res.statusCode);
      })
      .on("error", (e) => {
        console.error(`❌ ${path} error: ${e.message}`);
        resolve(null);
      });
  });
}

(async () => {
  console.log("🔍 SEO Validation Check\n");
  await check("/sitemap.xml");
  await check("/robots.txt");

  console.log("\n📊 Next steps:");
  console.log("1) Deploy to production (Vercel)");
  console.log("2) Open /sitemap.xml and /robots.txt in browser");
  console.log("3) Submit sitemap in Google Search Console");
  console.log("4) Request indexing for key pages\n");
})();
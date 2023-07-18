const path = require("path");
const puppeteer = require("puppeteer");

const publicDir = process.env.PUBLIC_DIR;

const main = async () => {
  console.log("Opening browser");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: "new",
  });
  const page = await browser.newPage();

  console.log("Navigating to page");
  await page.goto(`file:${path.join(publicDir, "index.html")}`);
  await page.setViewport({ width: 1200, height: 630 });

  console.log("Prepare preview mode");
  await page.evaluate(() => {
    document.querySelector("body").classList.add("preview");
  });

  console.log("Save screenshot");
  await page.screenshot({ path: "./preview.png" });

  await browser.close();
};

main();

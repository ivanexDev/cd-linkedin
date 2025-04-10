import fs from "node:fs";
import puppeteer, { CookieParam, Browser } from "puppeteer";

const url = "https://www.linkedin.com/in/ipereirameza/";

async function scrapeLinkedIn(url: string) {
  const cookies: CookieParam[] = JSON.parse(
    fs.readFileSync("cookies.json", { encoding: "utf-8" })
  );

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();

  await page.setCookie(...cookies);

  await page.goto("https://www.linkedin.com");

  await new Promise((r) => setTimeout(r, 3000));
  // await page.locator(".nav__button-secondary").click();
  // await page.locator("#username").fill("cv.link3d1n@gmail.com");
  // await page.locator("#password").fill("Lanuevapass123");
  // await page.locator(".btn__primary--large").click();

  // const cookies = await page.cookies();
  // fs.writeFileSync("cookies.json", JSON.stringify(cookies, null, 2));

  // console.log("Cookies guardadas.");

  // await browser.close();
}

(async () => {
  await scrapeLinkedIn(url);
})();

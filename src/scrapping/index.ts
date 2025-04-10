import fs from "fs";

function mapCookies() {
  const res = fs.readFileSync("cookies.json", { encoding: "utf-8" });
  const resObj = JSON.parse(res);

  const newCookies = resObj.map((cookie) => {
    return {
      ...cookie,
      domain: ".linkedin.com",
      path: "/",
      httpOnly: true,
      secure: true,
    };
  });

  console.log(newCookies);

  fs.writeFileSync("cookie2.json", JSON.stringify(newCookies));
}

mapCookies();

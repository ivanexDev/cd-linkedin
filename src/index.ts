import express, { Request, Response } from "express";
import cors from "cors";
import { createDocx } from "./create-cv/createDoc";
import "dotenv/config";
import path from "path";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.post("/create", async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    if (!url) {
      res.status(400).json({ msg: "Please send the linkding url profile" });
      return;
    }
    const { buffer, filename } = await createDocx(url);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    );
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    res.send(buffer);
  } catch (error) {
    console.log(error);
  }
});

app.use((req, res, next) => {
  const filePath = path.join(__dirname, "../public/404.html");

  res.status(404).sendFile(filePath, (err) => {
    if (err) {
      console.error("Error serving 404 page:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.listen(3123, () => console.log("Server running on port 3123"));

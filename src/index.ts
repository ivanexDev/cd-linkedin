import express, { Request, Response } from "express";
import { getUser } from "./api/getUser";
import { createDocx } from "./create-cv/createDoc";

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/create", async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    if (!url) {
      res.status(400).json({ msg: "Please send the linkding url profile" });
      return;
    }
    await createDocx(url);
    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
}),
  app.listen(3000, () => console.log("Server running on port 3000"));

const url = "https://www.linkedin.com/in/ipereirameza/";

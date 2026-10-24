import express, { type Express, type Request, type Response } from "express";
import { getPriceData } from "./controllers/price.controller.ts";
import plati from "./api/plati.ts";

const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/plati", async (req: Request, res: Response) => {
  const response = await plati.search("Cyberpunk 2077 steam");
  res.json(response.data);
});

app.get("/steam", async (req: Request, res: Response) => {
  const data = await getPriceData(req.query.name as string);
  res.json(data);
});

app.listen(3000, () => {
  console.log("Listening on 127.0.0.1:3000...");
});

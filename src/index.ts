import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { generateRandomWorkout } from "./utils/generateWorkout";
dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const workout = generateRandomWorkout();
  res.status(200).send(workout);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

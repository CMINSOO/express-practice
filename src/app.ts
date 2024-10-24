import express, { Application, Request, Response } from "express";

const app: Application = express();

const port: number = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello MinSoo");
});

app.listen(port, function () {
  console.log(`서버가 ${port}번 에서 실행중입니다`);
});

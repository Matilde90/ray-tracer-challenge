import express from "express";

const app = express();
const port = 8081;

app.use(express.static('../app'));

app.get('/status', (req: express.Request, res: express.Response) => {
  res.status(200).json({
    status: "OK"
  });
})

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`)
})

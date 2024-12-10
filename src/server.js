import express from "express";

const app = express();

const hostname = "localhost";
const port = 8017;

app.get("/", (req, res) => {
  res.send("Hello World Dundun");
});

app.listen(port, hostname, () => {
  console.log(`Hello, Server running at https://${hostname}:${port}/`);
});

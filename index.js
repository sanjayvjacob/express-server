import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello!<h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Sanjay Jacob</h1><p>Software Developer</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>phone</h1><p>+4477123455</p>");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

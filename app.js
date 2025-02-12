const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "static")));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

const id = "test@test.com";
const pw = "test123!!";

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/axiosget", (req, res) => {
  console.log(req.query);
  res.send({ data: req.query });
});

app.post("/axiospost", (req, res) => {
  let data = req.body;
  let num;

  if (data.id !== id || data.pw !== pw) {
    num = 200;
  } else {
    num = 300;
  }

  res.send({ status: num });
});

app.get("/", (req, res) => {
  res.render("axiosGet");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

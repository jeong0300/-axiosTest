const express = require("express");
const multer = require("multer");

const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // 확장자 추출
    const filename = path.basename(file.originalname, ext);
    cb(null, filename + ext);
  },
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "static")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

const id = "test@test.com";
const pw = "test123!!";

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/axiosget", (req, res) => {
  console.log(req.query);
  console.log(req.file);
  res.send(req.query);
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/test2", (req, res) => {
  res.render("test2");
});

app.post("/upload", upload.single("files"), (req, res) => {
  res.json({
    imageUrl: `/uploads/${req.file.filename}`,
    title: req.body.title,
  });
});

app.post("/uploadArr", upload.array("files", 2), (req, res) => {
  let urlArr = [];

  for (let i = 0; i < req.files.length; i++) {
    urlArr.push({
      url: `/uploads/${req.files[i].filename}`,
      title: req.body.title,
    });
  }

  res.json(urlArr);
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

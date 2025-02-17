const careerModel = require("../models/careerModel");

// 모든 배우 리스트 가져오기
const getActors = (req, res) => {
  const actors = careerModel.getActorsAll();
  res.render("career/main", { actors });
};

// 모든 남자 배우 가져오기
const getManActor = (req, res) => {
  const actors = careerModel.getManActor();
  // console.log("남자 배우 목록:", actors);
  if (actors.length > 0) {
    res.render("career/manActors", { actors });
  } else {
    res.status(404).send("남자 배우가 없습니다.");
  }
};

// 모든 여자 배우 가져오기
const getWomanActor = (req, res) => {
  const actors = careerModel.getWomanActor();
  if (actors.length > 0) {
    res.render("career/womanActor", { actors });
  } else {
    res.status(404).send("여자 배우가 없습니다.");
  }
};

// 모든 영화 가져오기
const getMovie = (req, res) => {
  const actors = careerModel.getMovie();
  if (actors.length > 0) {
    res.render("career/movie", { actors });
  } else {
    res.status(404).send("영화가 없습니다.");
  }
};

// 모든 드라마 가져오기
const getDrama = (req, res) => {
  const actors = careerModel.getDrama();
  if (actors.length > 0) {
    res.render("career/drama", { actors });
  } else {
    res.status(404).send("드라마가 없습니다.");
  }
};

const getSameTitle = (req, res) => {
  const sameWork = careerModel.getSameTitles();
  res.render("career/sameWork", { sameWork });
};

// userRoutes에서 사용
module.exports = {
  getActors,
  getManActor,
  getWomanActor,
  getMovie,
  getDrama,
  getSameTitle,
};

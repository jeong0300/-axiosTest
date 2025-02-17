// 모듈 가져오기
const userModel = require("../models/userModel");

// 유저 전부 가져오는 컨트롤러
const getUsers = (req, res) => {
  // 전체 유저를 view/users/indes.ejs 에 보냄
  const users = userModel.getAllUsers();
  res.render("users/index", { users });
};

// 해당하는 유저 가져오기
const getUser = (req, res) => {
  const user = userModel.getUserById(req.params.id);
  if (user) {
    res.render("users/show", { user });
  } else {
    res.status(404).send("해당하는 유저가 없습니다.");
  }
};

// userRoutes에서 사용
module.exports = { getUsers, getUser };

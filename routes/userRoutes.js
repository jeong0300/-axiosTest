const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// 유저 전부 가져오기를 하는 라우터 (default : "users/")
router.get("/", userController.getUsers);

// 해당하는 유저 가져오기를 하는 라우터
router.get("/:id", userController.getUser);

// 라우터 내보내기 => app.js 에서 사용
module.exports = router;
